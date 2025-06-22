import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { deviceId, license } = await request.json();

    // Validate required fields
    if (!deviceId || !license) {
      return NextResponse.json(
        { error: "Device ID and license key are required" },
        { status: 400 }
      );
    }

    // Find the device and its associated user
    const targetDevice = await prisma.device.findUnique({
      where: { deviceId },
      select: {
        user: {
          select: {
            license: true
          }
        },
        freeCredits: true,
        deviceId: true
      }
    });

    if (!targetDevice) {
      return NextResponse.json(
        { error: "Device not found or no associated user" },
        { status: 404 }
      );
    }

    if (targetDevice.user?.license && targetDevice.user?.license === license) {
      return NextResponse.json(
        { success: true, message: "License key already exists" },
        { status: 200 }
      );
    }

    if (!targetDevice.user?.license) {
      // Check if there's already a user with this license key
      const existingLicenseUser = await prisma.user.findUnique({
        where: { license }
      });

      if (existingLicenseUser) {
        const updatedDevice = await prisma.device.update({
          where: { deviceId },
          data: {
            userId: existingLicenseUser.id
          },
          select: {
            deviceId: true,
            user: {
              select: {
                id: true,
                license: true
              }
            }
          }
        });

        return NextResponse.json({
          success: true,
          message: "User updated successfully and license data merged",
          data: {
            device: {
              deviceId: updatedDevice!.deviceId,
              user: {
                id: existingLicenseUser.id,
                license: existingLicenseUser.license
              }
            }
          }
        });
      }
    }
  } catch (error) {
    console.error("Error updating user license:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

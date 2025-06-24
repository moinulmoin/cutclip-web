import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { deviceId, license } = await request.json();

    // Validate required fields
    if (!deviceId || !license) {
      return NextResponse.json(
        { success: false, message: "Device ID and license key are required", data: null },
        { status: 400 }
      );
    }

    // Find the device
    const targetDevice = await prisma.device.findUnique({
      where: { deviceId },
      select: {
        id: true,
        deviceId: true,
        userId: true,
        user: {
          select: {
            license: true
          }
        }
      }
    });

    if (!targetDevice) {
      return NextResponse.json(
        { success: false, message: "Device not found", data: null },
        { status: 404 }
      );
    }

    // Check if license is already assigned to this device
    if (targetDevice.user?.license === license) {
      return NextResponse.json(
        { success: true, message: "License key already assigned to this device", data: null },
        { status: 200 }
      );
    }

    // Find or create user with this license
    let user = await prisma.user.findFirst({
      where: { license }
    });

    if (!user) {
      // Create new user with this license
      user = await prisma.user.create({
        data: { license }
      });
    }

    // Update device to link with the user
    const updatedDevice = await prisma.device.update({
      where: { deviceId },
      data: {
        userId: user.id
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
      message: "Device updated successfully with license",
      data: {
        device: {
          deviceId: updatedDevice.deviceId,
          user: {
            id: updatedDevice.user!.id,
            license: updatedDevice.user!.license
          }
        }
      }
    });

  } catch (error) {
    console.error("Error updating device license:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error", data: null },
      { status: 500 }
    );
  }
}

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// only when user license is not found, use free credits
export async function PUT(request: NextRequest) {
  try {
    const { deviceId } = await request.json();

    // Validate required fields
    if (!deviceId) {
      return NextResponse.json(
        { success: false, message: "Device ID and positive amount are required" },
        { status: 400 }
      );
    }

    // Find the device
    const existingDevice = await prisma.device.findUnique({
      where: { deviceId },
      select: {
        id: true,
        freeCredits: true,
      }
    });

    if (!existingDevice) {
      return NextResponse.json(
        { success: false, message: "Device not found" },
        { status: 404 }
      );
    }

    // Check if user has enough credits
    if (existingDevice.freeCredits < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Insufficient free credits",
          data: {
            freeCredits: existingDevice.freeCredits,
          }
        },
        { status: 400 }
      );
    }

    // Decrement the credits
    const newCredits = existingDevice.freeCredits - 1;

    const updatedDevice = await prisma.device.update({
      where: { deviceId },
      data: { freeCredits: newCredits },
      select: {
        id: true,
        deviceId: true,
        freeCredits: true,
      }
    });

    return NextResponse.json({
      success: true,
      message: `1 credit decremented successfully`,
      data: {
        device: {
          id: updatedDevice.id,
          deviceId: updatedDevice.deviceId,
          freeCredits: updatedDevice.freeCredits,
        },
      }
    });

  } catch (error) {
    console.error("Error decrementing credits:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
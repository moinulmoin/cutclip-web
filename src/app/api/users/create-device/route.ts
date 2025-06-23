import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { deviceId } = await request.json();

    // Validate required fields
    if (!deviceId) {
      return NextResponse.json(
        { success: false, message: "Device ID is required", data: null },
        { status: 400 }
      );
    }

    // Create the device
    const device = await prisma.device.create({
      data: {
        deviceId,
      }
    });

    return NextResponse.json({
      success: true,
      message: "Device created successfully",
      data: device
    });

  } catch (error) {
    console.error("Error creating device:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error", data: null },
      { status: 500 }
    );
  }
}

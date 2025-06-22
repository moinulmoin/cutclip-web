import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { deviceId, osVersion, model } = await request.json();

    // Validate required fields
    if (!deviceId) {
      return NextResponse.json({ error: "Device ID is required" }, { status: 400 });
    }

    // Check if device exists and include user data
    const device = await prisma.device.create({
      data: {
        deviceId,
        osVersion: osVersion || null,
        model: model || null
      }
    });

    return NextResponse.json({
      success: true,
      message: "Device created successfully",
      data: device
    });
  } catch (error) {
    console.error("Error checking device ID:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

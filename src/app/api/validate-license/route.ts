import { polarApi } from "@/lib/polar";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const organizationId = process.env.POLAR_ORGANIZATION_ID!;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const license = searchParams.get("license")!;
    const deviceId = searchParams.get("deviceId")!;

    if (!license) {
      return NextResponse.json(
        { success: false, message: "License is required", data: null },
        { status: 400 }
      );
    }

    // 1. Validate with Polar API first
    const polarResponse = await polarApi.customerPortal.licenseKeys.validate({
      key: license,
      organizationId: organizationId,
      conditions: {
        deviceId: deviceId
      },
    });

    // 2. Check if license is available for this device (not used by another device)
    const existingLicenseUser = await prisma.user.findFirst({
      where: { license },
      select: {
        device: {
          select: {
            deviceId: true
          }
        }
      }
    });

    // If license exists in DB and is used by another device, reject
    if (existingLicenseUser?.device?.[0]?.deviceId) {
      const existingDeviceId = existingLicenseUser?.device?.[0]?.deviceId;
      if (existingDeviceId !== deviceId) {
        return NextResponse.json(
          {
            success: false,
            message: "License already used on another device",
            data: null
          },
          { status: 409 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "License is valid and available",
      data: {
        license: license,
        deviceId: deviceId,
      }
    });
  } catch (error) {
    console.error("License validation failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid license key",
        data: null
      },
      { status: 400 }
    );
  }
}

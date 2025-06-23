import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const deviceId = searchParams.get('deviceId')

    // Validate required parameter
    if (!deviceId) {
      return NextResponse.json(
        { success: false, message: 'Device ID parameter is required', data: null },
        { status: 400 }
      )
    }

    // Check if device exists and include user data
    const device = await prisma.device.findUnique({
      where: { deviceId },
      select: {
        id: true,
        deviceId: true,
        freeCredits: true,
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            license: true,
          }
        }
      }
    })

    if (device) {
      return NextResponse.json({
        success: true,
        message: 'Device found',
        data: {
          id: device.id,
          deviceId: device.deviceId,
          freeCredits: device.freeCredits,
          user: device.user ? {
            id: device.user?.id,
            email: device.user?.email,
            name: device.user?.name,
            license: device.user?.license,
          } : null
        },
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Device not found',
        data: null
      })
    }

  } catch (error) {
    console.error('Error checking device ID:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error', data: null },
      { status: 500 }
    )
  }
}
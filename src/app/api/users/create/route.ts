import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { deviceId, email, name, osVersion, model } = await request.json()

    // Validate required fields
    if (!deviceId) {
      return NextResponse.json(
        { error: 'Device ID is required' },
        { status: 400 }
      )
    }

    // Check if device already exists
    const existingDevice = await prisma.device.findUnique({
      where: { deviceId },
      include: { user: true }
    })

    if (existingDevice) {
      return NextResponse.json(
        { error: 'Device ID already exists' },
        { status: 409 }
      )
    }

    // Create user and device in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          email: email || null,
          name: name || null
        }
      })

      // Create device linked to user
      const device = await tx.device.create({
        data: {
          deviceId,
          osVersion: osVersion || null,
          model: model || null,
          userId: user.id
        }
      })

      return { user, device }
    })

    return NextResponse.json({
      message: 'User and device created successfully',
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name,
        createdAt: result.user.createdAt
      },
      device: {
        id: result.device.id,
        deviceId: result.device.deviceId,
        osVersion: result.device.osVersion,
        model: result.device.model,
        createdAt: result.device.createdAt
      }
    })

  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";
import {
  checkLoginLimit,
  recordFailedAttempt,
  clearAttempts,
} from "@/lib/rateLimiter";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const ip =
      request.headers.get("x-forwarded-for") ??
      "127.0.0.1";

    const allowed = await checkLoginLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          error:
            "Too many login attempts. Please try again in 15 minutes.",
        },
        {
          status: 429,
        }
      );
    }

    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin) {
      await recordFailedAttempt(ip);

      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      await recordFailedAttempt(ip);

      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const { token, jti } = await createToken(admin.id);

    const userAgent =
      request.headers.get("user-agent") ??
      "Unknown";

    await prisma.session.create({
      data: {
        tokenId: jti,
        adminId: admin.id,
        userAgent,
        ipAddress: ip,
        lastActive: new Date(),
        expiresAt: new Date(
          Date.now() + 7 * 24 * 60 * 60 * 1000
        ),
      },
    });

    await clearAttempts(ip);

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin_session", token, {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}
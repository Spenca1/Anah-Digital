import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("admin_session")?.value;

  if (!token) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const payload = await verifyToken(token);

  if (!payload?.jti || !payload?.adminId) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  await prisma.session.deleteMany({
    where: {
      adminId: payload.adminId as string,
      NOT: {
        tokenId: payload.jti as string,
      },
    },
  });

  return NextResponse.json({
    success: true,
  });
}
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("admin_session")?.value;

  if (token) {
    const payload = await verifyToken(token);

    if (payload?.jti) {
      await prisma.session.deleteMany({
        where: {
          tokenId: payload.jti as string,
        },
      });
    }
  }

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.delete("admin_session");

  return response;
}
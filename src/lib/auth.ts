import { SignJWT, jwtVerify } from "jose";
import { v4 as uuid } from "uuid";
import { prisma } from "@/lib/prisma";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET!
);

export async function createToken(adminId: string) {
  const jti = uuid();

  const token = await new SignJWT({
    adminId,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setJti(jti)
    .setExpirationTime("7d")
    .sign(secret);

  return {
    token,
    jti,
  };
}

export async function updateSession(tokenId: string) {
  await prisma.session.update({
    where: {
      tokenId,
    },
    data: {
      lastActive: new Date(),
    },
  });
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(
      token,
      secret
    );

    return {
      adminId: payload.adminId as string,
      jti: payload.jti as string,
      exp: payload.exp,
      iat: payload.iat,
    };
  } catch {
    return null;
  }
}
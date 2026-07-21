import { prisma } from "@/lib/prisma";

const MAX_ATTEMPTS = 3;
const BLOCK_TIME = 20 * 60 * 1000; // 20 minutes

export async function checkLoginLimit(ip: string) {
  const record = await prisma.loginAttempt.findUnique({
    where: { ip },
  });

  if (!record) return true;

  if (
    record.blockedUntil &&
    record.blockedUntil > new Date()
  ) {
    return false;
  }

  return true;
}

export async function recordFailedAttempt(ip: string) {
  const record = await prisma.loginAttempt.findUnique({
    where: { ip },
  });

  if (!record) {
    await prisma.loginAttempt.create({
      data: {
        ip,
        attempts: 1,
      },
    });

    return;
  }

  const attempts = record.attempts + 1;

  if (attempts >= MAX_ATTEMPTS) {
    await prisma.loginAttempt.update({
      where: { ip },
      data: {
        attempts,
        blockedUntil: new Date(Date.now() + BLOCK_TIME),
      },
    });
  } else {
    await prisma.loginAttempt.update({
      where: { ip },
      data: {
        attempts,
      },
    });
  }
}

export async function clearAttempts(ip: string) {
  await prisma.loginAttempt.deleteMany({
    where: { ip },
  });
}
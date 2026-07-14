import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const post = await prisma.post.update({
    where: {
      slug,
    },

    data: {
      claps: {
        increment: 1,
      },
    },
  });

  return NextResponse.json({
    claps: post.claps,
  });
}
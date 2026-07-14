import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {

  const body = await request.json();

  const { email } = body;


  const subscriber = await prisma.subscriber.create({
  data: {
    email,
  },
});


  return NextResponse.json({
    message: "Subscription successful",
  });

}
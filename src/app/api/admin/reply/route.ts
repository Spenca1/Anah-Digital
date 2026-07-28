import { Resend } from "resend";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { id, reply } = await req.json();

    const message = await prisma.contactMessage.findUnique({
      where: { id },
    });

    if (!message) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }

    await resend.emails.send({
      from: "Anah Digital <onboarding@resend.dev>",
      to: message.email,
      subject: `Re: ${message.subject}`,
      text: reply,
    });

    await prisma.contactMessage.update({
      where: { id },
      data: {
        isRead: true,
      },
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
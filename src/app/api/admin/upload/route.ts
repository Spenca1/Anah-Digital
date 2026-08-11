import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          error: "No valid file uploaded",
        },
        {
          status: 400,
        }
      );
    }

    const fileName = `blog-images/${Date.now()}-${file.name}`;

    const blob = await put(fileName, file, {
      access: "public",
    });

    console.log("BLOB UPLOAD SUCCESS:", blob.url);

    return NextResponse.json({
      success: true,
      url: blob.url,
    });
  } catch (error) {
    console.error("BLOB UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}
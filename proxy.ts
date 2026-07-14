import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export default function proxy(
  request: NextRequest
) {

  console.log(
    "🔥🔥🔥 PROXY RUNNING:",
    request.nextUrl.pathname
  );


  const session = request.cookies.get(
    "admin_session"
  );


  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login") &&
    !session
  ) {

    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );

  }


  return NextResponse.next();

}


export const config = {
  matcher: [
    "/admin/:path*",
  ],
};
import { NextResponse, type NextRequest } from "next/server";
// import { getUserCredentials } from "./utils/auth/getUserCredentials";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  //   const pathname = request.nextUrl.pathname;

  //   const credentials = getUserCredentials(request);

  //   if (!credentials) {
  //     const response = NextResponse.redirect(new URL("/login", request.url));
  //     response.cookies.set("redirectTo", pathname);

  //     return response;
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/chat",
    "/archive",
    "/feed",
    "/settings",
    "/profile",
    "/profile/:path*",
  ],
};

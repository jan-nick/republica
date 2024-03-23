import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;

  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");

  if (currentUser && isAuthRoute) {
    return Response.redirect(new URL("/menu", request.url));
  }

  if (!currentUser && !isAuthRoute) {
    return Response.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Doar redirect www→apex. Header-e Cache-Control din middleware puteau deranja unele CDN/browser pe desktop. */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const lower = host.toLowerCase();
  if (lower.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.hostname = lower.slice(4).split(":")[0] ?? "nexteraweb.ro";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};

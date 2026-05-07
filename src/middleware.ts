import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Dacă `www` ajunge la aceeași aplicație, trimite tot traficul pe apex (evită domenii duplicate + probleme SSL). */
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
  /** Include și `/_next/*` ca redirect www→apex să se aplice și la chunk-uri (altfel www rămâne fără CSS). */
  matcher: ["/:path*"],
};

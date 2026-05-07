import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function isBypassCachePath(pathname: string) {
  if (pathname.startsWith("/_next/static")) return true;
  if (pathname.startsWith("/_next/image")) return true;
  if (pathname === "/favicon.ico") return true;
  if (pathname === "/robots.txt" || pathname === "/sitemap.xml") return true;
  if (pathname === "/critical-fallback.css") return true;
  if (/\.(ico|png|jpg|jpeg|gif|webp|svg|woff2?|css|js|map)$/i.test(pathname)) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const lower = host.toLowerCase();
  if (lower.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.hostname = lower.slice(4).split(":")[0] ?? "nexteraweb.ro";
    return NextResponse.redirect(url, 308);
  }

  const { pathname } = request.nextUrl;
  const res = NextResponse.next();

  /**
   * CDN (hCDN) ținea HTML cu s-maxage=1 an → după deploy, mobil/laptop vedeau HTML vechi
   * cu linkuri către chunk-uri CSS inexistente. Forțăm revalidare scurtă pentru documente.
   * Fișierele din /_next/static rămân cu politica lor imuabilă de la Next.
   */
  if (!isBypassCachePath(pathname)) {
    res.headers.set(
      "Cache-Control",
      "public, max-age=0, s-maxage=120, stale-while-revalidate=86400, must-revalidate",
    );
  }

  return res;
}

export const config = {
  matcher: ["/:path*"],
};

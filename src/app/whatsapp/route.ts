import { NextResponse } from "next/server";

export function GET() {
  const number = ["40", "75", "38", "34", "96", "5"].join("");
  const message =
    "Bună! Am vizitat site-ul tău și mi-ar plăcea să discutăm despre transformarea prezenței mele online. Putem stabili o consultanță gratuită?";

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return NextResponse.redirect(url, { status: 302 });
}


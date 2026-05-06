import { NextResponse } from "next/server";

type Params = {
  plan?: string;
};

export function GET(_req: Request, ctx: { params: Params }) {
  const plan = (ctx.params.plan ?? "").toLowerCase();

  const number = ["40", "75", "38", "34", "96", "5"].join("");

  const messageByPlan: Record<string, string> = {
    protect:
      "Bună! Vreau să activez pachetul PROTECT — Asigurare Digitală (35€/lună). Aș dori să discutăm pașii pentru plată și activare.",
    growth:
      "Bună! Vreau să activez pachetul GROWTH — Asigurare Digitală (50€/lună). Aș dori să discutăm pașii pentru plată și activare.",
    partner:
      "Bună! Vreau să activez pachetul PARTNER — Asigurare Digitală (80€/lună). Aș dori să discutăm pașii pentru plată și activare.",
  };

  const message = messageByPlan[plan] ?? messageByPlan.protect;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  return NextResponse.redirect(url, { status: 302 });
}


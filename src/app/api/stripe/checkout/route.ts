import { getSiteUrl } from "@/lib/site-url";
import { getStripe, resolveSubscriptionPriceId } from "@/lib/stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type CheckoutBody = {
  /** protect | growth | partner — mapat la STRIPE_PRICE_* din env (Faza 2). */
  plan?: string;
  /** Opțional: precompletare email la Checkout (client RO). */
  customerEmail?: string;
};

/**
 * POST — Stripe Checkout subscription (pregătit; UI încă folosește WhatsApp).
 * Prețul vine din env (STRIPE_PRICE_* sau STRIPE_SUBSCRIPTION_PRICE_ID), nu din client.
 */
export async function POST(request: Request) {
  let body: CheckoutBody = {};
  try {
    const raw = await request.text();
    if (raw) body = JSON.parse(raw) as CheckoutBody;
  } catch {
    body = {};
  }

  try {
    const stripe = getStripe();
    const priceId = resolveSubscriptionPriceId(body.plan);
    const origin = getSiteUrl();
    const planMeta =
      typeof body.plan === "string" ? body.plan.trim().toLowerCase() : "mentenanta";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/asigurare-digitala?abonament=ok&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/asigurare-digitala?abonament=anulat`,
      locale: "ro",
      allow_promotion_codes: true,
      customer_email:
        typeof body.customerEmail === "string" && body.customerEmail.includes("@")
          ? body.customerEmail.trim()
          : undefined,
      metadata: {
        product: "asigurare-digitala",
        plan: planMeta,
      },
      subscription_data: {
        metadata: {
          product: "asigurare-digitala",
          plan: planMeta,
        },
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe nu a returnat URL pentru Checkout." },
        { status: 502 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Eroare necunoscută";
    const status = message.includes("lipsește") ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

import { getSiteUrl } from "@/lib/site-url";
import { getStripe, getSubscriptionPriceId } from "@/lib/stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type CheckoutBody = {
  /** Opțional: precompletare email la Checkout (client RO). */
  customerEmail?: string;
};

/**
 * POST — creează o sesiune Stripe Checkout în mod subscription (abonament lunar).
 * Prețul vine din `STRIPE_SUBSCRIPTION_PRICE_ID` (nu acceptăm price arbitrar din body — mai sigur).
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
    const priceId = getSubscriptionPriceId();
    const origin = getSiteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/?abonament=ok&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?abonament=anulat`,
      locale: "ro",
      allow_promotion_codes: true,
      customer_email:
        typeof body.customerEmail === "string" && body.customerEmail.includes("@")
          ? body.customerEmail.trim()
          : undefined,
      metadata: {
        product: "mentenanta",
      },
      subscription_data: {
        metadata: {
          product: "mentenanta",
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

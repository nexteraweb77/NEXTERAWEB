import { getStripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import type Stripe from "stripe";

export const dynamic = "force-dynamic";

/**
 * Stripe trimite semnătura în header; corpul trebuie rămas **raw** pentru verificare.
 * În local: `stripe listen --forward-to 127.0.0.1:3000/api/stripe/webhook`
 */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!secret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET lipsește." },
      { status: 503 },
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Lipsește stripe-signature." }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Verificare webhook eșuată";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  try {
    await handleStripeEvent(event);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Handler webhook eșuat";
    // Returnăm 500 ca Stripe să reîncerce (atent la idempotency în handlerul tău real).
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

/** Schelet: log + puncte unde vei salva în DB (status abonament, facturi). */
function devStripeLog(...args: unknown[]) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[stripe]", ...args);
  }
}

async function handleStripeEvent(event: Stripe.Event) {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      devStripeLog("checkout.session.completed", session.id);
      break;
    }
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      devStripeLog(event.type, sub.id, sub.status);
      break;
    }
    case "invoice.paid":
    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      devStripeLog(event.type, invoice.id);
      break;
    }
    default:
      devStripeLog("unhandled", event.type);
  }
}

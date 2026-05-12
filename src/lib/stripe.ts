import Stripe from "stripe";

let client: Stripe | null = null;

/** Client Stripe server-side — folosit doar în Route Handlers / server actions. */
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY?.trim();
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY lipsește. Copiază .env.example → .env.local și completează cheile din Stripe Dashboard.",
    );
  }
  if (!client) {
    client = new Stripe(key, {
      typescript: true,
    });
  }
  return client;
}

export function getSubscriptionPriceId(): string {
  const id = process.env.STRIPE_SUBSCRIPTION_PRICE_ID?.trim();
  if (!id) {
    throw new Error(
      "STRIPE_SUBSCRIPTION_PRICE_ID lipsește. Creează în Stripe un Price recurent (lună) și pune ID-ul (price_...).",
    );
  }
  return id;
}

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

/** Pachete Asigurare Digitală — mapare la env (activăm la Faza 2, după cont firmă + Stripe). */
export type SubscriptionPlan = "protect" | "growth" | "partner";

const PLAN_ENV_KEYS: Record<SubscriptionPlan, string> = {
  protect: "STRIPE_PRICE_PROTECT",
  growth: "STRIPE_PRICE_GROWTH",
  partner: "STRIPE_PRICE_PARTNER",
};

export function getSubscriptionPriceIdForPlan(plan: SubscriptionPlan): string {
  const envKey = PLAN_ENV_KEYS[plan];
  const id = process.env[envKey]?.trim();
  if (!id) {
    throw new Error(
      `${envKey} lipsește. Creează în Stripe un Price recurent (lună) pentru pachetul ${plan.toUpperCase()} și pune ID-ul (price_...).`,
    );
  }
  return id;
}

/** Un singur preț (legacy) sau fallback dacă nu trimiți plan la checkout. */
export function getSubscriptionPriceId(): string {
  const id = process.env.STRIPE_SUBSCRIPTION_PRICE_ID?.trim();
  if (!id) {
    throw new Error(
      "STRIPE_SUBSCRIPTION_PRICE_ID lipsește. Sau setează STRIPE_PRICE_PROTECT / GROWTH / PARTNER și trimite plan la checkout.",
    );
  }
  return id;
}

export function resolveSubscriptionPriceId(plan?: string): string {
  const normalized = plan?.trim().toLowerCase();
  if (
    normalized === "protect" ||
    normalized === "growth" ||
    normalized === "partner"
  ) {
    return getSubscriptionPriceIdForPlan(normalized);
  }
  return getSubscriptionPriceId();
}

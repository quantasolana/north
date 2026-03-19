import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('STRIPE_SECRET_KEY not configured');
  _stripe = new Stripe(key, { apiVersion: '2026-02-25.clover', typescript: true });
  return _stripe;
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const client = getStripe();
    const value = (client as unknown as Record<string | symbol, unknown>)[prop];
    return typeof value === 'function' ? value.bind(client) : value;
  },
});

export const PLANS = {
  free: { name: 'Free', price: 0, runs: 50, priceId: null },
  starter: { name: 'Starter', price: 99, runs: 1000, priceId: process.env.STRIPE_STARTER_PRICE_ID ?? '' },
  pro: { name: 'Pro', price: 299, runs: 5000, priceId: process.env.STRIPE_PRO_PRICE_ID ?? '' },
} as const;

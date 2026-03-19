#!/usr/bin/env node
/**
 * Creates Stripe products and prices for North's subscription plans.
 * Usage: STRIPE_SECRET_KEY=sk_test_... node scripts/stripe-setup.mjs
 *
 * Or set STRIPE_SECRET_KEY in .env.local and run:
 *   node -e "require('dotenv').config({path:'.env.local'})" scripts/stripe-setup.mjs
 */

import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error('ERROR: STRIPE_SECRET_KEY environment variable is not set.');
  console.error('Run: STRIPE_SECRET_KEY=sk_test_... node scripts/stripe-setup.mjs');
  process.exit(1);
}

const stripe = new Stripe(key, { apiVersion: '2026-02-25.clover' });

async function setup() {
  console.log('Creating Stripe products and prices...\n');

  // --- Starter Plan ---
  const starterProduct = await stripe.products.create({
    name: 'North Starter',
    description: '1,000 agent runs per month',
    metadata: { plan: 'starter' },
  });

  const starterPrice = await stripe.prices.create({
    product: starterProduct.id,
    unit_amount: 9900, // $99.00
    currency: 'usd',
    recurring: { interval: 'month' },
    metadata: { plan: 'starter' },
  });

  // --- Pro Plan ---
  const proProduct = await stripe.products.create({
    name: 'North Pro',
    description: '5,000 agent runs per month',
    metadata: { plan: 'pro' },
  });

  const proPrice = await stripe.prices.create({
    product: proProduct.id,
    unit_amount: 29900, // $299.00
    currency: 'usd',
    recurring: { interval: 'month' },
    metadata: { plan: 'pro' },
  });

  console.log('Products created successfully!\n');
  console.log('Add these to your .env.local:\n');
  console.log(`STRIPE_STARTER_PRICE_ID=${starterPrice.id}`);
  console.log(`STRIPE_PRO_PRICE_ID=${proPrice.id}`);
  console.log('\nDone.');
}

setup().catch((err) => {
  console.error('Stripe setup failed:', err.message);
  process.exit(1);
});

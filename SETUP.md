# North — Backend Setup Guide

## Prerequisites

- Node.js 18+
- Docker Desktop (for Supabase local dev)
- A Supabase account
- A Stripe account
- An Anthropic API key

---

## 1. Supabase

### Option A — Local Development (recommended)

Docker must be running.

```bash
npx supabase start
```

This spins up a local Supabase stack. When it completes, it prints:

```
API URL: http://localhost:54321
DB URL: postgresql://postgres:postgres@localhost:54322/postgres
Studio URL: http://localhost:54323
anon key: eyJ...
service_role key: eyJ...
```

Copy the values into `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service_role key>
```

Apply the schema:

```bash
npx supabase db reset
```

This runs all migrations in `supabase/migrations/` automatically.

To stop the local stack: `npx supabase stop`

---

### Option B — Hosted Supabase Project

1. Go to https://supabase.com/dashboard → **New project**
2. Choose a name, password, and region
3. Once created, go to **Settings → API**
4. Copy **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
5. Copy **anon / public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Copy **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`
7. Go to **SQL Editor** and run the contents of `supabase/schema.sql`

**Auth configuration:**

- Go to **Authentication → Providers → Email**
- Enable **Email/Password** sign-ins (on by default)
- Optionally disable email confirmation for dev: **Authentication → Settings → Confirm email** → off

---

## 2. Stripe

### Create products and prices

Make sure `STRIPE_SECRET_KEY` is set in `.env.local`, then run:

```bash
node scripts/stripe-setup.mjs
```

This creates the **Starter ($99/mo)** and **Pro ($299/mo)** products and prints their price IDs. Add them to `.env.local`:

```
STRIPE_STARTER_PRICE_ID=price_...
STRIPE_PRO_PRICE_ID=price_...
```

### Set up the webhook

**Local dev** — install the Stripe CLI (https://stripe.com/docs/stripe-cli) and run:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copy the printed webhook signing secret → `STRIPE_WEBHOOK_SECRET` in `.env.local`.

**Production (Vercel)** — in the Stripe Dashboard:

1. Go to **Developers → Webhooks → Add endpoint**
2. URL: `https://north-roan.vercel.app/api/stripe/webhook`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. After saving, click **Reveal signing secret** → `STRIPE_WEBHOOK_SECRET`

---

## 3. QuickBooks

### Step 1 — Create a developer account

1. Go to https://developer.intuit.com
2. Click **Sign In** → **Create account** if you don't have one
3. Complete email verification

### Step 2 — Create an app

1. From the dashboard, click **+ Create an app**
2. Select **QuickBooks Online and Payments**
3. Name: `North` (or any name)
4. Select scopes:
   - `com.intuit.quickbooks.accounting` (required)
5. Click **Create app**

### Step 3 — Get credentials

1. Open your new app → **Keys & credentials** tab
2. Under **Development** (for sandbox) or **Production**:
   - Copy **Client ID** → `QB_CLIENT_ID`
   - Copy **Client Secret** → `QB_CLIENT_SECRET`

### Step 4 — Configure redirect URI

1. In the app settings → **Redirect URIs**
2. Add:
   - Dev: `http://localhost:3000/api/quickbooks/callback`
   - Prod: `https://north-roan.vercel.app/api/quickbooks/callback`

### Step 5 — Set environment variables

```
QB_CLIENT_ID=AB...
QB_CLIENT_SECRET=...
QB_REDIRECT_URI=http://localhost:3000/api/quickbooks/callback
QB_ENVIRONMENT=sandbox   # use "production" for live
```

### Step 6 — Connect a test company (sandbox)

1. Go to https://developer.intuit.com/app/developer/sandbox
2. Click **Go to test company** to open a pre-populated QuickBooks sandbox
3. The OAuth flow in the app will connect to this sandbox when `QB_ENVIRONMENT=sandbox`

---

## 4. Anthropic

1. Go to https://console.anthropic.com/settings/keys
2. Create a new API key
3. Set `ANTHROPIC_API_KEY=sk-ant-...` in `.env.local`

The app uses **claude-opus-4-5** with extended thinking for all workflow executions.

---

## 5. Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Fill in .env.local (see above)
cp .env.local .env.local   # already exists, just fill it in

# 3. Start Supabase (optional, if using local dev)
npx supabase start

# 4. Start the dev server
npm run dev
```

App runs at http://localhost:3000

---

## 6. Deploying to Vercel

All environment variables in `.env.local` must be added to Vercel:

1. Go to https://vercel.com/dashboard → your project → **Settings → Environment Variables**
2. Add each variable from `.env.local`
3. Update URL-dependent vars for production:
   - `NEXT_PUBLIC_APP_URL=https://north-roan.vercel.app`
   - `QB_REDIRECT_URI=https://north-roan.vercel.app/api/quickbooks/callback`

After adding all variables, trigger a redeploy.

---

## Environment Variable Reference

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Settings → API |
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe CLI output or Stripe Dashboard webhook |
| `STRIPE_STARTER_PRICE_ID` | Output of `node scripts/stripe-setup.mjs` |
| `STRIPE_PRO_PRICE_ID` | Output of `node scripts/stripe-setup.mjs` |
| `ANTHROPIC_API_KEY` | https://console.anthropic.com/settings/keys |
| `QB_CLIENT_ID` | Intuit Developer Portal → App → Keys & credentials |
| `QB_CLIENT_SECRET` | Intuit Developer Portal → App → Keys & credentials |
| `QB_REDIRECT_URI` | Set manually (see QuickBooks section) |
| `QB_ENVIRONMENT` | `sandbox` or `production` |
| `NEXT_PUBLIC_APP_URL` | Your deployment URL |

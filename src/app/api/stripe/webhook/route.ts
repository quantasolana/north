import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe, PLANS } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.user_id;
      const plan = session.metadata?.plan as keyof typeof PLANS | undefined;

      if (userId && plan && PLANS[plan]) {
        await supabaseAdmin
          .from('profiles')
          .update({
            plan,
            stripe_subscription_id: session.subscription as string,
            agent_runs_limit: PLANS[plan].runs,
          })
          .eq('id', userId);
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      const { data: profile } = await supabaseAdmin
        .from('profiles')
        .select('id')
        .eq('stripe_subscription_id', subscription.id)
        .single();

      if (profile) {
        await supabaseAdmin
          .from('profiles')
          .update({
            plan: 'free',
            stripe_subscription_id: null,
            agent_runs_limit: PLANS.free.runs,
          })
          .eq('id', profile.id);
      }
      break;
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;
      const priceId = subscription.items.data[0]?.price.id;

      const newPlan = Object.entries(PLANS).find(
        ([, p]) => p.priceId === priceId
      )?.[0] as keyof typeof PLANS | undefined;

      if (newPlan) {
        const { data: profile } = await supabaseAdmin
          .from('profiles')
          .select('id')
          .eq('stripe_subscription_id', subscription.id)
          .single();

        if (profile) {
          await supabaseAdmin
            .from('profiles')
            .update({
              plan: newPlan,
              agent_runs_limit: PLANS[newPlan].runs,
            })
            .eq('id', profile.id);
        }
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}

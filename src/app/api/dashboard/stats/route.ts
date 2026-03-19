import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const [executions, profile, integration] = await Promise.all([
    supabaseAdmin
      .from('workflow_executions')
      .select('status, cost_usd, created_at')
      .eq('user_id', user.id)
      .gte('created_at', startOfMonth.toISOString()),
    supabaseAdmin
      .from('profiles')
      .select('plan, agent_runs_this_month, agent_runs_limit')
      .eq('id', user.id)
      .single(),
    supabaseAdmin.from('integrations').select('provider, is_connected').eq('user_id', user.id),
  ]);

  const execs = executions.data ?? [];
  const totalRuns = execs.length;
  const completed = execs.filter((e) => e.status === 'completed').length;
  const flagged = execs.filter((e) => e.status === 'flagged').length;
  const totalCost = execs.reduce((sum, e) => sum + (e.cost_usd ?? 0), 0);

  return NextResponse.json({
    totalRuns,
    completed,
    flagged,
    costUsd: totalCost,
    profile: profile.data,
    integrations: integration.data ?? [],
  });
}

import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { qbApiRequest, refreshQBToken } from '@/lib/quickbooks';

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: integration } = await supabaseAdmin
    .from('integrations')
    .select('*')
    .eq('user_id', user.id)
    .eq('provider', 'quickbooks')
    .single();

  if (!integration?.is_connected) {
    return NextResponse.json({ error: 'QuickBooks not connected' }, { status: 400 });
  }

  let accessToken: string = integration.access_token;

  if (new Date(integration.token_expires_at) < new Date()) {
    const refreshed = await refreshQBToken(integration.refresh_token);
    accessToken = refreshed.access_token;
    await supabaseAdmin
      .from('integrations')
      .update({
        access_token: refreshed.access_token,
        refresh_token: refreshed.refresh_token,
        token_expires_at: new Date(Date.now() + refreshed.expires_in * 1000).toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', integration.id);
  }

  const [invoices, accounts] = await Promise.all([
    qbApiRequest(
      integration.realm_id,
      accessToken,
      'query?query=SELECT * FROM Invoice MAXRESULTS 20'
    ),
    qbApiRequest(
      integration.realm_id,
      accessToken,
      "query?query=SELECT * FROM Account WHERE AccountType='Income' MAXRESULTS 50"
    ),
  ]);

  return NextResponse.json({ invoices, accounts });
}

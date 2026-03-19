import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import { exchangeQBCode } from '@/lib/quickbooks';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const realmId = searchParams.get('realmId');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(
      new URL('/dashboard/integrations?error=qb_denied', request.url)
    );
  }

  const cookieStore = await cookies();
  const storedState = cookieStore.get('qb_oauth_state')?.value;

  if (!state || state !== storedState) {
    return NextResponse.redirect(
      new URL('/dashboard/integrations?error=qb_state_mismatch', request.url)
    );
  }

  if (!code || !realmId) {
    return NextResponse.redirect(
      new URL('/dashboard/integrations?error=qb_missing_params', request.url)
    );
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(new URL('/auth/login', request.url));

  try {
    const tokens = await exchangeQBCode(code);
    const expiresAt = new Date(Date.now() + tokens.expires_in * 1000).toISOString();

    await supabaseAdmin.from('integrations').upsert(
      {
        user_id: user.id,
        provider: 'quickbooks',
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        realm_id: realmId,
        token_expires_at: expiresAt,
        is_connected: true,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,provider' }
    );

    return NextResponse.redirect(
      new URL('/dashboard/integrations?success=qb_connected', request.url)
    );
  } catch (err) {
    console.error('QB callback error:', err);
    return NextResponse.redirect(
      new URL('/dashboard/integrations?error=qb_token_exchange', request.url)
    );
  }
}

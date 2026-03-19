import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getQBAuthUrl } from '@/lib/quickbooks';
import { randomBytes } from 'crypto';

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const state = randomBytes(16).toString('hex');
  const authUrl = getQBAuthUrl(state);

  const response = NextResponse.redirect(authUrl);
  response.cookies.set('qb_oauth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 600,
  });

  return response;
}

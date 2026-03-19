-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  full_name text,
  company_name text,
  plan text default 'free' check (plan in ('free', 'starter', 'pro')),
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  agent_runs_this_month integer default 0,
  agent_runs_limit integer default 50,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Workflows table
create table public.workflows (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  description text,
  template_type text check (template_type in ('receipt_scanning', 'bank_reconciliation', 'invoice_processing', 'journal_entry', 'monthly_close')),
  prompt_template text not null,
  is_active boolean default true,
  executions_count integer default 0,
  last_executed_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Workflow executions / audit log
create table public.workflow_executions (
  id uuid default uuid_generate_v4() primary key,
  workflow_id uuid references public.workflows(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  status text default 'pending' check (status in ('pending', 'running', 'completed', 'failed', 'flagged')),
  input_data jsonb,
  output_data jsonb,
  confidence_score numeric(3,2),
  error_message text,
  tokens_used integer,
  cost_usd numeric(10,6),
  duration_ms integer,
  requires_review boolean default false,
  created_at timestamptz default now(),
  completed_at timestamptz
);

-- Integrations (QuickBooks tokens)
create table public.integrations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  provider text not null check (provider in ('quickbooks', 'stripe')),
  access_token text,
  refresh_token text,
  realm_id text, -- QuickBooks company ID
  token_expires_at timestamptz,
  is_connected boolean default false,
  metadata jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, provider)
);

-- Audit logs
create table public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  execution_id uuid references public.workflow_executions(id),
  action text not null,
  details jsonb,
  created_at timestamptz default now()
);

-- RLS Policies
alter table public.profiles enable row level security;
alter table public.workflows enable row level security;
alter table public.workflow_executions enable row level security;
alter table public.integrations enable row level security;
alter table public.audit_logs enable row level security;

create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can view own workflows" on public.workflows for all using (auth.uid() = user_id);
create policy "Users can view own executions" on public.workflow_executions for all using (auth.uid() = user_id);
create policy "Users can view own integrations" on public.integrations for all using (auth.uid() = user_id);
create policy "Users can view own audit logs" on public.audit_logs for all using (auth.uid() = user_id);

-- Function to create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

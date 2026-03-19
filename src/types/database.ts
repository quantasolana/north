export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  company_name: string | null;
  plan: 'free' | 'starter' | 'pro';
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  agent_runs_this_month: number;
  agent_runs_limit: number;
  created_at: string;
  updated_at: string;
}

export interface Workflow {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  template_type: 'receipt_scanning' | 'bank_reconciliation' | 'invoice_processing' | 'journal_entry' | 'monthly_close' | null;
  prompt_template: string;
  is_active: boolean;
  executions_count: number;
  last_executed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface WorkflowExecution {
  id: string;
  workflow_id: string;
  user_id: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'flagged';
  input_data: Record<string, unknown> | null;
  output_data: Record<string, unknown> | null;
  confidence_score: number | null;
  error_message: string | null;
  tokens_used: number | null;
  cost_usd: number | null;
  duration_ms: number | null;
  requires_review: boolean;
  created_at: string;
  completed_at: string | null;
}

export interface Integration {
  id: string;
  user_id: string;
  provider: 'quickbooks' | 'stripe';
  access_token: string | null;
  refresh_token: string | null;
  realm_id: string | null;
  token_expires_at: string | null;
  is_connected: boolean;
  metadata: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface AuditLog {
  id: string;
  user_id: string;
  execution_id: string | null;
  action: string;
  details: Record<string, unknown> | null;
  created_at: string;
}

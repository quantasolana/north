import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { executeAgentWorkflow, WorkflowType } from '@/lib/agent-engine';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: workflow, error: wfError } = await supabaseAdmin
    .from('workflows')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (wfError || !workflow) {
    return NextResponse.json({ error: 'Workflow not found' }, { status: 404 });
  }

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('agent_runs_this_month, agent_runs_limit')
    .eq('id', user.id)
    .single();

  if (profile && profile.agent_runs_this_month >= profile.agent_runs_limit) {
    return NextResponse.json(
      { error: 'Monthly agent run limit reached. Please upgrade your plan.' },
      { status: 429 }
    );
  }

  const inputData = await request.json();

  const { data: execution, error: execError } = await supabaseAdmin
    .from('workflow_executions')
    .insert({
      workflow_id: id,
      user_id: user.id,
      status: 'running',
      input_data: inputData,
    })
    .select()
    .single();

  if (execError || !execution) {
    return NextResponse.json({ error: 'Failed to create execution' }, { status: 500 });
  }

  await supabaseAdmin
    .from('profiles')
    .update({ agent_runs_this_month: (profile?.agent_runs_this_month ?? 0) + 1 })
    .eq('id', user.id);

  await supabaseAdmin
    .from('workflows')
    .update({
      executions_count: workflow.executions_count + 1,
      last_executed_at: new Date().toISOString(),
    })
    .eq('id', id);

  await supabaseAdmin.from('audit_logs').insert({
    user_id: user.id,
    execution_id: execution.id,
    action: 'workflow_executed',
    details: { workflow_name: workflow.name, workflow_type: workflow.template_type },
  });

  try {
    const result = await executeAgentWorkflow(execution.id, {
      workflowType: workflow.template_type as WorkflowType,
      data: inputData,
      customPrompt:
        workflow.prompt_template !== 'default' ? workflow.prompt_template : undefined,
    });

    return NextResponse.json({ execution_id: execution.id, result });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Agent execution failed';
    return NextResponse.json({ error: message, execution_id: execution.id }, { status: 500 });
  }
}

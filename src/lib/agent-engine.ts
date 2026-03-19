import { anthropic } from './anthropic';
import { supabaseAdmin } from './supabase/admin';

export type WorkflowType =
  | 'receipt_scanning'
  | 'bank_reconciliation'
  | 'invoice_processing'
  | 'journal_entry'
  | 'monthly_close';

export interface AgentInput {
  workflowType: WorkflowType;
  data: Record<string, unknown>;
  customPrompt?: string;
}

export interface AgentResult {
  success: boolean;
  output: Record<string, unknown>;
  confidenceScore: number;
  requiresReview: boolean;
  tokensUsed: number;
  costUsd: number;
  reasoning?: string;
}

const WORKFLOW_PROMPTS: Record<WorkflowType, string> = {
  receipt_scanning: `You are an expert accounting AI that processes receipts.
Extract and categorize: vendor name, amount, date, expense category, tax amount, and payment method.
Assign a GL account code based on the expense type.
Return a JSON object with: vendor, amount, date, category, gl_account, tax_amount, payment_method, notes.
Flag anything ambiguous for human review.`,

  bank_reconciliation: `You are an expert accounting AI that reconciles bank transactions.
Match bank transactions to existing records, identify unmatched items, and flag discrepancies.
For each transaction, determine: match_status, matched_record_id (if found), gl_account, notes.
Return a JSON array of reconciled transactions.
Flag any transactions over $10,000 or with unusual patterns for review.`,

  invoice_processing: `You are an expert accounting AI that processes vendor invoices.
Extract: invoice_number, vendor_name, invoice_date, due_date, line_items (description, quantity, unit_price, amount), subtotal, tax, total.
Verify the math and flag any discrepancies.
Suggest GL account codes for each line item.
Return a structured JSON object.`,

  journal_entry: `You are an expert accounting AI that creates journal entries.
Based on the transaction data provided, create proper double-entry bookkeeping journal entries.
Each entry must balance (debits = credits).
Return a JSON object with: date, description, entries (array of {account, debit, credit, memo}).
Follow GAAP principles.`,

  monthly_close: `You are an expert accounting AI that assists with monthly close procedures.
Review the provided data and generate a checklist of items to complete.
Identify: outstanding reconciliations, missing accruals, prepaid amortizations needed, depreciation entries.
Return a JSON object with: checklist (array of {task, priority, status, notes}), summary, next_steps.`,
};

export async function executeAgentWorkflow(
  executionId: string,
  input: AgentInput
): Promise<AgentResult> {
  const startTime = Date.now();

  try {
    const systemPrompt = WORKFLOW_PROMPTS[input.workflowType];
    const userPrompt = input.customPrompt || JSON.stringify(input.data, null, 2);

    const response = await anthropic.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 4096,
      thinking: { type: 'adaptive' },
      system:
        systemPrompt +
        '\n\nAlways respond with valid JSON. Include a "confidence" field (0.0-1.0) and "requires_review" boolean.',
      messages: [
        {
          role: 'user',
          content: `Process the following data:\n\n${userPrompt}`,
        },
      ],
    });

    let outputText = '';
    let reasoning = '';

    for (const block of response.content) {
      if (block.type === 'thinking') {
        reasoning = block.thinking;
      } else if (block.type === 'text') {
        outputText = block.text;
      }
    }

    let parsedOutput: Record<string, unknown>;
    try {
      const jsonMatch =
        outputText.match(/```json\n?([\s\S]*?)\n?```/) ||
        outputText.match(/\{[\s\S]*\}/) ||
        outputText.match(/\[[\s\S]*\]/);
      const jsonStr = jsonMatch ? jsonMatch[1] ?? jsonMatch[0] : outputText;
      parsedOutput = JSON.parse(jsonStr);
    } catch {
      parsedOutput = { raw_output: outputText, parse_error: true };
    }

    const confidenceScore =
      typeof parsedOutput.confidence === 'number' ? parsedOutput.confidence : 0.85;
    const requiresReview =
      typeof parsedOutput.requires_review === 'boolean'
        ? parsedOutput.requires_review
        : confidenceScore < 0.75;

    // claude-opus pricing: $15/1M input, $75/1M output
    const tokensUsed = response.usage.input_tokens + response.usage.output_tokens;
    const costUsd =
      response.usage.input_tokens * 0.000015 + response.usage.output_tokens * 0.000075;

    const duration = Date.now() - startTime;

    await supabaseAdmin
      .from('workflow_executions')
      .update({
        status: requiresReview ? 'flagged' : 'completed',
        output_data: parsedOutput,
        confidence_score: confidenceScore,
        tokens_used: tokensUsed,
        cost_usd: costUsd,
        duration_ms: duration,
        requires_review: requiresReview,
        completed_at: new Date().toISOString(),
      })
      .eq('id', executionId);

    return {
      success: true,
      output: parsedOutput,
      confidenceScore,
      requiresReview,
      tokensUsed,
      costUsd,
      reasoning,
    };
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    await supabaseAdmin
      .from('workflow_executions')
      .update({
        status: 'failed',
        error_message: errorMessage,
        duration_ms: duration,
        completed_at: new Date().toISOString(),
      })
      .eq('id', executionId);

    throw error;
  }
}

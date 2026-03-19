"use client";

import { useState } from "react";
import {
  ScanLine,
  Landmark,
  FileText,
  BookOpen,
  ClipboardCheck,
  Plus,
  Play,
  Pause,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TEMPLATES = [
  {
    id: "receipt-scanning",
    name: "Receipt Scanning & Categorization",
    description:
      "Automatically extract data from receipts, categorize expenses, and post to your GL with AI-powered accuracy.",
    icon: ScanLine,
    runsPerMonth: 1240,
    isActive: true,
  },
  {
    id: "bank-reconciliation",
    name: "Bank Reconciliation",
    description:
      "Match bank transactions to ledger entries, flag discrepancies, and generate reconciliation reports.",
    icon: Landmark,
    runsPerMonth: 380,
    isActive: true,
  },
  {
    id: "invoice-processing",
    name: "Invoice Processing",
    description:
      "Capture invoice data, match to POs, route for approval, and schedule payments automatically.",
    icon: FileText,
    runsPerMonth: 560,
    isActive: false,
  },
  {
    id: "journal-entries",
    name: "Journal Entry Generation",
    description:
      "Generate recurring and adjusting journal entries with audit-ready documentation and approvals.",
    icon: BookOpen,
    runsPerMonth: 210,
    isActive: true,
  },
  {
    id: "monthly-close",
    name: "Monthly Close Checklist",
    description:
      "Orchestrate your month-end close with automated task tracking, dependency management, and team assignments.",
    icon: ClipboardCheck,
    runsPerMonth: 12,
    isActive: false,
  },
];

const USER_WORKFLOWS = [
  {
    id: "custom-1",
    name: "Vendor Payment Approval",
    template: "Custom",
    lastRun: "2 hours ago",
    status: "active" as const,
    runs: 47,
  },
  {
    id: "custom-2",
    name: "Expense Report Processing",
    template: "Receipt Scanning",
    lastRun: "30 min ago",
    status: "active" as const,
    runs: 128,
  },
];

export default function WorkflowsPage() {
  const [templates, setTemplates] = useState(TEMPLATES);

  function toggleTemplate(id: string) {
    setTemplates((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isActive: !t.isActive } : t))
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Workflows</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Automate your accounting processes with pre-built templates or
            create custom workflows.
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          New Workflow
        </Button>
      </div>

      {/* Templates */}
      <section>
        <h2 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-4">
          Pre-built Templates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {templates.map((template) => {
            const Icon = template.icon;
            return (
              <Card
                key={template.id}
                className="group hover:border-[var(--border-cyan)] transition-colors"
              >
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="rounded-lg bg-[var(--cyan-muted)] p-2.5">
                      <Icon className="h-5 w-5 text-[var(--cyan)]" />
                    </div>
                    <button
                      onClick={() => toggleTemplate(template.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                        template.isActive
                          ? "bg-[var(--cyan)]"
                          : "bg-[var(--surface)]"
                      }`}
                      role="switch"
                      aria-checked={template.isActive}
                      aria-label={`Toggle ${template.name}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                          template.isActive
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {template.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                      {template.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                    <span className="text-xs text-[var(--text-muted)]">
                      {template.runsPerMonth.toLocaleString()} runs/mo
                    </span>
                    <Button variant="outline" size="sm">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* User workflows */}
      <section>
        <h2 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-4">
          Your Workflows
        </h2>
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                    Name
                  </th>
                  <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                    Template
                  </th>
                  <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                    Last Run
                  </th>
                  <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                    Runs
                  </th>
                  <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody>
                {USER_WORKFLOWS.map((wf) => (
                  <tr
                    key={wf.id}
                    className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {wf.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                      {wf.template}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                      {wf.lastRun}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                      {wf.runs}
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={
                          wf.status === "active" ? "success" : "warning"
                        }
                      >
                        {wf.status === "active" ? (
                          <Play className="h-3 w-3" />
                        ) : (
                          <Pause className="h-3 w-3" />
                        )}
                        {wf.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

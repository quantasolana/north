"use client";

import { Check, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: 0,
    period: "forever",
    description: "For individuals exploring AI accounting",
    features: [
      "50 agent runs / month",
      "1 workflow",
      "Receipt scanning",
      "Email support",
    ],
    isCurrent: false,
    cta: "Downgrade",
  },
  {
    id: "starter",
    name: "Starter",
    price: 99,
    period: "/ month",
    description: "For small teams automating core workflows",
    features: [
      "2,000 agent runs / month",
      "10 workflows",
      "All templates",
      "QuickBooks sync",
      "Bank reconciliation",
      "Priority support",
    ],
    isCurrent: true,
    cta: "Current Plan",
  },
  {
    id: "pro",
    name: "Pro",
    price: 299,
    period: "/ month",
    description: "For firms needing full automation at scale",
    features: [
      "Unlimited agent runs",
      "Unlimited workflows",
      "All integrations",
      "Custom AI models",
      "Audit trail & compliance",
      "API access",
      "Dedicated success manager",
      "SSO & SAML",
    ],
    isCurrent: false,
    cta: "Upgrade to Pro",
  },
];

const BILLING_HISTORY = [
  {
    id: 1,
    date: "Mar 1, 2026",
    description: "Starter Plan - Monthly",
    amount: "$99.00",
    status: "Paid",
  },
  {
    id: 2,
    date: "Feb 1, 2026",
    description: "Starter Plan - Monthly",
    amount: "$99.00",
    status: "Paid",
  },
  {
    id: 3,
    date: "Jan 1, 2026",
    description: "Starter Plan - Monthly",
    amount: "$99.00",
    status: "Paid",
  },
  {
    id: 4,
    date: "Dec 1, 2025",
    description: "Starter Plan - Monthly",
    amount: "$99.00",
    status: "Paid",
  },
];

export default function BillingPage() {
  const currentPlan = PLANS.find((p) => p.isCurrent)!;
  const usedRuns = 1347;
  const totalRuns = 2000;
  const usagePercent = Math.round((usedRuns / totalRuns) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Billing</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Manage your subscription, usage, and payment history.
        </p>
      </div>

      {/* Current plan + usage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>
              You&apos;re on the {currentPlan.name} plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">
                ${currentPlan.price}
              </span>
              <span className="text-[var(--text-muted)]">
                {currentPlan.period}
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2">
              Next billing date: April 1, 2026
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[var(--cyan)]" />
              Usage This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-muted)]">Agent Runs</span>
                <span className="text-white font-medium">
                  {usedRuns.toLocaleString()} / {totalRuns.toLocaleString()}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[var(--surface)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--cyan-dim)] transition-all duration-500"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                {totalRuns - usedRuns} runs remaining &middot; Resets April 1
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Plan cards */}
      <section>
        <h2 className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-4">
          Available Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={
                plan.isCurrent
                  ? "border-[var(--border-cyan)] ring-1 ring-[var(--cyan)]/20"
                  : ""
              }
            >
              <CardContent className="space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {plan.name}
                    </h3>
                    {plan.isCurrent && <Badge>Current</Badge>}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <Check className="h-4 w-4 text-[var(--cyan)] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.isCurrent ? "outline" : "default"}
                  className="w-full"
                  disabled={plan.isCurrent}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Billing history */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                  Date
                </th>
                <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                  Description
                </th>
                <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                  Amount
                </th>
                <th className="text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {BILLING_HISTORY.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[var(--border)] last:border-0"
                >
                  <td className="px-6 py-4 text-sm text-[var(--text-muted)]">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    {item.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="success">{item.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Cancel */}
      <div className="text-center">
        <button className="text-sm text-[var(--text-muted)] hover:text-[var(--error)] transition-colors cursor-pointer">
          Cancel subscription
        </button>
      </div>
    </div>
  );
}

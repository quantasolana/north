import {
  Receipt,
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Link2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getGreeting } from "@/lib/utils";

const STATS = [
  {
    label: "Receipts Processed",
    value: "47",
    change: "+12",
    trend: "up" as const,
    icon: Receipt,
  },
  {
    label: "Auto-Posted",
    value: "38",
    change: "+8",
    trend: "up" as const,
    icon: CheckCircle2,
  },
  {
    label: "Flagged for Review",
    value: "9",
    change: "-3",
    trend: "down" as const,
    icon: AlertTriangle,
  },
  {
    label: "Hours Saved",
    value: "2.3h",
    change: "+0.4h",
    trend: "up" as const,
    icon: Clock,
  },
];

const ACTIVITY = [
  {
    id: 1,
    action: "Receipt scanned and categorized",
    detail: "Office Depot - $247.83 → Office Supplies",
    time: "2 min ago",
    status: "success" as const,
  },
  {
    id: 2,
    action: "Bank reconciliation completed",
    detail: "Chase Business Checking - 14 transactions matched",
    time: "8 min ago",
    status: "success" as const,
  },
  {
    id: 3,
    action: "Journal entry flagged",
    detail: "Duplicate vendor payment detected - $1,250.00",
    time: "23 min ago",
    status: "warning" as const,
  },
  {
    id: 4,
    action: "Invoice processed",
    detail: "INV-2024-0891 from Acme Corp - $3,400.00",
    time: "1 hour ago",
    status: "success" as const,
  },
  {
    id: 5,
    action: "QuickBooks sync failed",
    detail: "Rate limit exceeded - will retry in 5 min",
    time: "1 hour ago",
    status: "error" as const,
  },
  {
    id: 6,
    action: "Monthly close checklist started",
    detail: "March 2026 - 4 of 12 tasks completed",
    time: "3 hours ago",
    status: "info" as const,
  },
];

const INTEGRATIONS = [
  { name: "QuickBooks Online", isConnected: true, lastSync: "2 min ago" },
  { name: "Stripe", isConnected: true, lastSync: "14 min ago" },
  { name: "Plaid", isConnected: false, lastSync: "Never" },
];

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    success: "bg-green-400",
    warning: "bg-yellow-400",
    error: "bg-red-400",
    info: "bg-blue-400",
  };
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${colors[status] ?? colors.info}`}
    />
  );
}

export default function DashboardPage() {
  const greeting = getGreeting();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          {greeting}, Jordan
        </h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Here&apos;s what your AI agents have been up to today.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ label, value, change, trend, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">
                  {label}
                </p>
                <p className="text-2xl font-bold text-white">{value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3 text-green-400" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-green-400" />
                  )}
                  <span className="text-xs text-green-400">{change}</span>
                  <span className="text-xs text-[var(--text-muted)]">
                    vs yesterday
                  </span>
                </div>
              </div>
              <div className="rounded-lg bg-[var(--cyan-muted)] p-2.5">
                <Icon className="h-5 w-5 text-[var(--cyan)]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity feed */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[var(--cyan)]" />
              Recent Agent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ACTIVITY.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 rounded-lg p-3 hover:bg-[var(--surface-hover)] transition-colors"
                >
                  <StatusDot status={item.status} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white">
                      {item.action}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 truncate">
                      {item.detail}
                    </p>
                  </div>
                  <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right column */}
        <div className="space-y-6">
          {/* Cost tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[var(--cyan)]" />
                Cost Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    AI Spend This Month
                  </p>
                  <p className="text-xl font-bold text-white">$12.40</p>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)]">
                    Billable Hours Saved
                  </p>
                  <p className="text-xl font-bold text-green-400">$1,840</p>
                </div>
                <div className="h-px bg-[var(--border)]" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">ROI</span>
                  <Badge variant="success">148x return</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integration status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-[var(--cyan)]" />
                Integrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {INTEGRATIONS.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm text-white">{integration.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">
                        Last sync: {integration.lastSync}
                      </p>
                    </div>
                    <Badge
                      variant={
                        integration.isConnected ? "success" : "warning"
                      }
                    >
                      {integration.isConnected ? "Connected" : "Disconnected"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

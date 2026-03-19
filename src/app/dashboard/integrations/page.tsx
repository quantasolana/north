"use client";

import {
  Link2,
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ArrowRightLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const INTEGRATIONS = [
  {
    id: "quickbooks",
    name: "QuickBooks Online",
    description:
      "Sync chart of accounts, post journal entries, and reconcile transactions in real time.",
    isConnected: true,
    lastSync: "March 19, 2026 at 10:42 AM",
    syncedItems: "2,847 transactions",
    connectUrl: "/api/quickbooks/connect",
  },
  {
    id: "stripe",
    name: "Stripe",
    description:
      "Import payment data, reconcile payouts, and automate revenue recognition entries.",
    isConnected: true,
    lastSync: "March 19, 2026 at 10:28 AM",
    syncedItems: "1,204 payments",
    connectUrl: "/api/stripe/connect",
  },
  {
    id: "plaid",
    name: "Plaid",
    description:
      "Connect bank accounts for automated transaction feeds and real-time balance monitoring.",
    isConnected: false,
    lastSync: "Never",
    syncedItems: "0 accounts",
    connectUrl: "/api/plaid/connect",
  },
  {
    id: "slack",
    name: "Slack",
    description:
      "Get real-time notifications for flagged transactions, approval requests, and close status updates.",
    isConnected: false,
    lastSync: "Never",
    syncedItems: "0 channels",
    connectUrl: "/api/slack/connect",
  },
];

const SYNC_LOG = [
  {
    id: 1,
    integration: "QuickBooks",
    action: "Synced 14 journal entries",
    status: "success" as const,
    time: "10:42 AM",
  },
  {
    id: 2,
    integration: "Stripe",
    action: "Imported 3 new payments",
    status: "success" as const,
    time: "10:28 AM",
  },
  {
    id: 3,
    integration: "QuickBooks",
    action: "Chart of accounts updated",
    status: "success" as const,
    time: "9:15 AM",
  },
  {
    id: 4,
    integration: "Stripe",
    action: "Payout reconciliation failed - retrying",
    status: "error" as const,
    time: "8:50 AM",
  },
  {
    id: 5,
    integration: "QuickBooks",
    action: "Synced 28 transactions",
    status: "success" as const,
    time: "8:30 AM",
  },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Integrations</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Connect your financial tools to automate data flow and eliminate manual
          entry.
        </p>
      </div>

      {/* Integration cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INTEGRATIONS.map((integration) => (
          <Card
            key={integration.id}
            className="hover:border-[var(--border-cyan)] transition-colors"
          >
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[var(--cyan-muted)] p-2.5">
                    <Link2 className="h-5 w-5 text-[var(--cyan)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {integration.name}
                    </h3>
                    <Badge
                      variant={
                        integration.isConnected ? "success" : "warning"
                      }
                      className="mt-1"
                    >
                      {integration.isConnected ? "Connected" : "Not connected"}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {integration.description}
              </p>

              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border)]">
                <span>Last sync: {integration.lastSync}</span>
                <span>{integration.syncedItems}</span>
              </div>

              <div className="flex gap-2">
                {integration.isConnected ? (
                  <>
                    <Button variant="outline" size="sm" className="flex-1">
                      <RefreshCw className="h-3 w-3" />
                      Sync Now
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3 w-3" />
                      Settings
                    </Button>
                  </>
                ) : (
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() =>
                      (window.location.href = integration.connectUrl)
                    }
                  >
                    Connect
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sync log */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4 text-[var(--cyan)]" />
            Recent Sync Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {SYNC_LOG.map((log) => (
              <div
                key={log.id}
                className="flex items-center gap-3 rounded-lg p-3 hover:bg-[var(--surface-hover)] transition-colors"
              >
                {log.status === "success" ? (
                  <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white">{log.action}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {log.integration}
                  </p>
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  {log.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

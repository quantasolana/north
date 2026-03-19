"use client";

import { useState } from "react";
import { Copy, RefreshCw, AlertTriangle, Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NOTIFICATIONS = [
  {
    id: "workflow-complete",
    label: "Workflow completions",
    description: "Get notified when an automated workflow finishes",
    enabled: true,
  },
  {
    id: "flagged-items",
    label: "Flagged items",
    description: "Alerts when transactions need manual review",
    enabled: true,
  },
  {
    id: "sync-errors",
    label: "Sync errors",
    description: "Notifications for failed integration syncs",
    enabled: true,
  },
  {
    id: "weekly-digest",
    label: "Weekly digest",
    description: "Summary of agent activity and cost savings",
    enabled: false,
  },
  {
    id: "product-updates",
    label: "Product updates",
    description: "New features and platform announcements",
    enabled: false,
  },
];

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const apiKey = "nrth_live_sk_a8f2c3d4e5f6a7b8c9d0e1f2a3b4c5d6";
  const maskedKey = "nrth_live_sk_••••••••••••••••••••d6";

  function toggleNotification(id: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  }

  function copyApiKey() {
    navigator.clipboard.writeText(apiKey);
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="text-sm text-[var(--text-muted)] mt-1">
          Manage your account, notifications, and API access.
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Your personal information and account details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              id="first-name"
              label="First name"
              defaultValue="Jordan"
            />
            <Input
              id="last-name"
              label="Last name"
              defaultValue="Davis"
            />
          </div>
          <Input
            id="email"
            label="Email"
            type="email"
            defaultValue="jordan@northapp.io"
          />
          <Input
            id="company"
            label="Company"
            defaultValue="Davis & Associates CPA"
          />
          <div className="flex justify-end">
            <Button size="sm">Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose what you want to be notified about
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-center justify-between py-2"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {notif.label}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {notif.description}
                  </p>
                </div>
                <button
                  onClick={() => toggleNotification(notif.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                    notif.enabled
                      ? "bg-[var(--cyan)]"
                      : "bg-[var(--surface)]"
                  }`}
                  role="switch"
                  aria-checked={notif.enabled}
                  aria-label={`Toggle ${notif.label}`}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                      notif.enabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Keys */}
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Use your API key to integrate NORTH with custom applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-sm text-[var(--text-secondary)]">
              {isKeyVisible ? apiKey : maskedKey}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsKeyVisible(!isKeyVisible)}
              aria-label={isKeyVisible ? "Hide API key" : "Show API key"}
            >
              {isKeyVisible ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
            <Button variant="ghost" size="sm" onClick={copyApiKey}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-3 w-3" />
            Regenerate Key
          </Button>
        </CardContent>
      </Card>

      {/* Danger zone */}
      <Card className="border-red-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[var(--error)]">
            <AlertTriangle className="h-4 w-4" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">Delete account</p>
              <p className="text-xs text-[var(--text-muted)]">
                Permanently delete your account and all associated data. This
                action cannot be undone.
              </p>
            </div>
            <Button variant="destructive" size="sm">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

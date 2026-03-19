"use client";

import Link from "next/link";
import {
  Compass,
  ScanLine,
  Landmark,
  BookOpen,
  FileText,
  Shield,
  RefreshCw,
  ArrowRight,
  Play,
  Check,
  Zap,
  Clock,
  TrendingUp,
  Users,
  ChevronRight,
  Receipt,
  ClipboardCheck,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/* ─── Navigation ─── */

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
] as const;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--charcoal-dark)]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Compass className="h-7 w-7 text-[var(--cyan)]" />
          <span className="text-lg font-bold tracking-wider text-white">
            NORTH
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--text-muted)] hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">Start Free</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--charcoal-dark)] px-6 py-4 space-y-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block text-sm text-[var(--text-muted)] hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/signup">Start Free</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-4xl mt-16">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[var(--cyan)]/10 to-transparent rounded-2xl blur-2xl" />

      <div className="relative rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/60" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <span className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-[var(--text-muted)]">
              app.northhq.com/dashboard
            </span>
          </div>
        </div>

        {/* Mock content */}
        <div className="p-6 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Receipts", value: "47" },
              { label: "Auto-Posted", value: "38" },
              { label: "Flagged", value: "9" },
              { label: "Saved", value: "2.3h" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3"
              >
                <p className="text-[10px] text-[var(--text-muted)]">
                  {stat.label}
                </p>
                <p className="text-lg font-bold text-white mt-0.5">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Activity lines */}
          <div className="space-y-2">
            {[
              {
                text: "Receipt scanned - Office Depot $247.83",
                color: "bg-green-400",
              },
              {
                text: "Bank rec completed - 14 txns matched",
                color: "bg-green-400",
              },
              {
                text: "Duplicate payment flagged - $1,250",
                color: "bg-yellow-400",
              },
            ].map((line) => (
              <div
                key={line.text}
                className="flex items-center gap-2 rounded-lg bg-[var(--surface)] px-3 py-2"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${line.color}`}
                />
                <span className="text-xs text-[var(--text-secondary)]">
                  {line.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[var(--cyan)]/5 blur-3xl" />
      <div className="absolute top-40 right-1/4 h-64 w-64 rounded-full bg-[var(--cyan)]/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-cyan)] bg-[var(--cyan-muted)] px-4 py-1.5 mb-6">
          <Zap className="h-3.5 w-3.5 text-[var(--cyan)]" />
          <span className="text-xs font-medium text-[var(--cyan)]">
            AI-powered accounting automation
          </span>
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
          Accounting that never{" "}
          <span className="text-[var(--cyan)]">loses direction</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--text-secondary)] leading-relaxed sm:text-lg">
          NORTH deploys AI agents that process receipts, reconcile bank
          statements, generate journal entries, and sync to QuickBooks --
          all while you focus on what matters.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" asChild>
            <Link href="/auth/signup">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Play className="h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

/* ─── Problem / Solution ─── */

function ProblemSolution() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Old way */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--error)] mb-4">
              The old way
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Manual data entry is{" "}
              <span className="text-[var(--error)]">broken</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Hours wasted scanning and categorizing receipts by hand",
                "Bank reconciliation takes days, not minutes",
                "Journal entries riddled with human error",
                "Month-end close drags on for weeks",
                "Zero visibility into real-time financial state",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--text-muted)]"
                >
                  <X className="h-4 w-4 text-[var(--error)] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* NORTH way */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--cyan)] mb-4">
              The NORTH way
            </p>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              AI agents that{" "}
              <span className="text-[var(--cyan)]">never sleep</span>
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Receipts auto-scanned, categorized, and posted in seconds",
                "Continuous bank reconciliation with anomaly detection",
                "Journal entries generated with audit-ready documentation",
                "Monthly close completed in hours, not weeks",
                "Real-time dashboards with full financial visibility",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <Check className="h-4 w-4 text-[var(--cyan)] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */

const FEATURES = [
  {
    icon: ScanLine,
    title: "Receipt AI",
    description:
      "Drop a receipt, get a categorized expense. OCR + LLM extraction handles any format -- photos, PDFs, forwarded emails.",
  },
  {
    icon: Landmark,
    title: "Bank Reconciliation",
    description:
      "Connect via Plaid and let AI match transactions to ledger entries automatically. Anomalies get flagged, not missed.",
  },
  {
    icon: BookOpen,
    title: "Journal Entries",
    description:
      "Generate recurring, adjusting, and accrual entries with proper documentation. Every entry has an audit trail.",
  },
  {
    icon: FileText,
    title: "Invoice Processing",
    description:
      "Capture invoice data, match to purchase orders, route for approval, and schedule payments -- zero manual steps.",
  },
  {
    icon: Shield,
    title: "Audit Trail",
    description:
      "Every AI action is logged with timestamps, confidence scores, and source documents. SOC 2 compliant by design.",
  },
  {
    icon: RefreshCw,
    title: "QuickBooks Sync",
    description:
      "Two-way sync with QuickBooks Online. Chart of accounts, journal entries, invoices -- always in perfect harmony.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--cyan)] mb-3">
            Features
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Everything your accounting team needs
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Six core capabilities that replace hours of manual work with
            seconds of AI-powered automation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl p-6 hover:border-[var(--border-cyan)] transition-all duration-300"
            >
              <div className="rounded-lg bg-[var(--cyan-muted)] p-2.5 w-fit mb-4 group-hover:bg-[var(--cyan)]/20 transition-colors">
                <Icon className="h-5 w-5 text-[var(--cyan)]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Workflow Templates ─── */

const TEMPLATES = [
  {
    icon: ScanLine,
    name: "Receipt Scanning",
    description: "Auto-extract, categorize, and post expense receipts",
    runs: "1,240",
  },
  {
    icon: Landmark,
    name: "Bank Reconciliation",
    description: "Match bank transactions to ledger entries daily",
    runs: "380",
  },
  {
    icon: FileText,
    name: "Invoice Processing",
    description: "Capture, match, approve, and schedule payments",
    runs: "560",
  },
  {
    icon: BookOpen,
    name: "Journal Entries",
    description: "Generate recurring and adjusting entries with audit trail",
    runs: "210",
  },
  {
    icon: ClipboardCheck,
    name: "Monthly Close",
    description: "Orchestrate month-end with automated task tracking",
    runs: "12",
  },
];

function Templates() {
  return (
    <section id="templates" className="py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--cyan)] mb-3">
            Templates
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Start automating in minutes
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Pre-built workflow templates based on how real accounting firms
            operate. Customize or use as-is.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TEMPLATES.map(({ icon: Icon, name, description, runs }) => (
            <div
              key={name}
              className="group rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-xl p-5 hover:border-[var(--border-cyan)] transition-all duration-300 flex flex-col"
            >
              <div className="rounded-lg bg-[var(--cyan-muted)] p-2.5 w-fit mb-3">
                <Icon className="h-5 w-5 text-[var(--cyan)]" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{name}</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed flex-1">
                {description}
              </p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--border)]">
                <span className="text-xs text-[var(--text-muted)]">
                  {runs} runs/mo
                </span>
                <ChevronRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--cyan)] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */

const PRICING_TIERS = [
  {
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
    cta: "Get Started",
    isPopular: false,
  },
  {
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
    cta: "Start Free Trial",
    isPopular: true,
  },
  {
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
    cta: "Start Free Trial",
    isPopular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--cyan)] mb-3">
            Pricing
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
            Start free. Upgrade when you&apos;re ready. No hidden fees, no
            long-term contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-6 flex flex-col ${
                tier.isPopular
                  ? "border-[var(--border-cyan)] bg-[var(--glass)] ring-1 ring-[var(--cyan)]/20 relative"
                  : "border-[var(--glass-border)] bg-[var(--glass)]"
              } backdrop-blur-xl`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[var(--cyan)] px-3 py-1 text-xs font-semibold text-[var(--charcoal-dark)]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">
                  ${tier.price}
                </span>
                <span className="text-sm text-[var(--text-muted)]">
                  {tier.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {tier.features.map((feature) => (
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
                variant={tier.isPopular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link href="/auth/signup">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof / Stats ─── */

const SOCIAL_STATS = [
  { value: "2,400+", label: "Accounting teams", icon: Users },
  { value: "1.2M", label: "Receipts processed", icon: Receipt },
  { value: "18,000h", label: "Hours saved monthly", icon: Clock },
  { value: "99.7%", label: "Accuracy rate", icon: TrendingUp },
];

function SocialProof() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trusted by modern accounting teams
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center rounded-lg bg-[var(--cyan-muted)] p-3 mb-4">
                <Icon className="h-6 w-6 text-[var(--cyan)]" />
              </div>
              <p className="text-3xl font-bold text-white">{value}</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */

function CtaBanner() {
  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to point your accounting{" "}
          <span className="text-[var(--cyan)]">NORTH</span>?
        </h2>
        <p className="mt-4 text-[var(--text-muted)]">
          Join 2,400+ teams automating their accounting workflows. Start free,
          no credit card required.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" asChild>
            <Link href="/auth/signup">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */

const FOOTER_LINKS = {
  Product: ["Features", "Templates", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Status", "Support"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-6 w-6 text-[var(--cyan)]" />
              <span className="text-base font-bold tracking-wider text-white">
                NORTH
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              AI-powered accounting automation for modern teams.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-[var(--text-muted)] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} NORTH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs text-[var(--text-muted)] hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Templates />
        <Pricing />
        <SocialProof />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

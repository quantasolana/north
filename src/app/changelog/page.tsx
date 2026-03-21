import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Changelog - North",
  description: "See what's new in North accounting automation.",
};

const releases = [
  {
    version: "v0.3.0",
    date: "March 2026",
    changes: [
      "QuickBooks sync improvements with real-time updates",
      "AI categorization accuracy improved by 15%",
      "New dashboard charts for cash flow and expense trends",
      "Bulk transaction approval interface",
      "Performance optimizations for large datasets",
    ],
  },
  {
    version: "v0.2.0",
    date: "February 2026",
    changes: [
      "Billing workflow automation",
      "Stripe integration for payment processing",
      "Invoice reconciliation with AI matching",
      "Custom categorization rules",
      "Export reports to PDF and Excel",
    ],
  },
  {
    version: "v0.1.0",
    date: "January 2026",
    changes: [
      "Initial public launch",
      "QuickBooks Online connection",
      "AI-powered transaction categorization with Claude",
      "Dashboard with financial overview",
      "Basic reporting (P&L, Balance Sheet)",
      "Email notifications for new transactions",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Changelog
            </h1>
            <p className="text-lg text-[var(--cream-dim)]">
              What's new in North
            </p>
          </div>

          <div className="space-y-12">
            {releases.map((release, index) => (
              <div
                key={release.version}
                className="relative"
              >
                {index !== releases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-[var(--border)]" />
                )}

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--coral-glow)] border-2 border-[var(--coral)] flex items-center justify-center relative z-10">
                    <div className="w-2 h-2 rounded-full bg-[var(--coral)]" />
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-[var(--coral)] bg-[var(--coral-glow)] rounded-full">
                          {release.version}
                        </span>
                        <span className="text-sm text-[var(--cream-muted)]">
                          {release.date}
                        </span>
                      </div>
                    </div>

                    <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                      <ul className="space-y-3">
                        {release.changes.map((change) => (
                          <li
                            key={change}
                            className="flex items-start gap-3 text-[var(--cream-dim)]"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--coral)] mt-2" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center py-12 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
            <p className="text-[var(--cream-muted)] mb-4">
              Want to stay updated on new features?
            </p>
            <p className="text-sm text-[var(--cream-muted)]">
              Follow us on Twitter or subscribe to our newsletter (coming soon)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

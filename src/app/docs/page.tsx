import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { BookOpen, Plug, Code, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation - North",
  description: "Get started with North, integrate with QuickBooks, and explore our API reference.",
};

export default function DocsPage() {
  const sidebarSections = [
    { title: "Getting Started", icon: BookOpen, href: "#getting-started" },
    { title: "Integrations", icon: Plug, href: "#integrations" },
    { title: "API Reference", icon: Code, href: "#api" },
    { title: "Account & Billing", icon: CreditCard, href: "#billing" },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <div className="px-6 py-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <aside className="md:w-64 flex-shrink-0">
              <div className="md:sticky md:top-24">
                <h2 className="text-sm font-semibold text-[var(--cream)] uppercase tracking-wider mb-4">
                  Documentation
                </h2>
                <nav className="space-y-1">
                  {sidebarSections.map((section) => (
                    <a
                      key={section.href}
                      href={section.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--cream-dim)] hover:text-[var(--cream)] hover:bg-[var(--surface)] transition-colors duration-200"
                    >
                      <section.icon className="h-4 w-4" />
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1 max-w-3xl">
              <section id="getting-started" className="mb-16">
                <h1 className="text-4xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-8">
                  Getting Started
                </h1>

                <div className="space-y-8">
                  <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--coral-glow)] flex items-center justify-center text-[var(--coral)] font-semibold">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                          Create your account
                        </h3>
                        <p className="text-[var(--cream-dim)] leading-relaxed">
                          Sign up at northapp.io and complete the onboarding flow. You'll need your business details and a valid email address.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--coral-glow)] flex items-center justify-center text-[var(--coral)] font-semibold">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                          Connect QuickBooks
                        </h3>
                        <p className="text-[var(--cream-dim)] leading-relaxed">
                          Navigate to Settings → Integrations and click "Connect QuickBooks Online". You'll be redirected to authorize access to your QuickBooks company.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--coral-glow)] flex items-center justify-center text-[var(--coral)] font-semibold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                          Configure your workflows
                        </h3>
                        <p className="text-[var(--cream-dim)] leading-relaxed">
                          Set up automation rules, approval thresholds, and notification preferences. North will learn from your patterns over time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--coral-glow)] flex items-center justify-center text-[var(--coral)] font-semibold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                          Review and approve AI categorizations
                        </h3>
                        <p className="text-[var(--cream-dim)] leading-relaxed">
                          North will automatically categorize new transactions. Review them in your dashboard and approve or adjust as needed. The AI gets smarter with every correction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="integrations" className="mb-16">
                <h2 className="text-3xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
                  Integrations
                </h2>
                <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                  <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
                    QuickBooks Online
                  </h3>
                  <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
                    Our QuickBooks integration syncs transactions, customers, vendors, and accounts in real-time. Changes made in North are automatically reflected in QuickBooks.
                  </p>
                  <p className="text-sm text-[var(--cream-muted)]">
                    Xero integration coming Q2 2026.
                  </p>
                </div>
              </section>

              <section id="api" className="mb-16">
                <h2 className="text-3xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
                  API Reference
                </h2>
                <div className="border border-[var(--border)] rounded-xl p-8 bg-[var(--surface)] text-center">
                  <Code className="h-12 w-12 text-[var(--coral)] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
                    Coming Soon
                  </h3>
                  <p className="text-[var(--cream-dim)] mb-6">
                    The North API is coming soon. Join the waitlist to get early access.
                  </p>
                  <form className="flex gap-2 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2 rounded-full bg-[var(--charcoal-light)] border border-[var(--border)] text-[var(--cream)] placeholder:text-[var(--cream-muted)] focus:outline-none focus:border-[var(--border-coral)]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-full bg-[var(--coral)] text-white font-medium hover:bg-[var(--coral-dim)] transition-colors duration-200"
                    >
                      Join Waitlist
                    </button>
                  </form>
                </div>
              </section>

              <section id="billing" className="mb-16">
                <h2 className="text-3xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
                  Account & Billing
                </h2>
                <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                  <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
                    Managing Your Subscription
                  </h3>
                  <p className="text-[var(--cream-dim)] leading-relaxed">
                    You can upgrade, downgrade, or cancel your subscription at any time from Settings → Billing. All plans include a 14-day free trial. No credit card required to start.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

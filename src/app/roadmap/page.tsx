import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Roadmap - North",
  description: "See what's next for North accounting automation.",
};

const roadmapItems = {
  now: [
    {
      title: "Multi-company support",
      description: "Manage multiple businesses from a single North account with separate workflows and settings.",
    },
    {
      title: "Bulk transaction review UI",
      description: "Review and approve hundreds of transactions at once with keyboard shortcuts and smart filtering.",
    },
    {
      title: "Mobile app (beta)",
      description: "iOS and Android apps for on-the-go transaction approval and financial insights.",
    },
  ],
  next: [
    {
      title: "Xero integration",
      description: "Full integration with Xero accounting software, following QuickBooks architecture.",
    },
    {
      title: "Automated tax prep export",
      description: "One-click export of tax-ready reports formatted for your accountant or tax software.",
    },
    {
      title: "Team collaboration features",
      description: "Multiple user accounts, role-based permissions, and approval workflows for teams.",
    },
  ],
  later: [
    {
      title: "Direct bank feeds",
      description: "Connect directly to your bank via Plaid for real-time transaction imports without QuickBooks.",
    },
    {
      title: "Custom AI workflows",
      description: "Train custom AI models on your specific business patterns and create automated approval rules.",
    },
    {
      title: "White-label offering",
      description: "Rebrand North as your own accounting automation solution for accountants and bookkeepers.",
    },
  ],
};

export default function RoadmapPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Roadmap
            </h1>
            <p className="text-lg text-[var(--cream-dim)] mb-4">
              Where North is headed
            </p>
            <p className="text-sm text-[var(--cream-muted)]">
              This is our public roadmap. Priorities may shift based on user feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--coral-glow)] border border-[var(--border-coral)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--coral)] animate-pulse" />
                  <span className="text-sm font-semibold text-[var(--coral)]">
                    Now (In Progress)
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {roadmapItems.now.map((item) => (
                  <div
                    key={item.title}
                    className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]"
                  >
                    <h3 className="text-lg font-semibold text-[var(--cream)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--cream-dim)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--cream-dim)]" />
                  <span className="text-sm font-semibold text-[var(--cream-dim)]">
                    Next (Planned)
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {roadmapItems.next.map((item) => (
                  <div
                    key={item.title}
                    className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]"
                  >
                    <h3 className="text-lg font-semibold text-[var(--cream)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--cream-dim)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--cream-muted)]" />
                  <span className="text-sm font-semibold text-[var(--cream-muted)]">
                    Later (Exploring)
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                {roadmapItems.later.map((item) => (
                  <div
                    key={item.title}
                    className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]"
                  >
                    <h3 className="text-lg font-semibold text-[var(--cream)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--cream-dim)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto py-12 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Have a feature request?
            </h2>
            <p className="text-[var(--cream-dim)] mb-6">
              We'd love to hear what you need. Your feedback shapes our roadmap.
            </p>
            <a
              href="mailto:feedback@northapp.io"
              className="inline-block px-6 py-3 rounded-full bg-[var(--coral)] text-white font-medium hover:bg-[var(--coral-dim)] transition-colors duration-200"
            >
              Send Feedback
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

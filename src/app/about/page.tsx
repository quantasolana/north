import { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { Target, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About North - AI-Powered Accounting Automation",
  description: "Learn about North's mission to revolutionize accounting with Claude AI. We automate transaction categorization, reconciliation, and report generation.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "AI-powered categorization with human oversight. Every transaction is reviewed before it hits your books.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "No hidden fees, no surprise charges. You see exactly what the AI is doing and can override anything.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Tasks that took hours now take minutes. Spend less time on bookkeeping, more time on strategy.",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Accounting that never loses direction.
            </h1>
            <p className="text-lg text-[var(--cream-dim)] leading-relaxed">
              North uses Claude AI to automate the tedious parts of accounting, so you can focus on decisions that actually matter.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-24">
            <div className="border border-[var(--border)] rounded-2xl p-8 md:p-12 bg-[var(--surface)]">
              <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
                Our Mission
              </h2>
              <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
                We believe accounting software should work for your business, not the other way around. North uses Claude AI to automate the tedious parts — transaction categorization, reconciliation, report generation — so you can focus on decisions that matter.
              </p>
              <p className="text-[var(--cream-dim)] leading-relaxed">
                Traditional accounting tools force you to adapt to their workflows. North adapts to yours. It learns from your business, understands your patterns, and handles the grunt work while you maintain full control.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="border border-[var(--border)] rounded-2xl p-8 bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-colors duration-200"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-[var(--coral-glow)] flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-[var(--coral)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--cream-dim)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-24">
            <div className="border-l-4 border-[var(--coral)] pl-8 py-4">
              <p className="text-xl text-[var(--cream-dim)] leading-relaxed italic mb-4">
                Built by a solo founder who got tired of spending weekends on bookkeeping instead of building.
              </p>
              <p className="text-sm text-[var(--cream-muted)]">— The Founder</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <h2 className="text-2xl font-semibold text-[var(--cream)]">
                Ready to automate your accounting?
              </h2>
              <Link
                href="/auth/signup"
                className="px-8 py-3 rounded-full bg-[var(--coral)] text-white font-medium hover:bg-[var(--coral-dim)] transition-colors duration-200"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { Lock, Shield, Database, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Security - North",
  description: "How North protects your financial data with enterprise-grade security.",
};

export default function SecurityPage() {
  const pillars = [
    {
      icon: Lock,
      title: "Encryption",
      description: "All data encrypted at rest (AES-256) and in transit (TLS 1.3). Your financial information is protected with bank-level encryption.",
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Role-based permissions, two-factor authentication support, and comprehensive audit logs for all data access.",
    },
    {
      icon: Database,
      title: "Data Isolation",
      description: "Your data is isolated in secure databases and never used to train AI models without your explicit consent.",
    },
    {
      icon: FileCheck,
      title: "Compliance",
      description: "SOC 2 Type II certification in progress. Fully GDPR compliant for EU/EEA customers.",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Security
            </h1>
            <p className="text-lg text-[var(--cream-dim)] leading-relaxed">
              We take the security of your financial data seriously. Here's how we protect it.
            </p>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] text-center mb-12">
              Security Pillars
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="border border-[var(--border)] rounded-2xl p-8 bg-[var(--surface)]"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-[var(--coral-glow)] flex items-center justify-center">
                    <pillar.icon className="h-6 w-6 text-[var(--coral)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--cream-dim)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-24">
            <div className="border border-[var(--border)] rounded-2xl p-8 md:p-12 bg-[var(--surface)]">
              <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
                Infrastructure
              </h2>
              <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
                North is hosted on Supabase, which runs on AWS infrastructure with enterprise-grade security and 99.9% uptime SLA. All data is stored in SOC 2 compliant data centers.
              </p>
              <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
                We use Anthropic's Claude AI for transaction categorization. Your financial data is processed securely and is not used to train AI models without your explicit permission.
              </p>
              <p className="text-[var(--cream-dim)] leading-relaxed">
                All integrations with third-party services (QuickBooks, Stripe) use OAuth 2.0 authentication and are secured with industry-standard protocols.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-24">
            <div className="border border-[var(--border)] rounded-2xl p-8 md:p-12 bg-[var(--surface)]">
              <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
                Security Practices
              </h2>
              <ul className="space-y-3 text-[var(--cream-dim)]">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--coral)] mt-2" />
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--coral)] mt-2" />
                  <span>Automated vulnerability scanning and patch management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--coral)] mt-2" />
                  <span>Employee background checks and security training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--coral)] mt-2" />
                  <span>Incident response plan and 24/7 monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--coral)] mt-2" />
                  <span>Regular data backups with encryption</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border border-[var(--border)] rounded-2xl p-8 md:p-12 bg-[var(--surface)]">
              <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
                Vulnerability Disclosure
              </h2>
              <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
                If you discover a security vulnerability in North, we ask that you report it responsibly. Please do not publicly disclose the issue until we have had time to address it.
              </p>
              <p className="text-[var(--cream-dim)] leading-relaxed">
                Report security issues to{" "}
                <a
                  href="mailto:security@northapp.io"
                  className="text-[var(--coral)] hover:underline"
                >
                  security@northapp.io
                </a>
                . We aim to respond within 48 hours and will keep you updated on our progress.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "GDPR Compliance - North",
  description: "How North complies with GDPR for EU/EEA users.",
};

export default function GDPRPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <article className="px-6 py-24 max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-5xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-4">
            GDPR Compliance
          </h1>
          <p className="text-sm text-[var(--cream-muted)] mb-12">
            Last updated: March 1, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Our Commitment
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              North is committed to GDPR (General Data Protection Regulation) compliance for all EU/EEA users. We respect your data rights and have implemented appropriate technical and organizational measures to protect your personal data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Your Rights Under GDPR
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              As a data subject under GDPR, you have the following rights:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                  Right to Access
                </h3>
                <p className="text-[var(--cream-dim)] leading-relaxed">
                  You can request a copy of all personal data we hold about you. We will provide this information in a structured, commonly used, and machine-readable format.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                  Right to Rectification
                </h3>
                <p className="text-[var(--cream-dim)] leading-relaxed">
                  You can request correction of inaccurate or incomplete personal data. We will update your information promptly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                  Right to Erasure
                </h3>
                <p className="text-[var(--cream-dim)] leading-relaxed">
                  You can request deletion of your personal data. We will delete your data within 30 days unless we are legally required to retain it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                  Right to Data Portability
                </h3>
                <p className="text-[var(--cream-dim)] leading-relaxed">
                  You can request export of your data in a portable format to transfer to another service provider.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                  Right to Restriction of Processing
                </h3>
                <p className="text-[var(--cream-dim)] leading-relaxed">
                  You can request that we limit how we use your personal data in certain circumstances.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--cream)] mb-2">
                  Right to Object
                </h3>
                <p className="text-[var(--cream-dim)] leading-relaxed">
                  You can object to processing of your personal data for direct marketing or other purposes based on legitimate interests.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Data Processing
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We process your personal data as a data controller for our own business purposes (providing the service, billing, support) and as a data processor when handling your QuickBooks financial data.
            </p>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              Our data processing activities are documented and comply with GDPR Article 30 requirements. We maintain records of processing activities and regularly review our data protection practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Legal Basis for Processing
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We process your personal data based on:
            </p>
            <ul className="list-disc pl-6 text-[var(--cream-dim)] space-y-2 mb-4">
              <li><strong>Contract:</strong> To provide our accounting automation service</li>
              <li><strong>Legitimate Interest:</strong> To improve our service and prevent fraud</li>
              <li><strong>Consent:</strong> For marketing communications (you can opt out at any time)</li>
              <li><strong>Legal Obligation:</strong> To comply with tax and financial regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Data Transfers
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              Some of our service providers are located outside the EU/EEA, including Anthropic (USA) for AI processing. We ensure that all international data transfers are protected by:
            </p>
            <ul className="list-disc pl-6 text-[var(--cream-dim)] space-y-2 mb-4">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequate safeguards as required by GDPR Article 46</li>
              <li>Privacy Shield certification where applicable</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Data Protection Officer
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              For questions about GDPR compliance or to exercise your data rights, contact our Data Protection Officer at{" "}
              <a href="mailto:gdpr@northapp.io" className="text-[var(--coral)] hover:underline">
                gdpr@northapp.io
              </a>
            </p>
            <p className="text-[var(--cream-dim)] leading-relaxed">
              We will respond to your request within 30 days as required by GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Related Policies
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              For more information about how we handle your data, please see our{" "}
              <Link href="/privacy" className="text-[var(--coral)] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - North",
  description: "How North collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <article className="px-6 py-24 max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-5xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--cream-muted)] mb-12">
            Last updated: March 1, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Introduction
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              North ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our accounting automation service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
              Account Information
            </h3>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              When you create an account, we collect your name, email address, company name, and billing information.
            </p>
            <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
              QuickBooks Data
            </h3>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              When you connect QuickBooks, we access and store transaction data, customer and vendor information, chart of accounts, and financial reports necessary to provide our service.
            </p>
            <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
              Usage Data
            </h3>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We collect information about how you interact with our service, including log data, device information, and feature usage statistics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-[var(--cream-dim)] space-y-2 mb-4">
              <li>Provide and maintain our accounting automation service</li>
              <li>Process transactions and categorize them using AI</li>
              <li>Improve our AI models and service quality</li>
              <li>Send you service updates, security alerts, and support messages</li>
              <li>Process billing and payments</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Data Sharing
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We share your data with:
            </p>
            <ul className="list-disc pl-6 text-[var(--cream-dim)] space-y-2 mb-4">
              <li><strong>Supabase:</strong> For secure data storage and authentication</li>
              <li><strong>Anthropic:</strong> For AI-powered transaction categorization using Claude</li>
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>QuickBooks:</strong> To sync data with your accounting system</li>
            </ul>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We do not sell your data to third parties. We only share data with service providers necessary to operate our service, and they are bound by confidentiality agreements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Data Retention
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We retain your data for as long as your account is active or as needed to provide our service. If you delete your account, we will delete your data within 30 days, except where we are required to retain it for legal or regulatory purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Your Rights
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[var(--cream-dim)] space-y-2 mb-4">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of marketing communications</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section className="mb-12" id="cookies">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Cookies
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We use essential cookies to maintain your session and authentication. We also use analytics cookies to understand how you use our service. You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Security
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We implement industry-standard security measures to protect your data, including encryption at rest (AES-256) and in transit (TLS 1.3), regular security audits, and access controls.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Changes to This Policy
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@northapp.io" className="text-[var(--coral)] hover:underline">
                privacy@northapp.io
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

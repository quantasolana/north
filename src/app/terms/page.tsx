import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - North",
  description: "Terms and conditions for using North's accounting automation service.",
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <article className="px-6 py-24 max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-5xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[var(--cream-muted)] mb-12">
            Last updated: March 1, 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              By accessing or using North's service, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Service Description
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              North provides AI-powered accounting automation software delivered as a subscription service. Our service includes transaction categorization, reconciliation assistance, QuickBooks integration, and financial reporting tools.
            </p>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We use Claude AI by Anthropic to analyze and categorize your financial transactions. While our AI is highly accurate, you are responsible for reviewing and approving all categorizations before they are finalized.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              User Responsibilities
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-[var(--cream-dim)] space-y-2 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Review all AI categorizations before approving them</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the service for illegal or unauthorized purposes</li>
              <li>Not attempt to reverse engineer or compromise our service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Payment and Billing
            </h2>
            <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
              Subscription
            </h3>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              North is offered as a monthly or annual subscription. All fees are in USD and exclude applicable taxes unless otherwise stated. You authorize us to charge your payment method on a recurring basis.
            </p>
            <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
              Free Trial
            </h3>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              New users receive a 14-day free trial. You may cancel at any time during the trial period without being charged. After the trial, your subscription will automatically begin unless you cancel.
            </p>
            <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
              Refunds
            </h3>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We offer refunds on a case-by-case basis. If you are not satisfied with our service, contact us at support@northapp.io within 30 days of your initial purchase.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Intellectual Property
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              North and its service, including all software, technology, and content, are owned by North and protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              You retain all rights to your data. We do not claim ownership of any financial information or business data you upload to our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              North is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our service.
            </p>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              Our total liability to you for any claim arising from your use of North shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              You are responsible for ensuring the accuracy of your financial records and compliance with tax and accounting regulations. North is a tool to assist you, not a substitute for professional accounting advice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Termination
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              You may cancel your subscription at any time from your account settings. Upon cancellation, you will retain access until the end of your billing period.
            </p>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We may suspend or terminate your account if you violate these Terms of Service or engage in fraudulent or illegal activity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Governing Law
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Changes to Terms
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed mb-4">
              We may update these Terms from time to time. We will notify you of material changes by email or through our service. Your continued use of North after changes become effective constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--cream-dim)] leading-relaxed">
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@northapp.io" className="text-[var(--coral)] hover:underline">
                legal@northapp.io
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { Download, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media - North",
  description: "Press resources, brand assets, and media contact for North.",
};

export default function PressPage() {
  const facts = [
    { label: "Founded", value: "2025" },
    { label: "Headquarters", value: "Remote" },
    { label: "Stage", value: "Early Stage" },
    { label: "Technology", value: "Claude AI by Anthropic" },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Press & Media
            </h1>
            <p className="text-lg text-[var(--cream-dim)] leading-relaxed">
              North is AI-powered accounting automation for small and medium businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border border-[var(--border)] rounded-2xl p-8 bg-[var(--surface)]">
              <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
                Brand Assets
              </h2>
              <p className="text-[var(--cream-dim)] mb-6">
                Download our logo, brand guidelines, and product screenshots.
              </p>
              <button
                disabled
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--cream-muted)] cursor-not-allowed opacity-50"
              >
                <Download className="h-4 w-4" />
                Download Kit (Coming Soon)
              </button>
            </div>

            <div className="border border-[var(--border)] rounded-2xl p-8 bg-[var(--surface)]">
              <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
                Press Contact
              </h2>
              <p className="text-[var(--cream-dim)] mb-6">
                For media inquiries, interviews, or press releases.
              </p>
              <a
                href="mailto:press@northapp.io"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--coral)] text-white font-medium hover:bg-[var(--coral-dim)] transition-colors duration-200 w-fit"
              >
                <Mail className="h-4 w-4" />
                press@northapp.io
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-8">
              Key Facts
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]"
                >
                  <div className="text-sm text-[var(--cream-muted)] mb-2">
                    {fact.label}
                  </div>
                  <div className="text-xl font-semibold text-[var(--cream)]">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

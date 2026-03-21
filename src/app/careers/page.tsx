import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { Globe, Award, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at North",
  description: "Join the North team. We're building the future of accounting automation.",
};

export default function CareersPage() {
  const perks = [
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere. We're distributed by design, not by accident.",
    },
    {
      icon: Award,
      title: "Equity Compensation",
      description: "Own a piece of what we're building. Everyone gets meaningful equity.",
    },
    {
      icon: Rocket,
      title: "Build Something Meaningful",
      description: "Help thousands of businesses reclaim their time from tedious bookkeeping.",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Careers at North
            </h1>
            <p className="text-lg text-[var(--cream-dim)] leading-relaxed">
              We're a lean team building something ambitious. Not hiring actively right now, but always interested in exceptional people.
            </p>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] text-center mb-12">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="border border-[var(--border)] rounded-2xl p-8 bg-[var(--surface)]"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-[var(--coral-glow)] flex items-center justify-center">
                    <perk.icon className="h-6 w-6 text-[var(--coral)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
                    {perk.title}
                  </h3>
                  <p className="text-[var(--cream-dim)] leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-24">
            <div className="border border-[var(--border)] rounded-2xl p-12 bg-[var(--surface)]">
              <h2 className="text-2xl font-semibold text-[var(--cream)] mb-4">
                Open Roles
              </h2>
              <div className="py-12 text-center">
                <p className="text-lg text-[var(--cream-dim)] mb-6">
                  No open roles right now.
                </p>
                <p className="text-[var(--cream-muted)] leading-relaxed">
                  We're not actively hiring, but if you're exceptional and passionate about reimagining accounting, reach out anyway.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4">
              <h2 className="text-2xl font-semibold text-[var(--cream)]">
                Think you'd be a great fit?
              </h2>
              <a
                href="mailto:careers@northapp.io"
                className="px-8 py-3 rounded-full bg-[var(--coral)] text-white font-medium hover:bg-[var(--coral-dim)] transition-colors duration-200"
              >
                Send us your story
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

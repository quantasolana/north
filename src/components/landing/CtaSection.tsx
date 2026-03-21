"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CtaSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cta-content",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".cta-content", start: "top 85%" } }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-28 border-t border-[var(--border)] relative overflow-hidden"
      style={{ background: "var(--charcoal-light)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(232,115,90,0.1) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center cta-content">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[var(--cream)] mb-6 leading-[1.15]">
          Ready to find your direction?
        </h2>
        <p className="text-[var(--cream-muted)] mb-10 text-sm leading-relaxed">
          Join 2,400+ accounting firms that trust North to keep their books
          clean.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-5">
          <input
            type="email"
            placeholder="Your work email"
            className="w-full sm:flex-1 px-5 py-3.5 rounded-full text-sm outline-none text-[var(--cream)] placeholder-[var(--cream-muted)]"
            style={{
              background: "rgba(240,230,216,0.05)",
              border: "1px solid var(--border)",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--border-coral)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          />
          <button className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--coral)] text-white font-semibold text-sm hover:bg-[var(--coral-dim)] transition-colors duration-200">
            Get Started Free
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-[var(--cream-muted)]">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}

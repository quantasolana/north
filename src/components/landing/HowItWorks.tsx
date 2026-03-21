"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "Connect",
    description:
      "Link your bank accounts, accounting software, and tools in seconds. North works with what you already use.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Tell North what matters to your practice — your chart of accounts, rules, and preferences. Takes minutes.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "Watch North handle the work autonomously. Categorize, reconcile, flag, report. You stay in control.",
  },
] as const;

export function HowItWorks() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hiw-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".hiw-heading", start: "top 85%" } }
      );

      gsap.fromTo(
        ".hiw-step",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", stagger: 0.18, scrollTrigger: { trigger: ".hiw-step", start: "top 85%" } }
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-28 border-t border-[var(--border)]"
      style={{ background: "var(--charcoal-light)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20 hiw-heading">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--coral)] mb-4">
            How it works
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[var(--cream)]">
            Up and running in minutes
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          <div
            className="absolute top-8 left-[16.66%] right-[16.66%] h-px hidden md:block"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(232,115,90,0.3) 20%, rgba(232,115,90,0.3) 80%, transparent)",
            }}
          />

          {STEPS.map(({ number, title, description }) => (
            <div key={number} className="hiw-step text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-[var(--border-coral)] bg-[var(--coral-glow)] mb-6">
                <span
                  className="font-[family-name:var(--font-playfair)] text-2xl font-bold"
                  style={{ color: "var(--coral)" }}
                >
                  {number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--cream)] mb-3">
                {title}
              </h3>
              <p className="text-sm text-[var(--cream-muted)] leading-relaxed max-w-xs mx-auto md:mx-0">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

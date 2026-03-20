"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap, RefreshCw, Shield, AlertCircle } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FEATURES = [
  {
    icon: Zap,
    title: "Auto-Categorization",
    description:
      "Every transaction classified instantly. The AI learns your chart of accounts and gets sharper with every entry — no manual sorting, ever.",
  },
  {
    icon: RefreshCw,
    title: "Bank Reconciliation",
    description:
      "Connect via Plaid and watch North match transactions to ledger entries continuously. Discrepancies surface immediately, not at month-end.",
  },
  {
    icon: Shield,
    title: "Audit Trail",
    description:
      "Every AI action is logged with timestamps, confidence scores, and source documents. SOC 2 compliant from day one.",
  },
  {
    icon: AlertCircle,
    title: "Smart Flagging",
    description:
      "Duplicate payments, unusual amounts, and missing receipts are caught before they become problems. Your safety net runs 24/7.",
  },
] as const;

export function FeatureCards() {
  const container = useRef<HTMLElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(
    () => {
      gsap.from(".features-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 85%",
        },
      });

      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 85%",
        },
      });
    },
    { scope: container }
  );

  const handleCardEnter = contextSafe((card: HTMLElement) => {
    gsap.to(card, {
      scale: 1.025,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 0 0 1px rgba(232,115,90,0.3), 0 20px 60px rgba(232,115,90,0.08)",
    });
  });

  const handleCardLeave = contextSafe((card: HTMLElement) => {
    gsap.to(card, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "none",
    });
  });

  return (
    <section
      id="features"
      ref={container}
      className="py-28 border-t border-[var(--border)]"
      style={{ background: "var(--charcoal-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 features-heading">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--coral)] mb-4">
            Features
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[var(--cream)]">
            <span className="text-[var(--coral)]">Everything</span> your
            practice needs
          </h2>
          <p className="mt-5 text-[var(--cream-muted)] max-w-lg mx-auto text-sm leading-relaxed">
            Four core capabilities that replace hours of manual bookkeeping
            with seconds of autonomous action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="feature-card rounded-2xl border border-[var(--glass-border)] bg-[var(--surface)] p-8 cursor-default"
              onMouseEnter={(e) => handleCardEnter(e.currentTarget)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            >
              <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--coral-glow)]">
                <Icon className="h-5 w-5 text-[var(--coral)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--cream)] mb-3">
                {title}
              </h3>
              <p className="text-sm text-[var(--cream-muted)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

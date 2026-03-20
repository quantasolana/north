"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CalendarX2, AlertTriangle, ClipboardList } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PAIN_POINTS = [
  {
    icon: CalendarX2,
    title: "Month-end chaos",
    description:
      "Closing the books means hunting down missing transactions, chasing approvals, and manually reconciling dozens of accounts. Every month.",
  },
  {
    icon: AlertTriangle,
    title: "Reconciliation errors",
    description:
      "A single mismatched entry cascades into hours of debugging. Manual reconciliation is where accuracy goes to die.",
  },
  {
    icon: ClipboardList,
    title: "Audit anxiety",
    description:
      "When auditors arrive, your team scrambles. No clean trail, no clear documentation, no confidence in the numbers.",
  },
];

export function ProblemSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".problem-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".problem-heading",
          start: "top 85%",
        },
      });

      gsap.from(".pain-card", {
        y: 60,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".pain-card",
          start: "top 85%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-28 border-t border-[var(--border)]"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="problem-heading font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[var(--cream)] leading-[1.15]">
            Your books shouldn&apos;t keep you up at night.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PAIN_POINTS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="pain-card rounded-2xl border border-[var(--glass-border)] bg-[var(--surface)] p-8"
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

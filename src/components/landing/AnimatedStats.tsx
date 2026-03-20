"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STATS = [
  { raw: 94, display: "94%", suffix: "%", label: "Accuracy rate" },
  { raw: 10, display: "10x", suffix: "x", label: "Faster month-end close" },
  { raw: 0, display: "0", suffix: "", label: "Manual entries required" },
] as const;

export function AnimatedStats() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-number");

      counters.forEach((el, i) => {
        const stat = STATS[i];
        const obj = { value: 0 };

        gsap.to(obj, {
          value: stat.raw,
          duration: 1.8,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate() {
            el.textContent = Math.round(obj.value) + stat.suffix;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });

      gsap.from(".stat-block", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".stat-block",
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="stat-block">
              <div
                className="font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl font-bold mb-3"
                style={{ color: "var(--coral)" }}
              >
                <span className="stat-number">0{stat.suffix}</span>
              </div>
              <p className="text-sm text-[var(--cream-muted)] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

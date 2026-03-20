"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For individuals exploring AI accounting",
    features: [
      "1 entity",
      "Basic categorization",
      "50 transactions/mo",
      "Email support",
    ],
    cta: "Get Started",
    href: "/auth/signup",
    isPopular: false,
  },
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    description: "For growing practices ready to automate",
    features: [
      "Up to 10 entities",
      "Full automation",
      "Bank reconciliation",
      "QuickBooks sync",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/auth/signup",
    isPopular: true,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mo",
    description: "For firms needing enterprise-grade tools",
    features: [
      "Unlimited entities",
      "White-label option",
      "API access",
      "Dedicated CSM",
      "SSO & SAML",
      "Custom AI models",
    ],
    cta: "Start Free Trial",
    href: "/auth/signup",
    isPopular: false,
  },
] as const;

export function PricingSection() {
  const container = useRef<HTMLElement>(null);
  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(
    () => {
      gsap.from(".pricing-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".pricing-heading", start: "top 85%" },
      });

      gsap.from(".pricing-card", {
        y: 60,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".pricing-card", start: "top 85%" },
      });
    },
    { scope: container }
  );

  const handleCardEnter = contextSafe((card: HTMLElement, isPopular: boolean) => {
    if (isPopular) return;
    gsap.to(card, {
      y: -4,
      duration: 0.25,
      ease: "power2.out",
    });
  });

  const handleCardLeave = contextSafe((card: HTMLElement, isPopular: boolean) => {
    if (isPopular) return;
    gsap.to(card, {
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  });

  return (
    <section
      id="pricing"
      ref={container}
      className="py-28 border-t border-[var(--border)]"
      style={{ background: "var(--charcoal-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 pricing-heading">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--coral)] mb-4">
            Pricing
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl text-[var(--cream)]">
            Simple, transparent pricing
          </h2>
          <p className="mt-5 text-[var(--cream-muted)] max-w-md mx-auto text-sm">
            Start free. No credit card required. Upgrade when your practice
            grows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="pricing-card relative rounded-2xl p-8 flex flex-col"
              style={{
                background: tier.isPopular
                  ? "rgba(232,115,90,0.06)"
                  : "var(--surface)",
                border: tier.isPopular
                  ? "1px solid var(--border-coral)"
                  : "1px solid var(--glass-border)",
              }}
              onMouseEnter={(e) => handleCardEnter(e.currentTarget, tier.isPopular)}
              onMouseLeave={(e) => handleCardLeave(e.currentTarget, tier.isPopular)}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[var(--coral)] px-3.5 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-base font-semibold text-[var(--cream)] mb-1">
                  {tier.name}
                </h3>
                <p className="text-xs text-[var(--cream-muted)]">
                  {tier.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-7">
                <span
                  className="font-[family-name:var(--font-playfair)] text-4xl font-bold"
                  style={{ color: "var(--cream)" }}
                >
                  {tier.price}
                </span>
                <span className="text-sm text-[var(--cream-muted)]">
                  {tier.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-[var(--cream-dim)]"
                  >
                    <Check className="h-3.5 w-3.5 text-[var(--coral)] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className="w-full text-center py-3 rounded-full text-sm font-semibold transition-colors duration-200"
                style={
                  tier.isPopular
                    ? {
                        background: "var(--coral)",
                        color: "white",
                      }
                    : {
                        background: "transparent",
                        color: "var(--cream-dim)",
                        border: "1px solid var(--glass-border)",
                      }
                }
                onMouseEnter={(e) => {
                  if (!tier.isPopular) {
                    e.currentTarget.style.borderColor = "var(--border-coral)";
                    e.currentTarget.style.color = "var(--cream)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.isPopular) {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.color = "var(--cream-dim)";
                  }
                }}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

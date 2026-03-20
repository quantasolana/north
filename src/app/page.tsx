import Link from "next/link";
import { Compass, Check, Twitter, Linkedin, Github } from "lucide-react";
import { NavBar } from "@/components/landing/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogoTicker } from "@/components/landing/LogoTicker";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AnimatedStats } from "@/components/landing/AnimatedStats";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Status", "Support"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] py-16"
      style={{ background: "var(--charcoal-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Compass className="h-5 w-5 text-[var(--coral)]" />
              <span className="text-base font-bold tracking-[0.18em] text-[var(--cream)]">
                NORTH
              </span>
            </div>
            <p className="text-xs text-[var(--cream-muted)] leading-relaxed mb-6 max-w-[200px]">
              Accounting that never loses direction.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold text-[var(--cream)] uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[var(--cream-muted)]">
            &copy; {new Date().getFullYear()} NORTH. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <LogoTicker />
        <ProblemSection />
        <FeatureCards />
        <HowItWorks />
        <AnimatedStats />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

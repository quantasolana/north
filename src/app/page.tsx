import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogoTicker } from "@/components/landing/LogoTicker";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AnimatedStats } from "@/components/landing/AnimatedStats";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";

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

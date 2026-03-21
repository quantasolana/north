"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Compass, Menu, X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
] as const;

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    },
    { scope: container }
  );

  return (
    <header
      ref={container}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--charcoal-dark)]/85 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Compass className="h-6 w-6 text-[var(--coral)]" />
          <span className="text-lg font-bold tracking-[0.18em] text-[var(--cream)]">
            NORTH
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm px-4 py-2 rounded-full border border-[var(--border-coral)] text-[var(--cream-dim)] hover:text-[var(--cream)] hover:border-[var(--coral)] transition-all duration-200"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm px-4 py-2 rounded-full bg-[var(--coral)] text-white font-medium hover:bg-[var(--coral-dim)] transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-[var(--cream-dim)] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--charcoal-dark)] px-6 py-4 space-y-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block text-sm text-[var(--cream-muted)] hover:text-[var(--cream)]"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Link
              href="/auth/login"
              className="text-sm px-4 py-2 rounded-full border border-[var(--border-coral)] text-[var(--cream-dim)]"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm px-4 py-2 rounded-full bg-[var(--coral)] text-white font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

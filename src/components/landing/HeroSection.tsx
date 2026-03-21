"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Play } from "lucide-react";

gsap.registerPlugin(useGSAP);

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let dots: { x: number; y: number; phase: number; speed: number }[] = [];

    const DOT_SPACING = 36;
    const DOT_RADIUS = 1.5;
    const DOT_OPACITY = 0.18;
    const AMPLITUDE = 3.5;

    function buildDots() {
      dots = [];
      const cols = Math.ceil(canvas!.width / DOT_SPACING) + 1;
      const rows = Math.ceil(canvas!.height / DOT_SPACING) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            x: col * DOT_SPACING,
            y: row * DOT_SPACING,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.6,
          });
        }
      }
    }

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      buildDots();
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = `rgba(240, 230, 216, ${DOT_OPACITY})`;

      const t = time * 0.001;

      for (const dot of dots) {
        const offsetY = Math.sin(t * dot.speed + dot.phase) * AMPLITUDE;
        ctx!.beginPath();
        ctx!.arc(dot.x, dot.y + offsetY, DOT_RADIUS, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-word",
        { y: 44, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.07 }
      )
        .fromTo(
          ".hero-sub",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.1 },
          "-=0.2"
        )
        .fromTo(
          ".hero-proof",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.1"
        );
    },
    { scope: container }
  );

  const headingParts = [
    "Accounting",
    "that",
    "never",
    "loses",
    "direction.",
  ];

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center justify-center pt-16 pb-24 overflow-hidden"
      style={{ background: "var(--charcoal-dark)" }}
    >
      <DotGrid />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,115,90,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] tracking-tight text-[var(--cream)] mb-8"
          style={{ fontKerning: "none" }}
        >
          {headingParts.map((word, i) => (
            <span key={i} className="hero-word inline-block mr-[0.22em] last:mr-0">
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-sub mx-auto max-w-xl text-base sm:text-lg text-[var(--cream-dim)] leading-relaxed mb-10">
          AI agents that handle the books so your team can focus on what
          matters.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <Link
            href="/auth/signup"
            className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--coral)] text-white font-semibold text-sm hover:bg-[var(--coral-dim)] transition-colors duration-200"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="hero-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--cream-muted)] text-[var(--cream-dim)] font-semibold text-sm hover:border-[var(--cream)] hover:text-[var(--cream)] transition-all duration-200">
            <Play className="h-4 w-4" />
            Watch Demo
          </button>
        </div>

        <p className="hero-proof text-xs text-[var(--cream-muted)] tracking-wide">
          Trusted by{" "}
          <span className="text-[var(--cream-dim)] font-medium">
            2,400+ accounting firms
          </span>
        </p>
      </div>
    </section>
  );
}

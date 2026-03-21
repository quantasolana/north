"use client";

import { useState } from "react";
import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { Mail, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Contact Support
            </h1>
            <p className="text-lg text-[var(--cream-dim)]">
              Have a question or need help? We're here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--cream)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--charcoal-light)] border border-[var(--border)] text-[var(--cream)] placeholder:text-[var(--cream-muted)] focus:outline-none focus:border-[var(--border-coral)] transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--cream)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--charcoal-light)] border border-[var(--border)] text-[var(--cream)] placeholder:text-[var(--cream-muted)] focus:outline-none focus:border-[var(--border-coral)] transition-colors duration-200"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--cream)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[var(--charcoal-light)] border border-[var(--border)] text-[var(--cream)] placeholder:text-[var(--cream-muted)] focus:outline-none focus:border-[var(--border-coral)] transition-colors duration-200"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--cream)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--charcoal-light)] border border-[var(--border)] text-[var(--cream)] placeholder:text-[var(--cream-muted)] focus:outline-none focus:border-[var(--border-coral)] transition-colors duration-200 resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                {isSubmitted ? (
                  <div className="p-4 rounded-lg bg-[var(--coral-glow)] border border-[var(--border-coral)]">
                    <p className="text-[var(--coral)] font-medium">
                      Thanks! We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-full bg-[var(--coral)] text-white font-medium hover:bg-[var(--coral-dim)] transition-colors duration-200"
                  >
                    Send Message
                  </button>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--coral-glow)] flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[var(--coral)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--cream)] mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:support@northapp.io"
                      className="text-[var(--cream-dim)] hover:text-[var(--coral)] transition-colors duration-200"
                    >
                      support@northapp.io
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--coral-glow)] flex items-center justify-center">
                    <Clock className="h-5 w-5 text-[var(--coral)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--cream)] mb-2">
                      Response Time
                    </h3>
                    <p className="text-[var(--cream-dim)]">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--coral-glow)] flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-[var(--coral)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--cream)] mb-2">
                      Community
                    </h3>
                    <p className="text-[var(--cream-dim)] mb-2">
                      Join our Discord community
                    </p>
                    <a
                      href="#"
                      className="text-sm text-[var(--coral)] hover:underline"
                    >
                      Coming soon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

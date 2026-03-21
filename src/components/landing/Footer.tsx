import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs#api" },
    { label: "Status", href: "/status" },
    { label: "Support", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Security", href: "/security" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] py-16"
      style={{ background: "var(--charcoal-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-14">
          <div className="col-span-2">
            <div className="mb-4">
              <Image
                src="/logo-mark.svg"
                alt="North"
                width={36}
                height={36}
              />
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
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
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
            <Link
              href="/privacy"
              className="text-xs text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy#cookies"
              className="text-xs text-[var(--cream-muted)] hover:text-[var(--cream)] transition-colors duration-200"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

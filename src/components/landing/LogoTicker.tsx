"use client";

const PARTNERS = [
  "QuickBooks",
  "Xero",
  "Stripe",
  "Intuit",
  "FreshBooks",
  "Sage",
  "Wave",
  "Gusto",
];

export function LogoTicker() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section
      className="py-14 border-y border-[var(--border)] overflow-hidden"
      style={{ background: "var(--charcoal-light)" }}
    >
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <p className="text-xs text-[var(--cream-muted)] uppercase tracking-widest">
          Trusted by firms using
        </p>
      </div>

      <div className="relative">
        <div className="flex w-max ticker-track">
          {doubled.map((name, i) => (
            <div key={i} className="mx-3 shrink-0">
              <span className="inline-flex items-center px-5 py-2 rounded-full border border-[var(--glass-border)] bg-[var(--surface)] text-sm font-medium text-[var(--cream-muted)] whitespace-nowrap"
                style={{ borderColor: "rgba(240,230,216,0.1)" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <div
          className="absolute inset-y-0 left-0 w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--charcoal-light), transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--charcoal-light), transparent)",
          }}
        />
      </div>
    </section>
  );
}

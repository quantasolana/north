import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "System Status - North",
  description: "Check the operational status of North's services and infrastructure.",
};

const services = [
  { name: "API", status: "operational", uptime: "99.9%" },
  { name: "Dashboard", status: "operational", uptime: "99.9%" },
  { name: "QuickBooks Sync", status: "operational", uptime: "99.9%" },
  { name: "AI Processing", status: "operational", uptime: "99.9%" },
  { name: "Authentication", status: "operational", uptime: "99.9%" },
];

export default function StatusPage() {
  const currentTime = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              System Status
            </h1>
            <p className="text-lg text-[var(--cream-dim)]">
              Current operational status of all North services
            </p>
          </div>

          <div className="mb-12">
            <div className="border-2 border-[var(--success)] rounded-2xl p-8 bg-[rgba(34,197,94,0.05)] text-center">
              <CheckCircle className="h-16 w-16 text-[var(--success)] mx-auto mb-4" />
              <h2 className="text-3xl font-semibold text-[var(--success)] mb-2">
                All Systems Operational
              </h2>
              <p className="text-[var(--cream-dim)]">
                All services are running normally
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[var(--cream)] mb-6">
              Services
            </h2>
            <div className="border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)]">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className={`flex items-center justify-between p-6 ${
                    index !== services.length - 1
                      ? "border-b border-[var(--border)]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <div>
                      <h3 className="text-lg font-medium text-[var(--cream)]">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-[var(--cream-muted)] mb-1">
                        Uptime
                      </div>
                      <div className="text-lg font-semibold text-[var(--cream)]">
                        {service.uptime}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(34,197,94,0.1)] border border-[var(--success)]">
                      <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                      <span className="text-xs font-medium text-[var(--success)] capitalize">
                        {service.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
            <h3 className="text-lg font-semibold text-[var(--cream)] mb-3">
              Real-time Status Updates
            </h3>
            <p className="text-[var(--cream-dim)] mb-4">
              For real-time status updates and incident notifications, we'll be launching status.northapp.io soon. Subscribe to get notified about any service disruptions.
            </p>
            <p className="text-xs text-[var(--cream-muted)]">
              Last checked: {currentTime}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

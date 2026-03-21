import { Metadata } from "next";
import { NavBar } from "@/components/landing/NavBar";
import { Footer } from "@/components/landing/Footer";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - North",
  description: "Insights on accounting automation, AI, and building a better business.",
};

const posts = [
  {
    category: "AI & Automation",
    title: "How AI Is Transforming Small Business Accounting",
    excerpt: "Discover how artificial intelligence is revolutionizing bookkeeping for small businesses, reducing manual work by up to 80%.",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    href: "#",
  },
  {
    category: "Integrations",
    title: "QuickBooks + North: A Complete Integration Guide",
    excerpt: "Step-by-step guide to connecting North with QuickBooks Online for seamless data sync and AI-powered automation.",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    href: "#",
  },
  {
    category: "Productivity",
    title: "Why Manual Reconciliation Is Killing Your Productivity",
    excerpt: "The hidden costs of manual bank reconciliation and how automation can save you 10+ hours per month.",
    date: "Feb 18, 2026",
    readTime: "4 min read",
    href: "#",
  },
  {
    category: "Company",
    title: "Introducing North: Accounting That Never Loses Direction",
    excerpt: "Our origin story, why we built North, and what makes our approach to accounting automation different.",
    date: "Mar 1, 2026",
    readTime: "3 min read",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic text-[var(--cream)] mb-6">
              Blog
            </h1>
            <p className="text-lg text-[var(--cream-dim)]">
              Insights on accounting automation, AI, and building a better business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {posts.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="group border border-[var(--border)] rounded-2xl p-8 bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-coral)] transition-all duration-200"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-[var(--coral)] bg-[var(--coral-glow)] rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-[var(--cream)] mb-3 group-hover:text-[var(--coral)] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-[var(--cream-dim)] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[var(--cream-muted)]">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--coral)] text-sm font-medium">
                    Read more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center py-12 border border-[var(--border)] rounded-2xl bg-[var(--surface)]">
            <p className="text-[var(--cream-muted)]">More posts coming soon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

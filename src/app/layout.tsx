import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NORTH | AI-Powered Accounting Automation",
  description:
    "Accounting that never loses direction. Automate receipts, reconciliation, and journal entries with AI agents.",
  openGraph: {
    title: "NORTH | AI-Powered Accounting Automation",
    description:
      "Accounting that never loses direction. Automate receipts, reconciliation, and journal entries with AI agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}

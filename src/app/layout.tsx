import type { Metadata } from "next";
import { Anton } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ctrlswing -- AI Marketing Strategy + Tools for Small Businesses",
    template: "%s | ctrlswing",
  },
  description:
    "Strategy sessions, Claude Code skills, and AI marketing tools for small business owners. 30 minutes of clarity. Tools that do the work. Built by a practitioner who uses them daily.",
  metadataBase: new URL("https://ctrlswing.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctrlswing.com",
    siteName: "ctrlswing",
    title: "Your marketing isn't broken. It's just outdated.",
    description:
      "Strategy sessions, Claude Code skills, and AI marketing tools for small business owners. 30 minutes of clarity. Tools that do the work.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ctrlswing",
    creator: "@ctrlswing",
    title: "Your marketing isn't broken. It's just outdated.",
    description:
      "Strategy sessions, Claude Code skills, and AI marketing tools for small business owners. 30 minutes of clarity. Tools that do the work.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ctrlswing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} scroll-smooth`}>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-charcoal font-satoshi antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-yellow focus:text-charcoal focus:font-anton focus:uppercase focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

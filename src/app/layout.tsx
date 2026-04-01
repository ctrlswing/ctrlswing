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
    default: "ctrlswing — Build AI skills that actually do the work",
    template: "%s | ctrlswing",
  },
  description:
    "Learn how to build Claude skills that turn your best thinking into repeatable workflows. Free walkthrough, 1:1 sessions, and custom builds from a practitioner who uses these tools on real client work every day.",
  metadataBase: new URL("https://ctrlswing.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctrlswing.com",
    siteName: "ctrlswing",
    title: "Build AI skills that actually do the work",
    description:
      "Free walkthrough + 1:1 sessions from a practitioner who builds and uses Claude skills on real client work daily.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ctrlswing",
    creator: "@ctrlswing",
    title: "Build AI skills that actually do the work",
    description:
      "Free walkthrough + 1:1 sessions from a practitioner who builds and uses Claude skills on real client work daily.",
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

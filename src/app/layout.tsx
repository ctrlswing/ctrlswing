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
    default: "CTRLSWING | Your Marketing Isn't Broken. It's Just Outdated.",
    template: "%s | CTRLSWING",
  },
  description:
    "Modern marketing systems for small businesses. Website, email, ads, SEO — built by one person with purpose-built tools, in days. No retainers, no mystery pricing. San Diego and beyond.",
  metadataBase: new URL("https://ctrlswing.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctrlswing.com",
    siteName: "CTRLSWING",
    title: "Your Marketing Isn't Broken. It's Just Outdated.",
    description:
      "Website. Email. Ads. SEO. One person builds it all — with modern tools, in days.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ctrlswing",
    creator: "@ctrlswing",
    title: "Your Marketing Isn't Broken. It's Just Outdated.",
    description:
      "Website. Email. Ads. SEO. One person builds it all — with modern tools, in days.",
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

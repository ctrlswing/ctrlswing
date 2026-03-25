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
    default: "CTRLSWING | Your Marketing System, Built in Days",
    template: "%s | CTRLSWING",
  },
  description:
    "I build complete marketing systems for small businesses. Website, email, ads, SEO. Live and running in days, not months. San Diego and beyond.",
  metadataBase: new URL("https://ctrlswing.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctrlswing.com",
    siteName: "CTRLSWING",
    title: "Your Entire Marketing System. Built and Running in Days.",
    description:
      "Website. Email. Ads. SEO. All of it. Set up, launched, and live before most agencies finish their proposal.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ctrlswing",
    creator: "@ctrlswing",
    title: "Your Entire Marketing System. Built and Running in Days.",
    description:
      "Website. Email. Ads. SEO. All of it. Set up, launched, and live before most agencies finish their proposal.",
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-charcoal font-satoshi antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

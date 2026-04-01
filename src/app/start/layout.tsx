import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell me about your business. Takes 2 minutes. I'll get back to you within 24 hours with a scope, timeline, and price.",
  robots: {
    index: false,
  },
};

export default function StartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

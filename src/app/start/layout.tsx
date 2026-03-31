import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Session -- ctrlswing",
  description:
    "30 minutes, $99. Tell me about your project and I will come prepared with a plan. The $99 credits toward any retainer.",
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

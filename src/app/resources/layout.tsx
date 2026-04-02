import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Skills, plugins, and connectors built for real work. Download anything. Free.",
  openGraph: {
    title: "Resources — ctrlswing",
    description:
      "Skills, plugins, and connectors built for real work. Download anything. Free.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

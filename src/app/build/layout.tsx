import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your First Skill",
  description:
    "Answer a few questions about your business and workflow. The builder generates a custom Skill.md tailored to you.",
  openGraph: {
    title: "Build Your First Skill — ctrlswing",
    description:
      "AI generates a custom Skill.md for your workflow in 60 seconds. Free.",
  },
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

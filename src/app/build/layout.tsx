import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your First Skill",
  description:
    "Answer a few questions about your business and workflow. The builder generates a custom Skill.md tailored to you.",
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

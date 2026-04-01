import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jackson Dean builds AI skills, plugins, and marketing systems for marketers and founders. Skills/AI mentor in the Vibe Marketers community.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

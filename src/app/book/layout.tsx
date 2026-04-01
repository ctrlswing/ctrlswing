import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "$250. 1:1 discovery and guided skill setup. You leave with a working skill, a recording, and my notes.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

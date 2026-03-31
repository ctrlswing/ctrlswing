import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "/tools", label: "TOOLS" },
  { href: "/work", label: "WORK" },
  { href: "/blog", label: "BLOG" },
];

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`h-20 backdrop-blur-md px-6 md:px-12 flex items-center justify-between ${
          isDark
            ? "bg-charcoal/95 border-b border-sage/10"
            : "bg-white/90 border-b border-charcoal/10"
        }`}
      >
        <Link
          href="/"
          className={`font-anton text-3xl uppercase tracking-wide flex items-baseline ${
            isDark ? "text-white" : ""
          }`}
        >
          CTRLSWING<span className="text-yellow">.</span>
        </Link>
        <div
          className={`hidden md:flex items-center gap-8 font-satoshi text-sm font-medium ${
            isDark ? "text-sage" : ""
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/tools"
            className="font-anton uppercase text-lg px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 bg-yellow text-charcoal hover:bg-charcoal hover:text-white"
          >
            Browse Tools
          </Link>
          <MobileMenu variant={variant} />
        </div>
      </div>
    </nav>
  );
}

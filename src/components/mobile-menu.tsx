"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/tools", label: "TOOLS" },
  { href: "/work", label: "WORK" },
  { href: "/blog", label: "BLOG" },
];

export function MobileMenu({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`md:hidden p-2 ${isDark ? "text-white" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div
          className={`absolute top-20 left-0 right-0 md:hidden px-6 py-6 flex flex-col gap-4 font-satoshi text-lg font-medium shadow-lg ${
            isDark
              ? "bg-charcoal border-b border-sage/10 text-sage"
              : "bg-white border-b border-charcoal/10"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 hover:text-yellow transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tools"
            onClick={() => setOpen(false)}
            className="mt-2 w-full text-center font-anton uppercase text-lg px-6 py-3 rounded-full bg-yellow text-charcoal hover:bg-charcoal hover:text-white transition-colors"
          >
            Browse Tools
          </Link>
        </div>
      )}
    </>
  );
}

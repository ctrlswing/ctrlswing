"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/workshop", label: "WORKSHOP" },
  { href: "/blog", label: "BLOG" },
  { href: "/resources", label: "RESOURCES" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="h-20 bg-white/90 backdrop-blur-md border-b border-charcoal/10 px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="font-anton text-3xl uppercase tracking-wide flex items-baseline"
        >
          CTRLSWING<span className="text-yellow">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-satoshi text-sm font-medium">
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
            href="/workshop"
            className="bg-charcoal text-white font-anton uppercase text-lg px-6 py-2 rounded-full hover:bg-yellow hover:text-charcoal transition-all duration-300 hover:scale-105"
          >
            Book a Seat
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-charcoal/10 px-6 py-6 flex flex-col gap-4 font-satoshi text-lg font-medium shadow-lg">
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
        </div>
      )}
    </nav>
  );
}

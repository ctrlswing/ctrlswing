"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onScroll() {
      if (open) setOpen(false);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div
        className={`absolute top-20 left-0 right-0 z-30 md:hidden bg-white border-b border-charcoal/10 px-6 py-6 flex flex-col gap-4 font-satoshi text-lg font-medium shadow-lg transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <Link
          href="/resources"
          onClick={() => setOpen(false)}
          className="py-2 hover:text-yellow transition-colors duration-200"
        >
          RESOURCES
        </Link>
        <Link
          href="/blog"
          onClick={() => setOpen(false)}
          className="py-2 hover:text-yellow transition-colors duration-200"
        >
          BLOG
        </Link>
        <Link
          href="/about"
          onClick={() => setOpen(false)}
          className="py-2 hover:text-yellow transition-colors duration-200"
        >
          ABOUT
        </Link>
        <Button
          href="/start"
          variant="primary"
          size="md"
          fullWidth
          onClick={() => setOpen(false)}
        >
          Book a Session
        </Button>
      </div>
    </>
  );
}

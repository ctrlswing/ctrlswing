"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

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
        className="md:hidden p-2"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute top-20 left-0 right-0 md:hidden bg-white border-b border-charcoal/10 px-6 py-6 flex flex-col gap-4 font-satoshi text-lg font-medium shadow-lg">
          <a
            href="#work"
            onClick={() => setOpen(false)}
            className="py-2 hover:text-yellow transition-colors"
          >
            WORK
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="py-2 hover:text-yellow transition-colors"
          >
            PRICING
          </a>
          <a
            href="#faq"
            onClick={() => setOpen(false)}
            className="py-2 hover:text-yellow transition-colors"
          >
            FAQ
          </a>
        </div>
      )}
    </>
  );
}

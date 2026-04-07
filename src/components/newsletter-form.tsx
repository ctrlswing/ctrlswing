"use client";

import { useState } from "react";
import { submitNewsletter } from "@/app/actions";

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitNewsletter({ email, honeypot });
    setStatus(result.success ? "success" : "error");
    if (result.success) setEmail("");
  }

  if (status === "success") {
    return (
      <div className={`font-satoshi text-lg ${dark ? "text-white" : "text-charcoal"}`}>
        You&apos;re in. Check your inbox soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className={`flex-1 px-4 py-3 rounded-lg font-satoshi text-base border ${
          dark
            ? "bg-darkgray border-sage/20 text-white placeholder:text-sage/50 focus:border-yellow"
            : "bg-white border-charcoal/10 text-charcoal placeholder:text-charcoal/40 focus:border-yellow"
        } outline-none transition-colors`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-yellow text-charcoal font-anton uppercase text-lg px-6 py-3 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="font-satoshi text-sm text-red-400 mt-1 sm:mt-0 sm:ml-2 self-center">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}

"use client";

import { useState } from "react";
import { submitToDiscord } from "@/app/actions";

export function EmailCapture({
  source,
  placeholder = "you@company.com",
  buttonText = "Subscribe",
  successMessage = "You're in. Check your email.",
  dark = false,
}: {
  source: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  dark?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    const result = await submitToDiscord({ email, source });

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 py-4 font-satoshi ${dark ? "text-yellow" : "text-charcoal"}`}>
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-lg">{successMessage}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className={`flex-1 px-4 py-3 rounded-lg font-satoshi text-base border transition-colors duration-200 ${
          dark
            ? "bg-darkgray border-sage/20 text-white placeholder:text-sage/50 focus:border-yellow"
            : "bg-white border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-yellow"
        } outline-none`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-yellow text-charcoal font-anton uppercase text-lg px-8 py-3 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_30px_rgb(255,225,124,0.4)] hover:shadow-[0_8px_30px_rgb(23,30,25,0.4)] whitespace-nowrap"
      >
        {status === "loading" ? "Sending..." : buttonText}
      </button>
      {status === "error" && (
        <p className="text-red-400 font-satoshi text-sm sm:absolute sm:bottom-[-1.5rem]">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}

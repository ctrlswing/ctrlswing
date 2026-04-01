"use client";

import { useState, useId } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type EmailCaptureVariant = "light" | "dark" | "brand";

type EmailCaptureProps = {
  headline?: string;
  description?: string;
  buttonText?: string;
  microcopy?: string;
  variant?: EmailCaptureVariant;
  className?: string;
};

export function EmailCapture({
  headline = "Learn to build your first AI skill",
  description = "Free video walkthrough. Structure, formatting, and how to make it actually useful. 20 minutes, no fluff.",
  buttonText = "Get the walkthrough",
  microcopy = "Your email goes directly to me. No spam.",
  variant = "light",
  className = "",
}: EmailCaptureProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      // TODO: Wire up Kit (ConvertKit) API — replace this stub
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isDark = variant === "dark";
  const isBrand = variant === "brand";

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <CheckCircle2 className="w-6 h-6 text-yellow shrink-0" />
        <p className={`font-satoshi text-lg ${isDark ? "text-white" : "text-charcoal"}`} >
          Check your inbox. The walkthrough is on its way.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {headline && (
        <h3 className={`font-anton text-2xl md:text-3xl uppercase leading-[0.9] mb-3 ${isDark ? "text-white" : "text-charcoal"}`}>
          {headline}
        </h3>
      )}
      {description && (
        <p className={`font-satoshi text-lg mb-6 max-w-xl ${isDark ? "text-sage/80" : "text-charcoal/70"}`}>
          {description}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-3">
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id}-email`}
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 font-satoshi text-lg px-5 py-4 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-0 ${
            isDark
              ? "bg-darkgray border-sage/20 text-white placeholder:text-sage/50 focus:border-yellow"
              : isBrand
                ? "bg-white border-charcoal/10 text-charcoal placeholder:text-charcoal/40 hover:border-charcoal/20 focus:border-charcoal"
                : "bg-white border-charcoal/20 text-charcoal placeholder:text-charcoal/40 hover:border-charcoal/40 focus:border-yellow"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`inline-flex items-center justify-center gap-2 font-anton uppercase text-lg px-6 py-4 rounded-lg transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed shrink-0 ${
            isBrand
              ? "bg-charcoal text-white hover:bg-charcoal/80"
              : "bg-yellow text-charcoal hover:bg-charcoal hover:text-white shadow-yellow-glow hover:shadow-yellow-glow-hover"
          }`}
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            buttonText
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="font-satoshi text-sm text-error mb-2">
          Something went wrong. Try again or email jackson@ctrlswing.com directly.
        </p>
      )}
      {microcopy && (
        <p className={`font-satoshi text-sm ${isDark ? "text-sage/60" : isBrand ? "text-charcoal/60" : "text-charcoal/50"}`}>
          {microcopy}
        </p>
      )}
    </div>
  );
}

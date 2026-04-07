"use client";

import { useState } from "react";
import { submitWorkshopBooking } from "@/app/actions";

export function WorkshopForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitWorkshopBooking({ name, email, business, honeypot });
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <h3 className="font-anton text-4xl uppercase text-yellow mb-4">
          You&apos;re on the list.
        </h3>
        <p className="font-satoshi text-lg text-sage/80 max-w-md mx-auto">
          I&apos;ll email you with the next session date and everything you need
          to prepare. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div>
        <label htmlFor="ws-name" className="font-satoshi text-sm text-sage/60 mb-1 block">
          Your name
        </label>
        <input
          id="ws-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-sage/20 text-white font-satoshi text-lg py-4 outline-none focus:border-yellow transition-colors placeholder:text-sage/30"
          placeholder="First and last name"
        />
      </div>

      <div>
        <label htmlFor="ws-email" className="font-satoshi text-sm text-sage/60 mb-1 block">
          Email
        </label>
        <input
          id="ws-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-sage/20 text-white font-satoshi text-lg py-4 outline-none focus:border-yellow transition-colors placeholder:text-sage/30"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="ws-business" className="font-satoshi text-sm text-sage/60 mb-1 block">
          Tell me about your business and the workflow you want to turn into a skill
        </label>
        <textarea
          id="ws-business"
          required
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          rows={4}
          className="w-full bg-transparent border-b border-sage/20 text-white font-satoshi text-lg py-4 outline-none focus:border-yellow transition-colors placeholder:text-sage/30 resize-none"
          placeholder="E.g., I run a marketing agency and spend 3 hours every Monday writing client reports..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-yellow text-charcoal font-anton uppercase text-xl py-5 rounded-xl hover:bg-white transition-colors duration-300 disabled:bg-yellow/50 disabled:text-charcoal/50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Reserve My Seat — $500"}
      </button>

      {status === "error" && (
        <p className="font-satoshi text-sm text-red-400 text-center">
          Something went wrong. Try again or email me directly.
        </p>
      )}

      <p className="font-satoshi text-xs text-sage/40 text-center">
        You won&apos;t be charged yet. I&apos;ll follow up with session details and payment info.
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { submitToDiscord } from "@/app/actions";

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !business.trim()) return;

    setStatus("loading");
    const result = await submitToDiscord({
      name,
      email,
      business,
      source: "Workshop Booking",
    });

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-darkgray rounded-xl p-8 md:p-12 text-center">
        <svg className="w-12 h-12 text-yellow mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="font-anton text-3xl uppercase text-white mb-3">
          You're in.
        </h3>
        <p className="font-satoshi text-sage/80 max-w-sm mx-auto">
          I will reach out within 24 hours with next steps.
          Check your email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-darkgray rounded-xl p-8 md:p-12 space-y-6">
      <div>
        <label htmlFor="booking-name" className="block font-satoshi text-sm text-sage/60 mb-2">
          Your name
        </label>
        <input
          id="booking-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jackson Dean"
          className="w-full bg-transparent border-b border-sage/20 text-white font-satoshi text-lg py-4 placeholder:text-sage/30 focus:border-yellow outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="booking-email" className="block font-satoshi text-sm text-sage/60 mb-2">
          Email
        </label>
        <input
          id="booking-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full bg-transparent border-b border-sage/20 text-white font-satoshi text-lg py-4 placeholder:text-sage/30 focus:border-yellow outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="booking-business" className="block font-satoshi text-sm text-sage/60 mb-2">
          Tell me about your business
        </label>
        <textarea
          id="booking-business"
          required
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          placeholder="What you do, what you are trying to solve, and what a good outcome looks like."
          rows={4}
          className="w-full bg-transparent border-b border-sage/20 text-white font-satoshi text-lg py-4 placeholder:text-sage/30 focus:border-yellow outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-yellow text-charcoal font-anton uppercase text-xl py-5 rounded-xl hover:bg-white transition-all duration-300 disabled:bg-yellow/50 disabled:text-charcoal/50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Book Your Seat"}
      </button>

      {status === "error" && (
        <p className="text-red-400 font-satoshi text-sm text-center">
          Something went wrong. Try again or email me directly.
        </p>
      )}
    </form>
  );
}

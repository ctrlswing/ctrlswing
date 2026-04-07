"use client";

import { useState } from "react";
import { submitResourceEmail } from "@/app/actions";

export function ResourceCard({
  title,
  description,
  resourceName,
}: {
  title: string;
  description: string;
  resourceName: string;
}) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const result = await submitResourceEmail({
      email,
      resource: resourceName,
      honeypot,
    });
    setStatus(result.success ? "success" : "error");
  }

  return (
    <div className="border border-charcoal/10 rounded-xl p-8 md:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="font-anton text-3xl uppercase leading-[0.9] mb-4">
        {title}
      </h3>
      <p className="font-satoshi text-charcoal/70 mb-8">{description}</p>

      {status === "success" ? (
        <div className="bg-yellow/10 border border-yellow/30 rounded-lg p-6 text-center">
          <p className="font-anton text-xl uppercase text-charcoal mb-1">
            Check your inbox.
          </p>
          <p className="font-satoshi text-sm text-charcoal/60">
            I&apos;ll send the skill to {email} shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
            className="flex-1 px-4 py-3 rounded-lg font-satoshi text-base border border-charcoal/10 text-charcoal placeholder:text-charcoal/40 focus:border-yellow outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-charcoal text-white font-anton uppercase text-base px-6 py-3 rounded-lg hover:bg-yellow hover:text-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Get the Skill"}
          </button>
          {status === "error" && (
            <p className="font-satoshi text-sm text-red-400 self-center">
              Try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

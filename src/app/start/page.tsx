"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { submitSessionForm, type SessionFormData } from "./actions";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initial: SessionFormData = {
  name: "",
  email: "",
  website: "",
  message: "",
  phone: "",
};

export default function StartPage() {
  const router = useRouter();
  const [form, setForm] = useState<SessionFormData>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function set(key: keyof SessionFormData, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const result = await submitSessionForm(form);
    setSubmitting(false);
    if (result.success) {
      router.push("/book");
    } else {
      setError(
        "Something went wrong. Try again, or email me at jackson@ctrlswing.com"
      );
    }
  }

  return (
    <div className="min-h-screen bg-charcoal text-white relative">
      <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-6 md:px-12 md:py-8">
        <Link
          href="/"
          className="font-anton text-2xl uppercase tracking-wide flex items-baseline text-white"
        >
          CTRLSWING<span className="text-yellow">.</span>
        </Link>
      </header>

      {/* Main */}
      <main className="relative z-10 px-6 py-8 md:py-16 max-w-2xl mx-auto">
        <h1 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
          BOOK A STRATEGY SESSION
        </h1>
        <p className="font-satoshi text-lg text-sage/70 mb-12 max-w-lg">
          30 minutes, $99. Tell me about your project and I will come prepared
          with a plan. The $99 credits toward any retainer.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Honeypot — hidden from humans, bots fill it */}
          <div aria-hidden="true" className="absolute -left-[9999px]">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              tabIndex={-1}
              autoComplete="off"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </div>

          <Input
            id="name"
            label="Your name"
            required
            type="text"
            placeholder="First name is fine"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />

          <Input
            id="email"
            label="Email"
            required
            type="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />

          <Input
            id="website"
            label="Your website URL, if you have one"
            type="url"
            placeholder="https://yoursite.com"
            value={form.website}
            onChange={(e) => set("website", e.target.value)}
          />

          <Textarea
            id="message"
            label="What are you working on?"
            required
            rows={4}
            placeholder="A few sentences about your project, your goals, or where you are stuck."
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
          />

          {error && (
            <p className="font-satoshi text-sm text-red-400">{error}</p>
          )}

          <div>
            <Button
              type="submit"
              variant="primary"
              size="xl"
              disabled={submitting}
              className="w-full"
            >
              {submitting ? "One sec..." : "Book Your Session / $99"}
            </Button>
            <p className="font-satoshi text-sm text-sage/50 text-center mt-4">
              You will pick a time on the next page. The session fee credits
              toward ongoing work if we move forward together.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}

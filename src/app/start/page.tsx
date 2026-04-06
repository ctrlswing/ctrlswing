"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Check, CheckCircle2, ArrowLeft } from "lucide-react";
import { track } from "@vercel/analytics";
import { submitLead } from "./actions";
import {
  type LeadFormData,
  initialFormData,
  statusOptions,
  needsOptions,
  timelineOptions,
  contactFields,
} from "./constants";

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 4;

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return formData.currentStatus !== "";
      case 2:
        return formData.needs.length > 0;
      case 3:
        return formData.timeline !== "";
      case 4:
        return (
          formData.name.trim() !== "" &&
          formData.businessName.trim() !== "" &&
          formData.businessDesc.trim() !== "" &&
          formData.email.trim() !== ""
        );
      default:
        return false;
    }
  }

  function nextStep() {
    if (step < totalSteps) {
      const nextStepNum = step + 1;
      track("form_step", { step: nextStepNum });
      setStep(nextStepNum);
    }
  }

  function goBack() {
    if (step > 1) setStep(step - 1);
  }

  function toggleNeed(need: string) {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  }

  async function handleSubmit() {
    setSubmitting(true);
    const result = await submitLead(formData);
    setSubmitting(false);
    if (result.success) {
      track("form_submitted", {
        timeline: formData.timeline,
        needs: formData.needs.join(","),
        status: formData.currentStatus,
      });
      setStep(5);
    } else {
      track("form_error");
      setError("Something went wrong. Try again, or email me directly at jackson@ctrlswing.com");
    }
  }

  return (
    <div className="min-h-screen bg-charcoal text-white font-satoshi relative">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 w-full flex items-center justify-between p-6 md:px-12 md:py-8">
        <div className="flex items-center gap-6">
          {step > 1 && step <= totalSteps && (
            <button
              onClick={goBack}
              className="text-sage hover:text-yellow transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <Link
            href="/"
            className="font-anton text-2xl uppercase tracking-wide flex items-baseline text-white"
          >
            CTRLSWING<span className="text-yellow">.</span>
          </Link>
        </div>
        {step <= totalSteps && (
          <div className="font-satoshi text-sm text-sage font-medium tracking-wide">
            Step {step} of {totalSteps}
          </div>
        )}
      </header>

      {/* Progress bar */}
      {step <= totalSteps && (
        <div className="relative z-20 w-full px-6 md:px-12">
          <div className="h-1 bg-sage/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 py-12 w-full">
        <div className="w-full max-w-2xl mx-auto">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h1 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  Where are you at right now?
                </h1>
                <p className="font-satoshi text-lg text-sage">
                  Takes about 2 minutes. No commitment.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {statusOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`group relative block cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                      formData.currentStatus === option.value
                        ? "border-l-4 border-yellow bg-darkgray"
                        : "border-sage/10 bg-charcoal/50 hover:border-l-4 hover:border-yellow hover:bg-darkgray"
                    }`}
                  >
                    <input
                      type="radio"
                      name="current_status"
                      value={option.value}
                      className="sr-only"
                      checked={formData.currentStatus === option.value}
                      onChange={() => {
                        setFormData((prev) => ({
                          ...prev,
                          currentStatus: option.value,
                        }));
                        track("form_step", { step: 2 });
                        setTimeout(() => setStep(2), 300);
                      }}
                    />
                    <span className="font-satoshi text-lg text-white font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>

              <p className="font-satoshi text-sm text-sage mb-10 text-center">
                No wrong answers. This just helps me understand where
                you&apos;re starting from.
              </p>

              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className={`w-full font-anton uppercase text-xl py-5 rounded-xl transition-all duration-300 ${
                  canProceed()
                    ? "bg-yellow text-charcoal hover:bg-white"
                    : "bg-yellow/50 text-charcoal/50 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  What are you looking for?
                </h2>
                <p className="font-satoshi text-lg text-sage">
                  Pick all that apply.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {needsOptions.map((option) => {
                  const isSelected = formData.needs.includes(option.value);
                  return (
                    <label
                      key={option.value}
                      className={`group relative flex cursor-pointer items-center justify-between rounded-xl border p-6 transition-all duration-300 ${
                        isSelected
                          ? "border-yellow bg-darkgray border-l-4"
                          : "border-sage/10 bg-charcoal/50 hover:border-sage/40 hover:bg-darkgray"
                      }`}
                    >
                      <span className="font-satoshi text-lg text-white font-medium pr-4">
                        {option.label}
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isSelected}
                        onChange={() => toggleNeed(option.value)}
                      />
                      <div
                        className={`h-6 w-6 shrink-0 rounded-md border flex items-center justify-center transition-colors ${
                          isSelected ? "border-yellow bg-yellow" : "border-sage/30"
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 text-charcoal" />}
                      </div>
                    </label>
                  );
                })}

                {(() => {
                  const isAllSelected = formData.needs.includes("all");
                  return (
                    <label
                      className={`group relative flex cursor-pointer items-center justify-between rounded-xl border-2 p-6 transition-all duration-300 ${
                        isAllSelected
                          ? "border-yellow bg-yellow/10 border-l-4"
                          : "border-yellow/20 bg-yellow/5 hover:border-yellow/50 hover:bg-yellow/10"
                      }`}
                    >
                      <span className="font-satoshi text-lg text-yellow font-bold pr-4">
                        All of it. The whole system.
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={isAllSelected}
                        onChange={() => toggleNeed("all")}
                      />
                      <div
                        className={`h-6 w-6 shrink-0 rounded-md border flex items-center justify-center transition-colors ${
                          isAllSelected ? "border-yellow bg-yellow" : "border-yellow/50"
                        }`}
                      >
                        {isAllSelected && <Check className="w-4 h-4 text-charcoal" />}
                      </div>
                    </label>
                  );
                })()}
              </div>

              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className={`w-full font-anton uppercase text-xl py-5 rounded-xl transition-all duration-300 ${
                  canProceed()
                    ? "bg-yellow text-charcoal hover:bg-white"
                    : "bg-yellow/50 text-charcoal/50 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  How soon do you want to get started?
                </h2>
              </div>

              <div className="space-y-4 mb-10">
                <label
                  className={`group relative block cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                    formData.timeline === "yesterday"
                      ? "border-l-4 border-yellow bg-darkgray"
                      : "border-sage/10 bg-charcoal/50 hover:border-l-4 hover:border-yellow hover:bg-darkgray"
                  }`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value="yesterday"
                    className="sr-only"
                    checked={formData.timeline === "yesterday"}
                    onChange={() => {
                      setFormData((prev) => ({
                        ...prev,
                        timeline: "yesterday",
                      }));
                      track("form_step", { step: 4, timeline: "yesterday" });
                      setTimeout(() => setStep(4), 300);
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <Zap className="text-yellow w-5 h-5" />
                    <span className="font-satoshi text-lg text-white font-bold">
                      Yesterday
                    </span>
                  </div>
                </label>

                {timelineOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`group relative block cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                      formData.timeline === option.value
                        ? "border-l-4 border-yellow bg-darkgray"
                        : "border-sage/10 bg-charcoal/50 hover:border-l-4 hover:border-yellow hover:bg-darkgray"
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeline"
                      value={option.value}
                      className="sr-only"
                      checked={formData.timeline === option.value}
                      onChange={() => {
                        setFormData((prev) => ({
                          ...prev,
                          timeline: option.value,
                        }));
                        track("form_step", { step: 4, timeline: option.value });
                        setTimeout(() => setStep(4), 300);
                      }}
                    />
                    <span className="font-satoshi text-lg text-white font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>

              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className={`w-full font-anton uppercase text-xl py-5 rounded-xl transition-all duration-300 ${
                  canProceed()
                    ? "bg-yellow text-charcoal hover:bg-white"
                    : "bg-yellow/50 text-charcoal/50 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  Tell me about you.
                </h2>
              </div>

              {/* Honeypot — hidden from humans, bots fill it */}
              <div aria-hidden="true" className="absolute -left-[9999px]">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, website: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-6 mb-12">
                {contactFields.map((field) => (
                  <div key={field.key} className="relative">
                    <label
                      htmlFor={field.key}
                      className={`absolute left-0 font-satoshi transition-all duration-200 pointer-events-none ${
                        formData[field.key]
                          ? "text-xs text-yellow -top-2"
                          : "text-lg text-sage top-4"
                      }`}
                    >
                      {field.label}{field.required && " *"}
                    </label>
                    <input
                      id={field.key}
                      type={field.type}
                      required={field.required}
                      value={formData[field.key]}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          [field.key]: e.target.value,
                        }))
                      }
                      className="w-full bg-transparent border-0 border-b border-sage/20 py-4 text-white font-satoshi text-lg focus:ring-0 focus:border-yellow focus:outline-none transition-colors"
                    />
                  </div>
                ))}
              </div>

              {error && (
                <p className="text-red-400 font-satoshi text-sm text-center mb-4">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || submitting}
                className={`w-full font-anton uppercase text-xl py-5 rounded-xl transition-all duration-300 ${
                  canProceed() && !submitting
                    ? "bg-yellow text-charcoal hover:bg-white hover:-translate-y-1 shadow-[0_4px_20px_rgb(255,225,124,0.2)]"
                    : "bg-yellow/50 text-charcoal/50 cursor-not-allowed"
                }`}
              >
                {submitting ? "Sending..." : "SEND IT OVER"}
              </button>
            </div>
          )}

          {/* STEP 5: CONFIRMATION */}
          {step === 5 && (
            <div className="flex flex-col items-center text-center w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-8">
                <CheckCircle2 className="w-16 h-16 text-yellow" />
              </div>

              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
                Got it. I&apos;ll be in touch within 24 hours.
              </h2>

              <p className="font-satoshi text-lg text-sage mb-12 max-w-lg">
                I&apos;ll review what you sent and get back to you with a scope,
                timeline, and price. No pitch deck. No sales call. Just a
                straight answer.
              </p>

              {/* Case study card */}
              <div className="w-full max-w-md bg-darkgray border border-sage/10 rounded-xl p-6 mb-12">
                <p className="font-satoshi text-xs text-sage uppercase tracking-wider mb-4">
                  While you wait, here&apos;s what a project looks like
                </p>
                {/* Browser frame with screenshot */}
                <div className="bg-charcoal rounded-lg mb-5 overflow-hidden border border-sage/10">
                  <div className="h-6 bg-darkgray border-b border-sage/10 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src="/case-studies/dtjj.webp"
                      alt="Downtown BJJ website"
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="font-anton text-xl uppercase text-white mb-1">
                  Downtown BJJ
                </h3>
                <p className="font-satoshi text-sm text-sage mb-3">
                  San Diego
                </p>
                <p className="font-satoshi font-bold text-white text-sm border-l-2 border-yellow pl-3">
                  &ldquo;Built from scratch in one day.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-6 text-sage">
                <Link
                  href="/"
                  className="font-satoshi text-sm hover:text-yellow transition-colors"
                >
                  Back to ctrlswing.com
                </Link>
                <span className="text-sage/30">&middot;</span>
                <a
                  href="https://x.com/ctrlswing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-satoshi text-sm hover:text-yellow transition-colors"
                >
                  Follow on X
                </a>
                <span className="text-sage/30">&middot;</span>
                <a
                  href="https://www.linkedin.com/in/ctrlswing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-satoshi text-sm hover:text-yellow transition-colors"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

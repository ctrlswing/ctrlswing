"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, CheckCircle2, Download } from "lucide-react";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";

type BuildData = {
  workType: string;
  workflow: string;
  currentProcess: string;
  email: string;
  website: string; // honeypot
};

const initialData: BuildData = {
  workType: "",
  workflow: "",
  currentProcess: "",
  email: "",
  website: "",
};

const workTypes = [
  { value: "marketer", label: "Marketer" },
  { value: "entrepreneur", label: "Entrepreneur" },
  { value: "agency_owner", label: "Agency owner" },
  { value: "builder", label: "Builder / developer" },
  { value: "other", label: "Other" },
];

export default function BuildPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BuildData>(initialData);
  const [generating, setGenerating] = useState(false);
  const [skillContent, setSkillContent] = useState("");
  const [streamDone, setStreamDone] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const outputRef = useRef<HTMLPreElement>(null);

  const totalSteps = 4;

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [skillContent]);

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return data.workType !== "";
      case 2:
        return data.workflow.trim().length > 10;
      case 3:
        return data.currentProcess.trim().length > 10;
      case 4:
        return data.email.trim() !== "" && data.email.includes("@");
      default:
        return false;
    }
  }

  function goBack() {
    if (step > 1 && step <= totalSteps) setStep(step - 1);
  }

  async function handleGenerate() {
    if (data.website) {
      // Honeypot filled - bot detected, fake success
      setEmailSubmitted(true);
      setStep(5);
      return;
    }

    setEmailLoading(true);

    // TODO: Wire up Kit (ConvertKit) API for email capture
    // Tag with "skill-builder" + workType
    await new Promise((resolve) => setTimeout(resolve, 500));

    setEmailSubmitted(true);
    setEmailLoading(false);
    setStep(5);
    setGenerating(true);

    track("skill_builder_submitted", {
      workType: data.workType,
    });

    try {
      const res = await fetch("/api/generate-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workType: data.workType,
          workflow: data.workflow,
          currentProcess: data.currentProcess,
        }),
      });

      if (!res.ok) throw new Error("Generation failed");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No response body");

      let content = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        content += chunk;
        setSkillContent(content);
      }

      setStreamDone(true);
      setGenerating(false);
      track("skill_builder_generated");
    } catch {
      setGenerating(false);
      setStreamDone(true);
      if (!skillContent) {
        setSkillContent(
          "# Generation Error\n\nSomething went wrong generating your skill. Please try again or email jackson@ctrlswing.com for help."
        );
      }
    }
  }

  function downloadSkill() {
    const blob = new Blob([skillContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Skill.md";
    a.click();
    URL.revokeObjectURL(url);
    track("skill_builder_downloaded");
  }

  return (
    <div className="min-h-screen bg-charcoal text-white font-satoshi relative">
      <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-20 w-full flex items-center justify-between p-6 md:px-12 md:py-8">
        <div className="flex items-center gap-6">
          {step > 1 && step <= totalSteps && (
            <button
              onClick={goBack}
              aria-label="Go back"
              className="text-sage hover:text-yellow transition-colors duration-200 p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i < step
                      ? "w-8 bg-yellow"
                      : "w-4 bg-sage/20"
                  }`}
                />
              ))}
            </div>
            <span className="font-satoshi text-sm text-sage font-medium tracking-wide">
              {step}/{totalSteps}
            </span>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 py-12 w-full">
        <div className="w-full max-w-2xl mx-auto">
          {/* STEP 1: What kind of work */}
          {step === 1 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h1 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  What kind of work do you do?
                </h1>
                <p className="font-satoshi text-lg text-sage">
                  3 quick questions, then AI builds your custom skill. Takes about 60 seconds.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {workTypes.map((option) => (
                  <label
                    key={option.value}
                    className={`group relative block cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                      data.workType === option.value
                        ? "border-l-4 border-yellow bg-darkgray"
                        : "border-sage/10 bg-charcoal/50 hover:border-l-4 hover:border-yellow hover:bg-darkgray"
                    }`}
                  >
                    <input
                      type="radio"
                      name="work_type"
                      value={option.value}
                      className="sr-only"
                      checked={data.workType === option.value}
                      onChange={() => {
                        setData((prev) => ({
                          ...prev,
                          workType: option.value,
                        }));
                        track("build_step", { step: 2 });
                        setTimeout(() => setStep(2), 300);
                      }}
                    />
                    <span className="font-satoshi text-lg text-white font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: What workflow */}
          {step === 2 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  What workflow do you want to turn into a skill?
                </h2>
                <p className="font-satoshi text-lg text-sage">
                  Describe it in a sentence or two.
                </p>
              </div>

              <div className="mb-10">
                <label htmlFor="workflow" className="sr-only">
                  Workflow description
                </label>
                <textarea
                  id="workflow"
                  value={data.workflow}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, workflow: e.target.value }))
                  }
                  placeholder="e.g. Writing ad creative for new product launches based on customer research"
                  rows={4}
                  className="w-full min-h-[120px] bg-transparent border border-sage/20 rounded-xl p-6 text-white font-satoshi text-lg placeholder:text-sage/50 hover:border-sage/40 focus:border-yellow focus:outline-none focus:ring-0 transition-colors resize-none"
                />
              </div>

              <Button
                type="button"
                onClick={() => {
                  track("build_step", { step: 3 });
                  setStep(3);
                }}
                disabled={!canProceed()}
                variant="primary"
                size="xl"
                fullWidth
              >
                Next
              </Button>
            </div>
          )}

          {/* STEP 3: Current process */}
          {step === 3 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  How do you currently do this?
                </h2>
                <p className="font-satoshi text-lg text-sage">
                  Walk me through your manual process.
                </p>
              </div>

              <div className="mb-10">
                <label htmlFor="currentProcess" className="sr-only">
                  Current process description
                </label>
                <textarea
                  id="currentProcess"
                  value={data.currentProcess}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      currentProcess: e.target.value,
                    }))
                  }
                  placeholder="e.g. I spend 30 minutes gathering reviews, then write a brief, then iterate on headlines and body copy manually in a doc"
                  rows={5}
                  className="w-full min-h-[120px] bg-transparent border border-sage/20 rounded-xl p-6 text-white font-satoshi text-lg placeholder:text-sage/50 hover:border-sage/40 focus:border-yellow focus:outline-none focus:ring-0 transition-colors resize-none"
                />
              </div>

              <Button
                type="button"
                onClick={() => {
                  track("build_step", { step: 4 });
                  setStep(4);
                }}
                disabled={!canProceed()}
                variant="primary"
                size="xl"
                fullWidth
              >
                Next
              </Button>
            </div>
          )}

          {/* STEP 4: Email */}
          {step === 4 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-10">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  Enter your email to get your custom skill.
                </h2>
                <p className="font-satoshi text-lg text-sage">
                  The builder will generate a Skill.md tailored to your
                  workflow.
                </p>
              </div>

              {/* Honeypot */}
              <div aria-hidden="true" className="absolute -left-[9999px]">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={data.website}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, website: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-6 mb-10">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-0 font-satoshi transition-all duration-200 pointer-events-none ${
                      data.email
                        ? "text-xs text-yellow -top-2"
                        : "text-lg text-sage top-4"
                    }`}
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full bg-transparent border-0 border-b border-sage/20 py-4 text-white font-satoshi text-lg focus:ring-0 focus:border-yellow focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <Button
                type="button"
                onClick={handleGenerate}
                disabled={!canProceed() || emailLoading}
                variant="primary"
                size="xl"
                fullWidth
              >
                {emailLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </span>
                ) : (
                  "BUILD MY SKILL"
                )}
              </Button>

              <p className="font-satoshi text-sm text-sage/60 text-center mt-4">
                No spam. Just your custom skill file.
              </p>
            </div>
          )}

          {/* STEP 5: Generation + Download */}
          {step === 5 && (
            <div className="flex flex-col w-full animate-[fadeIn_0.3s_ease-in-out]">
              <div className="mb-8" aria-live="polite">
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-4">
                  {streamDone
                    ? "Your skill is ready."
                    : "Building your skill..."}
                </h2>
                {generating && (
                  <div className="flex items-center gap-3" aria-busy="true">
                    <Loader2 className="w-5 h-5 text-yellow animate-spin" aria-hidden="true" />
                    <p className="font-satoshi text-lg text-sage">
                      Generating your custom Skill.md...
                    </p>
                  </div>
                )}
                {streamDone && !generating && (
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow" />
                    <p className="font-satoshi text-lg text-sage">
                      Generation complete.
                    </p>
                  </div>
                )}
              </div>

              {/* Skill output */}
              <div className="bg-darkgray border border-sage/10 rounded-2xl overflow-hidden mb-8">
                <div className="h-8 bg-charcoal border-b border-sage/10 flex items-center px-4 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="ml-3 font-satoshi text-xs text-sage/60">
                    Skill.md
                  </span>
                </div>
                <pre
                  ref={outputRef}
                  className="p-6 font-mono text-sm text-sage/90 whitespace-pre-wrap overflow-y-auto max-h-[400px] leading-relaxed"
                >
                  {skillContent || "Waiting for generation to start..."}
                  {generating && (
                    <span className="inline-block w-2 h-5 bg-yellow animate-pulse ml-0.5" />
                  )}
                </pre>
              </div>

              {/* Actions */}
              {streamDone && (
                <div className="space-y-4">
                  <Button
                    type="button"
                    onClick={downloadSkill}
                    variant="primary"
                    size="xl"
                    fullWidth
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download your skill
                  </Button>

                  <div className="bg-darkgray border border-sage/10 rounded-2xl p-8 text-center">
                    <h3 className="font-anton text-2xl uppercase mb-3">
                      Want help setting this up?
                    </h3>
                    <p className="font-satoshi text-sage/80 mb-6">
                      Book a 1:1 session. I&apos;ll look at your workflows and
                      we&apos;ll get this skill running together.
                    </p>
                    <Button href="/book" variant="primary-dark" size="lg">
                      Book a session
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-6 text-sage pt-4">
                    <Link
                      href="/"
                      className="font-satoshi text-sm hover:text-yellow transition-colors"
                    >
                      Back to ctrlswing.com
                    </Link>
                    <span className="text-sage/30">&middot;</span>
                    <Link
                      href="/resources"
                      className="font-satoshi text-sm hover:text-yellow transition-colors"
                    >
                      Browse resources
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

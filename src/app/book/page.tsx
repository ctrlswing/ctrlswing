"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function BookPage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
              Book your session.
            </h1>
            <p className="font-anton text-3xl md:text-4xl uppercase leading-[0.9] text-charcoal/60 mb-4">
              $250. 1:1 discovery and guided skill setup.
            </p>
            <p className="font-satoshi text-lg text-charcoal/60 max-w-lg mx-auto">
              You leave with a working skill, a session recording, and my notes.
              Not a PDF. A tool you use every day.
            </p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-16 md:py-20 px-6 bg-charcoal text-white border-b border-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-anton text-3xl uppercase mb-8">
              What you get
            </h2>
            <div className="space-y-6">
              {[
                "Discovery of where skills apply to your business",
                "Guided setup of your first skill or plugin",
                "Session recording and notes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <Check className="text-yellow w-6 h-6 shrink-0 mt-0.5" />
                  <span className="font-satoshi text-lg text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAL.COM EMBED */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <div
              id="cal-embed"
              className="min-h-[500px] bg-charcoal/[0.03] rounded-2xl border border-charcoal/10 overflow-hidden"
            >
              {/* Skeleton loading state for Cal.com embed */}
              <div className="p-8 space-y-6 animate-pulse">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-charcoal/10" />
                  <div className="space-y-2">
                    <div className="h-4 w-40 bg-charcoal/10 rounded" />
                    <div className="h-3 w-24 bg-charcoal/10 rounded" />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={`h-${i}`} className="h-3 bg-charcoal/10 rounded" />
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={`d-${i}`} className="h-10 bg-charcoal/5 rounded" />
                  ))}
                </div>
                <div className="pt-4 space-y-3">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div key={`s-${i}`} className="h-12 bg-charcoal/5 rounded-lg" />
                  ))}
                </div>
              </div>
              <div className="text-center pb-8">
                <p className="font-satoshi text-sm text-charcoal/40">
                  If the calendar doesn&apos;t appear, email me directly at{" "}
                  <a
                    href="mailto:jackson@ctrlswing.com"
                    className="text-charcoal/60 hover:text-charcoal underline underline-offset-4 decoration-yellow transition-colors duration-200"
                  >
                    jackson@ctrlswing.com
                  </a>
                </p>
              </div>
            </div>
            <p className="font-satoshi text-sm text-charcoal/50 text-center mt-6">
              No retainer. No follow-up pitch. One session, one skill, one clear
              next step.
            </p>
          </div>
        </section>

        {/* FALLBACK CTA */}
        <section className="py-16 md:py-20 px-6 bg-charcoal/[0.03] border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-anton text-3xl uppercase mb-4">
              Not sure yet?
            </h3>
            <p className="font-satoshi text-lg text-charcoal/70 mb-8">
              Build a free skill first. See what skills can do for your workflow
              before committing.
            </p>
            <Button href="/build" variant="outline" size="lg">
              Build a free skill
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

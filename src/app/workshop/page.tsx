import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WorkshopForm } from "@/components/workshop-form";
import { GridOverlay } from "@/components/ui/grid-overlay";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Build your first agent skill in one hands-on session. $200/seat, 10 seats, monthly. Bring a workflow. Build a skill. Leave with it running.",
};

const whoItsFor = [
  "Operators who want to automate repetitive work",
  "Business owners who keep hearing about AI but haven't started",
  "Team leads who want their people using skills tomorrow",
  "Anyone curious who learns best by doing",
];

const howItWorks = [
  {
    num: "01",
    title: "You bring a workflow",
    desc: "Pick your most repetitive, time-consuming task. The one you keep saying you'll automate someday. That's what we build.",
  },
  {
    num: "02",
    title: "We build it together",
    desc: "I walk you through turning that workflow into a working agent skill, step by step. You build it on your machine in real time.",
  },
  {
    num: "03",
    title: "You leave with a skill",
    desc: "Not a concept. Not a slide deck. A finished skill you can run in Claude Code on Monday morning.",
  },
];

export default function WorkshopPage() {
  return (
    <div className="flex flex-col">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative bg-grid-light py-24 md:py-32 px-6 border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-6">
                Live Workshop
              </p>
              <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
                Build your first agent skill.{" "}
                <span className="relative inline-block whitespace-nowrap px-2">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-yellow transform rotate-[15deg] z-[-1]" />
                  <span className="relative z-10">In one session.</span>
                </span>
              </h1>
              <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-8">
                A hands-on workshop where you bring a real workflow from your
                business and turn it into a working agent skill before you leave.
                Not a webinar. Not a lecture. You build something real.
              </p>
              <div className="flex flex-wrap justify-center gap-6 font-satoshi text-sm font-medium text-charcoal/60 uppercase tracking-wider">
                <span>$200/seat</span>
                <span className="text-charcoal/30">&bull;</span>
                <span>10 seats</span>
                <span className="text-charcoal/30">&bull;</span>
                <span>Monthly</span>
                <span className="text-charcoal/30">&bull;</span>
                <span>Next date TBD</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-12">
                Who this is for.
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {whoItsFor.map((item, i) => (
                <ScrollReveal key={item} delay={i * 75}>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-charcoal shrink-0 mt-0.5" />
                    <p className="font-satoshi text-lg text-charcoal/80">{item}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <ScrollReveal>
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
                  How it works.
                </h2>
                <p className="font-satoshi text-lg text-charcoal/70 max-w-sm">
                  Three steps. One session. You leave with something you can use.
                </p>
              </ScrollReveal>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-24">
              {howItWorks.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 100}>
                  <div className="relative group flex flex-col md:flex-row gap-8 items-start">
                    <div className="font-anton text-[8rem] leading-none text-yellow/20 group-hover:text-yellow transition-colors duration-500 select-none -mt-4 md:-ml-8 z-0 absolute md:relative top-0 right-0 md:top-auto md:right-auto opacity-30 md:opacity-100">
                      {step.num}
                    </div>
                    <div className="relative z-10 pt-4 md:pt-12">
                      <h3 className="font-anton text-4xl uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                        {step.title}
                      </h3>
                      <p className="font-satoshi text-lg text-charcoal/70 max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING + FORM */}
        <section className="bg-charcoal text-white relative overflow-hidden">
          <GridOverlay />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Pricing side */}
            <div className="p-12 md:p-24 flex flex-col justify-center">
              <ScrollReveal>
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-8">
                  <span className="text-yellow">$200</span> per seat.
                </h2>
              </ScrollReveal>
              <p className="font-satoshi text-lg text-sage/80 mb-10 max-w-lg">
                One afternoon. Bring a workflow. Build a skill. Leave with it
                running. No upsells, no subscription, no catch.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Single session, 2-3 hours, one afternoon",
                  "10 seats per session",
                  "Your own working skill by the end",
                  "Recording of your session",
                  "Follow-up support via email",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow shrink-0" />
                    <p className="font-satoshi text-white/90">{item}</p>
                  </div>
                ))}
              </div>

              <p className="font-satoshi text-sm text-sage/40">
                Sessions run monthly. Next date will be announced to everyone on
                the waitlist.
              </p>
            </div>

            {/* Form side */}
            <div className="p-12 md:p-24 bg-darkgray border-t lg:border-t-0 lg:border-l border-sage/10">
              <h3 className="font-anton text-3xl uppercase mb-2">
                Reserve your seat.
              </h3>
              <p className="font-satoshi text-sage/60 mb-8">
                Fill this out and I&apos;ll follow up with the next session date.
              </p>
              <WorkshopForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

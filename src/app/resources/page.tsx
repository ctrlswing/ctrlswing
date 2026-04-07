import type { Metadata } from "next";
import { Mic, Swords, Brain } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Free Tools",
  description:
    "Free agent skills you can install and use today. Voice Builder, Negotiation Coach, and Strategy Advisor.",
};

const skills = [
  {
    icon: Mic,
    name: "Voice Builder",
    tagline: "Sound like yourself, every time.",
    description:
      "Give it examples of your writing. It analyzes your tone, pacing, and word choices, then builds a voice profile. Use it with any AI tool so your content always sounds like you wrote it.",
    source: "Resource: Voice Builder",
    successMessage: "Check your email for the download link.",
  },
  {
    icon: Swords,
    name: "Negotiation Coach",
    tagline: "Prep before the conversation happens.",
    description:
      "Based on Chris Voss's tactical empathy framework. Tell it about the conversation you are walking into. It gives you calibrated questions, labels, and a game plan. Better than winging it.",
    source: "Resource: Negotiation Coach",
    successMessage: "Check your email for the download link.",
  },
  {
    icon: Brain,
    name: "Strategy Advisor",
    tagline: "Pressure-test your assumptions.",
    description:
      "Modeled after Thrawn and Torinaga. Feed it your plan and it finds the gaps. Not a yes-man. It asks the hard questions before the market does.",
    source: "Resource: Strategy Advisor",
    successMessage: "Check your email for the download link.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 bg-grid-light border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-6">
              Free Tools
            </p>
            <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
              Try a skill. See what happens.
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl">
              Three free agent skills you can install and start using today.
              No account needed. Just your email and you get the download link.
            </p>
          </div>
        </section>

        {/* SKILL CARDS */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-5xl mx-auto space-y-12">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="border border-charcoal/10 rounded-xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="flex-1">
                    <div className="w-12 h-12 rounded-lg bg-yellow/20 flex items-center justify-center mb-6">
                      <skill.icon className="w-6 h-6 text-charcoal" />
                    </div>
                    <h2 className="font-anton text-4xl uppercase leading-[0.9] mb-2">
                      {skill.name}
                    </h2>
                    <p className="font-satoshi text-charcoal/50 text-sm uppercase tracking-wider mb-4">
                      {skill.tagline}
                    </p>
                    <p className="font-satoshi text-lg text-charcoal/70 max-w-xl">
                      {skill.description}
                    </p>
                  </div>

                  <div className="lg:w-80 flex flex-col justify-end">
                    <p className="font-satoshi text-sm text-charcoal/50 mb-3">
                      Enter your email to get the download link.
                    </p>
                    <EmailCapture
                      source={skill.source}
                      buttonText="Get It Free"
                      successMessage={skill.successMessage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORKSHOP CTA */}
        <section className="bg-charcoal text-white py-24 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6 text-yellow">
              Want to build your own?
            </h2>
            <p className="font-satoshi text-lg text-sage/80 mb-10">
              These skills took me 20 minutes each. In the workshop, I teach you the process so you can build skills
              specific to your business.
            </p>
            <a
              href="/workshop"
              className="inline-flex items-center gap-2 bg-yellow text-charcoal font-anton uppercase text-xl px-10 py-5 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_8px_30px_rgb(255,225,124,0.4)]"
            >
              Learn About the Workshop
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

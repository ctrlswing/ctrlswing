import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ResourceCard } from "@/components/resource-card";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Three free agent skills you can start using today. Voice Builder, Negotiation Coach, and Strategy Advisor. Drop your email and they're yours.",
};

const resources = [
  {
    title: "Voice Builder",
    description:
      "Turn any piece of writing into a reusable voice profile. Feed it a blog post, email, or transcript and it extracts your tone, patterns, and vocabulary into a skill that writes like you. Stop starting from scratch every time.",
    resourceName: "Voice Builder Skill",
  },
  {
    title: "Negotiation Coach",
    description:
      "Based on Chris Voss's Never Split the Difference. Give it a negotiation scenario and it coaches you through tactical empathy, calibrated questions, and labeling. Like having a negotiation advisor on call.",
    resourceName: "Negotiation Coach Skill",
  },
  {
    title: "Strategy Advisor",
    description:
      "Walks you through a structured strategy session for any business decision. It asks the right questions, pressure-tests your assumptions, and helps you think through second-order effects before you commit.",
    resourceName: "Strategy Advisor Skill",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 bg-grid-light border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
              Free skills.
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl">
              Three agent skills I built and use regularly. Drop your email and
              I&apos;ll send them over. No catch, no 14-email drip sequence. Just
              the skill.
            </p>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="py-24 md:py-32 px-6 bg-charcoal/[0.02] border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto space-y-8">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </section>

        {/* WORKSHOP UPSELL */}
        <section className="py-24 md:py-32 px-6 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
              Want to build your own?
            </h2>
            <p className="font-satoshi text-lg text-sage/80 mb-10 max-w-xl mx-auto">
              These skills took me 20 minutes each to build. In the workshop, I
              teach you how to do the same thing with your own workflows.
            </p>
            <Link
              href="/workshop"
              className="inline-flex items-center bg-yellow text-charcoal font-anton uppercase text-xl px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_8px_30px_rgb(255,225,124,0.4)]"
            >
              Learn about the workshop
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

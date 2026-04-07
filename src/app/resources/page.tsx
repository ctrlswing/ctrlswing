import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ResourceCard } from "@/components/resource-card";
import { WorkshopCta } from "@/components/workshop-cta";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
            <ScrollReveal>
              <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
                Free skills.
              </h1>
              <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl">
                Three agent skills I built and use regularly. Drop your email and
                I&apos;ll send them over. No catch, no 14-email drip sequence. Just
                the skill.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto space-y-8">
            {resources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 100}>
                <ResourceCard {...resource} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* WORKSHOP UPSELL */}
        <WorkshopCta />
      </main>

      <Footer />
    </div>
  );
}

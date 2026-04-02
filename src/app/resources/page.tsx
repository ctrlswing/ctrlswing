"use client";

import { useState } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { EmailCapture } from "@/components/ui/email-capture";
import { ResourceCard } from "@/components/resource-card";
import { TabBar } from "@/components/ui/tab-bar";
import { resources } from "@/lib/resources";
import type { ResourceType } from "@/lib/resources";

const skillCount = resources.filter((r) => r.type === "skill").length;
const pluginCount = resources.filter((r) => r.type === "plugin").length;
const connectorCount = resources.filter((r) => r.type === "connector").length;

const tabs = [
  { label: `All (${resources.length})`, value: "all" },
  { label: `Skills (${skillCount})`, value: "skill" },
  { label: `Plugins (${pluginCount})`, value: "plugin" },
  { label: `Connectors (${connectorCount})`, value: "connector" },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? resources
      : resources.filter((r) => r.type === (activeTab as ResourceType));

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              size="large"
              subtitle="Skills, plugins, and connectors I've built and use on real work. Download anything. Free."
            >
              Resources
            </SectionHeader>
          </div>
        </section>

        {/* LEAD MAGNET CALLOUT */}
        <section className="py-16 md:py-20 px-6 bg-charcoal text-white border-b border-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.9] mb-3">
                New here? Build your first skill.
              </h2>
              <p className="font-satoshi text-lg text-sage/80 max-w-xl">
                Answer a few questions about your workflow. The builder generates
                a custom Skill.md tailored to your business.
              </p>
            </div>
            <Button href="/build" variant="primary" size="lg" className="shrink-0">
              Build your skill
            </Button>
          </div>
        </section>

        {/* TAB BAR + RESOURCE GRID */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <TabBar
                tabs={tabs}
                defaultValue="all"
                onChange={setActiveTab}
              />
            </div>

            {filtered.length > 0 ? (
              <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_0.3s_ease-in-out]">
                {filtered.map((resource) => (
                  <ResourceCard key={resource.slug} {...resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-satoshi text-lg text-charcoal/60">
                  More coming soon. Build a custom skill above to get started.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <section className="py-24 md:py-32 px-6 bg-yellow border-b border-charcoal/10">
          <div className="max-w-xl mx-auto">
            <EmailCapture
              headline="Get new resources first"
              description="I publish new skills and tools after every workshop. Drop your email and I'll send them to you directly."
              buttonText="Subscribe"
              microcopy="No spam. Just tools. Unsubscribe anytime."
              variant="brand"
            />
          </div>
        </section>

        {/* SESSION CTA */}
        <section className="py-24 md:py-32 px-6 bg-charcoal/[0.03] border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
              Want hands-on help?
            </h2>
            <p className="font-satoshi text-xl text-charcoal/70 max-w-xl mx-auto mb-10">
              Book a 1:1 session. I&apos;ll look at your workflows and
              we&apos;ll build your first skill together.
            </p>
            <Button href="/book" variant="primary" size="xl">
              Book a session
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

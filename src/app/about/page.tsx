import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* INTRO */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <SectionHeader size="large">
              About Jackson
            </SectionHeader>
            <div className="mt-12 space-y-6">
              <p className="font-satoshi text-xl text-charcoal/80 max-w-2xl">
                I build AI skills and plugins for marketers, founders, and
                operators. I&apos;m a Skills/AI mentor in the Vibe Marketers
                community, where I run skills labs twice a month showing how to
                build tools that do real work.
              </p>
              <p className="font-satoshi text-xl text-charcoal/80 max-w-2xl">
                Based in San Diego, CA.
              </p>
            </div>
          </div>
        </section>

        {/* BACKGROUND */}
        <section className="py-24 md:py-32 px-6 bg-charcoal text-white border-b border-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16">
              Background
            </h2>
            <div className="space-y-6">
              <p className="font-satoshi text-xl text-sage/80 max-w-2xl">
                I&apos;ve managed paid search and shopping ads across 25+ DTC
                brands. E-commerce, lead gen, local services. Before that, I
                wore every hat a small business can hand you.
              </p>
              <p className="font-satoshi text-xl text-sage/80 max-w-2xl">
                The tools I build come from that work. Not side projects. Not
                weekend experiments. Real tools for real accounts with real
                budgets.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT I DO NOW */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16">
              What I do now
            </h2>
            <div className="space-y-6">
              <p className="font-satoshi text-xl text-charcoal/80 max-w-2xl">
                I build Claude Code plugins and skills that automate marketing
                workflows. Creative strategy, frontend design, media buying.
                Each one is open source and built from patterns I use on client
                work daily.
              </p>
              <p className="font-satoshi text-xl text-charcoal/80 max-w-2xl">
                I teach these workflows in the Vibe Marketers community through
                bi-weekly skills labs. Live builds, not slide decks. 3,200+
                members and growing.
              </p>
            </div>
          </div>
        </section>

        {/* THE TOOLS */}
        <section className="py-24 md:py-32 px-6 bg-charcoal/[0.03] border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16">
              The tools
            </h2>
            <div className="space-y-8">
              {[
                {
                  name: "Creative Strategist",
                  desc: "Customer research, persona building, and ad angle generation. Pulls real review data to fuel creative strategy.",
                  href: "/resources/creative-strategist",
                },
                {
                  name: "Frontend Designer",
                  desc: "Design system generation, component crafting, visual review, and responsive audits. Build polished UI without leaving your editor.",
                  href: "/resources/frontend-designer",
                },
                {
                  name: "Media Buyer",
                  desc: "Google Ads and Bing Ads management from Claude Code. Query, analyze, and optimize campaigns with natural language.",
                  href: "/resources/media-buyer",
                },
              ].map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  className="group block border-l-4 border-yellow pl-6 py-2 -ml-px hover:border-l-[6px] hover:bg-yellow/5 rounded-r-lg transition-all duration-300"
                >
                  <h3 className="font-anton text-2xl uppercase mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    {tool.name}
                  </h3>
                  <p className="font-satoshi text-lg text-charcoal/70">
                    {tool.desc}
                  </p>
                </a>
              ))}
            </div>
            <div className="mt-12">
              <Button href="/resources" variant="outline" size="lg">
                Browse all resources
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 px-6 bg-yellow text-charcoal relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="font-anton text-[20vw] leading-none opacity-5 whitespace-nowrap select-none">
              CTRLSWING
            </div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              Let&apos;s build something.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" variant="primary-inverse" size="xl">
                Book a session
              </Button>
              <a
                href="https://www.skool.com/vibe-marketers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center font-anton uppercase text-xl px-8 py-4 rounded-lg border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                Join Vibe Marketers
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Nav />

      <main id="main" className="flex-1 pt-20">

        {/* ── SECTION 1: HERO ── */}
        <section
          aria-label="Introduction"
          className="relative bg-charcoal bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] py-24 md:py-36 px-6 flex flex-col items-center text-center overflow-hidden border-b border-sage/10"
        >
          <p className="font-satoshi text-xs text-sage/50 uppercase tracking-widest font-medium mb-6">
            Claude Code Plugins
          </p>
          <h1 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-5xl mx-auto mb-8 text-white">
            Claude Code Plugins for Marketers Who Ship.
          </h1>
          <p className="font-satoshi text-lg md:text-xl text-sage/70 max-w-xl mx-auto mb-10">
            Strategy frameworks, content engines, and frontend workflows. Built
            from real client projects. Ready to run in your terminal.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-10">
            <Button href="/tools" variant="primary" size="xl">
              Browse Tools
            </Button>
            <Button href="/start" variant="ghost">
              Book a Strategy Session / $99
            </Button>
          </div>

          <p className="font-satoshi text-xs text-sage/40 max-w-sm mx-auto">
            Built by Jackson Dean. 4 years of client work turned into tools you
            can use today.
          </p>
        </section>

        {/* ── SECTION 2: FEATURED PLUGINS ── */}
        <section
          aria-label="Featured plugins"
          className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <SectionHeader
                heading="The Tools"
                subtitle="Full plugins bundle strategy, research, and build steps into one workflow. Individual skills handle a single job."
                variant="light"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Creative Strategist Engine */}
              <div className="bg-charcoal text-white rounded-2xl p-8 md:p-10 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-satoshi text-xs text-sage/50 uppercase tracking-wider font-medium mb-1">
                      Plugin
                    </p>
                    <h3 className="font-anton text-3xl uppercase text-yellow leading-tight">
                      Creative Strategist Engine
                    </h3>
                  </div>
                  <div className="font-anton text-2xl text-white shrink-0 ml-4">
                    $40
                  </div>
                </div>
                <p className="font-satoshi text-xs text-sage/50 uppercase tracking-wider mb-6">
                  4 skills + research agent
                </p>
                <p className="font-satoshi text-sage/80 text-base leading-relaxed mb-8 flex-1">
                  A complete research-to-strategy pipeline. Give it a business
                  and it returns audience personas, content angles, keyword
                  clusters, and a publishing calendar. The same workflow I ran
                  for every client project, packaged as a plugin.
                </p>
                <div className="space-y-0 mb-8">
                  <p className="font-satoshi text-xs text-sage/40 uppercase tracking-wider mb-3">
                    What you get
                  </p>
                  {[
                    "Audience personas with pain points, goals, and language patterns",
                    "Content angles mapped to each persona",
                    "Keyword clusters grouped by intent",
                    "A 30-day publishing calendar with topics, formats, and distribution channels",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 py-2.5 border-t border-sage/10"
                    >
                      <span className="text-yellow mt-0.5 shrink-0 text-sm">+</span>
                      <span className="font-satoshi text-sm text-sage/70">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Button href="/tools" variant="primary" size="lg" className="w-full">
                  Get the Plugin / $40
                </Button>
              </div>

              {/* Frontend Designer */}
              <div className="bg-white border border-charcoal/10 rounded-2xl p-8 md:p-10 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-satoshi text-xs text-charcoal/40 uppercase tracking-wider font-medium mb-1">
                      Plugin
                    </p>
                    <h3 className="font-anton text-3xl uppercase leading-tight">
                      Frontend Designer
                    </h3>
                  </div>
                  <div className="font-anton text-2xl shrink-0 ml-4">$40</div>
                </div>
                <p className="font-satoshi text-xs text-charcoal/40 uppercase tracking-wider mb-6">
                  8 skills + 2 agents
                </p>
                <p className="font-satoshi text-charcoal/70 text-base leading-relaxed mb-8 flex-1">
                  Component-first frontend builds inside Claude Code. Generates
                  design systems, page layouts, and production-ready components.
                  It follows the same approach I used to build sites that
                  actually convert, not just look good in a screenshot.
                </p>
                <div className="space-y-0 mb-8">
                  <p className="font-satoshi text-xs text-charcoal/40 uppercase tracking-wider mb-3">
                    What you get
                  </p>
                  {[
                    "Design system tokens matched to your brand",
                    "Page layouts with semantic HTML and responsive structure",
                    "Individual components ready to drop into your project",
                    "Built-in accessibility and performance defaults",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 py-2.5 border-t border-charcoal/10"
                    >
                      <span className="text-yellow mt-0.5 shrink-0 text-sm">+</span>
                      <span className="font-satoshi text-sm text-charcoal/60">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Button href="/tools" variant="secondary" size="lg" className="w-full">
                  Get the Plugin / $40
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="font-satoshi text-charcoal/60 mb-5">
                Need just one piece? Individual skills start at $20. Vibe
                Marketer members get 50% off everything.
              </p>
              <Button href="/tools" variant="text-link">
                Browse All Tools
              </Button>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: HOW IT WORKS ── */}
        <section
          aria-label="How it works"
          className="py-24 md:py-32 px-6 bg-charcoal text-white border-b border-sage/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-16">
              <SectionHeader
                heading="Install. Run. Ship."
                variant="dark"
                headingClassName="text-yellow"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {[
                {
                  num: "01",
                  title: "Install the plugin",
                  body: "One command in your terminal. The plugin registers its skills and commands with Claude Code automatically. No config files, no setup wizard.",
                },
                {
                  num: "02",
                  title: "Run a command",
                  body: "Tell Claude what you need. The plugin's skills activate in context, pulling from tested frameworks to generate strategy docs, content plans, or frontend components.",
                },
                {
                  num: "03",
                  title: "Ship the output",
                  body: "You get real files in your project directory. Markdown strategy docs, HTML components, structured content plans. Review them, adjust what you want, and use them.",
                },
              ].map((step) => (
                <div key={step.num} className="flex flex-col">
                  <div className="font-anton text-5xl text-yellow/20 leading-none mb-4 select-none">
                    {step.num}
                  </div>
                  <h3 className="font-anton text-2xl uppercase mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="font-satoshi text-sage/70 text-base leading-relaxed">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-satoshi text-sm text-sage/50">
              New to Claude Code plugins?{" "}
              <Link
                href="/blog/getting-started-with-plugins"
                className="text-yellow underline underline-offset-4 hover:text-white transition-colors duration-200"
              >
                Here&apos;s a quick setup guide.
              </Link>
            </p>
          </div>
        </section>

        {/* ── SECTION 4: CASE STUDIES (stat blocks, no screenshots) ── */}
        <section
          id="case-studies"
          aria-label="Case studies"
          className="py-24 md:py-32 px-6 bg-[image:var(--background-image-grid-light)] bg-[size:40px_40px] border-b border-charcoal/10"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-3xl">
              <SectionHeader
                heading="Built from Real Projects. Now Available as Tools."
                subtitle="Every plugin started as a workflow I developed for a paying client. Here is what those workflows produced."
                variant="light"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Valle Ballet */}
              <div className="bg-white rounded-2xl p-8 border border-charcoal/10 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <p className="font-satoshi text-xs text-charcoal/40 uppercase tracking-wider font-medium mb-5">
                  Valle Ballet
                </p>
                <div className="flex-1 space-y-5 mb-8">
                  <div>
                    <div className="font-anton text-5xl text-charcoal leading-none">14</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">local SEO pages</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-anton text-5xl text-charcoal leading-none">38</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">total pages built</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-satoshi text-sm font-medium text-charcoal">Real bookings</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">from organic Google search</div>
                  </div>
                </div>
                <p className="font-satoshi text-xs text-charcoal/50 border-l-4 border-yellow pl-3 mb-6 leading-relaxed">
                  The frontend workflow I used here became the Frontend Designer plugin.
                </p>
                <Link href="/work/valle-ballet" className="font-satoshi text-sm font-medium text-charcoal hover:text-yellow transition-colors duration-200">
                  See the work &rarr;
                </Link>
              </div>

              {/* Downtown BJJ */}
              <div className="bg-white rounded-2xl p-8 border border-charcoal/10 flex flex-col hover:shadow-xl transition-shadow duration-300 sm:mt-8">
                <p className="font-satoshi text-xs text-charcoal/40 uppercase tracking-wider font-medium mb-5">
                  Downtown BJJ
                </p>
                <div className="flex-1 space-y-5 mb-8">
                  <div>
                    <div className="font-anton text-5xl text-charcoal leading-none">21</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">blog posts published</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-satoshi text-sm font-medium text-charcoal">Interactive schedule</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">replacing uncrawlable PDF</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-anton text-5xl text-charcoal leading-none">2x</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">faster page load</div>
                  </div>
                </div>
                <p className="font-satoshi text-xs text-charcoal/50 border-l-4 border-yellow pl-3 mb-6 leading-relaxed">
                  The research workflow that shaped this project became the Creative Strategist Engine.
                </p>
                <Link href="/work/downtown-bjj" className="font-satoshi text-sm font-medium text-charcoal hover:text-yellow transition-colors duration-200">
                  See the work &rarr;
                </Link>
              </div>

              {/* Born Simple */}
              <div className="bg-white rounded-2xl p-8 border border-charcoal/10 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <p className="font-satoshi text-xs text-charcoal/40 uppercase tracking-wider font-medium mb-5">
                  Born Simple
                </p>
                <div className="flex-1 space-y-5 mb-8">
                  <div>
                    <div className="font-anton text-2xl text-charcoal leading-tight">Squarespace &rarr; Custom</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">full site migration</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-satoshi text-sm font-medium text-charcoal">Significant load time improvement</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">post-migration</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-satoshi text-sm font-medium text-charcoal">Conversion-focused pages</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">for a national CPG brand</div>
                  </div>
                </div>
                <p className="font-satoshi text-xs text-charcoal/50 border-l-4 border-yellow pl-3 mb-6 leading-relaxed">
                  The component-first approach became part of the Frontend Designer skill set.
                </p>
                <Link href="/work/born-simple" className="font-satoshi text-sm font-medium text-charcoal hover:text-yellow transition-colors duration-200">
                  See the work &rarr;
                </Link>
              </div>

              {/* Fungushead */}
              <div className="bg-white rounded-2xl p-8 border border-charcoal/10 flex flex-col hover:shadow-xl transition-shadow duration-300 sm:mt-8">
                <p className="font-satoshi text-xs text-charcoal/40 uppercase tracking-wider font-medium mb-5">
                  Fungushead
                </p>
                <div className="flex-1 space-y-5 mb-8">
                  <div>
                    <div className="font-anton text-5xl text-charcoal leading-none">23+</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">SEO articles</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-satoshi text-sm font-medium text-charcoal">Full email system on Drip</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">automated campaigns</div>
                  </div>
                  <div className="border-t border-charcoal/10 pt-5">
                    <div className="font-satoshi text-sm font-medium text-charcoal">Multi-channel</div>
                    <div className="font-satoshi text-sm text-charcoal/50 mt-1">Google Ads, Pinterest, brand guidelines</div>
                  </div>
                </div>
                <p className="font-satoshi text-xs text-charcoal/50 border-l-4 border-yellow pl-3 mb-6 leading-relaxed">
                  The persona and angle generation tools came directly from this project.
                </p>
                <Link href="/work/fungushead" className="font-satoshi text-sm font-medium text-charcoal hover:text-yellow transition-colors duration-200">
                  See the work &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: STRATEGY SESSION (secondary, outlined button) ── */}
        <section
          aria-label="Strategy session"
          className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
              Want Help Putting It Together?
            </h2>
            <p className="font-satoshi text-lg text-charcoal/70 mb-3 leading-relaxed">
              The tools handle execution. But if you need someone to look at
              your specific situation and tell you where to start, book a
              strategy session. 30 minutes, $99. We will go through your site,
              your goals, and your biggest gaps. You will leave with a
              prioritized plan.
            </p>
            <p className="font-satoshi text-base text-charcoal/50 mb-10">
              The $99 credits toward any retainer if you decide to work
              together.
            </p>
            <Button href="/start" variant="outline" size="lg">
              Book a Strategy Session / $99
            </Button>
          </div>
        </section>

        {/* ── SECTION 6: VIBE MARKETER (rupture — yellow bg) ── */}
        <section
          aria-label="Vibe Marketer community"
          className="py-24 md:py-32 px-6 bg-yellow text-charcoal relative overflow-hidden border-b border-charcoal/10"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="font-anton text-[20vw] leading-none opacity-5 whitespace-nowrap select-none uppercase">
              Half Off
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
              Vibe Marketer Member? Half Off Everything.
            </h2>
            <p className="font-satoshi text-lg text-charcoal/80 mb-4 leading-relaxed">
              If you are part of the Vibe Marketer community, use code{" "}
              <span className="font-bold">VIBEMEMBER</span> at checkout for 50%
              off any plugin or skill. Already inside? You know the deal.
            </p>
            <p className="font-satoshi text-base text-charcoal/60">
              Not a member yet?{" "}
              <a
                href="#"
                className="text-charcoal underline underline-offset-4 hover:opacity-70 transition-opacity duration-200"
              >
                Join Vibe Marketers here.
              </a>
            </p>
          </div>
        </section>

        {/* ── SECTION 7: FINAL CTA ── */}
        <section
          aria-label="Get started"
          className="py-24 md:py-32 px-6 bg-charcoal text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <SectionHeader
              heading="Your Next Project Ships Faster."
              subtitle="Pick a tool. Install it. Run it on your next client project or your own site. These workflows took years to build. You can use them today."
              variant="dark"
              className="mb-12"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button href="/tools" variant="primary" size="xl">
                Browse Tools
              </Button>
              <Button href="/start" variant="ghost">
                Book a Strategy Session / $99
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

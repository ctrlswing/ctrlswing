import { CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CaseStudyCard } from "@/components/case-study-card";
import { FaqItem } from "@/components/faq-item";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const caseStudies = [
  {
    name: "Downtown BJJ",
    location: "San Diego BJJ gym",
    description: "Full site rebuild, branding, mobile optimization.",
    proof: "Complete site rebuild in a single day.",
    stagger: false,
    screenshot: "/case-studies/dtjj.webp",
    isDark: false,
  },
  {
    name: "Valle Ballet",
    location: "San Diego ballet studio",
    description: "11+ pages, booking system integration, SEO overhaul.",
    proof: "38-page build. 51 updates and counting.",
    stagger: true,
    screenshot: "/case-studies/valleballet.webp",
    isDark: true,
  },
  {
    name: "BornSimple",
    location: "National CPG brand",
    description: "Store locator, FAQ, SMS capture, scalable SEO pages.",
    proof: "Full brand site for a product in 2,500+ stores.",
    stagger: false,
    screenshot: "/case-studies/bornsimple.webp",
    isDark: false,
  },
  {
    name: "Fungushead",
    location: "E-Commerce",
    description: "23+ articles, email campaigns, comprehensive Google Ads.",
    proof: "23+ articles, email campaigns, and Google Ads.",
    stagger: true,
    screenshot: "/case-studies/fungushead.webp",
    isDark: true,
  },
];

const faqs = [
  {
    question: "What's a skill, exactly?",
    answer:
      "A skill is a markdown file (Skill.md) that gives Claude specific instructions for a task. Your methodology, your process, your quality standards. Think of it like a detailed brief that Claude follows every time, so you don't have to re-explain yourself.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "No. Skills are written in markdown. Plain text with some formatting. If you can write a detailed set of instructions, you can build a skill.",
  },
  {
    question: "What happens in a 1:1 session?",
    answer:
      "I look at your workflows, identify where skills would save you the most time, and we build your first one together. You leave with a working skill, a recording of the session, and my notes.",
  },
  {
    question: "Is $250 worth it for one session?",
    answer:
      "You'll walk away with a tool you use every day, not a PDF or a course module. Most people find 3-5 workflows in their business that skills could handle. We start with the highest-impact one.",
  },
  {
    question: "What if I can't figure it out after?",
    answer:
      "You'll have the skill file, the recording, and my notes. If you'd rather have me build the rest for you, that's what custom builds are for.",
  },
  {
    question: "How is this different from prompt engineering?",
    answer:
      "Prompting starts from scratch every time. Skills encode your methodology so Claude follows it consistently. It's the difference between explaining your process every session and having it just run.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "CTRLSWING",
      url: "https://ctrlswing.com",
      description:
        "AI skills practitioner platform. Learn how to build Claude skills that turn your best thinking into repeatable workflows.",
      founder: {
        "@type": "Person",
        name: "Jackson Dean",
      },
      areaServed: {
        "@type": "Country",
        name: "US",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      sameAs: [
        "https://x.com/ctrlswing",
        "https://www.linkedin.com/in/ctrlswing/",
      ],
    },
    {
      "@type": "WebSite",
      name: "CTRLSWING",
      url: "https://ctrlswing.com",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* JSON-LD structured data from hardcoded constants, safe to inline */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section
          aria-label="Overview"
          className="relative bg-[image:var(--background-image-grid-light)] bg-[size:40px_40px] py-24 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden border-b border-charcoal/10"
        >
          <div className="inline-flex items-center gap-2 border border-charcoal/20 bg-white px-4 py-1.5 rounded-full mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              AI Skills
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] max-w-5xl mx-auto mb-8 relative z-10">
            You use Claude every day. You&apos;re barely scratching the{" "}
            <span className="relative inline-block whitespace-nowrap px-2">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-yellow transform rotate-[15deg] z-[-1]" />
              <span className="relative z-10">surface.</span>
            </span>
          </h1>

          <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-8 md:mb-12">
            AI skills turn your best thinking into repeatable workflows. Claude
            does the work the way you would, every time. No code. No guesswork.
            Just a markdown file.
          </p>

          <Button href="/build" variant="primary" size="xl">
            Build your first skill
          </Button>
          <p className="font-satoshi text-sm text-charcoal/50 mt-3 mb-4">
            Answer 3 questions. AI generates a custom Skill.md for your workflow in 60 seconds.
          </p>

          <p className="font-satoshi text-xs text-charcoal/40 mb-6">
            Used by 3,200+ members in the Vibe Marketers community
          </p>

          <div className="flex items-center gap-2">
            <span className="font-satoshi text-sm text-charcoal/60">or</span>
            <Button href="/book" variant="ghost" size="md">
              Book a 1:1 session
            </Button>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-charcoal/10 bg-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-charcoal/80 font-satoshi text-sm md:text-base font-medium uppercase tracking-wide">
            <span>Skills/AI mentor</span>
            <span className="hidden sm:block text-charcoal/30">&bull;</span>
            <span>3,200+ Vibe Marketer members</span>
            <span className="hidden md:block text-charcoal/30">&bull;</span>
            <span>25+ brands managed</span>
            <span className="hidden md:block text-charcoal/30">&bull;</span>
            <span>San Diego, CA</span>
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="w-full flex flex-col lg:flex-row">
          {/* Problem */}
          <div className="w-full lg:w-1/2 bg-charcoal text-white p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-sage/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16">
                You already know there&apos;s more to this.
              </h2>
              <div className="space-y-8">
                <p className="font-satoshi text-lg text-sage/80">
                  You use Claude or ChatGPT every day. You&apos;ve seen what it
                  can do. But every session starts from zero. Same context, same
                  setup, same prompting.
                </p>
                <p className="font-satoshi text-lg text-sage/80">
                  You&apos;ve heard about skills. Maybe you&apos;ve seen someone
                  demo one. It looked easy. But when you sat down to build one
                  yourself, you got stuck.
                </p>
                <p className="font-satoshi text-lg text-sage/80">
                  So you&apos;re back to prompting from scratch. Doing the same
                  research, the same strategy work, the same analysis. Manually,
                  every time. Knowing there&apos;s a better way but not quite
                  closing the gap.
                </p>
              </div>
              <p className="font-anton text-2xl uppercase text-sage/40 mt-16 leading-[0.9]">
                Sound familiar?
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="w-full lg:w-1/2 bg-darkgray text-white p-12 md:p-24 border-l-4 border-yellow relative overflow-hidden">
            <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16 text-yellow drop-shadow-[0_0_30px_rgba(255,225,124,0.3)]">
                What skills change.
              </h2>
              <div className="space-y-8 mb-16">
                <p className="font-satoshi text-lg text-sage/80">
                  Skills are markdown files that tell Claude exactly how to do a
                  specific job. Your methodology, your process, your standards.
                  Build one once, use it every time.
                </p>
                <p className="font-satoshi text-lg text-sage/80">
                  No code. No API. No complex setup. Just a Skill.md file that
                  turns your best thinking into a repeatable tool.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  "Build once, use every time",
                  "Your methodology, encoded",
                  "No code required",
                  "Works with Claude Desktop and Claude Code",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2 className="text-yellow w-6 h-6 shrink-0" />
                    <span className="font-satoshi text-lg text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <SectionHeader
                  size="large"
                  subtitle="Free skill builder, paid 1:1 sessions, or custom builds. Pick your pace."
                >
                  Three ways in.
                </SectionHeader>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-24">
              {/* Step 1: Learn */}
              <div className="relative group flex flex-col md:flex-row gap-8 items-start">
                <div className="font-anton text-[8rem] leading-none text-yellow/20 group-hover:text-yellow transition-colors duration-500 select-none -mt-4 md:-ml-8 z-0 absolute md:relative top-0 right-0 md:top-auto md:right-auto opacity-30 md:opacity-100">
                  01
                </div>
                <div className="relative z-10 pt-4 md:pt-12">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider bg-yellow/20 text-charcoal mb-4">
                    Free
                  </span>
                  <h3 className="font-anton text-4xl uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Learn to build your first skill
                  </h3>
                  <p className="font-satoshi text-lg text-charcoal/70 max-w-md mb-6">
                    Answer a few questions about your business and workflow. The
                    builder generates a custom Skill.md tailored to you. Enter
                    your email to download it.
                  </p>
                  <Button href="/build" variant="primary" size="lg">
                    Build your skill
                  </Button>
                </div>
              </div>

              {/* Step 2: Get help */}
              <div className="relative group flex flex-col md:flex-row gap-8 items-start">
                <div className="font-anton text-[8rem] leading-none text-yellow/20 group-hover:text-yellow transition-colors duration-500 select-none -mt-4 md:-ml-8 z-0 absolute md:relative top-0 right-0 md:top-auto md:right-auto opacity-30 md:opacity-100">
                  02
                </div>
                <div className="relative z-10 pt-4 md:pt-12">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider bg-charcoal/10 text-charcoal mb-4">
                    $250
                  </span>
                  <h3 className="font-anton text-4xl uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Get hands-on help
                  </h3>
                  <p className="font-satoshi text-lg text-charcoal/70 max-w-md mb-6">
                    Book a 1:1 session. I&apos;ll look at your workflows, spot
                    where skills would save you the most time, and we&apos;ll
                    build your first one together. You leave with a working
                    skill, a recording, and my notes.
                  </p>
                  <Button href="/book" variant="primary" size="lg">
                    Book a session
                  </Button>
                </div>
              </div>

              {/* Step 3: Go further */}
              <div className="relative group flex flex-col md:flex-row gap-8 items-start">
                <div className="font-anton text-[8rem] leading-none text-yellow/20 group-hover:text-yellow transition-colors duration-500 select-none -mt-4 md:-ml-8 z-0 absolute md:relative top-0 right-0 md:top-auto md:right-auto opacity-30 md:opacity-100">
                  03
                </div>
                <div className="relative z-10 pt-4 md:pt-12">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider bg-charcoal/10 text-charcoal mb-4">
                    Custom pricing
                  </span>
                  <h3 className="font-anton text-4xl uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    Go further
                  </h3>
                  <p className="font-satoshi text-lg text-charcoal/70 max-w-md mb-6">
                    Need a full plugin built for your business? A suite of
                    skills for your team? Custom builds are available for people
                    who&apos;ve done a session and want to go deeper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF / CREDIBILITY */}
        <section className="py-24 md:py-32 px-6 bg-charcoal text-white border-b border-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <SectionHeader className="mb-16" variant="dark">
              <span className="text-yellow">I build these tools.</span>
              <br />I use them on real work.
            </SectionHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <p className="font-satoshi text-xl text-sage/80 max-w-xl">
                I run paid search and shopping ads across 25+ DTC brands.
                I&apos;ve built Claude Code plugins for creative strategy,
                frontend design, and media buying. Not as side projects, but
                because I needed them for actual client work.
              </p>
              <p className="font-satoshi text-xl text-sage/80 max-w-xl">
                I&apos;m a Skills/AI mentor in the Vibe Marketers community,
                where I run skills labs that show what this looks like in
                practice. Not slides. Live builds.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: "25+", label: "Brands managed" },
                { stat: "3", label: "Shipped plugins" },
                { stat: "3,200+", label: "Community members" },
                { stat: "2×/mo", label: "Skills labs hosted" },
              ].map((item, i) => (
                <div key={item.label} className={`text-center ${i > 0 ? "md:border-l md:border-sage/10" : ""}`}>
                  <div className="font-anton text-5xl md:text-6xl text-yellow mb-2 drop-shadow-[0_0_20px_rgba(255,225,124,0.2)]">
                    {item.stat}
                  </div>
                  <div className="font-satoshi text-sm text-sage/60 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section
          aria-label="Case studies"
          className="py-24 md:py-32 px-6 bg-charcoal/[0.03] border-b border-charcoal/10"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader className="mb-16">The work.</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.name} {...cs} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-label="Frequently asked questions"
          className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10"
        >
          <div className="max-w-3xl mx-auto">
            <SectionHeader className="mb-16">Questions.</SectionHeader>
            <div>
              {faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-32 px-6 bg-yellow text-charcoal relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="font-anton text-[20vw] leading-none opacity-5 whitespace-nowrap select-none">
              BUILD YOUR FIRST SKILL
            </div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-4">
              Build your first skill.
            </h2>
            <p className="font-anton text-3xl md:text-4xl uppercase leading-[0.9] mb-8 text-charcoal/60">
              Answer a few questions. Get a custom skill for your workflow.
            </p>
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-charcoal p-3 md:p-4 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
                <Button
                  href="/build"
                  variant="primary-dark"
                  size="2xl"
                  fullWidth
                >
                  Build your skill
                </Button>
              </div>
            </div>
            <p className="font-satoshi text-sm text-charcoal/60 mb-4">
              Free. Takes 60 seconds. No spam, no autoresponder sequence.
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-satoshi text-sm text-charcoal/70">or</span>
              <Button href="/book" variant="ghost" size="md" className="text-charcoal/80 hover:text-charcoal">
                Book a 1:1 session
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

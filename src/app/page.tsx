import Link from "next/link";
import { Play, ArrowRight, Users, BookOpen, Zap } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { NewsletterForm } from "@/components/newsletter-form";
import { GridOverlay } from "@/components/ui/grid-overlay";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const blogPosts = [
  {
    title: "What Are Agent Skills (And Why Should You Care)?",
    description:
      "A plain-English breakdown of what skills actually do, who they're for, and why they matter more than you think.",
    tag: "Fundamentals",
  },
  {
    title: "I Built a Voice Skill in 20 Minutes. Here's How.",
    description:
      "Walk-through of building a practical skill from scratch. No coding background required.",
    tag: "Tutorial",
  },
  {
    title: "The Skill Stack: How I Run My Entire Business on 7 Skills",
    description:
      "A look at the skills I use daily and how they connect to real business outcomes.",
    tag: "Behind the scenes",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section
          aria-label="Overview"
          className="relative bg-grid-light py-24 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden border-b border-charcoal/10"
        >
          <div className="inline-flex items-center gap-2 border border-charcoal/20 bg-white px-4 py-1.5 rounded-full mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Workshops Now Open
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] max-w-6xl mx-auto mb-8 relative z-10">
            Learn to build agent skills that{" "}
            <span className="relative inline-block whitespace-nowrap px-2">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-yellow transform rotate-[15deg] z-[-1]" />
              <span className="relative z-10">actually work.</span>
            </span>
          </h1>

          <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">
            Workshops, resources, and hands-on support for operators, business
            owners, and teams who want to put AI agents to work. Not theory.
            Real skills you can use tomorrow.
          </p>

          {/* Video placeholder */}
          <div className="w-full max-w-4xl aspect-video bg-darkgray rounded-xl shadow-2xl relative flex items-center justify-center mb-16 overflow-hidden group cursor-pointer border border-charcoal/10">
            <div className="absolute inset-0 bg-charcoal" />
            <button className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play className="text-charcoal w-8 h-8 ml-1" />
            </button>
            <p className="absolute bottom-4 left-4 font-satoshi text-sm text-sage/60 z-10">
              What are agent skills? (2 min)
            </p>
          </div>

          <Link
            href="/workshop"
            className="inline-flex justify-center items-center bg-yellow text-charcoal font-anton uppercase text-xl md:text-2xl px-10 py-5 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-yellow-glow hover:shadow-yellow-glow-hover mb-4"
          >
            Book a Workshop Seat
          </Link>
          <p className="font-satoshi text-xs md:text-sm text-charcoal/60 max-w-md">
            $200/seat. 10 seats per session. One afternoon. Bring a workflow.
            Build a skill. Leave with it running.
          </p>
        </section>

        {/* SOCIAL PROOF STRIP */}
        <section className="border-b border-charcoal/10 bg-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-charcoal/80 font-satoshi text-sm md:text-base font-medium uppercase tracking-wide">
            <span>Mentor in VM community</span>
            <span className="hidden sm:block text-charcoal/30">&bull;</span>
            <span>3,200+ members</span>
            <span className="hidden md:block text-charcoal/30">&bull;</span>
            <span>Open-source plugin author</span>
            <span className="hidden lg:block text-charcoal/30">&bull;</span>
            <span>San Diego, CA</span>
          </div>
        </section>

        {/* WHAT ARE AGENT SKILLS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <ScrollReveal>
                  <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-4">
                    For the 67% who haven&apos;t tried them yet
                  </p>
                  <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
                    Agent skills, explained simply.
                  </h2>
                  <p className="font-satoshi text-lg text-charcoal/70 max-w-sm">
                    Skills are reusable instructions that tell an AI agent exactly
                    how to do a specific task. Think of them like saved recipes for
                    your business.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-16">
              {[
                {
                  icon: Zap,
                  title: "They save you hours every week",
                  desc: "Instead of explaining the same thing to an AI every time, a skill remembers your process, your voice, your preferences. You run it once and it just works.",
                },
                {
                  icon: BookOpen,
                  title: "Anyone can build them",
                  desc: "You don't need to code. If you can describe how you do something step by step, you can turn that into a skill. That's what the workshop teaches.",
                },
                {
                  icon: Users,
                  title: "They compound over time",
                  desc: "Start with one skill that handles your weekly reporting. Then add one for writing proposals. Then client onboarding. Each skill you build makes the next one easier.",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="relative group flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-14 h-14 bg-yellow/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-yellow/20 transition-colors duration-300">
                      <item.icon className="w-7 h-7 text-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-anton text-3xl uppercase mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="font-satoshi text-lg text-charcoal/70 max-w-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* THE WORKSHOP OFFER */}
        <section className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-charcoal text-white p-12 md:p-24 relative overflow-hidden">
            <GridOverlay />
            <div className="relative z-10">
              <ScrollReveal>
                <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-sage/60 mb-4">
                  The Workshop
                </p>
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-8 text-yellow">
                  Build your first skill. In one session.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <p className="font-satoshi text-xl text-sage/80 mb-12 max-w-xl">
                  You bring a real workflow from your business. We turn it into a
                  working agent skill before the session ends. Not a demo. Not a
                  lecture. You leave with something you can use on Monday.
                </p>
              </ScrollReveal>

              <div className="space-y-6 mb-12">
                {[
                  "$200 per seat",
                  "10 seats per session",
                  "Monthly sessions",
                  "Next date: TBD",
                ].map((item, i) => (
                  <ScrollReveal key={item} delay={200 + i * 75}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow shrink-0" />
                      <p className="font-satoshi text-lg text-white/90">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={500}>
                <Link
                  href="/workshop"
                  className="inline-flex items-center gap-3 bg-yellow text-charcoal font-anton uppercase text-xl px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-yellow-glow"
                >
                  Learn more & book
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ScrollReveal>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-darkgray text-white p-12 md:p-24 border-l-4 border-yellow relative overflow-hidden">
            <GridOverlay />
            <div className="relative z-10">
              <ScrollReveal>
                <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-sage/60 mb-4">
                  What you get
                </p>
                <h2 className="font-anton text-4xl md:text-5xl uppercase leading-[0.9] mb-12">
                  Not slides. Working skills.
                </h2>
              </ScrollReveal>

              <div className="space-y-10">
                {[
                  {
                    title: "Your workflow, turned into a skill",
                    desc: "Bring your messiest, most time-consuming process. We build the skill together, step by step.",
                  },
                  {
                    title: "Hands-on building time",
                    desc: "This is a workshop, not a webinar. You open your laptop, I walk you through it, and you build something real.",
                  },
                  {
                    title: "A skill you can actually use",
                    desc: "You walk out with a finished skill that works in Claude Code. Not a prototype. Not a concept. A working tool.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.title} delay={100 + i * 100}>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-anton text-2xl uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <p className="font-satoshi text-sage/80">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <ScrollReveal>
                <div>
                  <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-4">
                    From the blog
                  </p>
                  <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9]">
                    Practical stuff. No fluff.
                  </h2>
                </div>
              </ScrollReveal>
              <Link
                href="/blog"
                className="font-satoshi text-sm font-medium text-charcoal/60 hover:text-yellow transition-colors inline-flex items-center gap-2"
              >
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 100}>
                  <div className="group border border-charcoal/10 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <span className="font-satoshi text-xs font-medium uppercase tracking-widest text-charcoal/40 mb-4 block">
                      {post.tag}
                    </span>
                    <h3 className="font-anton text-2xl uppercase leading-[0.9] mb-4 group-hover:translate-x-1 transition-transform duration-300">
                      {post.title}
                    </h3>
                    <p className="font-satoshi text-charcoal/70">
                      {post.description}
                    </p>
                    <p className="font-satoshi text-sm text-charcoal/40 mt-4">
                      Coming soon
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-24 md:py-32 px-6 bg-charcoal text-white relative overflow-hidden">
          <GridOverlay />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
                One practical thing, every week.
              </h2>
              <p className="font-satoshi text-lg text-sage/80 mb-10 max-w-xl mx-auto">
                Every week I send one email with one skill, workflow, or idea I
                actually built and used. No theory. No 10-part threads. Just the
                thing, and how to use it.
              </p>
              <div className="flex justify-center">
                <NewsletterForm dark />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          aria-label="Get started"
          className="py-32 px-6 bg-yellow text-charcoal relative overflow-hidden flex flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="font-anton text-[20vw] leading-none opacity-5 whitespace-nowrap select-none">
              CTRLSWING BUILD
            </div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
                Stop reading about skills. Start building them.
              </h2>
              <p className="font-satoshi text-xl md:text-2xl text-charcoal/80 max-w-2xl mx-auto mb-12">
                10 seats per session. One afternoon. Bring a workflow, build a
                skill, leave with it running. $200.
              </p>
              <div className="max-w-md mx-auto bg-charcoal p-3 md:p-4 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 mb-6">
                <Link
                  href="/workshop"
                  className="block w-full text-center bg-yellow text-charcoal font-anton uppercase text-2xl md:text-3xl px-8 py-6 rounded-xl hover:bg-white transition-all duration-300 shadow-yellow-subtle"
                >
                  Book a Seat
                </Link>
              </div>
              <p className="font-satoshi text-sm font-medium text-charcoal/60">
                Or grab a free skill from{" "}
                <Link href="/resources" className="underline hover:text-charcoal transition-colors">
                  /resources
                </Link>{" "}
                if you want to try before you buy.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

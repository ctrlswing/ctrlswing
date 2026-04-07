import Link from "next/link";
import { ArrowRight, Users, BookOpen, Wrench } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { EmailCapture } from "@/components/email-capture";

const blogPosts = [
  {
    title: "What Are Agent Skills (And Why Should You Care)",
    excerpt:
      "Agent skills are reusable instructions that tell AI exactly how to do a job. Think of them as recipes your tools follow without you standing over them.",
    category: "Fundamentals",
    date: "Coming soon",
    slug: "#",
  },
  {
    title: "I Built a Voice Profile Skill in 20 Minutes",
    excerpt:
      "Feed it examples of your writing. It builds a profile. Then every piece of content sounds like you wrote it. Here is exactly how I did it.",
    category: "Walkthrough",
    date: "Coming soon",
    slug: "#",
  },
  {
    title: "The 3 Skills Every Small Business Should Build First",
    excerpt:
      "You do not need dozens of skills. You need three good ones. These are the three I build in every workshop.",
    category: "Strategy",
    date: "Coming soon",
    slug: "#",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      name: "CTRLSWING",
      url: "https://ctrlswing.com",
      description:
        "Hands-on workshops teaching operators, business owners, and teams how to build and use agent skills.",
      founder: {
        "@type": "Person",
        name: "Jackson Dean",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      sameAs: [
        "https://x.com/ctrlswing",
        "https://linkedin.com/in/ctrlswing",
      ],
    },
    {
      "@type": "WebSite",
      name: "CTRLSWING",
      url: "https://ctrlswing.com",
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
          className="relative bg-grid-light py-24 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden border-b border-charcoal/10"
        >
          <div className="inline-flex items-center gap-2 border border-charcoal/20 bg-white px-4 py-1.5 rounded-full mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Workshops Open
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] max-w-6xl mx-auto mb-8 relative z-10">
            I teach you how to build{" "}
            <span className="relative inline-block whitespace-nowrap px-2">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-yellow transform rotate-[15deg] z-[-1]" />
              <span className="relative z-10">agent skills.</span>
            </span>
          </h1>

          <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12">
            Hands-on workshops for operators, business owners, and teams.
            You walk in with a problem. You walk out with a working skill built for your business.
          </p>

          {/* Video placeholder */}
          <div className="w-full max-w-4xl aspect-video bg-darkgray rounded-xl shadow-2xl relative flex items-center justify-center mb-12 overflow-hidden border border-charcoal/10">
            <div className="absolute inset-0 bg-charcoal" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-charcoal/50 border-2 border-sage/30 flex items-center justify-center">
                <span className="font-anton text-sage/60 text-sm uppercase">Video</span>
              </div>
              <p className="font-satoshi text-sage/50 text-sm">Jackson intro coming soon</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/workshop"
              className="inline-flex justify-center items-center gap-2 bg-yellow text-charcoal font-anton uppercase text-xl md:text-2xl px-10 py-5 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgb(255,225,124,0.4)] hover:shadow-[0_8px_30px_rgb(23,30,25,0.4)]"
            >
              Book a Workshop Seat
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex justify-center items-center bg-white border-2 border-charcoal text-charcoal font-anton uppercase text-lg px-8 py-4 rounded-lg hover:bg-charcoal hover:text-white transition-colors duration-300"
            >
              Get Free Tools
            </Link>
          </div>
        </section>

        {/* WHAT ARE AGENT SKILLS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-6">
              For the 67% who haven't tried skills yet
            </p>
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-10">
              What are agent skills?
            </h2>
            <p className="font-satoshi text-lg md:text-xl text-charcoal/80 mb-12 max-w-3xl">
              Agent skills are sets of instructions that tell AI tools exactly how to do a specific job.
              Instead of explaining what you need every single time, you install a skill and it gets to work.
              Think of it like hiring someone who already knows the playbook.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "You describe the job",
                  desc: "Write out how you want something done. Your voice, your process, your standards.",
                },
                {
                  icon: Wrench,
                  title: "Package it as a skill",
                  desc: "Turn those instructions into a reusable skill that any AI tool can follow.",
                },
                {
                  icon: Users,
                  title: "Use it over and over",
                  desc: "Install it, tell it about your project, it gets to work. Same quality every time.",
                },
              ].map((item) => (
                <div key={item.title} className="group">
                  <div className="w-12 h-12 rounded-lg bg-yellow/20 flex items-center justify-center mb-4 group-hover:bg-yellow transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="font-anton text-2xl uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="font-satoshi text-charcoal/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE WORKSHOP */}
        <section className="w-full flex flex-col lg:flex-row border-b border-charcoal/10">
          <div className="w-full lg:w-1/2 bg-charcoal text-white p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
            <div className="relative z-10">
              <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-sage/60 mb-6">
                The Workshop
              </p>
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-8 text-yellow">
                Build your first skill. Hands on.
              </h2>
              <p className="font-satoshi text-lg text-sage/80 mb-10 max-w-xl">
                A multi-day, small-group workshop where you build a real, working skill for your business.
                Not a lecture. Not a demo. You do the building, I guide the process.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  "5 seats per workshop. Small enough to get real help.",
                  "You leave with a working skill installed and running.",
                  "No prior AI experience needed. Really.",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="font-satoshi text-white/90">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="font-anton text-5xl text-white">$500</span>
                <span className="font-satoshi text-sage/60">/seat</span>
              </div>

              <Link
                href="/workshop"
                className="inline-flex items-center gap-2 bg-yellow text-charcoal font-anton uppercase text-xl px-10 py-5 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_8px_30px_rgb(255,225,124,0.4)]"
              >
                Book Your Seat
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
            <h3 className="font-anton text-4xl uppercase leading-[0.9] mb-10">
              What you walk away with
            </h3>
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "A working skill",
                  desc: "Built for your specific business, installed and running before you leave.",
                },
                {
                  num: "02",
                  title: "The process to build more",
                  desc: "You learn the framework, not just the one skill. Build your next one on your own.",
                },
                {
                  num: "03",
                  title: "Direct access to me",
                  desc: "Questions after the workshop? I am a message away. No support tickets.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-6 items-start group">
                  <span className="font-anton text-4xl text-yellow/30 group-hover:text-yellow transition-colors duration-300 select-none">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-anton text-2xl uppercase mb-2">
                      {item.title}
                    </h4>
                    <p className="font-satoshi text-charcoal/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED BLOG POSTS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-4">
                  From the Blog
                </p>
                <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9]">
                  Read before you build.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 font-satoshi font-medium text-charcoal/70 hover:text-charcoal transition-colors"
              >
                All posts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="group border border-charcoal/10 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-satoshi text-xs font-medium uppercase tracking-wider text-charcoal/50 bg-charcoal/5 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-satoshi text-xs text-charcoal/40">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-anton text-2xl uppercase leading-[0.9] mb-3 group-hover:text-yellow transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="font-satoshi text-charcoal/70 text-sm">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/blog"
              className="md:hidden inline-flex items-center gap-2 font-satoshi font-medium text-charcoal/70 hover:text-charcoal transition-colors mt-8"
            >
              All posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="bg-charcoal text-white py-16 px-6 border-b border-sage/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-satoshi text-lg text-sage/80 mb-6">
              Mentor in the Vibe Marketer community. 3,200+ members.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-satoshi text-sm text-sage/50 uppercase tracking-wider">
              <span>Workshops</span>
              <span className="text-sage/20">/</span>
              <span>Open-source tools</span>
              <span className="text-sage/20">/</span>
              <span>Weekly newsletter</span>
              <span className="text-sage/20">/</span>
              <span>Practitioner community</span>
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-24 md:py-32 px-6 bg-grid-light border-b border-charcoal/10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
              One email. One thing I built.
            </h2>
            <p className="font-satoshi text-lg text-charcoal/70 mb-10">
              Every week I send one email showing what I built or learned.
              Practical, not theoretical. No fluff, no pitches.
            </p>
            <div className="max-w-md mx-auto">
              <EmailCapture
                source="Homepage Newsletter"
                buttonText="Subscribe"
                successMessage="You're in. First email lands next week."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

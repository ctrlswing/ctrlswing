import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical walkthroughs, skill breakdowns, and lessons from building agent skills for real businesses.",
};

const posts = [
  {
    title: "What Are Agent Skills (And Why Should You Care)",
    excerpt:
      "Agent skills are reusable instructions that tell AI exactly how to do a job. Think of them as recipes your tools follow without you standing over them.",
    category: "Fundamentals",
    date: "Coming soon",
  },
  {
    title: "I Built a Voice Profile Skill in 20 Minutes",
    excerpt:
      "Feed it examples of your writing. It builds a profile. Then every piece of content sounds like you wrote it. Here is exactly how I did it.",
    category: "Walkthrough",
    date: "Coming soon",
  },
  {
    title: "The 3 Skills Every Small Business Should Build First",
    excerpt:
      "You do not need dozens of skills. You need three good ones. These are the three I build in every workshop.",
    category: "Strategy",
    date: "Coming soon",
  },
  {
    title: "Skills vs. Prompts: What is the Difference",
    excerpt:
      "A prompt is a one-off instruction. A skill is a system. Here is why that distinction matters for your business.",
    category: "Fundamentals",
    date: "Coming soon",
  },
  {
    title: "How I Use a Negotiation Skill Before Every Sales Call",
    excerpt:
      "Based on Chris Voss's framework. I run it before every call. It gives me the questions I should be asking.",
    category: "Walkthrough",
    date: "Coming soon",
  },
  {
    title: "The Workshop Format: Why Small Groups Work Better",
    excerpt:
      "Five seats, multi-day, hands-on. Here is the thinking behind how I structured the CTRLSWING workshop.",
    category: "Behind the scenes",
    date: "Coming soon",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 bg-grid-light border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-6">
              Blog
            </p>
            <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
              Practical, not theoretical.
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl">
              Walkthroughs, skill breakdowns, and things I learned building agent skills for real businesses.
              New posts coming soon.
            </p>
          </div>
        </section>

        {/* POST LIST */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0 divide-y divide-charcoal/10">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="py-10 first:pt-0 last:pb-0 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-satoshi text-xs font-medium uppercase tracking-wider text-charcoal/50 bg-charcoal/5 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="font-satoshi text-xs text-charcoal/40">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.9] mb-3">
                    {post.title}
                  </h2>
                  <p className="font-satoshi text-charcoal/70 max-w-2xl">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-24 md:py-32 px-6 bg-charcoal text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6 text-yellow">
              Get new posts by email.
            </h2>
            <p className="font-satoshi text-lg text-sage/80 mb-10">
              I will email you when I publish something new. No spam, no pitches.
              Just the post.
            </p>
            <div className="max-w-md mx-auto">
              <EmailCapture
                source="Blog Newsletter"
                buttonText="Subscribe"
                successMessage="You're in. I will send you the next one."
                dark
              />
            </div>
            <p className="font-satoshi text-sm text-sage/40 mt-6">
              Or follow me on{" "}
              <a href="https://x.com/ctrlswing" target="_blank" rel="noopener noreferrer" className="text-sage/60 hover:text-yellow transition-colors underline">
                X
              </a>
              {" "}for shorter updates.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

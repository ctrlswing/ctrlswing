import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides and behind-the-scenes posts about building agent skills, automating workflows, and running a business with AI.",
};

const posts = [
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
  {
    title: "Skills vs. Prompts: What's the Difference?",
    description:
      "Most people use prompts when they should be using skills. Here's how to know when to switch.",
    tag: "Fundamentals",
  },
  {
    title: "How to Pick Your First Skill to Build",
    description:
      "Not every workflow makes a good skill. Here's the framework I use to decide what to build next.",
    tag: "Strategy",
  },
  {
    title: "The Workshop Format: Why 10 Seats and $200",
    description:
      "The thinking behind the workshop structure and why small groups produce better results.",
    tag: "Behind the scenes",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 bg-grid-light border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
                Blog.
              </h1>
              <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl">
                Practical guides, tutorials, and behind-the-scenes posts about
                building agent skills and putting them to work. Written by someone
                who actually uses this stuff every day.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* POSTS GRID */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0 divide-y divide-charcoal/10">
              {posts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 75}>
                  <article className="group py-10 first:pt-0 last:pb-0">
                    <span className="font-satoshi text-xs font-medium uppercase tracking-widest text-charcoal/40 mb-3 block">
                      {post.tag}
                    </span>
                    <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.9] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {post.title}
                    </h2>
                    <p className="font-satoshi text-lg text-charcoal/70 mb-3">
                      {post.description}
                    </p>
                    <p className="font-satoshi text-sm text-charcoal/40">
                      Coming soon
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-20 text-center border border-charcoal/10 rounded-xl p-12">
                <p className="font-satoshi text-lg text-charcoal/60 mb-4">
                  Posts are on the way. Want to know when they drop?
                </p>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center bg-charcoal text-white font-anton uppercase text-lg px-8 py-3 rounded-lg hover:bg-yellow hover:text-charcoal transition-all duration-300"
                >
                  Join the newsletter
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

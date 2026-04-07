import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "One practical email every week. One skill, workflow, or idea Jackson actually built and used. No theory, no fluff.",
};

export default function NewsletterPage() {
  return (
    <div className="flex flex-col">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section className="py-24 md:py-32 px-6 bg-grid-light border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              One practical thing, every week.
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-xl mx-auto mb-12">
              Every week I send one email with one skill, workflow, or idea I
              actually built and used that week. Not a roundup. Not a thread
              repackaged as a newsletter. Just the thing, and how to use it.
            </p>
            <div className="flex justify-center mb-6">
              <NewsletterForm />
            </div>
            <p className="font-satoshi text-xs text-charcoal/40">
              Unsubscribe anytime. I don&apos;t sell your email or send you anything
              you didn&apos;t sign up for.
            </p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-12">
              What to expect.
            </h2>
            <div className="space-y-10">
              {[
                {
                  title: "One email. One idea.",
                  desc: "Each week I share one thing I built, used, or learned about agent skills. Short, specific, and immediately useful.",
                },
                {
                  title: "Real examples from real work.",
                  desc: "These aren't theoretical. Everything I share comes from running my own business or working with people in the VM community.",
                },
                {
                  title: "No sales pitch.",
                  desc: "If I have something to sell, I'll mention it at the bottom. The content stands on its own. Always.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-yellow pl-6"
                >
                  <h3 className="font-anton text-2xl uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-satoshi text-lg text-charcoal/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKSHOP CTA */}
        <section className="py-24 md:py-32 px-6 bg-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
              Want to go deeper?
            </h2>
            <p className="font-satoshi text-lg text-sage/80 mb-10 max-w-xl mx-auto">
              The newsletter gives you one idea a week. The workshop gives you a
              working skill in one session.
            </p>
            <Link
              href="/workshop"
              className="inline-flex items-center bg-yellow text-charcoal font-anton uppercase text-xl px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_8px_30px_rgb(255,225,124,0.4)]"
            >
              Book a Workshop Seat
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

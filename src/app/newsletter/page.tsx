import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "One email, once a week. What I built, what I learned, and how you can use it. Practical, not theoretical.",
};

export default function NewsletterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        <section className="py-24 md:py-32 px-6 bg-grid-light min-h-[70vh] flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-6">
              Newsletter
            </p>
            <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              One email. Once a week.
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-charcoal/70 mb-4 max-w-lg mx-auto">
              Every week I send one email showing what I built or learned that week.
              One thing, explained clearly, with the steps to do it yourself.
            </p>
            <p className="font-satoshi text-charcoal/50 mb-12 max-w-lg mx-auto">
              Practical, not theoretical. No fluff, no pitches, no sponsored nonsense.
              Just the thing and how it works.
            </p>

            <div className="max-w-md mx-auto mb-8">
              <EmailCapture
                source="Newsletter Page"
                buttonText="Subscribe"
                successMessage="You're in. First email lands next week."
              />
            </div>

            <p className="font-satoshi text-xs text-charcoal/40">
              Unsubscribe anytime. I do not sell your email or send you anything besides the newsletter.
            </p>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-anton text-4xl md:text-5xl uppercase leading-[0.9] mb-12 text-center">
              What to expect
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Real builds, not theory",
                  desc: "Each email covers something I actually built that week. The skill, the process, and the result.",
                },
                {
                  title: "Short and useful",
                  desc: "Five minutes to read. You finish knowing something you did not know before.",
                },
                {
                  title: "For practitioners",
                  desc: "Whether you are running a business, managing a team, or just curious about agent skills. If you want to build, this is for you.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div className="w-2 h-2 rounded-full bg-yellow mt-3 shrink-0" />
                  <div>
                    <h3 className="font-anton text-2xl uppercase mb-2">{item.title}</h3>
                    <p className="font-satoshi text-charcoal/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

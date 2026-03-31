import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Strategy Session — ctrlswing",
  description:
    "30 minutes. $150. A specific diagnosis and next step for your marketing. No pitch. No follow-up retainer.",
  robots: { index: false },
};

const personalizedLines: Record<string, string> = {
  inconsistent:
    "You need a methodology, not more motivation. Let's figure out what to focus on.",
  ai_generic:
    "The tools are right. The methodology needs work. Let's fix that.",
  paying_not_working:
    "Let's diagnose what went wrong and build a plan that actually works.",
  not_at_all:
    "The best first step is getting clarity. That's exactly what this session is for.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ approach?: string }>;
}) {
  const { approach } = await searchParams;
  const personalizedLine = approach ? personalizedLines[approach] : null;

  return (
    <div className="min-h-screen bg-charcoal text-white font-satoshi">
      <header className="w-full flex items-center justify-between p-6 md:px-12 md:py-8 border-b border-sage/10">
        <Link
          href="/"
          className="font-anton text-2xl uppercase tracking-wide flex items-baseline text-white"
        >
          CTRLSWING<span className="text-yellow">.</span>
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {personalizedLine && (
          <p className="font-satoshi text-lg text-yellow mb-8">
            {personalizedLine}
          </p>
        )}

        <h1 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
          Book a strategy session.
        </h1>
        <p className="font-satoshi text-lg text-sage/80 mb-12">
          30 minutes. $150. You tell me what&apos;s not working. I tell you
          specifically what the problem is and what to do about it first. No
          retainer. No pitch. A clear answer.
        </p>

        {/* Cal.com embed placeholder */}
        <div className="bg-darkgray border border-sage/10 rounded-2xl p-8 text-center mb-8">
          <p className="font-satoshi text-sage/60 text-sm mb-2 uppercase tracking-wider">
            Scheduling
          </p>
          <p className="font-satoshi text-sage/50 text-sm">
            Cal.com embed goes here. Connect your calendar in Cal.com and embed
            the scheduling widget.
          </p>
        </div>

        <div className="flex items-center gap-3 font-satoshi text-sage/60 text-sm">
          <span className="text-yellow font-semibold">$150</span>
          <span className="text-sage/20">·</span>
          <span>30 minutes</span>
          <span className="text-sage/20">·</span>
          <span>No retainer. No pitch.</span>
        </div>
      </main>
    </div>
  );
}

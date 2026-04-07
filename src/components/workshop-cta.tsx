import Link from "next/link";
import { GridOverlay } from "./ui/grid-overlay";
import { ScrollReveal } from "./ui/scroll-reveal";

export function WorkshopCta({
  heading = "Want to build your own?",
  description = "These skills took me 20 minutes each to build. In the workshop, I teach you how to do the same thing with your own workflows.",
  buttonText = "Learn about the workshop",
}: {
  heading?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="py-24 md:py-32 px-6 bg-charcoal text-white relative overflow-hidden">
      <GridOverlay />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6">
            {heading}
          </h2>
          <p className="font-satoshi text-lg text-sage/80 mb-10 max-w-xl mx-auto">
            {description}
          </p>
          <Link
            href="/workshop"
            className="inline-flex items-center bg-yellow text-charcoal font-anton uppercase text-xl px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-yellow-glow"
          >
            {buttonText}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

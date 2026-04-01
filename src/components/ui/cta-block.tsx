import Link from "next/link";
import { Lock } from "lucide-react";

type CtaBlockProps = {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  description?: string;
  buttonText: string;
  buttonHref: string;
  email?: string;
};

export function CtaBlock({
  heading,
  subheading,
  description,
  buttonText,
  buttonHref,
  email,
}: CtaBlockProps) {
  return (
    <section
      id="contact"
      aria-label="Get started"
      className="py-32 px-6 bg-yellow text-charcoal relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="font-anton text-[20vw] leading-none opacity-5 whitespace-nowrap select-none">
          CTRLSWING GO LIVE
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-4">
          {heading}
        </h2>
        {subheading && (
          <h3 className="font-anton text-4xl md:text-5xl uppercase leading-[0.9] mb-8 text-charcoal/60">
            {subheading}
          </h3>
        )}
        {description && (
          <p className="font-satoshi text-xl md:text-2xl text-charcoal/80 max-w-2xl mx-auto mb-12">
            {description}
          </p>
        )}
        <div className="max-w-md mx-auto bg-charcoal p-3 md:p-4 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 mb-6">
          <Link
            href={buttonHref}
            className="block w-full text-center bg-yellow text-charcoal font-anton uppercase text-2xl md:text-3xl px-8 py-6 rounded-xl hover:bg-white transition-all duration-300 shadow-yellow-faint"
          >
            {buttonText}
          </Link>
        </div>
        <p className="font-satoshi text-sm font-medium text-charcoal/60 mb-2">
          <Lock className="inline-block align-text-bottom mr-1 w-4 h-4" />
          Your info goes directly to me. No sales team. No autoresponder
          sequence.
        </p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="font-satoshi text-sm text-charcoal/50 hover:text-charcoal transition-colors"
          >
            Prefer email? {email}
          </a>
        )}
      </div>
    </section>
  );
}

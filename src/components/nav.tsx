import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md z-50 border-b border-charcoal/10 px-6 md:px-12 flex items-center justify-between">
      <Link
        href="/"
        className="font-anton text-3xl uppercase tracking-wide flex items-baseline"
      >
        CTRLSWING<span className="text-yellow">.</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 font-satoshi text-sm font-medium">
        <a
          href="#work"
          className="hover:text-yellow transition-colors duration-200"
        >
          WORK
        </a>
        <a
          href="#pricing"
          className="hover:text-yellow transition-colors duration-200"
        >
          PRICING
        </a>
        <a
          href="#faq"
          className="hover:text-yellow transition-colors duration-200"
        >
          FAQ
        </a>
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="/start"
          className="bg-charcoal text-white font-anton uppercase text-lg px-6 py-2 rounded-full hover:bg-yellow hover:text-charcoal transition-all duration-300 hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

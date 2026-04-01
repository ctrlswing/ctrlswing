import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { Button } from "./ui/button";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="h-20 bg-white/90 backdrop-blur-md border-b border-charcoal/10 px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="font-anton text-3xl uppercase tracking-wide flex items-baseline"
        >
          CTRLSWING<span className="text-yellow">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-satoshi text-sm font-medium">
          <Link
            href="/resources"
            className="hover:text-yellow transition-colors duration-200"
          >
            RESOURCES
          </Link>
          <Link
            href="/blog"
            className="hover:text-yellow transition-colors duration-200"
          >
            BLOG
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow transition-colors duration-200"
          >
            ABOUT
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button href="/start" variant="primary-inverse" size="md" rounded="pill">
              Book a Session
            </Button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

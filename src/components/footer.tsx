import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16 px-6 border-t border-sage/10">
      <div className="max-w-7xl mx-auto">
        {/* 3-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-anton text-2xl uppercase tracking-wide inline-flex items-baseline mb-4">
              CTRLSWING<span className="text-yellow">.</span>
            </Link>
            <p className="font-satoshi text-sm text-sage/60 leading-relaxed">
              Tools for marketers who use Claude Code.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-satoshi text-xs text-sage/40 uppercase tracking-wider font-medium mb-4">
              Tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tools" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Creative Strategist Engine
                </Link>
              </li>
              <li>
                <Link href="/tools" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Frontend Designer
                </Link>
              </li>
              <li>
                <Link href="/tools" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  All Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Work */}
          <div>
            <h3 className="font-satoshi text-xs text-sage/40 uppercase tracking-wider font-medium mb-4">
              Work
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/work/valle-ballet" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Valle Ballet
                </Link>
              </li>
              <li>
                <Link href="/work/downtown-bjj" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Downtown BJJ
                </Link>
              </li>
              <li>
                <Link href="/work/born-simple" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Born Simple
                </Link>
              </li>
              <li>
                <Link href="/work/fungushead" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Fungushead
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-satoshi text-xs text-sage/40 uppercase tracking-wider font-medium mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/getting-started-with-plugins" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Getting Started with Plugins
                </Link>
              </li>
              <li>
                <Link href="/start" className="font-satoshi text-sm text-sage/70 hover:text-yellow transition-colors duration-200">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sage/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-satoshi text-xs text-sage/40">
            &copy; 2026 Jackson Dean. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://x.com/ctrlswing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage/40 hover:text-yellow transition-colors duration-200"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ctrlswing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage/40 hover:text-yellow transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

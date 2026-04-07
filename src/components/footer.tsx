import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-6 border-t border-sage/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          <div>
            <Link
              href="/"
              className="font-anton text-2xl uppercase tracking-wide inline-block mb-3"
            >
              CTRLSWING<span className="text-yellow">.</span>
            </Link>
            <p className="font-satoshi text-sage/60 text-sm max-w-xs">
              Teaching operators, business owners, and teams how to build and use agent skills.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 font-satoshi text-sm">
            <Link href="/workshop" className="text-sage/80 hover:text-yellow transition-colors duration-200">
              Workshop
            </Link>
            <Link href="/blog" className="text-sage/80 hover:text-yellow transition-colors duration-200">
              Blog
            </Link>
            <Link href="/resources" className="text-sage/80 hover:text-yellow transition-colors duration-200">
              Resources
            </Link>
            <Link href="/newsletter" className="text-sage/80 hover:text-yellow transition-colors duration-200">
              Newsletter
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/ctrlswing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow transition-colors duration-200"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ctrlswing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-sage/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-satoshi text-sage/60 text-sm">
            Jackson Dean / ctrlswing / San Diego, CA
          </div>
          <div className="font-satoshi text-sage/40 text-xs">
            &copy; {new Date().getFullYear()} CTRLSWING
          </div>
        </div>
      </div>
    </footer>
  );
}

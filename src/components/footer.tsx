export function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 px-6 border-t border-sage/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-satoshi text-sage/80 text-sm space-y-1">
          <p>Jackson Dean &middot; ctrlswing &middot; San Diego, CA</p>
          <p className="text-sage/50">&copy; {new Date().getFullYear()} ctrlswing</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://x.com/ctrlswing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow hover:scale-110 transition-all duration-200"
          >
            <span className="sr-only">X (Twitter)</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ctrlswing/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow hover:scale-110 transition-all duration-200"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://www.skool.com/vibe-marketers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow hover:scale-110 transition-all duration-200"
          >
            <span className="sr-only">Vibe Marketers</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

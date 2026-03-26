import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { posts, getFeaturedPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "The Log",
  description:
    "Thoughts, teardowns, and tactical breakdowns on building marketing systems that actually generate revenue. No fluff, just execution.",
};

export default function BlogIndex() {
  const featured = getFeaturedPost();
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="flex flex-col bg-charcoal text-sage min-h-screen">
      <Nav variant="dark" />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <header className="pt-24 md:pt-32 pb-16 px-6 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] border-b border-sage/10 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] text-white mb-6 tracking-tight">
              System <span className="text-yellow">Log.</span>
            </h1>
            <p className="font-satoshi text-xl md:text-2xl text-sage/80 max-w-3xl border-l-4 border-yellow pl-6 py-2">
              Thoughts, teardowns, and tactical breakdowns on building marketing
              systems that actually generate revenue. No fluff, just execution.
            </p>
          </div>
        </header>

        {/* FEATURED */}
        {featured && (
          <section className="py-16 md:py-24 px-6 max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-3 h-3 rounded-full bg-yellow animate-pulse" />
              <h2 className="font-anton text-2xl uppercase text-white tracking-wider">
                Featured Entry
              </h2>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group flex flex-col lg:flex-row bg-darkgray border border-sage/10 rounded-2xl overflow-hidden hover:border-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,225,124,0.05)] border-l-4 border-l-yellow relative"
            >
              {/* Visual half */}
              <div className="w-full lg:w-[55%] aspect-video lg:aspect-auto relative bg-charcoal overflow-hidden min-h-[280px]">
                <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full max-w-lg h-full max-h-64 bg-darkgray border border-sage/10 rounded-xl shadow-2xl flex flex-col p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex gap-6 h-full">
                      <div className="w-1/3 flex flex-col gap-3">
                        <div className="h-8 w-full bg-sage/10 rounded" />
                        <div className="h-4 w-3/4 bg-sage/5 rounded" />
                        <div className="h-4 w-1/2 bg-sage/5 rounded" />
                        <div className="mt-auto h-12 w-full bg-yellow/20 rounded border border-yellow/30" />
                      </div>
                      <div className="w-2/3 bg-charcoal border border-sage/10 rounded-lg relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-yellow/10 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-yellow text-charcoal font-anton uppercase text-sm px-4 py-2 rounded-bl-xl z-10">
                  Most Read
                </div>
              </div>

              {/* Content half */}
              <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                <div className="inline-flex items-center gap-2 border border-sage/30 bg-charcoal/50 px-3 py-1 rounded-full mb-6 w-max">
                  <span className="text-xs font-bold tracking-widest uppercase text-yellow">
                    {featured.category}
                  </span>
                </div>

                <h3 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] text-white mb-6 group-hover:text-yellow transition-colors duration-300">
                  {featured.title}
                </h3>

                <p className="font-satoshi text-lg md:text-xl text-sage/80 mb-10 line-clamp-3">
                  {featured.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3 font-satoshi text-sm uppercase tracking-wider font-medium">
                    <div>
                      <span className="block text-white mb-0.5">
                        Jackson Dean
                      </span>
                      <span className="text-sage/60">
                        {new Date(featured.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        &middot; {featured.readTime}
                      </span>
                    </div>
                  </div>
                  <span className="w-12 h-12 rounded-full border border-sage/20 flex items-center justify-center group-hover:bg-yellow group-hover:border-yellow group-hover:text-charcoal transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ARTICLE GRID */}
        <section className="py-16 md:py-24 px-6 max-w-[1400px] mx-auto border-t border-sage/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 px-6 bg-yellow text-charcoal relative overflow-hidden flex flex-col items-center justify-center text-center mt-12">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="font-anton text-[20vw] leading-none opacity-5 whitespace-nowrap select-none">
              CTRLSWING GO LIVE
            </div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              Ready to build your system?
            </h2>
            <p className="font-satoshi text-xl md:text-2xl text-charcoal/80 max-w-2xl mx-auto mb-12">
              Stop reading about marketing and start executing. Get a complete,
              high-converting system live in days.
            </p>
            <div className="max-w-md mx-auto bg-charcoal p-3 md:p-4 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 mb-6">
              <Link
                href="/start"
                className="block w-full text-center bg-yellow text-charcoal font-anton uppercase text-2xl md:text-3xl px-8 py-6 rounded-xl hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgb(255,225,124,0.2)]"
              >
                Tell me about your business
              </Link>
            </div>
            <p className="font-satoshi text-sm font-medium text-charcoal/60">
              Takes 2 minutes. Clear scope and pricing upfront.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

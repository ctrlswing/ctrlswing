import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { posts, getPost } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title.replace(/\.$/, ""),
    description: post.description,
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  // Simple markdown-ish rendering for placeholder content
  const paragraphs = post.content.split("\n\n");

  return (
    <div className="flex flex-col bg-charcoal text-sage min-h-screen">
      <Nav />

      <main className="flex-1 pt-20">
        {/* ARTICLE HERO */}
        <header className="relative pt-24 md:pt-32 pb-16 px-6 border-b border-sage/10 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] overflow-hidden">
          <div className="max-w-[900px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 border border-yellow/30 bg-yellow/10 px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-yellow">
                {post.category}
              </span>
            </div>

            <h1 className="font-anton text-5xl md:text-7xl lg:text-[5.5rem] uppercase leading-[0.9] text-white mb-8">
              {post.title.replace(/\.$/, "").split(" ").map((word, i, arr) => {
                // Make the last two words yellow for visual interest
                if (i >= arr.length - 2) {
                  return (
                    <span key={i} className="text-yellow">
                      {word}{" "}
                    </span>
                  );
                }
                return word + " ";
              })}
            </h1>

            <div className="flex items-center gap-4 font-satoshi text-sm text-sage/70 uppercase tracking-wider font-medium">
              <span className="text-white">Jackson Dean</span>
              <span>&middot;</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* ARTICLE CONTENT */}
        <article className="py-20 md:py-24 px-6">
          <div className="max-w-[700px] mx-auto font-satoshi text-[19px] leading-[1.8] text-sage/90">
            {paragraphs.map((block, i) => {
              // Heading ##
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-anton text-4xl md:text-5xl uppercase text-white leading-[0.9] mt-16 mb-6"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              // Heading ###
              if (block.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="font-anton text-2xl uppercase text-white leading-[0.9] mt-12 mb-4"
                  >
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              // Code block
              if (block.startsWith("```")) {
                const lines = block.split("\n");
                const lang = lines[0].replace("```", "");
                const code = lines.slice(1, -1).join("\n");
                return (
                  <div
                    key={i}
                    className="my-12 bg-darkgray border border-sage/10 rounded-xl overflow-hidden shadow-2xl"
                  >
                    <div className="bg-charcoal px-4 py-3 border-b border-sage/10 flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      {lang && (
                        <span className="text-xs font-mono text-sage/50">
                          {lang}
                        </span>
                      )}
                    </div>
                    <div className="p-6 overflow-x-auto">
                      <pre className="font-mono text-sm leading-relaxed text-sage/80">
                        {code}
                      </pre>
                    </div>
                  </div>
                );
              }
              // First paragraph (lead)
              if (i === 0) {
                return (
                  <p
                    key={i}
                    className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-12"
                  >
                    {block}
                  </p>
                );
              }
              // Regular paragraph
              return (
                <p key={i} className="mb-8">
                  {block}
                </p>
              );
            })}
          </div>
        </article>

        {/* AUTHOR BIO */}
        <section className="px-6 py-12">
          <div className="max-w-[700px] mx-auto bg-darkgray border border-sage/10 border-l-4 border-l-yellow rounded-r-xl p-8 md:p-10">
            <h4 className="font-anton text-2xl uppercase text-white mb-2">
              Jackson Dean
            </h4>
            <p className="font-satoshi text-sage/80 text-lg mb-6">
              Founder of CTRLSWING. I build productized marketing systems for
              businesses that are tired of agency bloat. I design, code, and run
              ads so you don&apos;t have to.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 font-satoshi font-bold text-yellow hover:text-white transition-colors duration-200 uppercase tracking-wide text-sm"
            >
              Work with me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* RELATED ARTICLES */}
        <section className="py-24 px-6 border-t border-sage/10 bg-charcoal relative">
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-anton text-4xl md:text-5xl uppercase text-white">
                Read More
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-satoshi font-bold text-sage hover:text-yellow transition-colors text-sm uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4" />
                All entries
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

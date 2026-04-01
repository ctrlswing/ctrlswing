import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/ui/email-capture";
import { getPostBySlug, getAllSlugs, getAllPosts, parseLocalDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-satoshi text-sm text-charcoal/60 hover:text-charcoal transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-satoshi text-sm text-charcoal/50">
                {parseLocalDate(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-charcoal/30">&middot;</span>
              <span className="font-satoshi text-sm text-charcoal/50">
                {post.readTime}
              </span>
            </div>

            <h1 className="font-anton text-5xl md:text-7xl uppercase leading-[0.9] mb-6">
              {post.title}
            </h1>
            <p className="font-satoshi text-xl text-charcoal/70">
              {post.description}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <article className="max-w-3xl mx-auto prose prose-lg prose-charcoal">
            <div className="font-satoshi text-lg leading-relaxed text-charcoal/80 space-y-6 [&_h2]:font-anton [&_h2]:text-3xl [&_h2]:uppercase [&_h2]:leading-[0.9] [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:text-charcoal [&_h3]:font-anton [&_h3]:text-2xl [&_h3]:uppercase [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:text-charcoal [&_strong]:text-charcoal [&_strong]:font-bold [&_a]:text-charcoal [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-yellow [&_a:hover]:text-yellow [&_ul]:space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:text-charcoal/80 [&_code]:bg-charcoal/5 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md [&_code]:text-base [&_code]:font-mono [&_pre]:bg-charcoal [&_pre]:text-sage [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:overflow-x-auto [&_blockquote]:border-l-4 [&_blockquote]:border-yellow [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-charcoal/70">
              <MDXRemote source={post.content} />
            </div>
          </article>
        </section>

        {/* EMAIL CAPTURE */}
        <section className="py-16 px-6 bg-yellow border-b border-charcoal/10">
          <div className="max-w-xl mx-auto">
            <EmailCapture
              headline="Get new posts directly"
              description="No spam. Just skills, tools, and articles when they're ready."
              buttonText="Subscribe"
              microcopy=""
              variant="brand"
            />
          </div>
        </section>

        {/* RELATED POSTS */}
        {related.length > 0 && (
          <section className="py-24 md:py-32 px-6 bg-charcoal/[0.03] border-b border-charcoal/10">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-anton text-4xl uppercase mb-12">
                More posts
              </h2>
              <div className="space-y-8">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block"
                  >
                    <h3 className="font-anton text-2xl uppercase group-hover:text-yellow transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="font-satoshi text-charcoal/60 mt-1">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SESSION CTA */}
        <section className="py-16 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-anton text-2xl uppercase mb-2">
                Want hands-on help?
              </h3>
              <p className="font-satoshi text-charcoal/70">
                Book a 1:1 session and we&apos;ll build your first skill
                together.
              </p>
            </div>
            <Button href="/book" variant="primary" size="lg" className="shrink-0">
              Book a session
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { EmailCapture } from "@/components/ui/email-capture";
import { Button } from "@/components/ui/button";
import { getAllPosts, parseLocalDate } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              size="large"
              subtitle="Articles about building Claude skills, AI workflows, and practical automation for marketers and founders."
            >
              Blog
            </SectionHeader>
          </div>
        </section>

        {/* POSTS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            {posts.length > 0 ? (
              <div className="space-y-0">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block border-b border-charcoal/10 py-10 first:pt-0 last:border-b-0"
                  >
                    <div className="flex items-center gap-3 mb-3">
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
                    <h2 className="font-anton text-3xl md:text-4xl uppercase leading-[0.9] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {post.title}
                    </h2>
                    <p className="font-satoshi text-lg text-charcoal/70 mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-satoshi font-medium text-charcoal group-hover:text-yellow transition-colors duration-200">
                      Read
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-satoshi text-lg text-charcoal/60">
                  First posts coming soon. Subscribe below to get notified.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <section className="py-24 md:py-32 px-6 bg-yellow border-b border-charcoal/10">
          <div className="max-w-xl mx-auto">
            <EmailCapture
              headline="Get new posts before anyone else"
              description="I publish new skills, tools, and articles regularly. Drop your email and I'll send them to you directly."
              buttonText="Subscribe"
              microcopy="No spam. Just tools. Unsubscribe anytime."
              variant="brand"
            />
          </div>
        </section>

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

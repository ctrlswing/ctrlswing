import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Download } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { EmailCapture } from "@/components/ui/email-capture";
import { resources, getResourceBySlug, getAllSlugs } from "@/lib/resources";
import type { ResourceType } from "@/lib/resources";

const typeBadgeStyles: Record<ResourceType, string> = {
  skill: "bg-yellow/20 text-charcoal",
  plugin: "bg-charcoal text-white",
  connector: "bg-charcoal/10 text-charcoal",
};

const typeLabels: Record<ResourceType, string> = {
  skill: "Skill",
  plugin: "Plugin",
  connector: "Connector",
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: "Resource Not Found" };

  return {
    title: resource.name,
    description: resource.description,
    openGraph: {
      title: `${resource.name} — ctrlswing`,
      description: resource.description,
    },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const related = resources
    .filter((r) => r.type === resource.type && r.slug !== resource.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HEADER */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 font-satoshi text-sm text-charcoal/60 hover:text-charcoal transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider ${typeBadgeStyles[resource.type]}`}
              >
                {typeLabels[resource.type]}
              </span>
              {resource.featured && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider bg-yellow text-charcoal">
                  Featured in Skills Lab
                </span>
              )}
            </div>

            <h1 className="font-anton text-6xl md:text-7xl uppercase leading-[0.9] mb-6">
              {resource.name}
            </h1>
            <p className="font-satoshi text-xl text-charcoal/70 max-w-2xl">
              {resource.description}
            </p>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Use Cases */}
            <div>
              <h2 className="font-anton text-3xl uppercase mb-6">
                Use cases
              </h2>
              <ul className="space-y-4">
                {resource.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex items-start gap-3 font-satoshi text-lg text-charcoal/80"
                  >
                    <Check className="w-5 h-5 text-yellow mt-1 shrink-0" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="font-anton text-3xl uppercase mb-6">
                What&apos;s included
              </h2>
              <ul className="space-y-4">
                {resource.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-satoshi text-lg text-charcoal/80"
                  >
                    <Check className="w-5 h-5 text-yellow mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Install */}
            <div>
              <h2 className="font-anton text-3xl uppercase mb-6">
                How to install
              </h2>
              <ol className="space-y-4">
                {resource.installSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-4 font-satoshi text-lg text-charcoal/80"
                  >
                    <span className="font-anton text-xl text-yellow shrink-0 w-8">
                      {i + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section className="py-16 md:py-20 px-6 bg-charcoal text-white border-b border-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="font-anton text-3xl uppercase mb-2">
                  Download {resource.name}
                </h2>
                <p className="font-satoshi text-sage/80">
                  Enter your email to download. No spam. Just the file.
                </p>
              </div>
              <div className="shrink-0">
                <EmailCapture
                  headline=""
                  description=""
                  buttonText="Download"
                  microcopy=""
                  variant="dark"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SESSION CTA */}
        <section className="py-16 md:py-20 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-anton text-2xl uppercase mb-2">
                Want help setting this up?
              </h3>
              <p className="font-satoshi text-charcoal/70">
                Book a 1:1 session. I&apos;ll walk you through setup and
                customization.
              </p>
            </div>
            <Button href="/book" variant="primary" size="lg" className="shrink-0">
              Book a session
            </Button>
          </div>
        </section>

        {/* RELATED RESOURCES */}
        {related.length > 0 && (
          <section className="py-24 md:py-32 px-6 bg-charcoal/[0.03] border-b border-charcoal/10">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-anton text-4xl uppercase mb-16">
                Related resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/resources/${r.slug}`}
                    className="group block bg-white border border-charcoal/10 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300"
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider ${typeBadgeStyles[r.type]} mb-4`}
                    >
                      {typeLabels[r.type]}
                    </span>
                    <h3 className="font-anton text-2xl uppercase mb-2">
                      {r.name}
                    </h3>
                    <p className="font-satoshi text-charcoal/70 line-clamp-2">
                      {r.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { X, CheckCircle2, Mail } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CaseStudyCard } from "@/components/case-study-card";
import { FaqItem } from "@/components/faq-item";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { CtaBlock } from "@/components/ui/cta-block";

const caseStudies = [
  {
    name: "Downtown BJJ",
    location: "San Diego",
    description: "Full site rebuild, branding, mobile optimization.",
    proof: "Built from scratch in one day.",
    stagger: false,
    screenshot: "/case-studies/dtjj.webp",
    isDark: false,
  },
  {
    name: "Valle Ballet",
    location: "San Diego",
    description: "11+ pages, booking system integration, SEO overhaul.",
    proof: "Built and maintained. 51 updates and counting.",
    stagger: true,
    screenshot: "/case-studies/valleballet.webp",
    isDark: true,
  },
  {
    name: "BornSimple",
    location: "National CPG",
    description: "Store locator, FAQ, SMS capture, scalable SEO pages.",
    proof: "Complete brand site for a national product.",
    stagger: false,
    screenshot: "/case-studies/bornsimple.webp",
    isDark: false,
  },
  {
    name: "Fungushead",
    location: "E-Commerce",
    description: "23+ articles, email campaigns, comprehensive Google Ads.",
    proof: "Full marketing system. Content, email, and paid ads.",
    stagger: true,
    screenshot: "/case-studies/fungushead.webp",
    isDark: true,
  },
];

const faqs = [
  {
    question: "What makes this different from hiring an agency?",
    answer:
      "Agencies juggle dozens of clients, farm work out to juniors, and bill you for project management overhead. Here, the person who scopes your project is the same person who builds it, tests it, and picks up the phone when you call. No layers, no handoffs.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "I can either port your existing content over to a faster, high-converting foundation, or if your current site is solid, focus purely on the marketing flows (Ads, Email, SEO).",
  },
  {
    question: "Do I own everything you build?",
    answer:
      "100%. Once paid in full, all assets, accounts, and code belong to you. No hostage situations.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "Local services, e-commerce, SaaS, and boutique agencies. The fundamental mechanics of a good marketing system apply across the board.",
  },
  {
    question: "What if I've been burned by an agency before?",
    answer:
      "That's exactly who this is for. You see the full scope, timeline, and price before a single dollar changes hands. One person does the work, one person is accountable. No surprises.",
  },
  {
    question: "Do you manage the ads after launch?",
    answer:
      "Yes, I offer ongoing ad management as an add-on service ($750/mo) for businesses that want continuous optimization.",
  },
  {
    question: "What does the $400/month maintenance cover?",
    answer:
      "Premium hosting, daily backups, security updates, technical support, and minor content updates (swapping images, updating text). It replaces your hosting bill, your 'tech guy,' and the agency retainer you'd otherwise need. Cancel anytime.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "CTRLSWING",
      url: "https://ctrlswing.com",
      description:
        "Modern marketing systems for small businesses. Website, email, ads, SEO — built by one person with purpose-built tools, in days.",
      founder: {
        "@type": "Person",
        name: "Jackson Dean",
      },
      areaServed: {
        "@type": "Country",
        name: "US",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      sameAs: [
        "https://x.com/ctrlswing",
        "https://www.linkedin.com/in/ctrlswing/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "The System",
            price: "5500",
            priceCurrency: "USD",
            description:
              "Complete marketing system: custom website, SEO, email/SMS automations, Google Ads setup, analytics, and strategy session.",
          },
          {
            "@type": "Offer",
            name: "Monthly Maintenance",
            price: "400",
            priceCurrency: "USD",
            description:
              "Hosting, continuous updates, technical support, and minor changes. Cancel anytime.",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      name: "CTRLSWING",
      url: "https://ctrlswing.com",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* JSON-LD structured data — static content from hardcoded constants, safe to inline */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section aria-label="Overview" className="relative bg-[image:var(--background-image-grid-light)] bg-[size:40px_40px] py-24 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden border-b border-charcoal/10">
          <div className="inline-flex items-center gap-2 border border-charcoal/20 bg-white px-4 py-1.5 rounded-full mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Marketing System
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] max-w-6xl mx-auto mb-8 relative z-10">
            Your marketing isn&apos;t broken. It&apos;s just{" "}
            <span className="relative inline-block whitespace-nowrap px-2">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-yellow transform rotate-[15deg] z-[-1]" />
              <span className="relative z-10">outdated.</span>
            </span>
          </h1>

          <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">
            Whether you&apos;re starting fresh or replacing what stopped
            working — I&apos;ll build your entire system in one sprint.
          </p>

          <Button href="/start" variant="primary" size="xl" className="mb-4">
            Tell me about your business
          </Button>
          <p className="font-satoshi text-sm text-charcoal/60 mb-1">
            No retainers. No mystery pricing. Full scope before anything starts.
          </p>
          <a
            href="mailto:jackson@ctrlswing.com"
            className="inline-flex items-center gap-1.5 font-satoshi text-sm text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            or just email jackson@ctrlswing.com
          </a>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-charcoal/10 bg-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-charcoal/80 font-satoshi text-sm md:text-base font-medium uppercase tracking-wide">
            <span>25+ brands managed</span>
            <span className="hidden sm:block text-charcoal/30">&bull;</span>
            <span>Sites launched in 24 hours</span>
            <span className="hidden md:block text-charcoal/30">&bull;</span>
            <span>San Diego, CA</span>
          </div>
        </section>

        {/* PROBLEM / SOLUTION SPLIT */}
        <section className="w-full flex flex-col lg:flex-row">
          {/* Problem */}
          <div className="w-full lg:w-1/2 bg-charcoal text-white p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-sage/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16">
                WHAT&apos;S NOT WORKING
              </h2>
              <ul className="space-y-8 mb-16">
                <li className="flex items-start gap-4">
                  <X className="text-error w-8 h-8 shrink-0 mt-1" />
                  <p className="font-satoshi text-lg text-sage/80">
                    <strong className="text-white font-bold block mb-1">
                      You paid someone and got ghosted.
                    </strong>
                    The freelancer disappeared. The agency sends invoices but
                    no results. You&apos;re stuck with a half-finished site and
                    no answers.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <X className="text-error w-8 h-8 shrink-0 mt-1" />
                  <p className="font-satoshi text-lg text-sage/80">
                    <strong className="text-white font-bold block mb-1">
                      You tried doing it yourself and ran out of time.
                    </strong>
                    Squarespace, Wix, Canva, Mailchimp — you spent your
                    weekends on it and still don&apos;t have something that
                    works.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <X className="text-error w-8 h-8 shrink-0 mt-1" />
                  <p className="font-satoshi text-lg text-sage/80">
                    <strong className="text-white font-bold block mb-1">
                      You&apos;ve been &ldquo;meaning to fix the website&rdquo;
                      for two years.
                    </strong>
                    Every month it slides. Meanwhile your competitors show up
                    first on Google and look twice as professional.
                  </p>
                </li>
              </ul>
              <p className="font-satoshi text-xl text-sage border-l-2 border-sage/30 pl-6">
                You need a marketing system that works, built by someone who
                actually picks up the phone.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="w-full lg:w-1/2 bg-darkgray text-white p-12 md:p-24 border-l-4 border-yellow relative overflow-hidden">
            <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16 text-yellow">
                HOW I FIX IT
              </h2>
              <p className="font-satoshi text-xl text-white/90 mb-16 max-w-xl">
                One person builds your whole system. That same person answers
                when you call.
              </p>
              <div className="space-y-10">
                {[
                  {
                    title: "Built with better tools, not bigger teams",
                    desc: "Your system is built with purpose-built tools, not farmed out to junior designers working off templates.",
                  },
                  {
                    title: "One person, fully accountable",
                    desc: "The person who builds it is the person who answers the phone. No account managers or middle-men.",
                  },
                  {
                    title: "Live in days, not months",
                    desc: "Better tools mean faster execution without cutting corners. Your system goes live this week.",
                  },
                  {
                    title: "You see everything before you pay",
                    desc: "Full scope, timeline, and price upfront. No surprises, no change orders.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <CheckCircle2 className="text-yellow w-10 h-10 mb-1" />
                    <h3 className="font-anton text-2xl uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-satoshi text-sage/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="work"
          className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10 relative"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <SectionHeader
                  size="large"
                  subtitle="A streamlined process designed to eliminate friction and get your business online fast."
                >
                  Three steps.
                  <br />
                  That&apos;s it.
                </SectionHeader>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-24">
              {[
                {
                  num: "01",
                  title: "Tell me about your business",
                  desc: "Fill out a quick form. I get back within 24 hours with a comprehensive scope, timeline, and exact price.",
                },
                {
                  num: "02",
                  title: "I build your system",
                  desc: "You see progress throughout the entire build. No black box, no wondering what's happening behind the scenes.",
                },
                {
                  num: "03",
                  title: "Your marketing goes live",
                  desc: "Everything launches simultaneously. Your complete system starts running and bringing in customers on day one.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="relative group flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="font-anton text-[8rem] leading-none text-yellow/20 group-hover:text-yellow transition-colors duration-500 select-none -mt-4 md:-ml-8 z-0 absolute md:relative top-0 right-0 md:top-auto md:right-auto opacity-30 md:opacity-100">
                    {step.num}
                  </div>
                  <div className="relative z-10 pt-4 md:pt-12">
                    <h3 className="font-anton text-4xl uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="font-satoshi text-lg text-charcoal/70 max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          aria-label="Pricing"
          className="py-24 md:py-32 px-6 bg-[image:var(--background-image-grid-light)] bg-[size:40px_40px] border-b border-charcoal/10"
        >
          <div className="max-w-4xl mx-auto">
            <SectionHeader align="center" className="mb-20 max-w-3xl mx-auto">
              Clear pricing. No &apos;schedule a call to find out.&apos;
            </SectionHeader>

            {/* The System */}
            <div className="bg-charcoal text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-6">
              <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-anton text-3xl md:text-4xl uppercase mb-2 text-yellow">
                  The System
                </h3>
                <p className="font-satoshi text-sage/80 mb-8 max-w-xl">
                  Everything your business needs to start showing up and
                  converting. Built in one sprint.
                </p>

                <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-sage/20">
                  <span className="font-anton text-6xl md:text-7xl">$5,500</span>
                  <span className="font-satoshi text-sage/60 text-lg">one-time</span>
                </div>

                {/* Value anchor */}
                <div className="bg-white/5 rounded-xl p-6 mb-10 border border-sage/10">
                  <p className="font-satoshi text-sm text-sage/60 uppercase tracking-wider mb-4">
                    What this would cost separately
                  </p>
                  <div className="space-y-2 font-satoshi text-white/80 mb-4">
                    {[
                      { item: "Custom website design + development", range: "$8–15K" },
                      { item: "4 email/SMS automations", range: "$2–4K" },
                      { item: "Google Ads campaign setup", range: "$2–3K" },
                      { item: "SEO foundation + analytics", range: "$1–2K" },
                    ].map((line) => (
                      <div key={line.item} className="flex justify-between text-sm">
                        <span>{line.item}</span>
                        <span className="text-sage/50 ml-4 shrink-0">{line.range}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between font-satoshi text-sm pt-3 border-t border-sage/20">
                    <span className="text-sage/60">Typical agency total</span>
                    <span className="text-yellow font-bold">$13–24K</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                  {[
                    "Custom Website Design",
                    "SEO Foundation",
                    "Mobile Responsive",
                    "Copywriting",
                    "Analytics + Conversion Tracking",
                    "4 Email/SMS Automations",
                    "Google Ads Campaign Setup",
                    "Strategy Session",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-3 font-satoshi text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-yellow shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <Button href="/start" variant="primary-dark" size="lg" fullWidth>
                  Tell me about your business
                </Button>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-white border border-charcoal/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between mb-8 shadow-sm">
              <div>
                <h4 className="font-anton text-2xl uppercase mb-1">
                  After Launch: $400/mo
                </h4>
                <p className="font-satoshi text-charcoal/70 text-sm md:text-base">
                  Replaces your hosting, your &ldquo;tech guy,&rdquo; and the
                  agency retainer you&apos;d otherwise need. Cancel anytime.
                </p>
              </div>
            </div>

            {/* Add-ons */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-satoshi">
                <thead>
                  <tr className="border-b-2 border-charcoal/20">
                    <th className="py-4 px-4 font-anton uppercase text-xl">
                      Optional Add-ons
                    </th>
                    <th className="py-4 px-4 font-anton uppercase text-xl text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/10">
                  {[
                    { name: "Google Ads Management", price: "$750/mo" },
                    { name: "Custom Email Campaign", price: "$400/ea" },
                    { name: "SEO Blog Post (2000 words)", price: "$250/ea" },
                    { name: "Additional Landing Page", price: "$800/ea" },
                  ].map((addon) => (
                    <tr
                      key={addon.name}
                      className="hover:bg-charcoal/5 transition-colors"
                    >
                      <td className="py-4 px-4">{addon.name}</td>
                      <td className="py-4 px-4 text-right font-medium">
                        {addon.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section aria-label="Case studies" className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto">
            <SectionHeader className="mb-16">
              Work I&apos;ve done. Businesses like yours.
            </SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.name} {...cs} />
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-24 md:py-32 px-6 bg-charcoal text-white border-b border-sage/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[image:var(--background-image-grid-dark)] bg-[size:40px_40px] pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-20 text-center">
              Is this right for you?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* For you */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="font-anton text-2xl uppercase">
                    This is for you if
                  </h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "You run a small or local business and need marketing, but you don't have a marketing team.",
                    "You're starting from zero, or your current site isn't bringing in customers.",
                    "You've been doing everything yourself and something has to give.",
                    "You want to see exactly what you're getting and what it costs before anything starts.",
                  ].map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow mt-2.5 shrink-0" />
                      <p className="font-satoshi text-lg text-sage/90">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not for you */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <X className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="font-anton text-2xl uppercase text-sage">
                    This probably isn&apos;t for you if
                  </h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "You already have a marketing team and want someone to optimize what's working.",
                    "You need a 40-page brand strategy before anything gets built.",
                    "You want to approve every pixel before it goes live.",
                    "You're looking for the cheapest option. This is fast and thorough, not discount.",
                  ].map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage/40 mt-2.5 shrink-0" />
                      <p className="font-satoshi text-lg text-sage/60">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-sage/10 text-center">
              <p className="font-satoshi text-xl text-sage/80 mb-8">
                Sound like you? I&apos;ll send you a scope, timeline, and price within 24 hours. Not right? Walk away. No hard feelings.
              </p>
              <Link
                href="/start"
                className="inline-flex justify-center items-center bg-yellow text-charcoal font-anton uppercase text-xl px-10 py-5 rounded-lg hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgb(255,225,124,0.2)]"
              >
                Get your free scope and price
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-label="Frequently asked questions"
          className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10"
        >
          <div className="max-w-3xl mx-auto">
            <SectionHeader className="mb-16">
              Questions you probably have.
            </SectionHeader>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <CtaBlock
          heading="Tell me about your business."
          subheading={<>I&apos;ll tell you exactly what I&apos;d build.</>}
          description="Takes about 2 minutes. I'll get back within 24 hours with a clear scope, timeline, and price. No commitment."
          buttonText="Get Started"
          buttonHref="/start"
          email="jackson@ctrlswing.com"
        />
      </main>

      <Footer />
    </div>
  );
}

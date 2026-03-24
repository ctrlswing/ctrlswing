import Link from "next/link";
import {
  Play,
  X,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CaseStudyCard } from "@/components/case-study-card";
import { FaqItem } from "@/components/faq-item";

const caseStudies = [
  {
    name: "Downtown BJJ",
    location: "San Diego",
    description: "Full site rebuild, branding, mobile optimization.",
    proof: "Built from scratch in one day.",
    stagger: false,
    screenshot: "/case-studies/dtjj.png",
    isDark: false,
  },
  {
    name: "Valle Ballet",
    location: "San Diego",
    description: "11+ pages, booking system integration, SEO overhaul.",
    proof: "Built and maintained. 51 updates and counting.",
    stagger: true,
    screenshot: "/case-studies/valleballet.png",
    isDark: true,
  },
  {
    name: "BornSimple",
    location: "National CPG",
    description: "Store locator, FAQ, SMS capture, scalable SEO pages.",
    proof: "Complete brand site for a national product.",
    stagger: false,
    screenshot: "/case-studies/bornsimple.png",
    isDark: false,
  },
  {
    name: "Fungushead",
    location: "E-Commerce",
    description: "23+ articles, email campaigns, comprehensive Google Ads.",
    proof: "Full marketing system. Content, email, and paid ads.",
    stagger: true,
    screenshot: "/case-studies/fungushead.png",
    isDark: true,
  },
];

const faqs = [
  {
    question: "How is this so fast?",
    answer:
      "I don't waste time on endless meetings, massive slide decks, or internal approvals. It's just me building the exact system you need based on a proven, repeatable process.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We can either port your existing content over to a faster, high-converting foundation, or if your current site is solid, focus purely on the marketing flows (Ads, Email, SEO).",
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
      "That's exactly why I built this. You get full transparency on scope and price before a single dollar changes hands. No surprises.",
  },
  {
    question: "Do you manage the ads after launch?",
    answer:
      "Yes, I offer ongoing ad management as an add-on service ($750/mo) for businesses that want continuous optimization.",
  },
  {
    question: "What does the $400/month maintenance cover?",
    answer:
      "Premium hosting, daily backups, security updates, technical support, and minor content updates (swapping images, updating text) so you never have to touch the backend.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Nav />

      <main className="flex-1 pt-20">
        {/* HERO */}
        <section className="relative bg-[image:var(--background-image-grid-light)] bg-[size:40px_40px] py-24 md:py-32 px-6 flex flex-col items-center text-center overflow-hidden border-b border-charcoal/10">
          <div className="inline-flex items-center gap-2 border border-charcoal/20 bg-white px-4 py-1.5 rounded-full mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">
              Marketing System
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.9] max-w-6xl mx-auto mb-8 relative z-10">
            Your entire marketing system. Built and running in{" "}
            <span className="relative inline-block whitespace-nowrap px-2">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-yellow transform rotate-[15deg] z-[-1]" />
              <span className="relative z-10">days.</span>
            </span>
          </h1>

          <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-16">
            Website. Email. Ads. SEO. All of it. Set up, launched, and live
            before most agencies finish their proposal.
          </p>

          {/* Video placeholder */}
          <div className="w-full max-w-4xl aspect-video bg-darkgray rounded-xl shadow-2xl relative flex items-center justify-center mb-16 overflow-hidden group cursor-pointer border border-charcoal/10">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105 bg-charcoal" />
            <button className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Play className="text-charcoal w-8 h-8 ml-1" />
            </button>
          </div>

          <Link
            href="/start"
            className="inline-flex justify-center items-center bg-yellow text-charcoal font-anton uppercase text-xl md:text-2xl px-10 py-5 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgb(255,225,124,0.4)] hover:shadow-[0_8px_30px_rgb(23,30,25,0.4)] mb-4"
          >
            Tell me about your business
          </Link>
          <p className="font-satoshi text-xs md:text-sm text-charcoal/60 max-w-md">
            No retainers. No mystery pricing. You see the full scope before
            anything starts.
          </p>
        </section>

        {/* TRUST STRIP */}
        <section className="border-b border-charcoal/10 bg-white py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-charcoal/80 font-satoshi text-sm md:text-base font-medium uppercase tracking-wide">
            <span>25+ brands managed</span>
            <span className="hidden sm:block text-charcoal/30">&bull;</span>
            <span>4 businesses built</span>
            <span className="hidden md:block text-charcoal/30">&bull;</span>
            <span>Sites launched in 24 hours</span>
            <span className="hidden lg:block text-charcoal/30">&bull;</span>
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
                THE OLD WAY
              </h2>
              <ul className="space-y-8 mb-16">
                <li className="flex items-start gap-4">
                  <X className="text-red-500 w-8 h-8 shrink-0 mt-1" />
                  <p className="font-satoshi text-lg text-sage/80">
                    <strong className="text-white font-bold block mb-1">
                      Agencies that waste time and money.
                    </strong>
                    Paying $20K upfront only to wait months for a generic site
                    and a confusing dashboard.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <X className="text-red-500 w-8 h-8 shrink-0 mt-1" />
                  <p className="font-satoshi text-lg text-sage/80">
                    <strong className="text-white font-bold block mb-1">
                      DIY tools that make you wear every hat.
                    </strong>
                    Spending your weekends learning Webflow or fighting with
                    WordPress plugins instead of running your business.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <X className="text-red-500 w-8 h-8 shrink-0 mt-1" />
                  <p className="font-satoshi text-lg text-sage/80">
                    <strong className="text-white font-bold block mb-1">
                      Doing nothing while competitors win.
                    </strong>
                    Watching lesser products steal your customers because their
                    marketing system actually works.
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
                THE BETTER WAY
              </h2>
              <p className="font-satoshi text-xl text-white/90 mb-16 max-w-xl">
                One person builds your whole system. That same person answers
                when you call.
              </p>
              <div className="space-y-10">
                {[
                  {
                    title: "Built in days, not months",
                    desc: "Your complete marketing system goes live this week. Fast execution without sacrificing quality.",
                  },
                  {
                    title: "One person, fully accountable",
                    desc: "The person who builds it is the person who answers the phone. No account managers or middle-men.",
                  },
                  {
                    title: "You see everything before you pay",
                    desc: "Full scope, timeline, and price upfront. Absolute transparency from day one.",
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
                <h2 className="font-anton text-6xl md:text-7xl uppercase leading-[0.9] mb-6">
                  Three steps.
                  <br />
                  That&apos;s it.
                </h2>
                <p className="font-satoshi text-lg text-charcoal/70 max-w-sm">
                  A streamlined process designed to eliminate friction and get
                  your business online fast.
                </p>
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
          className="py-24 md:py-32 px-6 bg-[image:var(--background-image-grid-light)] bg-[size:40px_40px] border-b border-charcoal/10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-6 max-w-3xl mx-auto">
                Clear pricing. No &apos;schedule a call to find out.&apos;
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 items-end">
              {/* Website Sprint */}
              <div className="bg-white border border-charcoal/10 rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="font-anton text-3xl uppercase mb-2">
                  Website Sprint
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-anton text-5xl">$3,500</span>
                </div>
                <p className="font-satoshi text-charcoal/70 mb-8 pb-8 border-b border-charcoal/10">
                  Custom site, SEO, mobile, copy, analytics, hosting. 5 days or
                  less.
                </p>
                <ul className="space-y-4 mb-10 font-satoshi">
                  {[
                    "Custom Web Design",
                    "SEO Foundation",
                    "Mobile Responsive",
                    "Copywriting",
                    "Analytics Setup",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-charcoal" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/start"
                  className="block w-full text-center bg-white border-2 border-charcoal text-charcoal font-anton uppercase text-xl py-4 rounded-lg hover:bg-charcoal hover:text-white transition-colors duration-300"
                >
                  Start Sprint
                </Link>
              </div>

              {/* Full System */}
              <div className="bg-charcoal text-white border border-charcoal rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-yellow text-charcoal font-anton uppercase text-sm px-4 py-1 rounded-bl-xl">
                  Recommended
                </div>
                <h3 className="font-anton text-3xl uppercase mb-2 text-yellow">
                  The Full System
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-anton text-5xl">$5,500</span>
                </div>
                <p className="font-satoshi text-sage/80 mb-8 pb-8 border-b border-sage/20">
                  Everything in Website Sprint plus 4 email/SMS flows and Google
                  Ads setup. 7 days or less.
                </p>
                <ul className="space-y-4 mb-10 font-satoshi text-white/90">
                  {[
                    { text: "Everything in Sprint", bold: true },
                    { text: "4 Email/SMS Automations", bold: false },
                    { text: "Google Ads Campaign Setup", bold: false },
                    { text: "Conversion Tracking", bold: false },
                    { text: "Strategy Session", bold: false },
                  ].map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow" />
                      {f.bold ? <strong>{f.text}</strong> : f.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/start"
                  className="block w-full text-center bg-yellow text-charcoal font-anton uppercase text-xl py-4 rounded-lg hover:bg-white transition-colors duration-300 shadow-[0_4px_20px_rgb(255,225,124,0.3)]"
                >
                  Get The System
                </Link>
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-white border border-charcoal/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between mb-12 shadow-sm">
              <div>
                <h4 className="font-anton text-2xl uppercase mb-1">
                  Monthly Maintenance
                </h4>
                <p className="font-satoshi text-charcoal/70 text-sm md:text-base">
                  Hosting, continuous updates, technical support, and minor
                  changes.
                </p>
              </div>
              <div className="mt-4 md:mt-0 font-anton text-3xl">
                $400<span className="text-lg text-charcoal/50">/mo</span>
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
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16">
              Work I&apos;ve done. Businesses like yours.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.name} {...cs} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-16">
              Questions you probably have.
            </h2>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="contact"
          className="py-32 px-6 bg-yellow text-charcoal relative overflow-hidden flex flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="font-anton text-[20vw] leading-none opacity-5 whitespace-nowrap select-none">
              CTRLSWING GO LIVE
            </div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              Ready to get your marketing running?
            </h2>
            <p className="font-satoshi text-xl md:text-2xl text-charcoal/80 max-w-2xl mx-auto mb-12">
              Fill out a quick form. Takes about 2 minutes. I&apos;ll get back
              to you within 24 hours with a clear scope, timeline, and price. No
              commitment.
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
              <Lock className="inline-block align-text-bottom mr-1 w-4 h-4" />
              Your info goes directly to me. No sales team. No autoresponder
              sequence.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

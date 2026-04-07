import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BookingForm } from "@/components/booking-form";
import { FaqItem } from "@/components/faq-item";

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Multi-day hands-on workshop. Build a working agent skill for your business. $500/seat, 5 seats per workshop.",
};

const faqs = [
  {
    question: "Do I need AI experience?",
    answer:
      "No. The workshop is designed for people who are curious but have not built anything yet. If you can write a clear set of instructions for a person, you can build a skill.",
  },
  {
    question: "What do I need to bring?",
    answer:
      "A laptop and a clear idea of a problem you want to solve. That is it. I handle the setup and tooling.",
  },
  {
    question: "Is it remote or in person?",
    answer:
      "Both options are available. Remote workshops run over video with screen sharing. In-person workshops are in San Diego. Same curriculum, same outcomes.",
  },
  {
    question: "What if the skill does not work after the workshop?",
    answer:
      "You have direct access to me after the workshop. If something breaks or needs adjusting, I help you fix it. No support tickets.",
  },
  {
    question: "Can I send my team?",
    answer:
      "Yes. Team seats are common. If you want to book more than 2 seats, mention it in your booking form and I will reach out about group pricing.",
  },
];

export default function WorkshopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main id="main" className="flex-1 pt-20">
        {/* HERO */}
        <section className="py-24 md:py-32 px-6 bg-grid-light border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-charcoal/50 mb-6">
              Workshop
            </p>
            <h1 className="font-anton text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
              Build a working skill for{" "}
              <span className="relative inline-block whitespace-nowrap px-2">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-yellow transform rotate-[15deg] z-[-1]" />
                <span className="relative z-10">your business.</span>
              </span>
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-charcoal/70 max-w-2xl">
              A multi-day, hands-on workshop where you build a real agent skill from scratch.
              Not a webinar. Not a lecture. You do the work, I guide the process.
            </p>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-charcoal/10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* WHO IT IS FOR */}
            <div>
              <h2 className="font-anton text-4xl md:text-5xl uppercase leading-[0.9] mb-8">
                Who this is for
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Operators and business owners",
                    desc: "You run the business. You want AI tools that actually fit your workflow, not generic chatbot conversations.",
                  },
                  {
                    title: "Teams adopting AI",
                    desc: "Your team is curious but stuck at the prompt stage. This gets them building real, reusable tools.",
                  },
                  {
                    title: "Curious people who have not started yet",
                    desc: "You have heard about AI skills but never built one. This is where you start.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-charcoal mt-1 shrink-0" />
                    <div>
                      <h3 className="font-anton text-xl uppercase mb-1">{item.title}</h3>
                      <p className="font-satoshi text-charcoal/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HOW IT WORKS */}
            <div>
              <h2 className="font-anton text-4xl md:text-5xl uppercase leading-[0.9] mb-8">
                How it works
              </h2>
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "Define the problem",
                    desc: "We start with your business. What takes too long, what is inconsistent, what keeps falling through the cracks.",
                  },
                  {
                    num: "02",
                    title: "Design the skill",
                    desc: "Turn that problem into a clear set of instructions. I teach you the framework so you can repeat this on your own.",
                  },
                  {
                    num: "03",
                    title: "Build and test it",
                    desc: "You build the skill, install it, and test it with real inputs from your business. Working before you leave.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 items-start group">
                    <span className="font-anton text-3xl text-yellow/30 group-hover:text-yellow transition-colors duration-300 select-none">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-anton text-xl uppercase mb-1">{step.title}</h3>
                      <p className="font-satoshi text-charcoal/70">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING + BOOKING */}
        <section className="bg-charcoal text-white py-24 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            {/* PRICING INFO */}
            <div>
              <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-sage/60 mb-6">
                Pricing
              </p>
              <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] mb-8 text-yellow">
                $500 per seat.
              </h2>
              <p className="font-satoshi text-lg text-sage/80 mb-10 max-w-md">
                Five seats per workshop. Small enough that you get real, personal guidance.
                Large enough that you learn from other people's problems too.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Multi-day, hands-on format",
                  "5 seats maximum per workshop",
                  "You leave with a working skill",
                  "Direct access to me after the workshop",
                  "No prior AI experience needed",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow shrink-0" />
                    <span className="font-satoshi text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border border-sage/10 rounded-xl p-6">
                <p className="font-satoshi text-sm text-sage/60 uppercase tracking-wider mb-2">
                  Next workshop
                </p>
                <p className="font-anton text-2xl uppercase text-white">
                  Date TBD
                </p>
                <p className="font-satoshi text-sage/60 text-sm mt-1">
                  Book below to reserve your seat. I will reach out with dates.
                </p>
              </div>
            </div>

            {/* BOOKING FORM */}
            <div id="book">
              <p className="font-satoshi text-sm font-medium uppercase tracking-widest text-sage/60 mb-6">
                Book Your Seat
              </p>
              <BookingForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 px-6 bg-white">
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
      </main>

      <Footer />
    </div>
  );
}

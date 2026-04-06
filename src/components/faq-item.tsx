import { ChevronDown } from "lucide-react";

export function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-charcoal/10">
      <summary className="flex cursor-pointer items-center justify-between py-6 font-anton text-2xl uppercase">
        {question}
        <span className="transition group-open:rotate-180">
          <ChevronDown className="w-6 h-6 text-charcoal" />
        </span>
      </summary>
      <div className="pb-6 font-satoshi text-lg text-charcoal/80 pr-12">
        {answer}
      </div>
    </details>
  );
}

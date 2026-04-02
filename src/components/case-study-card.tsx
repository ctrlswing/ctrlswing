import Image from "next/image";

export function CaseStudyCard({
  name,
  location,
  description,
  proof,
  stagger,
  screenshot,
  isDark,
}: {
  name: string;
  location: string;
  description: string;
  proof: string;
  stagger: boolean;
  screenshot?: string;
  isDark?: boolean;
}) {
  return (
    <div className={`${stagger ? "md:mt-12" : ""}`}>
      {/* Browser frame as the card itself */}
      <div
        className={`rounded-2xl mb-6 overflow-hidden border ${isDark ? "bg-charcoal border-charcoal" : "bg-white border-charcoal/10"} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
      >
        {/* Chrome bar */}
        <div
          className={`h-7 shrink-0 ${isDark ? "bg-darkgray border-sage/10" : "bg-charcoal/5 border-charcoal/10"} border-b flex items-center px-3 gap-1.5`}
        >
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        {/* Screenshot */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={`${name} website screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="p-4 flex flex-col gap-2 h-full">
              <div className="h-4 w-1/2 bg-charcoal/10 rounded" />
              <div className="h-20 w-full bg-charcoal/5 rounded mt-2" />
              <div className="h-8 w-1/3 bg-yellow/30 rounded mt-auto" />
            </div>
          )}
        </div>
      </div>
      <h3 className="font-anton text-2xl uppercase mb-2">{name}</h3>
      <p className="font-satoshi text-sm text-charcoal/60 mb-1 uppercase tracking-wider">
        {location}
      </p>
      <p className="font-satoshi text-charcoal/80 mb-4">{description}</p>
      <p className="font-satoshi font-bold text-charcoal border-l-2 border-yellow pl-3">
        &ldquo;{proof}&rdquo;
      </p>
    </div>
  );
}

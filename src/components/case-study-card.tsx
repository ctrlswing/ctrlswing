import Image from "next/image";

export function CaseStudyCard({
  name,
  location,
  description,
  proof,
  stagger,
  screenshot,
  outerBg,
  innerBg,
  innerBorder,
  chromeBg,
  chromeBorder,
}: {
  name: string;
  location: string;
  description: string;
  proof: string;
  stagger: boolean;
  screenshot?: string;
  outerBg: string;
  innerBg: string;
  innerBorder: string;
  chromeBg: string;
  chromeBorder: string;
}) {
  return (
    <div className={`group cursor-pointer ${stagger ? "md:mt-12" : ""}`}>
      <div
        className={`aspect-[4/3] ${outerBg} rounded-xl mb-6 overflow-hidden relative border border-charcoal/10`}
      >
        <div
          className={`absolute inset-4 ${innerBg} ${innerBorder} shadow-xl rounded-lg border flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-105`}
        >
          {/* Browser chrome */}
          <div
            className={`h-6 shrink-0 ${chromeBg} ${chromeBorder} border-b flex items-center px-3 gap-1.5`}
          >
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          {/* Screenshot */}
          <div className="flex-1 relative overflow-hidden">
            {screenshot ? (
              <Image
                src={screenshot}
                alt={`${name} website screenshot`}
                fill
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

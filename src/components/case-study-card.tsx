import Image from "next/image";

export function CaseStudyCard({
  name,
  location,
  description,
  proof,
  variant,
  stagger,
  screenshot,
}: {
  name: string;
  location: string;
  description: string;
  proof: string;
  variant: "dark" | "light";
  stagger: boolean;
  screenshot?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div className={`group cursor-pointer ${stagger ? "md:mt-12" : ""}`}>
      <div
        className={`aspect-[4/3] ${isDark ? "bg-sage/20" : "bg-charcoal/5"} rounded-xl mb-6 overflow-hidden relative border border-charcoal/10`}
      >
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${name} website screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-4 ${isDark ? "bg-charcoal border-charcoal" : "bg-white border-charcoal/5"} shadow-xl rounded-lg border flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-105`}
          >
            <div
              className={`h-6 ${isDark ? "bg-darkgray border-sage/10" : "bg-charcoal/5 border-charcoal/10"} border-b flex items-center px-3 gap-1.5`}
            >
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 p-4 flex flex-col gap-2">
              <div
                className={`h-4 w-1/2 ${isDark ? "bg-sage/20" : "bg-charcoal/10"} rounded`}
              />
              <div
                className={`h-20 w-full ${isDark ? "bg-sage/10" : "bg-charcoal/5"} rounded mt-2`}
              />
              <div
                className={`h-8 w-1/3 ${isDark ? "bg-yellow/30" : "bg-yellow/30"} rounded mt-auto`}
              />
            </div>
          </div>
        )}
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

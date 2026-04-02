import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export function ResourceCard({
  slug,
  name,
  type,
  description,
  featured,
}: {
  slug: string;
  name: string;
  type: ResourceType;
  description: string;
  featured: boolean;
}) {
  return (
    <Link
      href={`/resources/${slug}`}
      className="group block bg-white border border-charcoal/10 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider ${typeBadgeStyles[type]}`}
        >
          {typeLabels[type]}
        </span>
        {featured && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-satoshi font-medium uppercase tracking-wider bg-yellow text-charcoal">
            Featured in Skills Lab
          </span>
        )}
      </div>
      <h3 className="font-anton text-2xl uppercase mb-3 group-hover:translate-x-1 transition-transform duration-300">
        {name}
      </h3>
      <p className="font-satoshi text-charcoal/70 mb-6 line-clamp-2">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 font-satoshi font-medium text-charcoal group-hover:text-yellow transition-colors duration-200">
        View details
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </span>
    </Link>
  );
}

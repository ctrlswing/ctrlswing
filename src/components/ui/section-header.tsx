import { cn } from "@/lib/cn";

type Variant = "light" | "dark";

interface SectionHeaderProps {
  heading: string;
  subtitle?: string;
  variant?: Variant;
  headingClassName?: string;
  className?: string;
}

const headingVariant: Record<Variant, string> = {
  light: "font-anton text-5xl md:text-6xl uppercase leading-[0.9]",
  dark: "font-anton text-5xl md:text-6xl uppercase leading-[0.9] text-white",
};

const subtitleVariant: Record<Variant, string> = {
  light: "font-satoshi text-lg text-charcoal/70",
  dark: "font-satoshi text-lg text-sage/70",
};

export function SectionHeader({
  heading,
  subtitle,
  variant = "light",
  headingClassName,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className={cn(headingVariant[variant], subtitle ? "mb-4" : "mb-0", headingClassName)}>
        {heading}
      </h2>
      {subtitle && <p className={subtitleVariant[variant]}>{subtitle}</p>}
    </div>
  );
}

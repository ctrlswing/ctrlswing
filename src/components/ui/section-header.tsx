type SectionHeaderProps = {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  variant?: "light" | "dark";
};

const sizeStyles = {
  default: "text-5xl md:text-6xl",
  large: "text-6xl md:text-7xl",
};

export function SectionHeader({
  children,
  subtitle,
  className = "",
  align = "left",
  size = "default",
  variant = "light",
}: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <h2 className={`font-anton ${sizeStyles[size]} uppercase leading-[0.9] mb-6`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`font-satoshi text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${
          variant === "dark" ? "text-sage/80" : "text-charcoal/70"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

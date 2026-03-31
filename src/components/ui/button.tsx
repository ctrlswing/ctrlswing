import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "text-link";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "inline-flex justify-center items-center bg-yellow text-charcoal font-anton uppercase rounded-xl hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-[0_8px_30px_rgb(255,225,124,0.3)]",
  secondary:
    "inline-flex justify-center items-center bg-charcoal text-white font-anton uppercase rounded-xl hover:bg-yellow hover:text-charcoal transition-colors duration-200",
  outline:
    "inline-flex items-center font-anton uppercase rounded-xl border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors duration-200",
  ghost:
    "font-satoshi text-white underline underline-offset-4 hover:text-yellow transition-colors duration-200",
  "text-link":
    "font-satoshi font-medium text-charcoal border-b border-charcoal/30 hover:border-yellow hover:text-yellow transition-colors duration-200 pb-0.5",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
  xl: "text-xl px-10 py-5",
};

const hasPadding = (variant: Variant) =>
  variant === "primary" || variant === "secondary" || variant === "outline";

export function Button({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    variantClasses[variant],
    hasPadding(variant) && sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

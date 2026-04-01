import Link from "next/link";

type ButtonVariant = "primary" | "primary-dark" | "outline" | "ghost";
type ButtonSize = "md" | "lg" | "xl";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow text-charcoal hover:bg-charcoal hover:text-white shadow-yellow-glow hover:shadow-yellow-glow-hover hover:-translate-y-1",
  "primary-dark":
    "bg-yellow text-charcoal hover:bg-white shadow-yellow-subtle",
  outline:
    "bg-white border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  ghost:
    "text-charcoal/70 hover:text-charcoal",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "text-lg px-6 py-2",
  lg: "text-xl px-8 py-4",
  xl: "text-xl md:text-2xl px-10 py-5",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
} & (
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.ButtonHTMLAttributes<HTMLButtonElement>
);

export function Button({
  variant = "primary",
  size = "lg",
  href,
  className = "",
  children,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const base = `inline-flex justify-center items-center font-anton uppercase rounded-lg transition-all duration-300 ${
    fullWidth ? "w-full" : ""
  }`;
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

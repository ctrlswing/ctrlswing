import Link from "next/link";

type ButtonVariant = "primary" | "primary-dark" | "primary-inverse" | "outline" | "ghost";
type ButtonSize = "md" | "lg" | "xl" | "2xl";
type ButtonRounded = "default" | "pill";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-yellow text-charcoal hover:bg-charcoal hover:text-white shadow-yellow-glow hover:shadow-yellow-glow-hover hover:-translate-y-1",
  "primary-dark":
    "bg-charcoal text-yellow hover:bg-yellow hover:text-charcoal shadow-yellow-subtle",
  "primary-inverse":
    "bg-charcoal text-white hover:bg-yellow hover:text-charcoal hover:scale-105",
  outline:
    "bg-white border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  ghost:
    "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5",
};

const roundedStyles: Record<ButtonRounded, string> = {
  default: "rounded-lg",
  pill: "rounded-full",
};

const sizeStyles: Record<ButtonSize, string> = {
  md: "text-lg px-6 py-3 min-h-[44px]",
  lg: "text-xl px-8 py-4",
  xl: "text-xl md:text-2xl px-10 py-5",
  "2xl": "text-2xl md:text-3xl px-8 py-6",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: ButtonRounded;
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
  rounded = "default",
  href,
  className = "",
  children,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const base = `inline-flex justify-center items-center font-anton uppercase ${roundedStyles[rounded]} transition-all duration-300 active:scale-[0.97] active:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0 ${
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

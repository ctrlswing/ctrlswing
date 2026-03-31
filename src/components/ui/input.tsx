import { cn } from "@/lib/cn";

type Variant = "underline" | "bordered";

// Shared label + base input styling per variant
const labelClasses: Record<Variant, string> = {
  underline:
    "block font-satoshi text-xs text-sage/50 uppercase tracking-wider mb-2",
  bordered:
    "block font-satoshi text-xs text-charcoal/50 uppercase tracking-wider mb-2",
};

const inputBaseClasses: Record<Variant, string> = {
  underline:
    "w-full bg-transparent border-b border-sage/20 py-3 text-white font-satoshi text-lg focus:border-yellow focus:outline-none transition-colors placeholder:text-sage/30",
  bordered:
    "w-full bg-white border border-charcoal/20 rounded-xl px-4 py-3 text-charcoal font-satoshi text-base focus:border-charcoal focus:outline-none transition-colors placeholder:text-charcoal/30",
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: Variant;
  wrapperClassName?: string;
}

export function Input({
  label,
  variant = "underline",
  wrapperClassName,
  className,
  required,
  id,
  ...props
}: InputProps) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className={labelClasses[variant]}>
          {label}
          {required && <span className="text-yellow ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        className={cn(inputBaseClasses[variant], className)}
        {...props}
      />
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  variant?: Variant;
  wrapperClassName?: string;
}

export function Textarea({
  label,
  variant = "underline",
  wrapperClassName,
  className,
  required,
  id,
  ...props
}: TextareaProps) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className={labelClasses[variant]}>
          {label}
          {required && <span className="text-yellow ml-1">*</span>}
        </label>
      )}
      <textarea
        id={id}
        required={required}
        className={cn(inputBaseClasses[variant], "resize-none", className)}
        {...props}
      />
    </div>
  );
}

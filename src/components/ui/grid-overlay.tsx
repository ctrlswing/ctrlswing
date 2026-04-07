export function GridOverlay({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${
        variant === "dark" ? "bg-grid-dark" : "bg-grid-light"
      }`}
      aria-hidden="true"
    />
  );
}

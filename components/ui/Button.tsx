import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "crimson" | "ghost";

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const styles: Record<Variant, string> = {
    primary: "bg-titanium text-noir hover:bg-white",
    outline:
      "border border-titanium/25 text-titanium hover:border-titanium hover:bg-white/5",
    crimson: "bg-crimson text-white hover:bg-crimson/90",
    ghost: "text-titanium/70 hover:text-titanium",
  };
  return (
    <button
      data-magnetic
      className={cn(
        "inline-flex items-center justify-center gap-3 px-7 py-4",
        "text-[11px] font-medium uppercase tracking-[0.22em]",
        "transition-all duration-500 ease-[var(--ease-apple)]",
        "disabled:opacity-40 disabled:pointer-events-none",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
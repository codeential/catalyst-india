import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "flame" | "ghost";

type ButtonProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-semibold transition-colors duration-300 xl:text-lg";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-white",
  flame: "bg-flame text-white hover:bg-flame-dark",
  ghost: "border border-current hover:bg-white/10",
};

export default function Button({
  href,
  variant = "flame",
  external = false,
  className = "",
  children,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
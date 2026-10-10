import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "forest" | "ghost" | "ghostLight";

const styles: Record<Variant, string> = {
  primary:
    "bg-brass text-forest-deep hover:bg-[#d4b57a] shadow-md shadow-forest/10",
  secondary:
    "border border-line bg-white text-forest hover:border-brass hover:text-brass-deep shadow-sm",
  forest: "bg-forest text-bone hover:bg-forest-deep shadow-md shadow-forest/20",
  ghost: "text-teal hover:text-forest",
  ghostLight:
    "border border-white/45 bg-white/10 text-bone hover:border-white/80 hover:bg-white/15",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">) {
  const classes = `${base} ${styles[variant]} ${className}`;
  const external =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

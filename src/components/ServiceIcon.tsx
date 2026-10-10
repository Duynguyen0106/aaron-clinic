import type { ServiceIconName } from "@/lib/site";

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "spine":
      return (
        <svg {...common}>
          <path d="M12 3v18M9 6c1.5 1 3.5 1 5 0M8.5 12c1.8 1.2 4.2 1.2 6 0M9 18c1.5 1 3.5 1 5 0" />
        </svg>
      );
    case "wave":
      return (
        <svg {...common}>
          <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
          <path d="M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8" />
          <circle cx="12" cy="12" r="2.2" />
        </svg>
      );
    case "hand":
      return (
        <svg {...common}>
          <path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V11M11 10.5V6.8a1.5 1.5 0 0 1 3 0V11M14 10.8V7.8a1.5 1.5 0 0 1 3 0V13c0 3.2-2.2 5.5-5.2 5.5H11c-2.5 0-4-1.4-5-3.3L5 13.5" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-8.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

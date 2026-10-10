"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#visit", label: "Visits" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/book", label: "Book" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = onHome && !scrolled && !open;

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-line/80 bg-bone/95 text-ink shadow-[0_8px_30px_rgba(15,46,40,0.07)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-bone"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="font-display text-[1.05rem] font-bold tracking-tight"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — Home`}
        >
          {site.shortName}
        </Link>

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-7 text-[0.95rem] md:flex ${
            overHero ? "text-bone/80" : "text-muted"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                overHero
                  ? "transition hover:text-brass"
                  : "transition hover:text-forest"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ButtonLink
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            variant={overHero ? "primary" : "forest"}
            className="px-3.5 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Book on WhatsApp
          </ButtonLink>
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border md:hidden ${
              overHero
                ? "border-white/25 text-bone"
                : "border-forest/10 text-forest"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M5 7h14M5 12h14M5 17h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bone px-5 py-4 text-ink md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-base font-medium text-forest hover:bg-mist"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

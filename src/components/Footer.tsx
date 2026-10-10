import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-bone/75">
            {site.tagline}. {site.serviceArea}.
          </p>
          <div className="mt-6">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Book on WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bone/85">
            <li>
              <Link href="/about" className="hover:text-white">
                About Aaron
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-white">
                Book
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-brass uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-bone/85">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp booking
              </a>
            </li>
            <li>{site.serviceArea}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 py-5 text-xs text-bone/60 md:px-8">
          <p>
            © 2026 {site.name} · Osteopathy &amp; Sound
          </p>
          <p>Mobile practice · London</p>
        </div>
      </div>
    </footer>
  );
}

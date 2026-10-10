import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a mobile osteopathy or sound session with Aaron Horn in London via WhatsApp or phone.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <div className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
          Book
        </p>
        <h1 className="mt-3 font-display text-4xl text-forest md:text-5xl">
          Message to book
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Aaron does not use an online calendar widget. WhatsApp or a quick call
          is the fastest way to arrange a mobile visit across London.
        </p>

        <div className="mt-10 space-y-4 rounded-2xl border border-line bg-white/90 p-6 shadow-sm md:p-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
              WhatsApp &amp; phone
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 block font-display text-3xl font-semibold text-forest"
            >
              {site.phone}
            </a>
          </div>
          <p className="text-muted">{site.serviceArea}</p>
          <p className="text-sm text-muted">{site.cancellation}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="forest"
            >
              Open WhatsApp
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call now
            </ButtonLink>
          </div>
        </div>

        <ol className="mt-10 space-y-4 text-base text-muted">
          <li>
            <strong className="text-forest">1.</strong> Send a short note about
            what you need (osteopathy, sound, or both).
          </li>
          <li>
            <strong className="text-forest">2.</strong> Include your area of
            London and any timing preferences.
          </li>
          <li>
            <strong className="text-forest">3.</strong> Aaron confirms
            availability and how best to set up the visit.
          </li>
        </ol>
      </div>
    </div>
  );
}

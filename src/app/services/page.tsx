import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile osteopathy, sound & body sessions, and sound baths with Aaron Horn across London. Book by WhatsApp.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
            Services
          </p>
          <h1 className="mt-3 font-display text-4xl text-forest md:text-5xl">
            Osteopathy &amp; sound
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Every offering can travel with Aaron across London. Message to shape
            the right session for you.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="flex h-full flex-col rounded-2xl border border-line bg-white/85 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brass/40 hover:shadow-md md:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-teal">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-2xl text-forest">
                    {service.title}
                  </h2>
                  {service.badge ? (
                    <span className="rounded-full bg-brass/15 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-brass-deep uppercase">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {service.summary}
                </p>
                {service.relatedPricing ? (
                  <p className="mt-4 text-sm font-semibold text-teal">
                    {service.relatedPricing}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-line bg-mist/70 p-6 md:p-8">
          <h2 className="font-display text-2xl text-forest">Ready to book?</h2>
          <p className="mt-2 max-w-xl text-muted">
            WhatsApp or call {site.phone}. Share what you need and your area of
            London.
          </p>
          <div className="mt-6">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="forest"
            >
              Message on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

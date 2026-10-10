import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getService, services, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  const title = `${service.title} in London`;
  const description = `${service.summary} Book with Aaron Horn — mobile osteopathy and sound across London.`;
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="pt-10 md:pt-14">
      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <Link
          href="/services"
          className="text-sm font-medium text-teal hover:text-forest"
        >
          ← All services
        </Link>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-teal">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <h1 className="font-display text-4xl text-forest md:text-5xl">
                {service.title}
              </h1>
              {service.badge ? (
                <span className="inline-flex rounded-full bg-brass/15 px-3 py-1 text-xs font-semibold tracking-wide text-brass-deep uppercase">
                  {service.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {service.summary}
            </p>
            {service.relatedPricing ? (
              <p className="mt-4 text-sm font-bold tracking-wide text-teal">
                {service.relatedPricing}
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3 md:pt-10">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="forest"
            >
              Book this session
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-[1.4fr_0.8fr] md:px-8 md:pb-24">
        <div className="space-y-8">
          <section className="rounded-2xl border border-line bg-white/90 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl text-forest">
              About this session
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {service.description}
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-white/90 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl text-forest">Ideal for</h2>
            <ul className="mt-4 space-y-3">
              {service.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-muted md:text-base"
                >
                  <span className="mt-1 text-teal" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-white/90 p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl text-forest">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3">
              {service.whatToExpect.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-muted md:text-base"
                >
                  <span className="mt-1 text-brass" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-mist/80 p-6">
            <h2 className="font-display text-xl text-forest">Book by WhatsApp</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.serviceArea}. Message {site.phone} to arrange a visit.
            </p>
            <div className="mt-5">
              <ButtonLink
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                Open WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white/90 p-6">
            <h2 className="font-display text-xl text-forest">Other services</h2>
            <ul className="mt-4 space-y-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-sm font-medium text-teal hover:text-forest"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Hero } from "@/components/Hero";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  faqs,
  highlights,
  pricing,
  services,
  site,
  visitSteps,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-forest text-bone">
        <div className="mx-auto grid max-w-6xl gap-3 px-5 py-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {highlights.map((item) => (
            <p
              key={item}
              className="flex items-start gap-2 text-sm text-bone/95 md:text-[0.95rem]"
            >
              <span className="mt-0.5 text-brass" aria-hidden>
                ✓
              </span>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section id="visit" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Your visit
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
              Simple from first message to treatment
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {visitSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-line bg-white/80 p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-teal">
                  {item.step}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-line bg-white/50 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              The approach
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
              Structure meets frequency
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Aaron works where osteopathy and sound meet: first listening to
              the body through touch, then offering resonance when the system is
              ready to soften. Sessions are unhurried, precise, and shaped
              around how you arrive that day.
            </p>
            <p className="mt-4 text-sm font-semibold text-forest">
              GOsC Reg. No. {site.practitioner.regNo} · Fully registered ·{" "}
              {site.serviceArea}
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="forest">
                About Aaron
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(15,46,40,0.18)]">
            <Image
              src="/images/aaron-portrait-2.jpg"
              alt="Sound instruments including a gong prepared for a session"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Services
              </p>
              <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
                Care that travels with you
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Choose osteopathy alone, sound alone, or a blended session.
                Every visit is arranged directly — mobile across London.
              </p>
            </div>
            <ButtonLink href="/services" variant="secondary">
              All services
            </ButtonLink>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-line bg-white/85 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brass/40 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/8 text-teal">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </span>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-forest">
                      {service.title}
                    </h3>
                    {service.badge ? (
                      <span className="rounded-full bg-brass/15 px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide text-brass-deep uppercase">
                        {service.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-teal">
                    Learn more →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-24 border-y border-line bg-white/50 px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Pricing
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
              Clear next step
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Session length and fees are confirmed when you book — message with
              what you need and your area of London.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-mist/80 text-xs tracking-wide text-muted uppercase">
                <tr>
                  <th className="px-5 py-3 font-semibold">Service</th>
                  <th className="px-5 py-3 font-semibold">Duration</th>
                  <th className="px-5 py-3 font-semibold">Fee</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row) => (
                  <tr key={row.service} className="border-t border-line">
                    <td className="px-5 py-4 font-medium text-forest">
                      {row.service}
                    </td>
                    <td className="px-5 py-4 text-muted">{row.duration}</td>
                    <td className="px-5 py-4 text-muted">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="forest"
            >
              Ask about availability
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
              Common questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-forest-deep text-bone">
          <div className="absolute inset-0 opacity-35" aria-hidden>
            <Image
              src="/images/aaron-atmosphere.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-brass uppercase">
              Book
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl md:text-4xl">
              Start with a message
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-bone/85">
              WhatsApp or call {site.phone}. Same number for both — mobile
              osteopathy and sound sessions across London.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open WhatsApp
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="ghostLight">
                Call {site.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

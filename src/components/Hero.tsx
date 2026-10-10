import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative -mt-[4.25rem] min-h-[100svh] overflow-hidden text-bone">
      <div className="hero-media absolute inset-0" aria-hidden>
        <Image
          src="/images/aaron-gong.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[58%_center] scale-[1.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,27,0.28)_0%,rgba(10,31,27,0.18)_35%,rgba(10,31,27,0.78)_100%),radial-gradient(800px_420px_at_70%_40%,rgba(201,166,107,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl items-end px-5 pb-14 pt-28 md:px-8 md:pb-16">
        <div className="section-fade max-w-2xl">
          <h1 className="font-display text-[clamp(3.2rem,11vw,6.5rem)] leading-[0.92] font-extrabold tracking-[-0.035em]">
            {site.name}
          </h1>
          <p className="mt-5 font-display text-[clamp(1.35rem,3.4vw,2rem)] font-semibold leading-tight">
            {site.tagline}
          </p>
          <p className="mt-3 max-w-md text-base leading-relaxed text-bone/88 md:text-lg">
            A mobile holistic practice across London — structural care woven
            with therapeutic sound.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </ButtonLink>
            <ButtonLink href="/services" variant="ghostLight">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

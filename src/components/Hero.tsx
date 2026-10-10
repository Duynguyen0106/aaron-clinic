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
          className="object-cover object-[20%_22%] scale-105 sm:object-[28%_35%] md:object-[58%_center] md:scale-[1.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,27,0.42)_0%,rgba(10,31,27,0.12)_30%,rgba(10,31,27,0.5)_58%,rgba(10,31,27,0.9)_100%)] md:bg-[linear-gradient(180deg,rgba(10,31,27,0.28)_0%,rgba(10,31,27,0.18)_35%,rgba(10,31,27,0.78)_100%),radial-gradient(800px_420px_at_70%_40%,rgba(201,166,107,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl items-end px-4 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] sm:px-5 sm:pb-14 md:px-8 md:pb-16">
        <div className="section-fade w-full max-w-2xl">
          <h1 className="font-display text-[clamp(2.35rem,10.5vw,6.5rem)] leading-[0.92] font-extrabold tracking-[-0.035em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
            {site.name}
          </h1>
          <p className="mt-2.5 font-display text-[clamp(1.1rem,3.8vw,2rem)] font-semibold leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:mt-5">
            {site.tagline}
          </p>
          <p className="mt-2.5 max-w-md text-[0.95rem] leading-relaxed text-bone/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:mt-3 sm:text-base md:text-lg">
            A mobile holistic practice across London — structural care woven
            with therapeutic sound.
          </p>
          <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="min-h-12 w-full px-5 text-sm sm:w-auto"
            >
              Message on WhatsApp
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="ghostLight"
              className="min-h-12 w-full px-5 text-sm sm:w-auto"
            >
              Explore services
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

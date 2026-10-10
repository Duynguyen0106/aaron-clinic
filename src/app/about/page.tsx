import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { site, venues } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Aaron Horn | GOsC Osteopath & Sound",
  description:
    "Meet Aaron Horn — GOsC-registered osteopath (Reg. No. 12346), Grammy-nominated producer, and London sound practitioner. Mobile osteopathy and sound sessions across London.",
  alternates: { canonical: "/about" },
  keywords: [
    "Aaron Horn osteopath",
    "GOsC osteopath London",
    "mobile osteopath London",
    "sound bath London",
    "BCNO osteopath",
    "osteopathy and sound therapy",
  ],
  openGraph: {
    title: "About Aaron Horn | Osteopathy & Sound",
    description:
      "GOsC-registered osteopath, Grammy-nominated producer, and sound practitioner — mobile care across London.",
    url: "/about",
    images: [
      {
        url: "/images/aaron-portrait.jpg",
        width: 760,
        height: 1014,
        alt: "Aaron Horn, GOsC-registered osteopath",
      },
    ],
  },
};

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.practitioner.name,
    jobTitle: site.practitioner.title,
    identifier: site.practitioner.regNo,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.practitioner.college,
    },
    knowsAbout: [
      "Osteopathy",
      "Sound therapy",
      "Gong baths",
      "Music production",
    ],
    telephone: site.phone,
    url: `${site.websiteUrl}/about`,
    image: `${site.websiteUrl}/images/aaron-portrait.jpg`,
    description: site.practitioner.credentials,
    areaServed: {
      "@type": "City",
      name: "London",
    },
    sameAs: [
      site.practitioner.goscUrl,
      "https://www.aaronhorn.com/",
      "https://aaronhorn.bandcamp.com/",
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <section className="relative min-h-[78svh] overflow-hidden text-bone">
        <Image
          src="/images/aaron-gong.jpg"
          alt="Aaron Horn with gong and flute"
          fill
          priority
          className="object-cover object-[18%_32%] sm:object-[30%_40%] md:object-[58%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,27,0.55)_0%,rgba(10,31,27,0.35)_35%,rgba(10,31,27,0.88)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-6xl items-end px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] sm:px-5 sm:pb-14 md:px-8 md:pb-16">
          <div className="section-fade w-full max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-brass uppercase">
              About
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,11vw,5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              Aaron Horn
            </h1>
            <p className="mt-3 font-display text-lg font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:mt-4 sm:text-xl md:text-2xl">
              {site.practitioner.title}
            </p>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-bone/90 sm:text-base md:text-lg">
              Listening is the through-line — in the studio, in sound baths, and
              in hands-on osteopathic care across London.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-bone sm:text-sm">
                GOsC Reg. No. {site.practitioner.regNo}
              </span>
              <span className="inline-flex rounded-full border border-brass/40 bg-brass/15 px-3 py-1.5 text-xs font-semibold text-brass sm:text-sm">
                {site.practitioner.qualifications}
              </span>
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-bone sm:text-sm">
                Mobile · London
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(15,46,40,0.18)]">
            <Image
              src="/images/aaron-portrait.jpg"
              alt="Portrait of Aaron Horn"
              fill
              className="object-cover object-[center_18%]"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>

          <article>
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              The practice
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
              Structure, frequency, and care that travels
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Aaron is a {site.practitioner.title} (Reg. No.{" "}
              {site.practitioner.regNo}), fully registered with the General
              Osteopathic Council. He holds a{" "}
              {site.practitioner.qualifications} from the{" "}
              {site.practitioner.college}, and brings that clinical grounding
              into a mobile London practice that also draws on years as a
              producer and sound therapist.
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Publicly, he has spoken about returning to college for osteopathy
                to deepen a scientific understanding of the body — so wellness
                work and “functional sound” sit on clearer physiology, not
                guesswork. In the room, that means precise hands-on assessment
                first, with sound offered when stillness helps the system settle.
              </p>
              <p>
                Sessions happen where you are: home, studio, or workplace across
                London. Osteopathy alone, immersive sound, or a blended visit —
                shaped around how you arrive that day.
              </p>
            </div>

            <dl className="mt-8 grid gap-4 rounded-2xl border border-line bg-white/80 p-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                  Registration
                </dt>
                <dd className="mt-1 font-semibold text-forest">
                  GOsC {site.practitioner.regNo}
                </dd>
                <dd className="mt-1 text-sm text-muted">
                  Fully registered · {site.practitioner.registered}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                  Qualification
                </dt>
                <dd className="mt-1 font-semibold text-forest">
                  {site.practitioner.qualifications}
                </dd>
                <dd className="mt-1 text-sm text-muted">
                  {site.practitioner.college}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
                  Verify on the GOsC register
                </dt>
                <dd className="mt-1">
                  <a
                    href={site.practitioner.goscUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-teal hover:text-forest"
                  >
                    View Mr Aaron Horn on osteopathy.org.uk →
                  </a>
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-white/50 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              From the studio
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
              Producer, writer, sound practitioner
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Before (and alongside) clinical work, Aaron built a career in
              music — writing, producing, and hosting immersive listening
              experiences.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            <li className="rounded-2xl border border-line bg-white/90 p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-forest">
                Grammy-nominated writing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Co-writer and co-producer of Doja Cat’s “Woman” on{" "}
                <em>Planet Her</em> — a track with billions of streams and a
                Grammy Album of the Year nomination credit.
              </p>
            </li>
            <li className="rounded-2xl border border-line bg-white/90 p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-forest">
                Chart &amp; collaborations
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Founder of Sam and the Womp — UK No. 1 with “Bom Bom” (2012).
                Credits and collaborations include Seal, Lily Allen, Trevor
                Horn, Matt Cardle, and work as one half of Crate Classics with
                Jamie Rodigan (jungle, Afrobeat, and UK bass).
              </p>
            </li>
            <li className="rounded-2xl border border-line bg-white/90 p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-forest">
                Functional sound
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Solo releases span ambient to euphoric listening. Gong baths and
                guided sound sessions sit alongside yoga, meditation, and
                mindfulness — acoustic instruments first, with a calm room and
                clear intention.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Sound in the room
            </p>
            <h2 className="mt-3 font-display text-3xl text-forest md:text-4xl">
              Immersive sessions, public &amp; private
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Aaron has curated sonic experiences and gong baths at institutions
              and brands across the UK — the same listening craft that now
              informs one-to-one care.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {venues.map((venue) => (
              <li
                key={venue}
                className="rounded-full border border-line bg-mist/70 px-3.5 py-1.5 text-sm font-medium text-forest"
              >
                {venue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-forest-deep text-bone">
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <Image
              src="/images/aaron-atmosphere.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 grid gap-8 px-6 py-12 md:grid-cols-[1.2fr_auto] md:items-end md:px-12 md:py-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brass uppercase">
                London · mobile
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Book a visit
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-bone/85">
                WhatsApp or call {site.phone}. Share what you need and your area
                of London — osteopathy, sound, or both.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </ButtonLink>
              <ButtonLink href="/services" variant="ghostLight">
                View services
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

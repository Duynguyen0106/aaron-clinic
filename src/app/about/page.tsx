import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Aaron Horn",
  description:
    "Meet Aaron Horn — Grammy-nominated producer and London practitioner blending osteopathy with therapeutic sound. Mobile visits across London.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(15,46,40,0.18)]">
          <Image
            src="/images/aaron-portrait.jpg"
            alt="Portrait of Aaron Horn"
            fill
            priority
            className="object-cover object-[center_18%]"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        </div>

        <article>
          <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl text-forest md:text-5xl">
            Producer. Practitioner.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {site.practitioner.credentials}.
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Grammy-nominated for his work on Doja Cat’s <em>Planet Her</em>,
              Aaron brings the same ear he uses in the studio to hands-on
              bodywork. From gong baths at spaces like the National Portrait
              Gallery and Soho House to one-to-one osteopathic care, his
              practice stays rooted in listening — to music, to tissue, to what
              needs to shift.
            </p>
            <p>
              As a mobile practitioner across London, he meets people where they
              are: home, studio, or workplace. Sessions may be osteopathy alone,
              immersive sound, or a blend when structural release and frequency
              belong in the same room.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="forest"
            >
              Book on WhatsApp
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View services
            </ButtonLink>
          </div>
        </article>
      </div>
    </div>
  );
}

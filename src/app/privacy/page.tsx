import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} — how contact and session information is handled.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="px-5 py-14 md:px-8 md:py-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl text-forest md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: 10 October 2026</p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
          <section>
            <h2 className="font-display text-2xl text-forest">Who we are</h2>
            <p className="mt-3">
              {site.name} (“we”, “us”) is a mobile osteopathy and sound practice
              operated by {site.practitioner.name},{" "}
              {site.practitioner.title} (GOsC Reg. No.{" "}
              {site.practitioner.regNo}). Service area: London, UK. Contact:{" "}
              <a
                href={site.phoneHref}
                className="font-medium text-teal hover:text-forest"
              >
                {site.phone}
              </a>{" "}
              (phone &amp; WhatsApp).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest">
              What data we collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Contact and booking details you share by WhatsApp, phone, or
                email (name, number, location notes, appointment preferences).
              </li>
              <li>
                Clinical information gathered during assessment and treatment,
                kept as part of your confidential patient record.
              </li>
              <li>
                Technical data such as IP address and pages visited when you use
                this website (via hosting and analytics tools).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest">
              How we use your data
            </h2>
            <p className="mt-3">
              We use your information to arrange and deliver care, communicate
              about appointments, keep clinical records as required, and improve
              this website. We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest">Sharing</h2>
            <p className="mt-3">
              We may share data with processors who help run this site (for
              example hosting or analytics), under appropriate agreements. We
              may also share information where required by law or professional
              regulation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest">Your rights</h2>
            <p className="mt-3">
              Under UK GDPR you may request access, correction, deletion, or
              restriction of your personal data where applicable. Contact us on{" "}
              {site.phone} to make a request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest">Contact</h2>
            <p className="mt-3">
              Questions about this policy: WhatsApp or call{" "}
              <a
                href={site.phoneHref}
                className="font-medium text-teal hover:text-forest"
              >
                {site.phone}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}

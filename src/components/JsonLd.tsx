import { faqs, pricing, services, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.websiteUrl}/#practitioner`,
        name: site.practitioner.name,
        jobTitle: site.practitioner.title,
        identifier: site.practitioner.regNo,
        description: site.practitioner.credentials,
        telephone: site.phone,
        url: site.websiteUrl,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: site.practitioner.college,
        },
        areaServed: {
          "@type": "City",
          name: "London",
        },
        sameAs: [site.practitioner.goscUrl],
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${site.websiteUrl}/#practice`,
        name: `${site.name} — Osteopathy & Sound`,
        description: site.tagline,
        url: site.websiteUrl,
        telephone: site.phone,
        areaServed: "London, UK",
        priceRange: "$$",
        founder: { "@id": `${site.websiteUrl}/#practitioner` },
        employee: { "@id": `${site.websiteUrl}/#practitioner` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              url: `${site.websiteUrl}/services/${service.slug}`,
            },
          })),
        },
        makesOffer: pricing.map((item) => ({
          "@type": "Offer",
          name: item.service,
          description: `${item.duration} · ${item.price}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

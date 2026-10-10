export const site = {
  name: "Aaron Horn",
  shortName: "Aaron Horn",
  tagline: "Osteopathy & sound, brought to you",
  practitioner: {
    name: "Aaron Horn",
    title: "GOsC-Registered Osteopath",
    regNo: "12346",
    qualifications: "BSc (Hons) Ost",
    college: "British College of Naturopathy and Osteopathy (BCNO)",
    registered: "7 August 2026",
    goscUrl:
      "https://www.osteopathy.org.uk/register-search/registrants/003WT00000T8U4lYAF/",
    credentials:
      "GOsC-registered osteopath (Reg. No. 12346), Grammy-nominated producer, and London sound practitioner",
  },
  phone: "+44 7818 065834",
  phoneHref: "tel:+447818065834",
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    "https://wa.me/447818065834?text=" +
      encodeURIComponent(
        "Hi Aaron — I'd like to book an osteopathy or sound session in London.",
      ),
  website: "aaron-clinic",
  websiteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aaronhorn.com",
  serviceArea: "Mobile practice across London",
  bookingUrl: "/book",
  cancellation: "Please give as much notice as you can if you need to rearrange.",
} as const;

export const highlights = [
  "GOsC Reg. No. 12346",
  "Mobile visits across London",
  "Osteopathy with therapeutic sound",
  "Book directly on WhatsApp",
] as const;

export const venues = [
  "National Portrait Gallery",
  "Soho House",
  "The Shard",
  "Nike London",
  "Earth Hackney",
  "Camp Bestival",
  "Rob da Bank Sleep Retreat",
] as const;

export const visitSteps = [
  {
    step: "01",
    title: "Message on WhatsApp",
    detail:
      "Share what you’re dealing with and your area of London. Aaron replies with availability.",
  },
  {
    step: "02",
    title: "He comes to you",
    detail:
      "Treatment tables and sound kit travel with him — home, studio, or workplace.",
  },
  {
    step: "03",
    title: "Structure & sound",
    detail:
      "Hands-on osteopathy, and sound when stillness helps the system settle after release.",
  },
] as const;

export const faqs = [
  {
    question: "Is Aaron a registered osteopath?",
    answer:
      "Yes. Aaron Horn is fully registered with the General Osteopathic Council (GOsC Reg. No. 12346). You can verify him on the public GOsC register.",
  },
  {
    question: "Do you have a fixed clinic?",
    answer:
      "No — Aaron runs a mobile practice across London. Sessions happen at your home, studio, or workplace so care fits around your day.",
  },
  {
    question: "How do I book?",
    answer:
      "Message or call +44 7818 065834 on WhatsApp or phone. Share a short note about what you need and your area; Aaron will confirm a time.",
  },
  {
    question: "Can I book osteopathy without sound, or sound alone?",
    answer:
      "Yes. Choose osteopathy, a sound bath / listening session, or a blended visit. Every session is shaped around how you arrive that day.",
  },
  {
    question: "What should I prepare for a home visit?",
    answer:
      "A quiet space large enough for a treatment table is ideal. Comfortable clothing helps. Aaron brings the table and instruments.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "Aaron works across the London area by arrangement. Mention your neighbourhood when you message so travel and timing can be planned.",
  },
] as const;

export type ServiceIconName =
  | "spine"
  | "wave"
  | "spark"
  | "hand"
  | "home";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  idealFor: string[];
  whatToExpect: string[];
  relatedPricing?: string;
  badge?: string;
  icon: ServiceIconName;
};

export const services: Service[] = [
  {
    slug: "osteopathy",
    title: "Osteopathy",
    summary:
      "Hands-on assessment and treatment for spine, joints, and soft tissue.",
    description:
      "Osteopathic care focused on how you move and where load gathers. Aaron assesses posture, joint mobility, and soft-tissue tone, then uses precise hands-on techniques to ease irritation and restore freer movement — at your home or workplace.",
    idealFor: [
      "Back, neck, and shoulder tension",
      "Desk-related postural strain",
      "Joint stiffness after training or travel",
      "People who prefer treatment where they live or work",
    ],
    whatToExpect: [
      "Case history and movement assessment",
      "Hands-on soft-tissue and joint techniques",
      "Clear advice to protect progress between visits",
    ],
    relatedPricing: "By arrangement · message to confirm",
    icon: "spine",
  },
  {
    slug: "sound-and-body",
    title: "Sound & Body",
    summary:
      "Osteopathy paired with gong, handpan, and tonal instruments.",
    description:
      "After structural work, resonance can help the nervous system settle. Sessions blend hands-on osteopathy with carefully chosen sound — drawing on Aaron’s work as a producer and sound practitioner — so release has space to land.",
    idealFor: [
      "People who hold tension in both body and mind",
      "Recovery after intense work or travel",
      "Anyone curious about sound after manual treatment",
      "Unhurried, integrated sessions",
    ],
    whatToExpect: [
      "Osteopathic assessment and treatment first",
      "Guided listening with gong, handpan, or tonal tools",
      "Time to integrate before you leave the room",
    ],
    relatedPricing: "By arrangement · message to confirm",
    badge: "Signature blend",
    icon: "wave",
  },
  {
    slug: "sound-baths",
    title: "Sound Baths",
    summary:
      "Immersive listening for deep rest, focus, and recovery.",
    description:
      "Immersive sound sessions shaped by Aaron’s ambient and functional-sound practice. Lie down, listen, and let gongs and tonal instruments carry the session — available one-to-one or for small private groups by arrangement.",
    idealFor: [
      "Deep rest and nervous-system reset",
      "Creative professionals needing a clear head",
      "Private groups or studio gatherings",
      "Anyone drawn to listening as therapy",
    ],
    whatToExpect: [
      "A calm setup in your chosen space",
      "Guided immersion with live instruments",
      "Gentle landing and aftercare notes",
    ],
    relatedPricing: "By arrangement · message to confirm",
    icon: "spark",
  },
  {
    slug: "mobile-visits",
    title: "Mobile Visits",
    summary:
      "Treatment brought to your home, studio, or workplace across London.",
    description:
      "No clinic queue. Aaron travels with a treatment table and sound kit so sessions fit around your schedule. Ideal if travel is hard, or you simply want care in a familiar room.",
    idealFor: [
      "Busy professionals and creatives",
      "Parents or carers who need home-based care",
      "Studios and workplaces arranging staff sessions",
      "Anyone preferring treatment off-site from a clinic",
    ],
    whatToExpect: [
      "WhatsApp booking with your postcode or area",
      "Arrival with table and instruments",
      "Flexible morning and evening slots by arrangement",
    ],
    relatedPricing: "Travel within London by arrangement",
    icon: "home",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const pricing = [
  {
    service: "Osteopathy visit",
    duration: "By arrangement",
    price: "Message to confirm",
  },
  {
    service: "Sound & body session",
    duration: "By arrangement",
    price: "Message to confirm",
  },
  {
    service: "Sound bath (one-to-one or private group)",
    duration: "By arrangement",
    price: "Message to confirm",
  },
  {
    service: "London travel",
    duration: "Mobile",
    price: "Included by area",
  },
] as const;

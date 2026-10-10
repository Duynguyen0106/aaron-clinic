import type { Metadata } from "next";
import { Source_Sans_3, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const description =
  "Aaron Horn — GOsC-registered osteopath (Reg. No. 12346) offering mobile osteopathy and therapeutic sound across London. Book by WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.websiteUrl),
  title: {
    default: "Aaron Horn | Osteopathy & Sound in London",
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  keywords: [
    "osteopathy London",
    "mobile osteopath London",
    "sound therapy London",
    "sound bath London",
    "Aaron Horn osteopath",
    "GOsC osteopath London",
    "holistic osteopath London",
    "gong bath London",
    "home visit osteopath",
    "BCNO osteopath",
  ],
  authors: [{ name: site.practitioner.name }],
  creator: site.name,
  publisher: site.name,
  category: "healthcare",
  alternates: { canonical: "/" },
  openGraph: {
    title: `Osteopathy & Sound | ${site.name}`,
    description,
    type: "website",
    locale: "en_GB",
    url: site.websiteUrl,
    siteName: site.name,
    images: [
      {
        url: "/images/aaron-gong.jpg",
        width: 1918,
        height: 1260,
        alt: "Aaron Horn with gong and flute — osteopathy and sound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Osteopathy & Sound | ${site.name}`,
    description,
    images: ["/images/aaron-gong.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-ink">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

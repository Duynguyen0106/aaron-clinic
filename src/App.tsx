import { useEffect, useRef, useState, type ReactNode } from "react";
import "./App.css";

const WHATSAPP =
  "https://wa.me/447818065834?text=" +
  encodeURIComponent(
    "Hi Aaron — I'd like to book an osteopathy or sound session in London.",
  );
const PHONE_DISPLAY = "+44 7818 065834";
const PHONE_HREF = "tel:+447818065834";

const services = [
  {
    title: "Osteopathy",
    body: "Hands-on assessment and treatment for the spine, joints, and soft tissue — restoring ease so movement feels clearer and more supported.",
  },
  {
    title: "Sound & body",
    body: "Osteopathic work paired with gong, handpan, and tonal instruments when stillness helps the nervous system settle after structural release.",
  },
  {
    title: "Sound baths",
    body: "Immersive listening sessions drawing on Aaron’s work as a producer and sound practitioner — for recovery, focus, and deep rest.",
  },
  {
    title: "Mobile visits",
    body: "Treatment brought to your home, studio, or workplace across London. No clinic wait — just a quiet space and a clear plan.",
  },
];

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function RevealSection({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const ref = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`section reveal ${className ?? ""}`.trim()}
    >
      {children}
    </section>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <a className="nav__brand" href="#top">
          Aaron Horn
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#visit">Visits</a>
        </nav>
        <a className="nav__cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          Book on WhatsApp
        </a>
      </header>

      <main>
        <section className="hero" id="top" aria-label="Introduction">
          <div className="hero__media" aria-hidden="true">
            <img
              src="/images/aaron-gong.jpg"
              alt=""
              width={1918}
              height={1260}
            />
            <div className="hero__veil" />
          </div>
          <div className="hero__content">
            <h1 className="hero__brand">Aaron Horn</h1>
            <p className="hero__headline">Osteopathy &amp; sound, brought to you.</p>
            <p className="hero__lead">
              A mobile holistic practice across London — structural care woven
              with therapeutic sound.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
              <a className="btn btn--ghost" href="#services">
                Explore services
              </a>
            </div>
          </div>
        </section>

        <RevealSection id="approach" className="approach">
          <div>
            <p className="section__eyebrow">The approach</p>
            <h2 className="section__title">Structure meets frequency</h2>
            <p className="section__text">
              Aaron works where osteopathy and sound meet: first listening to
              the body through touch, then offering resonance when the system is
              ready to soften. Sessions are unhurried, precise, and shaped
              around how you arrive that day.
            </p>
          </div>
          <div className="approach__visual">
            <img
              src="/images/aaron-portrait-2.jpg"
              alt="Sound instruments including a gong and singing bowls prepared for a session"
              width={1200}
              height={1600}
            />
          </div>
        </RevealSection>

        <RevealSection id="services" className="services">
          <p className="section__eyebrow">Services</p>
          <h2 className="section__title">Care that travels with you</h2>
          <p className="section__text">
            Choose osteopathy alone, sound alone, or a blended session. Every
            visit is arranged directly — mobile across London.
          </p>
          <ul className="services__list">
            {services.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection id="about" className="about">
          <div className="about__portrait">
            <img
              src="/images/aaron-portrait.jpg"
              alt="Portrait of Aaron Horn"
              width={760}
              height={1014}
            />
          </div>
          <div className="about__copy">
            <p className="section__eyebrow">About</p>
            <h2 className="section__title">Producer. Practitioner.</h2>
            <p className="section__text">
              Grammy-nominated producer and London sound practitioner Aaron Horn
              brings the same ear he uses in the studio to hands-on bodywork.
              From gong baths at spaces like the National Portrait Gallery and
              Soho House to one-to-one osteopathic care, his practice stays
              rooted in listening — to music, to tissue, to what needs to shift.
            </p>
          </div>
        </RevealSection>

        <RevealSection id="visit" className="visit-wrap">
          <div className="mobile">
            <div className="mobile__media" aria-hidden="true">
              <img
                src="/images/aaron-atmosphere.jpg"
                alt=""
                width={1920}
                height={1440}
              />
            </div>
            <div className="mobile__content">
              <p className="section__eyebrow">Mobile practice</p>
              <h2 className="section__title">London, at your door</h2>
              <p className="section__text">
                No fixed clinic queue. Aaron travels to homes, creative studios,
                and workplaces so treatment fits around your day.
              </p>
              <ul className="mobile__points">
                <li>
                  <strong>Home &amp; studio</strong>
                  <span>Treatment tables and sound kit come with him.</span>
                </li>
                <li>
                  <strong>Flexible hours</strong>
                  <span>Morning and evening slots by arrangement.</span>
                </li>
                <li>
                  <strong>Direct booking</strong>
                  <span>WhatsApp or call — same number for both.</span>
                </li>
              </ul>
            </div>
          </div>
        </RevealSection>

        <RevealSection id="book" className="booking">
          <p className="section__eyebrow">Book</p>
          <h2 className="section__title">Start with a message</h2>
          <p className="section__text">
            Share what you’re dealing with and your area of London. Aaron will
            reply with availability and how best to set up the visit.
          </p>
          <div className="booking__panel">
            <div className="booking__meta">
              <div>
                <strong>WhatsApp &amp; phone</strong>
                <a className="booking__phone" href={PHONE_HREF}>
                  {PHONE_DISPLAY}
                </a>
              </div>
              <p>Mobile osteopathy &amp; sound sessions · London area</p>
            </div>
            <a
              className="btn btn--solid"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Open WhatsApp
            </a>
          </div>
        </RevealSection>
      </main>

      <footer className="footer">
        <p>
          <strong>Aaron Horn</strong> · Osteopathy &amp; Sound
        </p>
        <p>Mobile practice · London</p>
      </footer>
    </div>
  );
}

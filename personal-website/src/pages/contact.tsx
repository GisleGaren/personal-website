import "./contact.css";
import { useEffect, useRef, useState } from "react";
import { LowerWave } from "@/components/shapes/lowerWave/LowerWave";

/* ── Typewriter ─────────────────────────────────────────────── */
const PHRASES = [
  "Looking for an internship.",
  "Let's build something great.",
  "Open to new opportunities.",
  "Always up for a challenge.",
];

type TyperState = "typing" | "waiting" | "deleting";

const useTypewriter = () => {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [state, setState] = useState<TyperState>("typing");

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];

    if (state === "typing") {
      if (text.length < phrase.length) {
        const t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 72);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setState("deleting"), 2200);
        return () => clearTimeout(t);
      }
    }

    if (state === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => setText(phrase.slice(0, text.length - 1)), 38);
        return () => clearTimeout(t);
      } else {
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
        setState("typing");
      }
    }
  }, [text, phraseIdx, state]);

  return text;
};

/* ── Contact methods ────────────────────────────────────────── */
const CONTACTS = [
  {
    id: "email",
    label: "Email",
    value: "gisle@example.com",
    sub: "Drop me a line anytime",
    href: "mailto:gisle@example.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Gisle Garen",
    sub: "Let's connect professionally",
    href: "https://www.linkedin.com/in/gisle-garen-b18308149/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/gislegaren",
    sub: "Check out my code",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@gislegaren",
    sub: "Follow the journey",
    href: "https://www.instagram.com/gislegaren/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

/* ── Page ───────────────────────────────────────────────────── */
const Contact = () => {
  const typewriterText = useTypewriter();
  const [columnsVisible, setColumnsVisible] = useState(false);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setColumnsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (columnsRef.current) observer.observe(columnsRef.current);
    return () => observer.disconnect();
  }, []);

  const HEADING = "Get in touch.";

  return (
    <div className="contact-page">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-eyebrow">Contact</p>

          <h1 className="contact-heading" aria-label={HEADING}>
            {HEADING.split("").map((char, i) => (
              <span
                key={i}
                className="ch"
                style={{ animationDelay: `${0.06 + i * 0.045}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="contact-typewriter">
            <span className="typewriter-text">{typewriterText}</span>
            <span className="cursor" aria-hidden="true">|</span>
          </p>
        </div>
        <LowerWave />
      </div>

      {/* ── Main two-column ────────────────────────────────────── */}
      <div className="contact-main">
        <div
          ref={columnsRef}
          className={`contact-columns${columnsVisible ? " visible" : ""}`}
        >

          {/* Left — dark card with contact methods */}
          <div className="contact-left">
            <div className="contact-left-dots" aria-hidden="true" />

            <div className="cl-header">
              <p className="cl-eyebrow">Reach out</p>
              <h2 className="cl-heading">Interested in my profile?</h2>
              <p className="cl-body">
                Whether you have an internship offer, a cool project idea, or just
                want to say hello — my inbox is always open.
              </p>
            </div>

            <div className="contact-methods">
              {CONTACTS.map((c, i) => (
                <a
                  key={c.id}
                  href={c.href}
                  className="contact-method"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="method-icon">{c.icon}</span>
                  <span className="method-text">
                    <span className="method-label">{c.label}</span>
                    <span className="method-value">{c.value}</span>
                    <span className="method-sub">{c.sub}</span>
                  </span>
                  <span className="method-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>

            <p className="response-note">
              <span className="response-dot" /> Usually responds within 24 hours
            </p>
          </div>

          {/* Right — photo + pitch */}
          <div className="contact-right">
            <div className="photo-area">

              {/* Floating badges */}
              <div className="badge badge-available">
                <span className="available-dot" />
                Available for hire
              </div>
              <div className="badge badge-edu">
                <img src="/images/education.png" alt="" />
                M.Sc AI @ DTU
              </div>
              <div className="badge badge-location">
                <img src="/images/location.png" alt="" />
                Copenhagen, DK
              </div>

              <div className="photo-ring">
                <img
                  src="/images/profilePimp.png"
                  alt="Gisle Garen"
                  className="profile-photo"
                />
              </div>
            </div>

            <div className="pitch">
              <h3 className="pitch-heading">Send me an email</h3>
              <p className="pitch-body">
                I am currently an M.Sc student in Artificial Intelligence at DTU and
                am actively looking for an internship in data engineering and analytics.
                If you think I could be a good fit for your team, I would love to hear
                from you!
              </p>
              <a className="pitch-cta" href="mailto:gisle@example.com">
                <img src="/images/Mail.png" alt="" />
                gisle@example.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

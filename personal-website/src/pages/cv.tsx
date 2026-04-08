import "./cv.css";
import { LowerWave } from "@/components/shapes/lowerWave/LowerWave";
import { useEffect, useRef, useState } from "react";

interface CVEntry {
  id: string;
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
}

const education: CVEntry[] = [
  {
    id: "edu-1",
    period: "2024 — Present",
    title: "M.Sc Artificial Intelligence",
    org: "Technical University of Denmark (DTU)",
    description:
      "Specialising in machine learning, intelligent systems and data engineering. Currently seeking an internship position in data engineering and / or analytics.",
    tags: ["Machine Learning", "Data Engineering", "Python"],
  },
  {
    id: "edu-2",
    period: "2021 — 2024",
    title: "B.Eng Computer Science",
    org: "Oslo Metropolitan University (OsloMet)",
    description:
      "Graduated with a focus on software development and system design. Bachelor thesis: developed a workflow automation web application for case managers at the Norwegian Labour and Welfare Administration. Final grade: A.",
    tags: ["React", "Node.js", "System Design"],
  },
];

const experience: CVEntry[] = [
  {
    id: "exp-1",
    period: "Summer 2024",
    title: "Fullstack Developer Intern",
    org: "Sparebank1",
    description:
      "Developed a customer-facing 'wrapped' application that visualised individual spending patterns and financial trends throughout the year. Built primarily in React and Node.js with a REST API backend.",
    tags: ["React", "Node.js", "REST API"],
  },
  {
    id: "exp-2",
    period: "2022 — 2024",
    title: "Treasurer",
    org: "OSI Gruppedans",
    description:
      "Volunteered as treasurer for the student dance organisation over two academic years, managing finances and budgets. Also performed in HipHop choreographies each semester.",
  },
  {
    id: "exp-3",
    period: "2018 — 2024",
    title: "Retail Associate (Part-time)",
    org: "Skomaker Dagestad",
    description:
      "Assisted customers at one of Oslo's heritage shoe shops specialising in Goodyear-welted footwear, shoe repairs, and classic footwear care — all while studying.",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "HTML & CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL"] },
  { category: "Data & AI", items: ["Python", "Pandas", "NumPy", "PyTorch"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "Linux"] },
];

const CV = () => {
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());
  const entryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.id;
            if (id) {
              setVisibleIds((prev) => {
                const next = new Set(prev);
                next.add(id);
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(entryRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cv-page">
      {/* ── Hero ──────────────────────────────────── */}
      <div className="cv-hero">
        <div className="cv-hero-inner">
          <p className="cv-eyebrow">Curriculum Vitae</p>
          <h1 className="cv-name">Gisle Garen</h1>
          <p className="cv-tagline">
            M.Sc Student in Artificial Intelligence · Fullstack Developer · Data Enthusiast
          </p>
          <div className="cv-meta">
            <span>Copenhagen, Denmark</span>
            <span className="cv-meta-dot">·</span>
            <span>gisle@example.com</span>
            <span className="cv-meta-dot">·</span>
            <span>linkedin.com/in/gislegaren</span>
          </div>
        </div>
        <LowerWave />
      </div>

      {/* ── Main ──────────────────────────────────── */}
      <div className="cv-main">
        <div className="cv-columns">

          {/* Left column */}
          <div className="cv-col">
            <section className="cv-section">
              <h2 className="cv-section-title">Education</h2>
              {education.map((entry, i) => (
                <div
                  key={entry.id}
                  ref={(el) => { entryRefs.current[entry.id] = el; }}
                  data-id={entry.id}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  className={`cv-entry slide-left${visibleIds.has(entry.id) ? " visible" : ""}`}
                >
                  <span className="cv-period">{entry.period}</span>
                  <h3 className="cv-entry-title">{entry.title}</h3>
                  <span className="cv-org">{entry.org}</span>
                  <p className="cv-entry-desc">{entry.description}</p>
                  {entry.tags && (
                    <div className="cv-tags">
                      {entry.tags.map((t) => (
                        <span key={t} className="cv-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">Skills</h2>
              {skills.map((group, i) => (
                <div
                  key={group.category}
                  ref={(el) => { entryRefs.current[`skill-${i}`] = el; }}
                  data-id={`skill-${i}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  className={`cv-skill-group slide-left${visibleIds.has(`skill-${i}`) ? " visible" : ""}`}
                >
                  <span className="cv-skill-category">{group.category}</span>
                  <div className="cv-skill-pills">
                    {group.items.map((item) => (
                      <span key={item} className="cv-skill-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right column */}
          <div className="cv-col">
            <section className="cv-section">
              <h2 className="cv-section-title">Experience</h2>
              {experience.map((entry, i) => (
                <div
                  key={entry.id}
                  ref={(el) => { entryRefs.current[entry.id] = el; }}
                  data-id={entry.id}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  className={`cv-entry slide-right${visibleIds.has(entry.id) ? " visible" : ""}`}
                >
                  <span className="cv-period">{entry.period}</span>
                  <h3 className="cv-entry-title">{entry.title}</h3>
                  <span className="cv-org">{entry.org}</span>
                  <p className="cv-entry-desc">{entry.description}</p>
                  {entry.tags && (
                    <div className="cv-tags">
                      {entry.tags.map((t) => (
                        <span key={t} className="cv-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CV;

import "./projects.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { LowerWave } from "@/components/shapes/lowerWave/LowerWave";

type Category = "frontend" | "fullstack" | "data";

interface Language {
  name: string;
  percent: number;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  gradient: string;
  tags: string[];
  languages: Language[];
  stars: number;
  forks: number;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "This very website — built with Next.js, TypeScript and CSS. Features scroll-triggered animations, interactive photo thumbnails, a CV page, and a projects gallery.",
    category: "frontend",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tags: ["Next.js", "TypeScript", "CSS"],
    languages: [
      { name: "TypeScript", percent: 55, color: "#3178c6" },
      { name: "CSS", percent: 35, color: "#563d7c" },
      { name: "JavaScript", percent: 10, color: "#f1e05a" },
    ],
    stars: 12,
    forks: 2,
  },
  {
    id: 2,
    title: "ML Price Predictor",
    description:
      "A machine learning model that predicts housing prices using regression techniques. Includes data preprocessing, feature engineering, and a lightweight web interface for predictions.",
    category: "data",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tags: ["Python", "scikit-learn", "Pandas"],
    languages: [
      { name: "Python", percent: 80, color: "#3572A5" },
      { name: "Jupyter", percent: 15, color: "#DA5B0B" },
      { name: "HTML", percent: 5, color: "#e34c26" },
    ],
    stars: 24,
    forks: 7,
  },
  {
    id: 3,
    title: "Bank Spending Wrapped",
    description:
      "An end-of-year spending recap application built during my internship at Sparebank1. Visualises transaction data into colourful charts and fun year-in-review stats.",
    category: "fullstack",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tags: ["React", "Node.js", "Express"],
    languages: [
      { name: "JavaScript", percent: 50, color: "#f1e05a" },
      { name: "TypeScript", percent: 35, color: "#3178c6" },
      { name: "CSS", percent: 15, color: "#563d7c" },
    ],
    stars: 8,
    forks: 1,
  },
  {
    id: 4,
    title: "NAV Case Manager Tool",
    description:
      "A workflow automation web app developed for my bachelor thesis — designed to streamline daily operations for case managers at Norway's Labour and Welfare Administration. Final grade: A.",
    category: "fullstack",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    tags: ["React", "TypeScript", "PostgreSQL"],
    languages: [
      { name: "TypeScript", percent: 60, color: "#3178c6" },
      { name: "SQL", percent: 25, color: "#e38c00" },
      { name: "CSS", percent: 15, color: "#563d7c" },
    ],
    stars: 15,
    forks: 3,
  },
  {
    id: 5,
    title: "Data Pipeline CLI",
    description:
      "A command-line tool for building and orchestrating lightweight ETL pipelines. Supports CSV, JSON, and SQL sources with configurable transformation steps and Docker support.",
    category: "data",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    tags: ["Python", "Docker", "SQL"],
    languages: [
      { name: "Python", percent: 65, color: "#3572A5" },
      { name: "Shell", percent: 20, color: "#89e051" },
      { name: "SQL", percent: 15, color: "#e38c00" },
    ],
    stars: 19,
    forks: 5,
  },
  {
    id: 6,
    title: "Analog Photography Log",
    description:
      "A personal tool for tracking analog film rolls, exposure settings, and darkroom development notes. Because every frame on 35mm film counts.",
    category: "frontend",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    languages: [
      { name: "TypeScript", percent: 70, color: "#3178c6" },
      { name: "CSS", percent: 20, color: "#563d7c" },
      { name: "JavaScript", percent: 10, color: "#f1e05a" },
    ],
    stars: 6,
    forks: 0,
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Full-stack", value: "fullstack" },
  { label: "Data & AI", value: "data" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isFading, setIsFading] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Stable particle layout — generated once
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        size: Math.random() * 8 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.14 + 0.05,
        duration: Math.random() * 7 + 7,
        delay: Math.random() * 5,
      })),
    []
  );

  const filtered = PROJECTS.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  const handleFilterChange = (value: string) => {
    if (value === activeFilter) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveFilter(value);
      setIsFading(false);
    }, 200);
  };

  // Re-observe on filter change so newly shown cards animate in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number((entry.target as HTMLElement).dataset.id);
            setVisibleCards((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeFilter]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transition = "box-shadow 0.08s ease";
    card.style.transform = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(10px)`;
    card.style.boxShadow = `${x * -20}px ${y * -20}px 40px rgba(0, 39, 118, 0.2)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transition = "transform 0.45s ease, box-shadow 0.45s ease";
    card.style.transform = "";
    card.style.boxShadow = "";
  };

  return (
    <div className="projects-page">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="projects-hero">
        <div className="hero-particles" aria-hidden="true">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                top: `${p.top}%`,
                opacity: p.opacity,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <p className="projects-eyebrow">Portfolio</p>
          <h1 className="projects-heading">
            <span className="hw">My</span>{" "}
            <span className="hw d1">Projects</span>
          </h1>
          <p className="projects-sub">
            A collection of things I have built — web apps, data tools, and side experiments.
          </p>
          <div className="hero-stat-row">
            <div className="hero-stat">
              <span className="hero-stat-num">{PROJECTS.length}</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">
                {PROJECTS.reduce((s, p) => s + p.stars, 0)}
              </span>
              <span className="hero-stat-label">Total Stars</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">
                {new Set(PROJECTS.flatMap((p) => p.tags)).size}
              </span>
              <span className="hero-stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <LowerWave />
      </div>

      {/* ── Filter + Grid ─────────────────────────────────────── */}
      <div className="projects-main">
        <div className="filter-bar">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? " active" : ""}`}
              onClick={() => handleFilterChange(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="project-count">
          Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? "s" : ""}
        </p>

        <div className={`projects-grid${isFading ? " fading" : ""}`}>
          {filtered.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[project.id] = el; }}
              data-id={project.id}
              className={`card-wrapper${visibleCards.has(project.id) ? " visible" : ""}`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              <div
                className="project-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Gradient banner */}
                <div className="card-banner" style={{ background: project.gradient }}>
                  <span className="card-cat-badge">
                    {FILTERS.find((f) => f.value === project.category)?.label ?? project.category}
                  </span>
                  <div className="card-shimmer" />
                </div>

                {/* Body */}
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.description}</p>

                  <div className="card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="card-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Language bar */}
                  <div className="lang-bar">
                    {project.languages.map((lang) => (
                      <div
                        key={lang.name}
                        className="lang-seg"
                        style={{ width: `${lang.percent}%`, background: lang.color }}
                        title={`${lang.name} ${lang.percent}%`}
                      />
                    ))}
                  </div>
                  <div className="lang-legend">
                    {project.languages.map((lang) => (
                      <span key={lang.name} className="lang-item">
                        <span className="lang-dot" style={{ background: lang.color }} />
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="card-footer">
                  <div className="card-stats">
                    <span className="stat">
                      {/* Star icon */}
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.872 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                      </svg>
                      {project.stars}
                    </span>
                    <span className="stat">
                      {/* Fork icon */}
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
                      </svg>
                      {project.forks}
                    </span>
                  </div>
                  <a className="card-link" href="#" onClick={(e) => e.preventDefault()}>
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type ProjectCategory } from "@/lib/data/projects";

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Cloud Security",
  "Web Dev",
  "Network",
  "IoT",
];

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="grid-pattern"
      style={{ padding: "100px 24px", background: "var(--bg-primary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading
          label="Projects"
          title="What I've Built"
          subtitle="From automated cloud security pipelines to IoT systems — real projects with real impact."
        />

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "40px",
            marginBottom: "48px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-tab ${active === cat ? "active" : ""}`}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured card */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                style={{ marginBottom: "32px" }}
              >
                <FeaturedProjectCard project={featured} />
              </motion.div>
            )}

            {/* Regular grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
              }}
              className="sm:grid-cols-2 lg:grid-cols-3"
            >
              {rest.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project }: { project: (typeof projects)[0] }) {
  const scrollToCapstone = () => {
    document.getElementById("capstone")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "var(--glow-gold)",
        display: "grid",
        gridTemplateColumns: "1fr",
      }}
      className="lg:grid-cols-2"
    >
      {/* Left content */}
      <div style={{ padding: "36px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "16px",
            alignItems: "center",
          }}
        >
          <span className="badge-gold">⭐ {project.status}</span>
          <span className="badge-cyan">{project.category}</span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 700,
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            color: "var(--text-primary)",
            marginBottom: "14px",
            lineHeight: 1.35,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "14px",
            lineHeight: 1.75,
            marginBottom: "24px",
          }}
        >
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            {project.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "rgba(196,150,45,0.07)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color: "var(--accent-gold)",
                  }}
                >
                  {m.value}
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "4px" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
          {project.stack.slice(0, 8).map((s) => (
            <span key={s} className="tech-tag">{s}</span>
          ))}
          {project.stack.length > 8 && (
            <span className="tech-tag">+{project.stack.length - 8} more</span>
          )}
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <button
            onClick={scrollToCapstone}
            className="btn-gold"
            style={{ padding: "10px 20px", fontSize: "13px" }}
          >
            View Capstone Details <ArrowRight size={14} />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
            style={{ padding: "10px 20px", fontSize: "13px" }}
            aria-label="View on GitHub"
          >
            <FaGithub size={14} /> GitHub
          </a>
        </div>
      </div>

      {/* Right: architecture placeholder */}
      <div
        style={{
          background: "rgba(196,150,45,0.04)",
          borderLeft: "1px solid var(--border-subtle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "280px",
          padding: "24px",
          position: "relative",
          overflow: "hidden",
        }}
        className="hidden lg:flex"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(196,150,45,0.06) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div style={{ position: "relative", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              letterSpacing: "0.15em",
              marginBottom: "16px",
            }}
          >
            AWS ARCHITECTURE
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              maxWidth: "300px",
            }}
          >
            {[
              "Security Hub", "EventBridge", "Step Functions",
              "Bedrock", "Lambda", "SSM",
              "DynamoDB", "SNS", "CloudWatch",
            ].map((svc) => (
              <div
                key={svc}
                style={{
                  padding: "8px 6px",
                  background: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.2)",
                  borderRadius: "6px",
                  fontSize: "10px",
                  color: "var(--accent-cyan)",
                  textAlign: "center",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {svc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="card-glass"
      style={{
        borderRadius: "14px",
        padding: "28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* Category + status */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
        <span className="badge-cyan">{project.category}</span>
        {project.status && (
          <span className="badge-green">{project.status}</span>
        )}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 700,
          fontSize: "1rem",
          color: "var(--text-primary)",
          lineHeight: 1.4,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "13px",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.stack.slice(0, 5).map((s) => (
          <span key={s} className="tech-tag">{s}</span>
        ))}
        {project.stack.length > 5 && (
          <span className="tech-tag">+{project.stack.length - 5}</span>
        )}
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-gold)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
            aria-label={`${project.title} on GitHub`}
          >
            <FaGithub size={14} /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-cyan)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")}
            aria-label={`${project.title} live demo`}
          >
            <ExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </div>
  );
}

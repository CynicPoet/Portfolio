"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        background: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeading
          label="Work Experience"
          title="Where I've Built & Defended"
          subtitle="Real-world security operations and cloud infrastructure experience."
        />

        {/* Timeline */}
        <div style={{ marginTop: "64px", position: "relative" }}>
          {/* Vertical line — hidden on mobile */}
          <div
            aria-hidden="true"
            className="hidden md:block"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              top: "20px",
              bottom: "20px",
              background:
                "linear-gradient(to bottom, transparent, var(--accent-gold) 20%, var(--accent-gold) 80%, transparent)",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {experience.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0",
                }}
                className="md:grid-cols-2"
              >
                {/* Timeline dot (desktop only) */}
                <div
                  aria-hidden="true"
                  className="hidden md:flex"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "28px",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "var(--accent-gold)",
                    border: "4px solid var(--bg-secondary)",
                    boxShadow: "0 0 0 2px var(--accent-gold), var(--glow-gold)",
                  }}
                />

                {/* Left side (desktop: even entries show content left; odd show nothing) */}
                <div
                  style={{
                    paddingRight: "0",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  className={`md:pr-10 ${idx % 2 === 0 ? "block" : "hidden md:block md:invisible"}`}
                >
                  {idx % 2 === 0 && (
                    <ExperienceCard entry={entry} />
                  )}
                </div>

                {/* Right side */}
                <div
                  style={{ paddingLeft: "0" }}
                  className={`md:pl-10 ${idx % 2 !== 0 ? "block" : "hidden md:block md:invisible"}`}
                >
                  {idx % 2 !== 0 && (
                    <ExperienceCard entry={entry} />
                  )}
                </div>

                {/* Mobile: always show (overrides the left/right logic) */}
                <div className="md:hidden" style={{ gridColumn: "1 / -1" }}>
                  <ExperienceCard entry={entry} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ entry }: { entry: (typeof experience)[0] }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "14px",
        padding: "28px",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "var(--glow-gold)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border-subtle)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Role badge */}
      <div style={{ marginBottom: "12px" }}>
        <span className="badge-gold">{entry.type === "internship" ? "Internship" : "Virtual"}</span>
      </div>

      {/* Role title */}
      <h3
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "var(--text-primary)",
          marginBottom: "4px",
        }}
      >
        {entry.role}
      </h3>

      {/* Company */}
      <p
        style={{
          color: "var(--accent-gold)",
          fontWeight: 600,
          fontSize: "0.9rem",
          marginBottom: "12px",
        }}
      >
        {entry.companyFull}
      </p>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "var(--text-secondary)",
          }}
        >
          <Calendar size={13} style={{ color: "var(--accent-cyan)" }} />
          {entry.duration}
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "var(--text-secondary)",
          }}
        >
          <MapPin size={13} style={{ color: "var(--accent-cyan)" }} />
          {entry.location}
        </span>
      </div>

      {/* Description bullets */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {entry.description.map((point, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "14px",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
            }}
          >
            <span
              style={{
                color: "var(--accent-gold)",
                marginTop: "5px",
                flexShrink: 0,
                fontSize: "10px",
              }}
            >
              ▸
            </span>
            {point}
          </li>
        ))}
      </ul>

      {/* Appreciation callout */}
      {entry.appreciation && (
        <div className="appreciation-callout" style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <Award
              size={16}
              style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }}
            />
            <div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--accent-gold-light)",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                {entry.appreciation.text}
              </p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                {entry.appreciation.by}
              </p>
              <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                {entry.appreciation.ref}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {entry.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

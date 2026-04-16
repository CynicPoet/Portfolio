"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="dot-pattern"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading
          label="Achievements"
          title="Recognition & Milestones"
          subtitle="Awards, memberships, and academic excellence earned along the journey."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px",
            marginTop: "56px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                background: ach.highlight
                  ? "rgba(196,150,45,0.05)"
                  : "var(--bg-card)",
                border: ach.highlight
                  ? "1px solid rgba(196,150,45,0.3)"
                  : "1px solid var(--border-subtle)",
                borderRadius: "14px",
                padding: "24px",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "var(--glow-gold)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = ach.highlight
                  ? "rgba(196,150,45,0.3)"
                  : "var(--border-subtle)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Highlight glow */}
              {ach.highlight && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "80px",
                    height: "80px",
                    background:
                      "radial-gradient(circle, rgba(196,150,45,0.12) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: "translate(20%, -20%)",
                  }}
                />
              )}

              {/* Icon */}
              <div
                style={{
                  fontSize: "28px",
                  marginBottom: "14px",
                  lineHeight: 1,
                }}
              >
                {ach.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: ach.highlight ? "var(--accent-gold)" : "var(--text-primary)",
                  lineHeight: 1.4,
                  marginBottom: "6px",
                }}
              >
                {ach.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--accent-cyan)",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                {ach.subtitle}
              </p>

              {/* Date */}
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "12px",
                }}
              >
                {ach.date}
                {ach.ref && ` · ${ach.ref}`}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

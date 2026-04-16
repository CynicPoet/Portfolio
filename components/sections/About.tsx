"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: "8.53", label: "CGPA", sub: "MIT Academy of Engineering" },
  { value: "9.80", label: "SGPA Sem 7", sub: "Highest semester" },
  { value: "88%", label: "MTTR Reduction", sub: "Capstone project" },
  { value: "7", label: "Months SOC", sub: "Maharashtra Cyber (Govt)" },
  { value: "$0.02", label: "AWS Cost/mo", sub: "Capstone serverless arch" },
  { value: "2024", label: "SIH Finalist", sub: "Smart India Hackathon" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="dot-pattern"
      style={{
        padding: "100px 24px",
        background: "var(--bg-primary)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading
          label="About Me"
          title="The Person Behind the Terminal"
          subtitle="Cloud security engineer, ethical hacker-in-training, and builder of automated defence systems."
        />

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            marginTop: "56px",
            alignItems: "center",
          }}
          className="md:grid-cols-2"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", width: "280px", height: "280px" }}>
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "-6px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, var(--accent-gold), var(--accent-cyan), var(--accent-gold))",
                  animation: "spin 8s linear infinite",
                  zIndex: 0,
                }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              {/* Inner white ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "2px",
                  borderRadius: "50%",
                  background: "var(--bg-primary)",
                  zIndex: 1,
                }}
              />
              {/* Photo */}
              <div
                style={{
                  position: "absolute",
                  inset: "8px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  zIndex: 2,
                  background: "var(--bg-card)",
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Shivam Pokharkar — Cloud Security Engineer"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="280px"
                  priority
                  onError={() => {}}
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginBottom: "18px",
              }}
            >
              I&apos;m a final-year B.Tech Computer Engineering student at{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                MIT Academy of Engineering, Pune
              </span>{" "}
              (Batch 2022–2026), specializing in cloud security and DevSecOps. My
              journey into Linux started in 7th grade and has since grown into a
              professional obsession with building systems that defend themselves.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginBottom: "18px",
              }}
            >
              I interned for{" "}
              <span style={{ color: "var(--accent-gold)", fontWeight: 600 }}>
                7 months as a SOC Analyst at Maharashtra Cyber
              </span>{" "}
              — the Government of Maharashtra&apos;s cyber crime unit — working on
              real-world SIEM monitoring, OSINT investigations, and threat intelligence
              under DIG Sanjay Shintre IPS. I received an official government
              appreciation letter for my contributions.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                fontSize: "1rem",
                marginBottom: "28px",
              }}
            >
              I hold certifications in{" "}
              <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
                AWS SAA, HashiCorp Terraform Associate, CEH v13
              </span>
              , and TryHackMe Jr. Penetration Tester. My capstone project — an
              Automated Cloud Security Response System — reduced MTTR by 88% at
              a cost of just $0.02/month using Terraform, Step Functions, and
              Amazon Bedrock.
            </p>

            {/* Quick facts */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {[
                "📍 Pune, Maharashtra, India",
                "🎓 MIT Academy of Engineering",
                "⚡ Linux since 7th grade",
                "🛡️ AWS SAA • Terraform • CEH v13",
              ].map((fact) => (
                <span
                  key={fact}
                  style={{
                    padding: "6px 14px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "6px",
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {fact}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            marginTop: "64px",
          }}
          className="sm:grid-cols-3 lg:grid-cols-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="metric-card"
            >
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  color: "var(--accent-gold)",
                  marginBottom: "6px",
                }}
              >
                <AnimatedCounter value={stat.value} />
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                }}
              >
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

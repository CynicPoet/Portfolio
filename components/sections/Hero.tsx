"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Mail, ChevronDown, Shield } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import TypewriterText from "@/components/ui/TypewriterText";
import { motion } from "framer-motion";

const ThreeBackground = dynamic(
  () => import("@/components/ui/ThreeBackground"),
  {
    ssr: false,
    loading: () => <div className="hero-bg-fallback" />,
  }
);

const typewriterTexts = [
  "Cloud Security Engineer",
  "DevSecOps Architect",
  "AWS SAA Certified",
  "SOC Analyst",
  "Builder of Automated Security Systems",
];

const socials = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/CynicPoet",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    href: "https://www.linkedin.com/in/shivam-pokharkar-a97b78256/",
    label: "LinkedIn",
  },
  {
    icon: <SiTryhackme size={20} />,
    href: "https://tryhackme.com/p/epslon",
    label: "TryHackMe",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:shivam.pokharkar18@gmail.com",
    label: "Email",
  },
];

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
      }}
    >
      {/* Three.js / fallback background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ThreeBackground />
      </div>

      {/* Overlay vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(3,7,18,0.75) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "100px 24px 80px",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="mono-label" style={{ fontSize: "12px", letterSpacing: "0.2em" }}>
            [ CLOUD SECURITY ENGINEER ]
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 800,
            fontSize: "clamp(2.4rem, 8vw, 5.5rem)",
            lineHeight: 1.08,
            margin: "20px 0 8px",
            letterSpacing: "-0.02em",
          }}
          className="gradient-text"
        >
          SHIVAM
          <br />
          POKHARKAR
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            fontFamily: "var(--font-sora)",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            fontWeight: 600,
            color: "var(--accent-cyan)",
            minHeight: "2em",
            marginBottom: "20px",
          }}
        >
          <TypewriterText texts={typewriterTexts} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
            maxWidth: "580px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &ldquo;Building security systems that work when no one is watching&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            marginBottom: "44px",
          }}
        >
          <button
            onClick={scrollToWork}
            className="btn-gold"
            aria-label="View my work"
          >
            View My Work
          </button>
          <a
            href="/resume/shivam_pokharkar_resume.pdf"
            download
            className="btn-outline-gold"
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.25s ease",
                background: "rgba(17,24,39,0.6)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--accent-gold)";
                el.style.borderColor = "var(--accent-gold)";
                el.style.boxShadow = "var(--glow-gold)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--text-secondary)";
                el.style.borderColor = "var(--border-subtle)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Maharashtra Cyber credibility strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              background: "rgba(196,150,45,0.06)",
              border: "1px solid rgba(196,150,45,0.25)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
            }}
          >
            <Shield size={14} style={{ color: "var(--accent-gold)", flexShrink: 0 }} />
            <div
              style={{
                width: "1px",
                height: "28px",
                background: "rgba(196,150,45,0.25)",
              }}
            />
            <div
              style={{
                position: "relative",
                width: "36px",
                height: "37px",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logos/maha_cyber.png"
                alt="Maharashtra Cyber — Government of Maharashtra"
                fill
                style={{ objectFit: "contain" }}
                sizes="36px"
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "var(--accent-gold)",
                  lineHeight: 1.3,
                }}
              >
                Maharashtra Cyber
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                SOC Analyst Intern · Govt. of Maharashtra · 7 Months
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
        }}
        onClick={scrollToWork}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollToWork()}
        aria-label="Scroll down"
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
          }}
        >
          SCROLL
        </span>
        <ChevronDown
          size={20}
          className="bounce-down"
          style={{ color: "var(--accent-gold)" }}
        />
      </div>
    </section>
  );
}

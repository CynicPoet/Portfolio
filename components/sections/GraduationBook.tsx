"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, BookOpen, FileText, ExternalLink, ChevronDown, ChevronUp, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const DOCX_PUBLIC_URL =
  "https://portfolio-three-murex-19.vercel.app/downloads/graduation_book_shivam_pokharkar_v4.docx";
const MS_VIEWER_URL = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(DOCX_PUBLIC_URL)}`;

const chapters = [
  "Executive Summary & Introduction",
  "Academic Transcripts (CGPA 8.53 · SGPA 9.80)",
  "Capstone: Automated Cloud Security Response System",
  "Industry Certifications (AWS SAA · Terraform · CEH v13)",
  "SOC Internship — Maharashtra Cyber (7 Months)",
  "Hackathon Achievements — SIH 2024 Grand Finalist",
  "Technical Skills & Project Portfolio",
  "Professional Memberships (ACM · IEEE)",
];

export default function GraduationBook() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [chaptersExpanded, setChaptersExpanded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setViewerOpen(false); };
    if (viewerOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerOpen]);

  return (
    <section
      id="graduation-book"
      className="grid-pattern"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHeading
          label="Portfolio Document"
          title="Graduation Portfolio"
          subtitle="Four years of academic milestones, certifications, internships, and projects — compiled as an official graduation portfolio for MIT Academy of Engineering."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            marginTop: "64px",
            alignItems: "start",
          }}
          className="lg:grid-cols-2"
        >
          {/* Book mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative", perspective: "1000px" }}>
              {/* Shadow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-24px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "200px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "rgba(196,150,45,0.15)",
                  filter: "blur(12px)",
                }}
              />
              {/* Book spine */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-18px",
                  top: 0,
                  bottom: 0,
                  width: "18px",
                  background: "linear-gradient(to right, #8a6820, #c4962d)",
                  borderRadius: "3px 0 0 3px",
                  transformOrigin: "right center",
                  transform: "skewY(-0.5deg)",
                }}
              />
              {/* Book cover */}
              <div
                style={{
                  width: "240px",
                  minHeight: "320px",
                  background: "linear-gradient(145deg, #0f1629 0%, #1a2540 40%, #0d1320 100%)",
                  border: "1px solid rgba(196,150,45,0.4)",
                  borderRadius: "2px 8px 8px 2px",
                  boxShadow: "4px 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(196,150,45,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "32px 24px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Corner decorations */}
                {[
                  { top: "10px", left: "10px" },
                  { top: "10px", right: "10px" },
                  { bottom: "10px", left: "10px" },
                  { bottom: "10px", right: "10px" },
                ].map((pos, i) => (
                  <div
                    key={i}
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      width: "16px",
                      height: "16px",
                      border: "1px solid rgba(196,150,45,0.5)",
                      ...pos,
                    }}
                  />
                ))}
                {/* Gold border line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: "18px",
                    border: "1px solid rgba(196,150,45,0.18)",
                    borderRadius: "2px",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    background: "var(--accent-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sora)",
                    fontWeight: 800,
                    fontSize: "18px",
                    color: "#030712",
                    marginBottom: "20px",
                    boxShadow: "0 0 20px rgba(196,150,45,0.4)",
                  }}
                >
                  SP
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 800,
                    fontSize: "12px",
                    color: "var(--accent-gold)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  Graduation
                  <br />
                  Portfolio
                </div>

                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background: "rgba(196,150,45,0.4)",
                    margin: "0 auto 14px",
                  }}
                />

                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 600,
                    fontSize: "12px",
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  Shivam Pokharkar
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--text-muted)",
                    marginBottom: "20px",
                  }}
                >
                  B.Tech CSE · 2022–2026
                </div>

                <div
                  style={{
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(196,150,45,0.2)",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "9px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      lineHeight: 1.9,
                    }}
                  >
                    MIT Academy of Engineering
                    <br />
                    Dept. of Computer Engineering
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: info + actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              A comprehensive official graduation portfolio documenting four years of academic
              excellence, cloud security expertise, government internship, and project work at MIT
              Academy of Engineering, Pune. Submitted as part of the B.Tech programme completion
              requirements.
            </p>

            {/* Metadata chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              {[
                { icon: <BookOpen size={13} />, text: "20+ Pages" },
                { icon: <FileText size={13} />, text: "Landscape A4" },
                { icon: <FileText size={13} />, text: ".docx Format" },
              ].map((chip) => (
                <span
                  key={chip.text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "6px",
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span style={{ color: "var(--accent-cyan)" }}>{chip.icon}</span>
                  {chip.text}
                </span>
              ))}
            </div>

            {/* Chapters accordion */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "28px",
              }}
            >
              <button
                onClick={() => setChaptersExpanded((v) => !v)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-sora)",
                  fontWeight: 600,
                  fontSize: "13px",
                }}
                aria-expanded={chaptersExpanded}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <BookOpen size={14} style={{ color: "var(--accent-gold)" }} />
                  Contents ({chapters.length} sections)
                </span>
                {chaptersExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <AnimatePresence>
                {chaptersExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        borderTop: "1px solid var(--border-subtle)",
                        padding: "12px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {chapters.map((ch, i) => (
                        <div
                          key={ch}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                            fontSize: "12px",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "10px",
                              color: "var(--accent-gold)",
                              minWidth: "20px",
                              paddingTop: "1px",
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {ch}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => setViewerOpen(true)}
                className="btn-gold"
                style={{ padding: "10px 22px", fontSize: "13px" }}
                aria-label="Read graduation portfolio in browser"
              >
                <BookOpen size={15} />
                Read Online
              </button>
              <a
                href="/downloads/graduation_book_shivam_pokharkar_v4.docx"
                download
                className="btn-outline-gold"
                style={{ padding: "10px 22px", fontSize: "13px" }}
                aria-label="Download graduation portfolio"
              >
                <Download size={15} />
                Download
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-screen document viewer */}
      <AnimatePresence>
        {viewerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(3,7,18,0.97)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
            }}
            role="dialog"
            aria-label="Graduation Portfolio viewer"
          >
            {/* Viewer toolbar */}
            <div
              style={{
                height: "56px",
                borderBottom: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                background: "var(--bg-card)",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <BookOpen size={18} style={{ color: "var(--accent-gold)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text-primary)",
                  }}
                >
                  Graduation Portfolio — Shivam Pokharkar
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <a
                  href={DOCX_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "1px solid var(--border-subtle)",
                    background: "none",
                  }}
                  aria-label="Open in new tab"
                >
                  <ExternalLink size={13} /> Open tab
                </a>
                <a
                  href="/downloads/graduation_book_shivam_pokharkar_v4.docx"
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "var(--accent-gold)",
                    textDecoration: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "1px solid rgba(196,150,45,0.4)",
                    background: "none",
                  }}
                  aria-label="Download document"
                >
                  <Download size={13} /> Download
                </a>
                <button
                  onClick={() => setViewerOpen(false)}
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "6px",
                    padding: "7px",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    display: "flex",
                    alignItems: "center",
                  }}
                  aria-label="Close viewer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Embedded document */}
            <div
              style={{
                flex: 1,
                overflow: "hidden",
                background: "#1a1a2e",
                position: "relative",
              }}
            >
              <iframe
                src={MS_VIEWER_URL}
                title="Graduation Portfolio Document"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                }}
                allow="fullscreen"
              />
            </div>

            {/* Bottom note */}
            <div
              style={{
                padding: "8px 20px",
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
                textAlign: "center",
                fontSize: "11px",
                color: "var(--text-muted)",
                flexShrink: 0,
              }}
            >
              Rendered via Microsoft Office Online · Best viewed on desktop · Press Esc or click × to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

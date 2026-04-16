"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GraduationBook() {
  return (
    <section
      id="graduation-book"
      className="grid-pattern"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeading
          label="Portfolio Document"
          title="Graduation Portfolio"
          subtitle="A complete documentation of four years of academic work, certifications, capstone project, and professional experience."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            marginTop: "64px",
            alignItems: "center",
          }}
          className="md:grid-cols-2"
        >
          {/* Book mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            style={{
              display: "flex",
              justifyContent: "center",
              perspective: "800px",
            }}
          >
            <div
              className="book-cover"
              style={{
                width: "220px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "var(--accent-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: "16px",
                  color: "#030712",
                }}
              >
                SP
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: "13px",
                  color: "var(--accent-gold)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                  lineHeight: 1.4,
                }}
              >
                Graduation Portfolio
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 600,
                  fontSize: "11px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                Shivam Pokharkar
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  marginTop: "6px",
                }}
              >
                2022 – 2026
              </div>
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(196,150,45,0.25)",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: "9px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    lineHeight: 1.8,
                  }}
                >
                  MIT Academy of Engineering
                  <br />
                  Dept. of Computer Engineering
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "14px",
                marginBottom: "28px",
              }}
            >
              This portfolio document consolidates all academic and professional
              milestones across four years at MIT Academy of Engineering, Department of
              Computer Engineering (Batch 2022–2026). It serves as the official graduation
              portfolio submission for the B.Tech programme.
            </p>

            {/* Sections list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "32px",
              }}
            >
              {[
                "Academic transcripts and CGPA records",
                "Capstone project: Automated Cloud Security Response System",
                "Industry certifications (AWS SAA, Terraform, CEH v13)",
                "Internship certificates and appreciation letters",
                "Hackathon achievements and memberships",
                "Technical skills and project portfolio",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                  }}
                >
                  <FileText
                    size={14}
                    style={{ color: "var(--accent-gold)", flexShrink: 0, marginTop: "2px" }}
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* Metadata */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "28px",
                padding: "16px",
                background: "var(--bg-card)",
                borderRadius: "10px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {[
                { icon: <BookOpen size={14} />, label: "Format", value: "Microsoft Word (.docx)" },
                { icon: <FileText size={14} />, label: "Pages", value: "20+ Pages" },
                { icon: <FileText size={14} />, label: "Layout", value: "Landscape A4" },
              ].map((meta) => (
                <div key={meta.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "var(--accent-cyan)" }}>{meta.icon}</span>
                  <div>
                    <div style={{ fontSize: "10px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {meta.label}
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--text-primary)", fontWeight: 500 }}>
                      {meta.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Download button */}
            <a
              href="/downloads/graduation_book_shivam_pokharkar_v4.docx"
              download
              className="btn-gold"
              style={{ width: "fit-content" }}
              aria-label="Download graduation portfolio document"
            >
              <Download size={16} />
              Download Graduation Portfolio
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

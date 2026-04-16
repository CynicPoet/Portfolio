"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Clock } from "lucide-react";
import { SiTryhackme, SiCisco } from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data/certifications";
import type { Certification } from "@/lib/data/certifications";

function CertLogo({ cert }: { cert: Certification }) {
  const size = 64;

  if (cert.credlyBadgeId) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://images.credly.com/size/220x220/badges/${cert.credlyBadgeId}/image.png`}
        alt={`${cert.shortName} badge`}
        width={size}
        height={size}
        style={{ objectFit: "contain", display: "block" }}
      />
    );
  }

  if (cert.id === "tryhackme-jr-pentester") {
    return (
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          background: cert.brandColorBg,
          border: `1px solid ${cert.brandColor}40`,
        }}
      >
        <SiTryhackme size={32} color={cert.brandColor} />
      </div>
    );
  }

  if (cert.id === "ccna") {
    return (
      <div
        style={{
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          background: cert.brandColorBg,
          border: `1px solid ${cert.brandColor}40`,
        }}
      >
        <SiCisco size={36} color={cert.brandColor} />
      </div>
    );
  }

  if (cert.id === "sc-200") {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "10px",
          background: cert.brandColorBg,
          border: `1px solid ${cert.brandColor}40`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sora)",
            fontWeight: 800,
            fontSize: "11px",
            color: cert.brandColor,
            letterSpacing: "0.03em",
          }}
        >
          SC-200
        </span>
        <span
          style={{
            fontSize: "8px",
            color: cert.brandColor,
            fontFamily: "var(--font-mono)",
            opacity: 0.75,
          }}
        >
          Microsoft
        </span>
      </div>
    );
  }

  /* CEH, NPTEL and any other — styled text badge */
  const abbr =
    cert.id === "ceh-v13"
      ? "CEH"
      : cert.id === "nptel-cloud"
      ? "NPTEL"
      : cert.issuer.split(" ")[0]?.slice(0, 3).toUpperCase() ?? "???";

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "10px",
        background: cert.brandColorBg,
        border: `1px solid ${cert.brandColor}40`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 800,
          fontSize: cert.id === "nptel-cloud" ? "10px" : "13px",
          color: cert.brandColor,
          letterSpacing: "0.04em",
          lineHeight: 1,
        }}
      >
        {abbr}
      </span>
      {cert.id === "ceh-v13" && (
        <span
          style={{
            fontSize: "8px",
            color: cert.brandColor,
            fontFamily: "var(--font-mono)",
            opacity: 0.8,
          }}
        >
          v13
        </span>
      )}
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ padding: "100px 24px", background: "var(--bg-primary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading
          label="Certifications"
          title="Credentials & Qualifications"
          subtitle="Industry-recognized certifications earned through dedicated study and hands-on practice."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
            marginTop: "56px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="cert-card-container"
              style={{ height: "280px" }}
            >
              <div className="cert-card-inner">
                {/* Front */}
                <div
                  className="cert-card-front"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  {/* Brand banner */}
                  <div style={{ height: "5px", background: cert.brandColor, flexShrink: 0 }} />

                  <div
                    style={{
                      padding: "20px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Badge / logo */}
                    <div style={{ marginBottom: "14px" }}>
                      <CertLogo cert={cert} />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-sora)",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.4,
                          marginBottom: "6px",
                        }}
                      >
                        {cert.shortName}
                      </h3>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "var(--text-secondary)",
                          marginBottom: "4px",
                        }}
                      >
                        {cert.issuer}
                      </p>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "var(--text-muted)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {cert.issueDate}
                      </p>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                      {cert.status === "active" ? (
                        <span className="badge-green">
                          <CheckCircle size={10} /> Active
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            padding: "3px 10px",
                            background: "rgba(245,158,11,0.1)",
                            border: "1px solid rgba(245,158,11,0.3)",
                            borderRadius: "999px",
                            fontSize: "11px",
                            color: "#f59e0b",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          <Clock size={10} /> In Progress
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="cert-card-back"
                  style={{
                    background: "var(--bg-card-hover)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    padding: "20px",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-sora)",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      color: "var(--accent-gold)",
                      marginBottom: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    {cert.name}
                  </h4>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {cert.validUntil && (
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "var(--text-muted)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Valid Until
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "var(--text-primary)",
                            fontWeight: 500,
                          }}
                        >
                          {cert.validUntil}
                        </div>
                      </div>
                    )}
                    {cert.validationCode && (
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "var(--text-muted)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Validation Code
                        </div>
                        <div
                          style={{
                            fontSize: "9px",
                            color: "var(--text-secondary)",
                            fontFamily: "var(--font-mono)",
                            wordBreak: "break-all",
                          }}
                        >
                          {cert.validationCode}
                        </div>
                      </div>
                    )}
                    {cert.certNumber && !cert.validationCode && !cert.credlyBadgeId && (
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "var(--text-muted)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Certificate #
                        </div>
                        <div
                          style={{
                            fontSize: "9px",
                            color: "var(--text-secondary)",
                            fontFamily: "var(--font-mono)",
                            wordBreak: "break-all",
                          }}
                        >
                          {cert.certNumber}
                        </div>
                      </div>
                    )}
                    {cert.trainingCenter && (
                      <div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "var(--text-muted)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                          }}
                        >
                          Training Centre
                        </div>
                        <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                          {cert.trainingCenter}
                        </div>
                      </div>
                    )}
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-gold"
                      style={{
                        padding: "8px 14px",
                        fontSize: "12px",
                        marginTop: "6px",
                        justifyContent: "center",
                      }}
                      aria-label={`Verify ${cert.name} certificate`}
                    >
                      <ExternalLink size={12} /> Verify
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

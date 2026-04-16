"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, Download, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface GalleryItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  pdfUrl?: string;
  verifyUrl?: string;
  tag: string;
  tagColor: string;
  highlight?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: "mhcyber-appreciation",
    title: "Government Appreciation Letter",
    issuer: "DIG Sanjay Shintre IPS — Maharashtra Cyber",
    date: "December 15, 2025",
    image: "/certificates/mhcyber_appreciation.jpg",
    pdfUrl: "/certificates/mhcyber_appreciation.pdf",
    tag: "Government",
    tagColor: "#c4962d",
    highlight: true,
  },
  {
    id: "mhcyber-cert",
    title: "SOC Internship Completion Certificate",
    issuer: "Maharashtra Cyber — Government of Maharashtra",
    date: "December 15, 2025",
    image: "/certificates/mhcyber_cert.jpg",
    pdfUrl: "/certificates/mhcyber_completion.pdf",
    tag: "Internship",
    tagColor: "#06b6d4",
    highlight: true,
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "February 14, 2026",
    image: "/certificates/aws_saa_cert.jpg",
    pdfUrl: "/certificates/aws_saa_certificate.pdf",
    verifyUrl: "https://aws.amazon.com/verification",
    tag: "Cloud",
    tagColor: "#FF9900",
    highlight: true,
  },
  {
    id: "terraform",
    title: "HashiCorp Terraform Associate (HCTA0-004)",
    issuer: "HashiCorp",
    date: "March 19, 2025",
    image: "/certificates/terraform_associate_cert.jpg",
    verifyUrl: "https://www.credly.com/badges/33e035ba-31fe-49b5-bf46-2b55de4b2481",
    tag: "IaC",
    tagColor: "#7C3AED",
  },
  {
    id: "ceh-v13",
    title: "Certified Ethical Hacker v13 Training",
    issuer: "EC-Council — QUIK Quest Institute, Thane",
    date: "July 27, 2025",
    image: "/certificates/cehv13_training.jpg",
    pdfUrl: "/certificates/cehv13_training.jpg",
    verifyUrl: "https://aspen.eccouncil.org/VerifyEval",
    tag: "Security",
    tagColor: "#DC2626",
  },
  {
    id: "sih-2024",
    title: "SIH 2024 Grand Finalist Certificate",
    issuer: "Smart India Hackathon — Ministry of Education, AICTE",
    date: "December 11–12, 2024",
    image: "/certificates/sih2024_finalist.jpg",
    pdfUrl: "/certificates/sih2024_finalist.pdf",
    tag: "Hackathon",
    tagColor: "#10b981",
    highlight: true,
  },
];

const TAG_COLORS: Record<string, { bg: string; border: string }> = {};
galleryItems.forEach((item) => {
  TAG_COLORS[item.id] = {
    bg: `${item.tagColor}18`,
    border: `${item.tagColor}55`,
  };
});

export default function CertificatesGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const lightbox = lightboxIdx !== null ? galleryItems[lightboxIdx] : null;

  const prev = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIdx((i) => (i === null ? null : (i + 1) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, prev, next]);

  return (
    <section
      id="certificates-gallery"
      className="dot-pattern"
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading
          label="Official Documents"
          title="Certificates & Letters"
          subtitle="Government-issued letters, industry certifications, and hackathon recognitions — verified originals."
          centered
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "24px",
            marginTop: "56px",
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => setLightboxIdx(i)}
              style={{
                background: "var(--bg-card)",
                border: item.highlight
                  ? `1px solid ${item.tagColor}50`
                  : "1px solid var(--border-subtle)",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: item.highlight ? `0 0 24px ${item.tagColor}12` : "none",
              }}
              whileHover={{
                y: -6,
                borderColor: item.tagColor + "99",
                boxShadow: `0 12px 40px ${item.tagColor}22`,
                transition: { duration: 0.25 },
              }}
            >
              {/* Certificate image with hover overlay */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "var(--bg-secondary)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform: hoveredId === item.id ? "scale(1.04)" : "scale(1)",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <motion.div
                  animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(3,7,18,0.65)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <ZoomIn size={36} style={{ color: "var(--accent-gold)" }} />
                  <span
                    style={{
                      color: "var(--accent-gold)",
                      fontFamily: "var(--font-sora)",
                      fontWeight: 600,
                      fontSize: "13px",
                    }}
                  >
                    View Full
                  </span>
                </motion.div>

                {/* Tag chip */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: `${item.tagColor}22`,
                    border: `1px solid ${item.tagColor}60`,
                    color: item.tagColor,
                    backdropFilter: "blur(8px)",
                    zIndex: 2,
                  }}
                >
                  {item.tag}
                </div>

                {/* Highlight star */}
                {item.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.tagColor,
                      boxShadow: `0 0 8px ${item.tagColor}`,
                      zIndex: 2,
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Card info */}
              <div style={{ padding: "18px 20px 16px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.4,
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    marginBottom: "3px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.issuer}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "14px",
                  }}
                >
                  {item.date}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "12px",
                  }}
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "12px",
                      color: "var(--accent-gold)",
                      fontFamily: "var(--font-sora)",
                      fontWeight: 600,
                      padding: 0,
                    }}
                    aria-label={`View ${item.title}`}
                  >
                    <ZoomIn size={13} /> View
                  </button>

                  {item.pdfUrl && (
                    <a
                      href={item.pdfUrl}
                      download
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        fontFamily: "var(--font-sora)",
                        fontWeight: 500,
                      }}
                      aria-label={`Download ${item.title}`}
                    >
                      <Download size={13} /> Download
                    </a>
                  )}

                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "12px",
                        color: "var(--accent-cyan)",
                        textDecoration: "none",
                        fontFamily: "var(--font-sora)",
                        fontWeight: 500,
                        marginLeft: "auto",
                      }}
                      aria-label={`Verify ${item.title}`}
                    >
                      <ExternalLink size={13} /> Verify
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && lightboxIdx !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIdx(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(3,7,18,0.96)",
              backdropFilter: "blur(14px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
            }}
            role="dialog"
            aria-label={`Viewing: ${lightbox.title}`}
          >
            {/* Prev / Next */}
            {[
              { fn: prev, Icon: ChevronLeft, side: "left" as const },
              { fn: next, Icon: ChevronRight, side: "right" as const },
            ].map(({ fn, Icon, side }) => (
              <button
                key={side}
                onClick={(e) => { e.stopPropagation(); fn(); }}
                style={{
                  position: "absolute",
                  [side]: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  background: "rgba(17,24,39,0.85)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  padding: "12px",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  display: "flex",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s ease",
                }}
                aria-label={side === "left" ? "Previous certificate" : "Next certificate"}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent-gold)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                }}
              >
                <Icon size={22} />
              </button>
            ))}

            <motion.div
              key={`lightbox-${lightboxIdx}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, type: "spring", stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--bg-card)",
                border: `1px solid ${lightbox.tagColor}50`,
                borderRadius: "18px",
                overflow: "hidden",
                maxWidth: "880px",
                width: "100%",
                maxHeight: "92vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: `0 0 60px ${lightbox.tagColor}18, var(--glow-gold)`,
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "14px 18px",
                  borderBottom: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "12px",
                  background: "var(--bg-card)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        padding: "2px 8px",
                        borderRadius: "999px",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        background: `${lightbox.tagColor}22`,
                        border: `1px solid ${lightbox.tagColor}55`,
                        color: lightbox.tagColor,
                      }}
                    >
                      {lightbox.tag}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {lightboxIdx + 1} / {galleryItems.length}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sora)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      marginBottom: "2px",
                    }}
                  >
                    {lightbox.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                    {lightbox.issuer} · {lightbox.date}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxIdx(null)}
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    padding: "8px",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    display: "flex",
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent-gold)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-subtle)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
                  }}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image */}
              <div
                style={{
                  flex: 1,
                  overflow: "hidden",
                  position: "relative",
                  minHeight: "280px",
                  background: "#0a0e1a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="880px"
                  priority
                />
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "12px 18px",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  alignItems: "center",
                  background: "var(--bg-card)",
                }}
              >
                {lightbox.pdfUrl && (
                  <a
                    href={lightbox.pdfUrl}
                    download
                    className="btn-outline-gold"
                    style={{ padding: "7px 16px", fontSize: "12px" }}
                    aria-label="Download certificate"
                  >
                    <Download size={13} /> Download
                  </a>
                )}
                {lightbox.verifyUrl && (
                  <a
                    href={lightbox.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold"
                    style={{
                      padding: "7px 16px",
                      fontSize: "12px",
                      borderColor: "var(--accent-cyan)",
                      color: "var(--accent-cyan)",
                    }}
                    aria-label="Verify certificate"
                  >
                    <ExternalLink size={13} /> Verify
                  </a>
                )}
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <button
                    onClick={prev}
                    style={{
                      background: "none",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "6px",
                      padding: "7px 10px",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                    }}
                    aria-label="Previous"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    onClick={next}
                    style={{
                      background: "none",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "6px",
                      padding: "7px 10px",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      display: "flex",
                      alignItems: "center",
                    }}
                    aria-label="Next"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

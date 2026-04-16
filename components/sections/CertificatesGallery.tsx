"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, Download, ExternalLink } from "lucide-react";
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

export default function CertificatesGallery() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

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
          subtitle="Government-issued letters, industry certifications, and hackathon recognitions — all verified originals."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
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
              onClick={() => setLightbox(item)}
              style={{
                background: "var(--bg-card)",
                border: item.highlight
                  ? `1px solid ${item.tagColor}40`
                  : "1px solid var(--border-subtle)",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: item.highlight
                  ? `0 0 20px ${item.tagColor}15`
                  : "none",
              }}
              whileHover={{
                y: -4,
                borderColor: item.tagColor + "80",
                boxShadow: `0 8px 32px ${item.tagColor}20`,
              }}
            >
              {/* Certificate image */}
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
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(3,7,18,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  className="cert-hover-overlay"
                >
                  <ZoomIn size={32} style={{ color: "var(--accent-gold)" }} />
                </div>
                {/* Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: `${item.tagColor}22`,
                    border: `1px solid ${item.tagColor}60`,
                    color: item.tagColor,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item.tag}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "18px 20px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: "var(--text-primary)",
                    lineHeight: 1.4,
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "4px" }}>
                  {item.issuer}
                </p>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  {item.date}
                </p>

                <div style={{ display: "flex", gap: "10px", marginTop: "12px", flexWrap: "wrap" }}>
                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(item); }}
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
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(3,7,18,0.96)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
            role="dialog"
            aria-label={`Viewing: ${lightbox.title}`}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                overflow: "hidden",
                maxWidth: "860px",
                width: "100%",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "var(--glow-gold)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sora)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {lightbox.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    {lightbox.issuer} · {lightbox.date}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
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
                  overflow: "auto",
                  position: "relative",
                  minHeight: "300px",
                  background: "var(--bg-secondary)",
                }}
              >
                <Image
                  src={lightbox.image}
                  alt={lightbox.title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="860px"
                  priority
                />
              </div>

              {/* Footer actions */}
              <div
                style={{
                  padding: "14px 20px",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                {lightbox.pdfUrl && (
                  <a
                    href={lightbox.pdfUrl}
                    download
                    className="btn-outline-gold"
                    style={{ padding: "8px 18px", fontSize: "13px" }}
                    aria-label="Download certificate"
                  >
                    <Download size={14} /> Download
                  </a>
                )}
                {lightbox.verifyUrl && (
                  <a
                    href={lightbox.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold"
                    style={{ padding: "8px 18px", fontSize: "13px", borderColor: "var(--accent-cyan)", color: "var(--accent-cyan)" }}
                    aria-label="Verify certificate"
                  >
                    <ExternalLink size={14} /> Verify Certificate
                  </a>
                )}
                <button
                  onClick={() => setLightbox(null)}
                  style={{
                    marginLeft: "auto",
                    background: "none",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    fontSize: "13px",
                    fontFamily: "var(--font-sora)",
                  }}
                  aria-label="Close lightbox"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .cert-hover-overlay { }
        [data-radix-popper-content-wrapper] { pointer-events: none; }
        .sm\\:grid-cols-2:hover .cert-hover-overlay,
        div:hover > div > .cert-hover-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}

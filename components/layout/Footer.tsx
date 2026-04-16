"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Capstone", href: "#capstone" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/CynicPoet",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: "https://www.linkedin.com/in/shivam-pokharkar-a97b78256/",
    label: "LinkedIn",
  },
  {
    icon: <SiTryhackme size={18} />,
    href: "https://tryhackme.com/p/epslon",
    label: "TryHackMe",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:shivam.pokharkar18@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "48px 24px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
          className="md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "var(--accent-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-sora)",
                  fontWeight: 800,
                  fontSize: "14px",
                  color: "#030712",
                }}
              >
                SP
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  fontSize: "15px",
                }}
              >
                Shivam Pokharkar
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.6 }}>
              Cloud Security Engineer · DevSecOps Specialist · AWS SAA & Terraform Certified
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 600,
                color: "var(--accent-gold)",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    textAlign: "left",
                    padding: "4px 0",
                    transition: "color 0.2s ease",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLButtonElement).style.color = "var(--accent-gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLButtonElement).style.color = "var(--text-secondary)")
                  }
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 600,
                color: "var(--accent-gold)",
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: "12px" }}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--accent-gold)";
                    el.style.color = "var(--accent-gold)";
                    el.style.boxShadow = "var(--glow-gold)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "var(--border-subtle)";
                    el.style.color = "var(--text-secondary)";
                    el.style.boxShadow = "none";
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "13px", textAlign: "center" }}>
            © 2026 Shivam Pokharkar. Built with Next.js & deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}

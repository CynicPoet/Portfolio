"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Capstone", href: "#capstone" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(3,7,18,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}
            aria-label="Shivam Pokharkar — Home"
          >
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
                letterSpacing: "0.05em",
              }}
            >
              SP
            </div>
            <span
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 600,
                fontSize: "15px",
                color: "var(--text-primary)",
                display: "none",
              }}
              className="hidden sm:block"
            >
              Shivam Pokharkar
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px 14px",
                  fontFamily: "var(--font-sora)",
                }}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Resume + Mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="/resume/shivam_pokharkar_resume.pdf"
              download
              className="btn-outline-gold hidden sm:inline-flex"
              style={{ padding: "8px 18px", fontSize: "13px" }}
              aria-label="Download Resume PDF"
            >
              <Download size={14} />
              Resume
            </a>
            <button
              className="md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                background: "none",
                border: "1px solid var(--border-subtle)",
                borderRadius: "6px",
                padding: "8px",
                cursor: "pointer",
                color: "var(--text-primary)",
                display: "flex",
                alignItems: "center",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: "rgba(3,7,18,0.97)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-10px)",
        }}
        aria-hidden={!mobileOpen}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            width: "100%",
            padding: "0 40px",
          }}
        >
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sora)",
                fontSize: "22px",
                fontWeight: 600,
                color:
                  activeSection === link.href.replace("#", "")
                    ? "var(--accent-gold)"
                    : "var(--text-primary)",
                padding: "14px 0",
                width: "100%",
                textAlign: "center",
                borderBottom: "1px solid var(--border-subtle)",
                transition: "color 0.2s ease",
                transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms",
              }}
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume/shivam_pokharkar_resume.pdf"
            download
            className="btn-gold"
            style={{ marginTop: "24px", width: "100%", justifyContent: "center" }}
            onClick={() => setMobileOpen(false)}
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

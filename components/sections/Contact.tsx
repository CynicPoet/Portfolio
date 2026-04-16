"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Clock } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  "Job Opportunity",
  "Collaboration",
  "General Inquiry",
  "Other",
];

const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "shivam.pokharkar18@gmail.com",
    href: "mailto:shivam.pokharkar18@gmail.com",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
  },
  {
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/shivam-pokharkar-a97b78256",
    href: "https://www.linkedin.com/in/shivam-pokharkar-a97b78256/",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github.com/CynicPoet",
    href: "https://github.com/CynicPoet",
  },
  {
    icon: <SiTryhackme size={18} />,
    label: "TryHackMe",
    value: "tryhackme.com/p/epslon",
    href: "https://tryhackme.com/p/epslon",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--bg-card)",
    border: "1px solid var(--border-subtle)",
    borderRadius: "8px",
    color: "var(--text-primary)",
    fontSize: "14px",
    fontFamily: "var(--font-inter)",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      className="dot-pattern"
      style={{ padding: "100px 24px", background: "var(--bg-primary)" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHeading
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Open to job opportunities, collaborations, and interesting conversations about cloud security."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            marginTop: "56px",
          }}
          className="md:grid-cols-2"
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-sora)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
                marginBottom: "28px",
              }}
            >
              Reach out directly
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "var(--accent-gold-muted)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-gold)",
                      flexShrink: 0,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "4px",
                      }}
                    >
                      {link.label}
                    </div>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "14px",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                          wordBreak: "break-all",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-gold)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)")
                        }
                      >
                        {link.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                        {link.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time */}
            <div
              style={{
                marginTop: "32px",
                padding: "16px 20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Clock size={16} style={{ color: "var(--accent-cyan)", flexShrink: 0 }} />
              <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                Usually responds within{" "}
                <span style={{ color: "var(--accent-gold)", fontWeight: 600 }}>24 hours</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 500 }}
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? "#ef4444" : "var(--border-subtle)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "var(--border-subtle)")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 500 }}
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? "#ef4444" : "var(--border-subtle)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "var(--border-subtle)")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 500 }}
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    appearance: "none",
                    WebkitAppearance: "none",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
                >
                  {subjects.map((s) => (
                    <option
                      key={s}
                      value={s}
                      style={{ background: "#111827", color: "#f1f5f9" }}
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{ display: "block", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "6px", fontWeight: 500 }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project…"
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "120px",
                    borderColor: errors.message ? "#ef4444" : "var(--border-subtle)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent-gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "#ef4444" : "var(--border-subtle)")}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-gold"
                style={{
                  justifyContent: "center",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
                aria-label="Send message"
              >
                {status === "loading" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Toast messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: "16px",
                  padding: "14px 18px",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "var(--success)",
                }}
                role="status"
              >
                ✓ Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: "16px",
                  padding: "14px 18px",
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#ef4444",
                }}
                role="alert"
              >
                Something went wrong. Please email directly at{" "}
                <a
                  href="mailto:shivam.pokharkar18@gmail.com"
                  style={{ color: "#ef4444", textDecoration: "underline" }}
                >
                  shivam.pokharkar18@gmail.com
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

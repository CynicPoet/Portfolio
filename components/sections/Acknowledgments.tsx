"use client";

import { motion } from "framer-motion";
import { Heart, GraduationCap, Users } from "lucide-react";

const acknowledgments = [
  {
    icon: Heart,
    iconColor: "#c4962d",
    role: "Family",
    name: "My Parents & Family",
    body: "Everything here exists because of a stable foundation at home. No single achievement in this portfolio was built in isolation — their support made the work possible.",
  },
  {
    icon: GraduationCap,
    iconColor: "#06b6d4",
    role: "Academic Mentor & Capstone Guide",
    name: "Mrs. Mayura Kulkarni",
    body: "For consistent guidance throughout the B.Tech programme and for steering the capstone project in the right direction. The feedback was always direct and useful.",
  },
  {
    icon: Users,
    iconColor: "#8b5cf6",
    role: "Peers, Colleagues & the Community",
    name: "Everyone Along the Way",
    body: "To every classmate, online community, and open-source contributor whose work or conversation made something click — it adds up more than you realise.",
  },
];

export default function Acknowledgments() {
  return (
    <section
      id="acknowledgments"
      style={{
        padding: "80px 24px",
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--accent-gold)",
              textTransform: "uppercase",
            }}
          >
            Acknowledgments
          </span>
          <p
            style={{
              marginTop: "12px",
              fontSize: "14px",
              color: "var(--text-muted)",
              maxWidth: "480px",
              margin: "10px auto 0",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            Four years of work is never just one person&apos;s effort.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {acknowledgments.map((ack, i) => {
            const Icon = ack.icon;
            return (
              <motion.div
                key={ack.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px 24px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  alignItems: "flex-start",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: `${ack.iconColor}14`,
                    border: `1px solid ${ack.iconColor}35`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Icon size={18} color={ack.iconColor} />
                </div>

                {/* Text */}
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {ack.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sora)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      marginBottom: "8px",
                    }}
                  >
                    {ack.name}
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {ack.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

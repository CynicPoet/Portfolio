"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={centered ? "text-center" : ""}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {label && (
        <span className="mono-label block mb-3">[ {label} ]</span>
      )}
      <h2
        className="font-sora font-bold text-3xl md:text-4xl"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <span
        className="section-heading-accent"
        style={centered ? { margin: "10px auto 0" } : {}}
      />
      {subtitle && (
        <p
          className="mt-4 text-base md:text-lg max-w-2xl"
          style={{
            color: "var(--text-secondary)",
            ...(centered ? { margin: "16px auto 0" } : {}),
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

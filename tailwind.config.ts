import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-card)",
        "accent-gold": "var(--accent-gold)",
        "accent-gold-light": "var(--accent-gold-light)",
        "accent-cyan": "var(--accent-cyan)",
        navy: "var(--navy)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "bounce-down": "bounce-down 1.8s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "pulse-ring": "pulse-ring 1.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
      keyframes: {
        "bounce-down": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.3)", opacity: "0.4" },
          "100%": { transform: "scale(1)", opacity: "0.8" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(rgba(196, 150, 45, 0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-24": "24px 24px",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
export default config;

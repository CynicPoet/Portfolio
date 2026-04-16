import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(4rem, 15vw, 8rem)",
          fontWeight: 800,
          color: "var(--accent-gold)",
          opacity: 0.15,
          lineHeight: 1,
          marginBottom: "8px",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        404
      </div>
      <h1
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "var(--text-primary)",
          marginBottom: "16px",
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "1rem",
          maxWidth: "420px",
          lineHeight: 1.7,
          marginBottom: "40px",
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Head
        back to the portfolio.
      </p>
      <Link
        href="/"
        className="btn-gold"
        style={{ textDecoration: "none" }}
        aria-label="Go back to homepage"
      >
        ← Back to Portfolio
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shivam-pokharkar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shivam Pokharkar — Cloud Security Engineer & DevSecOps Specialist",
    template: "%s | Shivam Pokharkar",
  },
  description:
    "Portfolio of Shivam Pokharkar — Cloud Security Engineer, AWS SAA & Terraform Certified, SOC Analyst, DevSecOps Specialist, and B.Tech Computer Engineering student at MIT Academy of Engineering, Pune (Batch 2022–2026).",
  keywords: [
    "Shivam Pokharkar",
    "Cloud Security Engineer",
    "AWS SAA",
    "Terraform Associate",
    "DevSecOps",
    "SOC Analyst",
    "Maharashtra Cyber",
    "MIT Academy of Engineering",
    "CEH",
    "TryHackMe",
    "Capstone Project",
    "Automated Cloud Security",
  ],
  authors: [{ name: "Shivam Pokharkar", url: SITE_URL }],
  creator: "Shivam Pokharkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Shivam Pokharkar — Cloud Security Engineer & DevSecOps Specialist",
    description:
      "AWS SAA & Terraform Certified Cloud Security Engineer. SOC Analyst at Maharashtra Cyber (Govt of Maharashtra). Builder of automated cloud security systems.",
    siteName: "Shivam Pokharkar Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivam Pokharkar — Cloud Security Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Pokharkar — Cloud Security Engineer",
    description:
      "AWS SAA & Terraform Certified. SOC Analyst at Maharashtra Cyber. Capstone: Automated Cloud Security Response System — 88% MTTR reduction.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

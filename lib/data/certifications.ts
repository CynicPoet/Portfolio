export interface Certification {
  id: string;
  name: string;
  shortName: string;
  issuer: string;
  issueDate: string;
  validUntil?: string;
  certNumber?: string;
  validationCode?: string;
  verifyUrl?: string;
  brandColor: string;
  brandColorBg: string;
  status: "active" | "in-progress";
  score?: string;
  trainingCenter?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    shortName: "AWS SAA-C03",
    issuer: "Amazon Web Services",
    issueDate: "February 14, 2026",
    validUntil: "February 14, 2029",
    certNumber: "AWS04705835",
    validationCode: "c6ed1f049ef74466bad981e90e096cc9",
    verifyUrl: "https://aws.amazon.com/verification",
    brandColor: "#FF9900",
    brandColorBg: "rgba(255,153,0,0.1)",
    status: "active",
    score: "774 / 1000 (Pass: 720)",
  },
  {
    id: "terraform",
    name: "HashiCorp Terraform Associate",
    shortName: "HCTA0-004",
    issuer: "HashiCorp",
    issueDate: "March 19, 2025",
    validUntil: "March 19, 2028",
    certNumber: "33e035ba-31fe-49b5-bf46-2b55de4b2481",
    verifyUrl: "https://www.credly.com",
    brandColor: "#7C3AED",
    brandColorBg: "rgba(124,58,237,0.1)",
    status: "active",
  },
  {
    id: "ceh-v13",
    name: "Certified Ethical Hacker v13 Training",
    shortName: "CEH v13",
    issuer: "EC-Council",
    issueDate: "July 27, 2025",
    certNumber: "762318",
    verifyUrl: "https://aspen.eccouncil.org/VerifyEval",
    brandColor: "#DC2626",
    brandColorBg: "rgba(220,38,38,0.1)",
    status: "active",
    trainingCenter: "QUIK Quest Institute of Knowledge, Thane",
  },
  {
    id: "tryhackme-jr-pentester",
    name: "Jr. Penetration Tester",
    shortName: "Jr. PenTester",
    issuer: "TryHackMe",
    issueDate: "July 22, 2025",
    certNumber: "THM-48BQYUW067",
    verifyUrl: "https://tryhackme.com/p/epslon",
    brandColor: "#1DB954",
    brandColorBg: "rgba(29,185,84,0.1)",
    status: "active",
  },
  {
    id: "ccna",
    name: "CCNA: Enterprise Networking, Security & Automation",
    shortName: "CCNA",
    issuer: "Cisco Networking Academy",
    issueDate: "2024",
    brandColor: "#049FD9",
    brandColorBg: "rgba(4,159,217,0.1)",
    status: "active",
  },
  {
    id: "rhcsa-ii",
    name: "Red Hat System Administration II (RH134)",
    shortName: "RHCSA II",
    issuer: "Red Hat",
    issueDate: "2024",
    brandColor: "#EE0000",
    brandColorBg: "rgba(238,0,0,0.1)",
    status: "active",
  },
  {
    id: "nptel-cloud",
    name: "Cloud Computing (Elite)",
    shortName: "NPTEL Cloud",
    issuer: "IIT Kharagpur (NPTEL)",
    issueDate: "2024",
    brandColor: "#F59E0B",
    brandColorBg: "rgba(245,158,11,0.1)",
    status: "active",
  },
  {
    id: "sc-200",
    name: "Microsoft SC-200: Security Operations Analyst",
    shortName: "SC-200 / Sentinel",
    issuer: "Microsoft",
    issueDate: "In Progress",
    brandColor: "#00A4EF",
    brandColorBg: "rgba(0,164,239,0.1)",
    status: "in-progress",
  },
];

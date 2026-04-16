export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyFull: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "full-time" | "internship" | "virtual";
  description: string[];
  tags: string[];
  appreciation?: {
    text: string;
    by: string;
    ref: string;
  };
  certId?: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: "maharashtra-cyber",
    role: "SOC Analyst Intern",
    company: "Maharashtra Cyber",
    companyFull: "Maharashtra Cyber — Government of Maharashtra",
    duration: "June 2025 – December 2025 (7 Months)",
    startDate: "2025-06-04",
    endDate: "2025-12-14",
    location: "Mumbai, Maharashtra (On-Site)",
    type: "internship",
    description: [
      "Monitored SIEM dashboards (Splunk & IBM QRadar) for real-time threat detection across government infrastructure, triaging 100+ daily security alerts.",
      "Performed threat hunting and log correlation across network, endpoint, and cloud sources to identify indicators of compromise (IOCs) and lateral movement.",
      "Conducted OSINT investigations identifying, analyzing, and documenting emerging cyber threats — tracking suspicious digital activity and building intelligence reports.",
      "Performed social media monitoring to identify harmful and security-sensitive content, supporting cybercrime investigators with accurate incident reporting.",
      "Assisted in GRC activities, incident response workflows, and vulnerability analysis under supervision of Project Manager Vivek Upadyay.",
      "Contributed to strengthening Maharashtra Cyber's cybersecurity posture through intelligence-driven SOC operations.",
    ],
    tags: [
      "Splunk",
      "IBM QRadar",
      "Cybersixgill",
      "Threat Hunting",
      "OSINT",
      "SIEM",
      "Incident Response",
      "Log Analysis",
      "GRC",
      "SOC",
      "Alert Triage",
    ],
    appreciation: {
      text:
        "Awarded Official Appreciation Letter for exceptional analytical ability, strong technical knowledge, and high level of professionalism in supporting critical cybersecurity operations.",
      by: "DIG Sanjay Shintre IPS (ADGP Mantralaya) — Maharashtra Cyber, Mumbai",
      ref: "MHCYBER/2025 | Dated: 15/12/2025",
    },
    certId: "MHCYBER/2025",
  },
  {
    id: "virtual-internships",
    role: "Cybersecurity Virtual Internships",
    company: "Palo Alto | AWS Academy | Cisco AICTE",
    companyFull: "Palo Alto Networks | AWS Academy | Cisco AICTE Virtual Internships",
    duration: "May 2024 – December 2024",
    startDate: "2024-05-01",
    endDate: "2024-12-31",
    location: "Remote",
    type: "virtual",
    description: [
      "Palo Alto Networks (Oct–Dec 2024, AICTE — Grade: Outstanding): Worked on threat detection, firewall rule sets, network segmentation, and incident response in lab environments. Simulated Zero Trust architecture deployments.",
      "AWS Academy Cloud Virtual Internship (Jul–Sep 2024): Designed and deployed cloud infrastructure using IAM, EC2, S3, VPC, Lambda, CloudFront, and Beanstalk. Focused on secure and serverless cloud architecture.",
      "Cisco AICTE Cybersecurity Virtual Internship (May–Jul 2024): Simulated enterprise networks in Packet Tracer — implemented OSPF routing, VLANs, ACLs, NAT, DHCP, and firewall security policies.",
    ],
    tags: [
      "Zero Trust",
      "Firewall",
      "AWS",
      "IAM",
      "VPC",
      "EC2",
      "Lambda",
      "S3",
      "OSPF",
      "VLAN",
      "ACL",
      "Packet Tracer",
      "Network Security",
    ],
  },
];

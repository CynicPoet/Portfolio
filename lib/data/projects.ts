export type ProjectCategory =
  | "Cloud Security"
  | "Web Dev"
  | "Network"
  | "IoT";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  status?: string;
  description: string;
  longDescription?: string;
  metrics?: ProjectMetric[];
  stack: string[];
  github?: string;
  liveUrl?: string;
  capstoneLink?: boolean;
  architectureImage?: boolean;
}

export const projects: Project[] = [
  {
    id: "capstone-cloud-security",
    title: "Automated Cloud Security Response System on AWS",
    category: "Cloud Security",
    featured: true,
    status: "Capstone Project",
    description:
      "A fully automated cloud security response pipeline on AWS that detects misconfigurations via Security Hub, routes events through EventBridge, orchestrates AI-powered triage using Step Functions and Amazon Bedrock, and executes SSM Automation runbooks for zero-touch remediation.",
    longDescription:
      "Built as the B.Tech Capstone Project at MIT Academy of Engineering (2025–26), this system reduces Mean Time to Remediate (MTTR) from ~100 minutes (manual) to ~20 seconds (automated) — an 88% reduction. The infrastructure is deployed via 14 Terraform modules at a cost of $0.02/month, achieving 100% accuracy across 45 security findings.",
    metrics: [
      { label: "MTTR Reduction", value: "88%" },
      { label: "AWS Cost", value: "$0.02/mo" },
      { label: "Remediation Accuracy", value: "100%" },
      { label: "Total Findings Fixed", value: "45/45" },
    ],
    stack: [
      "Terraform",
      "AWS Step Functions",
      "Amazon EventBridge",
      "AWS Lambda",
      "Amazon Bedrock",
      "DynamoDB",
      "SNS",
      "API Gateway",
      "AWS Security Hub",
      "SSM Automation",
      "Checkov",
      "GitHub Actions",
      "Python",
      "boto3",
      "React",
      "CloudWatch",
    ],
    github: "https://github.com/CynicPoet",
    capstoneLink: true,
    architectureImage: true,
  },
  {
    id: "falco-eks",
    title: "Falco Runtime Threat Detection on Amazon EKS",
    category: "Cloud Security",
    featured: false,
    description:
      "Deployed Falco as a runtime security engine on Amazon EKS using Helm. Configured custom Falco rules to detect suspicious container activity, privilege escalation, and unexpected process execution. Integrated alerts with CloudWatch for centralized observability.",
    stack: [
      "Kubernetes",
      "Amazon EKS",
      "Helm",
      "Falco",
      "Docker",
      "CloudWatch",
      "YAML",
      "Bash",
    ],
    github: "https://github.com/CynicPoet",
  },
  {
    id: "network-analyser",
    title: "Network Protocol Analyser",
    category: "Network",
    featured: false,
    description:
      "A real-time network packet capture and protocol analysis tool built with Python and Scapy. Features a web dashboard (Flask + Tailwind + Chart.js) for live packet visualization, protocol breakdown, and session tracking. Data persisted in SQLite for historical analysis.",
    stack: [
      "Python 3.11",
      "Flask",
      "Scapy",
      "SQLite",
      "Tailwind CSS",
      "Chart.js",
    ],
    github: "https://github.com/CynicPoet",
  },
  {
    id: "pasaydan-ngo",
    title: "Pasaydan NGO Donation Management System",
    category: "Web Dev",
    featured: false,
    status: "Live in Production",
    description:
      "Full-stack donation management portal for Pasaydan NGO. Features donor registration, campaign tracking, real-time donation analytics, volunteer coordination, and admin dashboard. Built with Next.js 14 App Router, Prisma ORM, and MongoDB.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma ORM",
      "MongoDB",
      "Node.js",
    ],
    github: "https://github.com/CynicPoet",
  },
  {
    id: "iot-greenhouse",
    title: "IoT Greenhouse Automation System",
    category: "IoT",
    featured: false,
    description:
      "Automated greenhouse monitoring and control system using NodeMCU (ESP8266). Sensors monitor temperature, humidity (DHT11), light intensity (LDR), and soil moisture in real-time. Relay-controlled actuators (fans, pumps, lights) respond automatically to threshold conditions. Monitored via Blynk IoT mobile app.",
    stack: [
      "NodeMCU (ESP8266)",
      "Blynk IoT",
      "DHT11",
      "LDR",
      "Soil Moisture Sensor",
      "Relay Module",
      "Arduino IDE",
      "C++",
    ],
    github: "https://github.com/CynicPoet",
  },
];

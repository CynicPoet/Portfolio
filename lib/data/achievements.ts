export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon: string;
  highlight?: boolean;
  ref?: string;
}

export const achievements: Achievement[] = [
  {
    id: "sih-2024",
    title: "SIH 2024 — Grand Finalist",
    subtitle: "Smart India Hackathon 2024",
    date: "December 11–12, 2024",
    description:
      "Selected as a Grand Finalist in Smart India Hackathon 2024 — the largest hackathon in India organized by the Ministry of Education and AICTE. Competed among thousands of teams nationwide to present solutions for real government problem statements.",
    icon: "🏆",
    highlight: true,
  },
  {
    id: "mhcyber-appreciation",
    title: "Official Government Appreciation Letter",
    subtitle: "Maharashtra Cyber — DIG Sanjay Shintre IPS",
    date: "December 15, 2025",
    description:
      "Received an official appreciation letter from Deputy Inspector General of Police Sanjay Shintre IPS (Maharashtra Cyber) for exceptional analytical ability, technical knowledge, and professionalism in contributing to real-world cybersecurity operations at the Government SOC.",
    icon: "🎖️",
    highlight: true,
    ref: "Ref: MHCYBER/2025",
  },
  {
    id: "cavista-2025",
    title: "Cavista Hackathon 2025 — Finalist",
    subtitle: "Cavista Technologies",
    date: "2025",
    description:
      "Reached the finals of Cavista Hackathon 2025, competing in a technology innovation challenge organized by Cavista Technologies.",
    icon: "🥈",
  },
  {
    id: "scrollhacks-2024",
    title: "ScrollHacks Global Hackathon — Top 10",
    subtitle: "ScrollHacks International",
    date: "2024",
    description:
      "Achieved Top 10 placement in ScrollHacks, a global hackathon, demonstrating strong problem-solving and innovation in a competitive international field.",
    icon: "🌐",
  },
  {
    id: "tsec-hacks-2025",
    title: "TSEC Hacks 2025 — Participant",
    subtitle: "Thadomal Shahani Engineering College",
    date: "2025",
    description:
      "Participated in TSEC Hacks 2025, one of Mumbai's prestigious college hackathons.",
    icon: "💡",
  },
  {
    id: "acm-vp",
    title: "ACM Student Chapter — Vice President",
    subtitle: "Association for Computing Machinery",
    date: "March 2024",
    description:
      "Elected Vice President of the ACM Student Chapter at MIT Academy of Engineering (ID: 9449572). Led initiatives fostering innovation, collaboration, and learning; organized technical events and workshops for the student community.",
    icon: "👥",
  },
  {
    id: "ieee-member",
    title: "IEEE Student Member",
    subtitle: "Institute of Electrical and Electronics Engineers",
    date: "2024",
    description:
      "Active IEEE Student Member (ID: 101006948), contributing to the world's largest technical professional organization.",
    icon: "⚡",
  },
  {
    id: "academic-excellence",
    title: "Academic Excellence — SGPA 9.80",
    subtitle: "MIT Academy of Engineering, Semester 7",
    date: "2025",
    description:
      "Achieved SGPA of 9.80 in Semester 7, demonstrating consistent academic excellence alongside professional internship commitments. Cumulative CGPA: 8.53.",
    icon: "📊",
    highlight: true,
  },
  {
    id: "red-hat-ambassador",
    title: "Red Hat Student Ambassador",
    subtitle: "Red Hat Linux",
    date: "2024",
    description:
      "Appointed as Red Hat Student Ambassador — actively promoting open-source technologies, engaging with the community, and helping fellow students explore Linux and Red Hat ecosystem.",
    icon: "🎩",
  },
  {
    id: "mindspark-2023",
    title: "Third Prize — Robot Falconry (MindSpark 23)",
    subtitle: "COEP Technological University, Pune",
    date: "2023",
    description:
      "Won third prize in the Robot Falconry drone competition at MindSpark 2023 at COEP Technological University. Team successfully piloted drones through challenging obstacle courses.",
    icon: "🚁",
  },
];

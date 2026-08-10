export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  badge?: string;
  category: "Professional" | "Early Experience";
  focusArea: string[];
  description: string;
  keyResponsibilities: string[];
  technologies: string[];
  expandedDetails?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Viral Pitch Technology Pvt. Ltd.",
    location: "Gurugram, Haryana",
    role: "Software Developer",
    period: "Dec 2025 – June 2026",
    category: "Professional",
    focusArea: [
      "Influencer Platform",
      "Outreach Engine",
      "Redis & Queues",
      "REST APIs",
    ],
    description:
      "Backend software development for an Influencer Discovery Platform and SaaS outreach automation.",
    keyResponsibilities: [
      "Worked on an Influencer Discovery Platform for brands and agencies.",
      "Led backend development of the Outreach Module with email integration, templates, sequences and synchronization.",
      "Built scalable REST APIs and backend services for influencer and outreach workflows.",
      "Worked on a Redis + queue-based Scraper Module for asynchronous data processing.",
    ],
    expandedDetails: [
      "Gmail OAuth2 integration with token refresh flows and sending rate-limit throttling.",
      "Asynchronous Redis worker queues processing inbox synchronization, reply parsing, and bounce telemetry.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "Gmail OAuth", "REST APIs", "Queues"],
  },
  {
    company: "Inditab Esolutions Pvt. Ltd. — EaseMyDeal",
    location: "Noida, Uttar Pradesh",
    role: "Backend Developer Engineer",
    period: "July 2024 – Dec 2025",
    badge: "GroundBreaker Award 2024",
    category: "Professional",
    focusArea: [
      "RESTful APIs",
      "Hotel Booking",
      "Go-VIP Service",
      "Backend Systems",
    ],
    description:
      "Backend API development and service architecture for high-traffic financial and booking applications.",
    keyResponsibilities: [
      "Developed and maintained RESTful APIs for web and mobile platforms.",
      "Worked on backend systems focused on performance and security.",
      "Contributed to Hotel Booking and Go-VIP services for the EaseMyDeal application.",
    ],
    expandedDetails: [
      "Optimized query performance and transaction safety across payment and booking pipelines.",
      "Recognized with GroundBreaker Award (2024) as part of the IT Team for technical contribution and impact.",
    ],
    technologies: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST APIs", "BBPS", "Payment Integrations"],
  },
  {
    company: "Digiature Technology Pvt. Ltd.",
    location: "Prayagraj, Uttar Pradesh",
    role: "Software Developer Engineer",
    period: "Nov 2022 – June 2024",
    badge: "First Professional Role",
    category: "Professional",
    focusArea: [
      "Scalable Backends",
      "Full-Stack Systems",
      "Web3 / DApps",
      "Smart Contracts",
    ],
    description:
      "Backend systems development and Web3 decentralized application engineering.",
    keyResponsibilities: [
      "Developed scalable backend systems for full-stack projects.",
      "Worked on backend development using modern web technologies and frameworks.",
      "Contributed to Web3 projects including decentralized applications and blockchain-based solutions.",
    ],
    expandedDetails: [
      "Engineered Web3 wallet authentication, token distribution contract logic, and member dashboard backends.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Web3.js", "Solidity", "REST APIs"],
  },
];

export const earlyExperience: ExperienceItem = {
  company: "Arudan Technologies",
  location: "India (Remote)",
  role: "Full Stack Developer Intern",
  period: "Aug 2022 – Sep 2022",
  category: "Early Experience",
  focusArea: ["Full Stack Prototype", "Airline Booking"],
  description:
    "Developed a prototype airline booking website with real-time features and validation workflows.",
  keyResponsibilities: [
    "Developed a prototype airline booking website with real-time features and validation workflows.",
  ],
  technologies: ["PHP", "JavaScript", "HTML/CSS", "MySQL"],
};

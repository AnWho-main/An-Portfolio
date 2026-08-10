export interface ExperienceItem {
  company: string;
  role: string;
  badge?: string;
  focusArea: string[];
  description: string;
  keyResponsibilities: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Telgoo5",
    role: "Software Engineer",
    badge: "Current / Recent",
    focusArea: [
      "Scalable Backend Systems",
      "Laravel / PHP APIs",
      "Business Platforms",
      "System Automation",
      "Production Systems",
    ],
    description:
      "Engineering scalable backend architecture, business logic services, REST APIs, and automated database-heavy processing environments built on Laravel and PHP.",
    keyResponsibilities: [
      "Architected and maintained high-reliability PHP / Laravel backend services and REST API endpoints.",
      "Engineered automated data pipelines, cron schedulers, and asynchronous transaction processors.",
      "Optimized MySQL database queries, indexing schemas, and relational data access layers for production platforms.",
      "Integrated third-party business services, external APIs, and authentication mechanisms.",
    ],
    technologies: ["PHP", "Laravel", "REST APIs", "MySQL", "Cron Jobs", "Database Architecture", "System Automation"],
  },
  {
    company: "ViralPitch Technologies Pvt. Ltd.",
    role: "Software / Backend Engineering",
    focusArea: [
      "Backend Systems",
      "APIs & Microservices",
      "Business Applications",
      "Automation Pipelines",
      "Database Architecture",
    ],
    description:
      "Developed high-throughput backend services, data ingestion workflows, custom API integrations, and database schemas for enterprise business platforms.",
    keyResponsibilities: [
      "Designed and developed backend APIs for internal business applications and client integrations.",
      "Built custom automation services for data processing, reporting, and scheduled tasks.",
      "Designed normalized MySQL schemas and optimized relational queries to maintain data integrity.",
      "Collaborated on backend security controls, role/permission management systems, and authentication flows.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Automation", "Git", "JSON APIs"],
  },
  {
    company: "Inditab Esolutions Pvt. Ltd. — EaseMyDeal",
    role: "Backend Developer",
    focusArea: [
      "Backend Development",
      "Payment & Recharge Engines",
      "BBPS Integrations",
      "API Connectors",
      "Transaction Processing",
    ],
    description:
      "Focused on core backend engineering for recharge platforms, financial services, BBPS integrations, payment gateways, and automated reconciliation systems.",
    keyResponsibilities: [
      "Developed backend transaction processing logic for utility recharge and bill payment services.",
      "Integrated Bharat Bill Payment System (BBPS) APIs and third-party payment gateway connectors.",
      "Engineered transaction verification pipelines, error handling logic, and real-time status reporting.",
      "Maintained transactional database logs and optimized SQL queries for financial transaction auditing.",
    ],
    technologies: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST APIs", "BBPS", "Payment Integrations"],
  },
];

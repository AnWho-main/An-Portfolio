export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend Engineering",
    description: "Designing high-throughput API endpoints, business logic pipelines, relational data models, and asynchronous background jobs.",
    skills: [
      { name: "PHP", level: "Core", highlight: "Primary backend language for high-performance server logic." },
      { name: "Laravel", level: "Core", highlight: "Enterprise framework for robust MVC web applications, ORM, and queuing." },
      { name: "CodeIgniter", level: "Core", highlight: "Lightweight PHP framework for legacy system maintenance and fast APIs." },
      { name: "REST APIs", level: "Core", highlight: "Designing secure, stateless, production-ready HTTP API contracts." },
      { name: "MySQL", level: "Core", highlight: "Complex query optimization, schema indexing, and relational data architecture." },
      { name: "JWT", level: "Advanced", highlight: "Stateless cross-domain API authentication and authorization mechanisms." },
      { name: "OAuth", level: "Advanced", highlight: "Third-party authentication flows (Gmail, OAuth2 service providers)." },
      { name: "Cron Jobs", level: "Advanced", highlight: "Scheduled background workers for email sync, reporting, and payouts." },
      { name: "Database Optimization", level: "Advanced", highlight: "Query profiling, index tuning, transaction locks, and caching strategies." },
    ],
  },
  {
    id: "frontend",
    name: "Frontend / Full Stack",
    description: "Building responsive, stateful, component-driven user interfaces integrated with backend microservices.",
    skills: [
      { name: "JavaScript", level: "Core", highlight: "ES6+ asynchronous programming, DOM manipulation, and dynamic components." },
      { name: "Next.js", level: "Advanced", highlight: "App Router, Server Components, SSR/SSG dynamic page architecture." },
      { name: "HTML", level: "Core", highlight: "Semantic, accessible HTML5 structure and SEO compliance." },
      { name: "CSS / Tailwind", level: "Core", highlight: "Vanilla CSS & utility-first design systems with dark theme support." },
      { name: "API Integration", level: "Core", highlight: "Client-side data fetching, state management, error handling, and retries." },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    description: "Leveraging LLM agents, automated data pipelines, and intelligent extraction workflows for enterprise automation.",
    skills: [
      { name: "AI Agents", level: "Advanced", highlight: "Autonomous agents capable of web scraping, price normalization, and reasoning." },
      { name: "AI-Powered Applications", level: "Advanced", highlight: "Generative image pipelines, background synthesis, and prompt engineering." },
      { name: "Automation Workflows", level: "Core", highlight: "End-to-end background job queues, webhook handlers, and mail sync." },
      { name: "API-Driven AI Systems", level: "Advanced", highlight: "Interfacing REST APIs with AI models for contextual data processing." },
      { name: "Intelligent Tools", level: "Proficient", highlight: "Custom automated assistants and price comparison engines." },
    ],
  },
  {
    id: "blockchain-web3",
    name: "Blockchain / Web3",
    description: "Smart contract development, token distribution contracts, and Web3 wallet integration.",
    skills: [
      { name: "Web3.js / Ethers", level: "Advanced", highlight: "Client-side wallet connection, transaction signing, and event listening." },
      { name: "Smart Contracts", level: "Advanced", highlight: "Solidity contract development, compiling, and BSC testnet deployments." },
      { name: "BEP-20", level: "Advanced", highlight: "Standard token implementation with transfer logic and allowance controls." },
      { name: "BSC (BNB Smart Chain)", level: "Advanced", highlight: "EVM-compatible blockchain network deployment and interaction." },
      { name: "Token Systems", level: "Advanced", highlight: "Custom royalty distribution engines and vault contract integrations." },
      { name: "Wallet Integrations", level: "Proficient", highlight: "MetaMask and Web3 modal connectivity flows." },
      { name: "Blockchain APIs", level: "Proficient", highlight: "BscScan API integration for block verification and transaction history." },
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure / Tools",
    description: "Containerization, cloud platform deployments, version control, and local server environments.",
    skills: [
      { name: "Git", level: "Core", highlight: "Branching strategies, code review workflows, and versioning." },
      { name: "Docker", level: "Advanced", highlight: "Containerizing PHP, MySQL, and Node services for parity across envs." },
      { name: "AWS", level: "Proficient", highlight: "EC2 server instances, S3 storage buckets, and IAM policy management." },
      { name: "Vercel", level: "Advanced", highlight: "Serverless deployment and CI/CD pipeline configuration for Next.js." },
      { name: "XAMPP", level: "Core", highlight: "Local Apache/MySQL development stack configuration." },
      { name: "MySQL Workbench", level: "Core", highlight: "Database schema modeling and ER diagrams." },
    ],
  },
];

export const techUniverseNodes = [
  { id: "core", label: "Anshuman's Stack", category: "center", color: "#38BDF8" },
  { id: "backend", label: "Backend System", category: "node", parent: "core", tech: ["Laravel", "PHP", "CodeIgniter"], color: "#6366F1" },
  { id: "database", label: "Database", category: "node", parent: "core", tech: ["MySQL", "Query Opt", "Indexing"], color: "#10B981" },
  { id: "frontend", label: "Frontend", category: "node", parent: "core", tech: ["Next.js", "JavaScript", "Tailwind"], color: "#00F0FF" },
  { id: "ai", label: "AI & Automation", category: "node", parent: "core", tech: ["AI Agents", "Sync Workflows", "Generative AI"], color: "#8B5CF6" },
  { id: "web3", label: "Blockchain / Web3", category: "node", parent: "core", tech: ["Solidity", "BEP-20", "Smart Contracts"], color: "#F59E0B" },
  { id: "infra", label: "Infrastructure", category: "node", parent: "core", tech: ["AWS", "Docker", "Vercel", "Git"], color: "#EC4899" },
];

export interface SkillCategory {
  id: string;
  name: string;
  priorityGroup: "Primary" | "Secondary" | "Emerging" | "Tools";
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
    priorityGroup: "Primary",
    description: "Designing high-throughput API endpoints, business logic pipelines, relational data models, and asynchronous background jobs.",
    skills: [
      { name: "Laravel", level: "Core", highlight: "Primary enterprise framework for robust MVC applications, ORM, queues, and APIs." },
      { name: "PHP", level: "Core", highlight: "Primary backend language for high-performance server logic and web apps." },
      { name: "MySQL", level: "Core", highlight: "Complex query optimization, schema indexing, and relational data architecture." },
      { name: "REST APIs", level: "Core", highlight: "Designing secure, stateless, production-ready HTTP API contracts." },
      { name: "CodeIgniter", level: "Core", highlight: "Lightweight PHP framework for legacy systems and fast APIs." },
      { name: "Node.js", level: "Advanced", highlight: "Event-driven runtime for microservices and background job processors." },
    ],
  },
  {
    id: "frontend",
    name: "Frontend / Full Stack",
    priorityGroup: "Secondary",
    description: "Building responsive, stateful, component-driven user interfaces integrated with backend microservices.",
    skills: [
      { name: "JavaScript", level: "Core", highlight: "ES6+ asynchronous programming, DOM manipulation, and dynamic components." },
      { name: "React.js", level: "Advanced", highlight: "Component-driven UI, state hooks, and client-side web applications." },
      { name: "Next.js", level: "Advanced", highlight: "App Router, Server Components, SSR dynamic page architecture." },
    ],
  },
  {
    id: "database",
    name: "Database & Caching",
    priorityGroup: "Primary",
    description: "Relational data modeling, schema indexing, and high-performance memory caching.",
    skills: [
      { name: "MySQL", level: "Core", highlight: "Query profiling, index tuning, transaction locks, and relational schemas." },
      { name: "Redis", level: "Advanced", highlight: "In-memory data structures, pub/sub queues, and scraper cache layers." },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    priorityGroup: "Emerging",
    description: "Leveraging LLM agents, automated data pipelines, and intelligent extraction workflows for task automation.",
    skills: [
      { name: "AI Agents", level: "Advanced", highlight: "Autonomous agents for tool-calling, data normalization, and task automation." },
      { name: "AI Automation", level: "Advanced", highlight: "End-to-end background job queues, webhook handlers, and mail sync engines." },
      { name: "OpenAI", level: "Advanced", highlight: "LLM API integration, prompt engineering, and structured JSON outputs." },
      { name: "Gemini", level: "Proficient", highlight: "Multimodal AI model integration and contextual reasoning workflows." },
    ],
  },
  {
    id: "blockchain-web3",
    name: "Web3 & Blockchain",
    priorityGroup: "Emerging",
    description: "Smart contract development, token distribution contracts, and Web3 wallet integration.",
    skills: [
      { name: "Web3.js", level: "Advanced", highlight: "Client-side wallet connection, transaction signing, and event listening." },
      { name: "Blockchain", level: "Advanced", highlight: "EVM-compatible blockchain network deployment and transaction logic." },
      { name: "Smart Contracts", level: "Advanced", highlight: "Solidity contract development, compiling, and BSC testnet deployments." },
      { name: "DApps", level: "Advanced", highlight: "Three-tier decentralized application architecture (Web, Member, Admin)." },
    ],
  },
  {
    id: "tools",
    name: "Tools & Infrastructure",
    priorityGroup: "Tools",
    description: "Version control, API testing, background queues, and local development environments.",
    skills: [
      { name: "Git", level: "Core", highlight: "Branching strategies, code review workflows, and version control." },
      { name: "GitHub Actions", level: "Advanced", highlight: "CI/CD pipelines and automated testing workflows." },
      { name: "Postman", level: "Core", highlight: "API testing, contract documentation, and endpoint debugging." },
      { name: "VS Code", level: "Core", highlight: "Primary development workspace with extensions and debugging." },
    ],
  },
];

export const techUniverseNodes = [
  { id: "core", label: "Anshuman's Stack", category: "center", color: "#38BDF8" },
  { id: "backend", label: "Backend System", category: "node", parent: "core", tech: ["Laravel", "PHP", "CodeIgniter", "REST APIs"], color: "#6366F1" },
  { id: "database", label: "Database", category: "node", parent: "core", tech: ["MySQL", "Redis", "Indexing"], color: "#10B981" },
  { id: "frontend", label: "Frontend", category: "node", parent: "core", tech: ["JavaScript", "React.js", "Next.js"], color: "#00F0FF" },
  { id: "ai", label: "AI & Automation", category: "node", parent: "core", tech: ["AI Agents", "OpenAI", "AI Automation"], color: "#8B5CF6" },
  { id: "web3", label: "Blockchain / Web3", category: "node", parent: "core", tech: ["Web3.js", "Smart Contracts", "DApps"], color: "#F59E0B" },
  { id: "infra", label: "Tools & DevOps", category: "node", parent: "core", tech: ["Git", "GitHub Actions", "Postman"], color: "#EC4899" },
];

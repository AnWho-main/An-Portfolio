export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "backend-dev",
    title: "Backend Development",
    description: "Scalable PHP and Laravel backend architectures, robust microservices, database models, and background queue workers.",
    iconName: "Server",
    deliverables: [
      "Laravel / PHP Core Architecture",
      "High-Throughput API Controllers",
      "Asynchronous Worker Queues",
      "Role & Permission Systems",
    ],
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Development",
    description: "End-to-end web applications combining robust backend services with modern, reactive Next.js and JavaScript frontends.",
    iconName: "Layers",
    deliverables: [
      "Next.js App Router Applications",
      "Server-Side Rendering & Client Hydration",
      "Responsive Glassmorphic Interfaces",
      "State Management & Custom Hooks",
    ],
  },
  {
    id: "api-dev",
    title: "API Development & Integration",
    description: "Designing RESTful API specifications, third-party vendor connectors, OAuth2 authentication, and payment rails.",
    iconName: "Code2",
    deliverables: [
      "RESTful Endpoint Specifications",
      "Payment & BBPS API Connectors",
      "OAuth2 & JWT Auth Services",
      "Webhook Receivers & Idempotency",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Automation",
    description: "Building autonomous AI agents, automated data parsing pipelines, inbox synchronization services, and AI-assisted workflows.",
    iconName: "Cpu",
    deliverables: [
      "Autonomous Extraction Agents",
      "Generative Visual Workflows",
      "Cron-Driven Sync Automation",
      "Fuzzy Data Normalization Pipelines",
    ],
  },
  {
    id: "blockchain-web3",
    title: "Blockchain & Web3 Systems",
    description: "Solidity smart contract development, BEP-20 token issuance, royalty distributor vaults, and Web3 wallet connectors.",
    iconName: "Binary",
    deliverables: [
      "Solidity BEP-20 Smart Contracts",
      "Royalty & Token Distribution Engines",
      "MetaMask / Web3 Wallet Flows",
      "BSC Chain Integration",
    ],
  },
  {
    id: "database-arch",
    title: "Database & System Architecture",
    description: "Relational database schema modeling, query profiling, index optimization, caching strategies, and scalability design.",
    iconName: "Database",
    deliverables: [
      "MySQL Schema Normalization",
      "Query Indexing & Execution Profiling",
      "ACID Transaction Safety",
      "System Scalability Mapping",
    ],
  },
];

export const whatIBuildCategories = [
  {
    title: "Web Applications",
    short: "Full-Stack Web Platforms",
    description: "Production-ready, highly interactive web applications powered by Laravel and Next.js.",
  },
  {
    title: "Backend Systems",
    short: "Core Server Architecture",
    description: "High-concurrency server pipelines, business logic handlers, and database access layers.",
  },
  {
    title: "REST APIs",
    short: "Stateless Microservices",
    description: "Clean, documented HTTP API contracts built for security, high throughput, and seamless client integration.",
  },
  {
    title: "AI Agents",
    short: "Autonomous Intelligent Systems",
    description: "AI pipelines capable of price comparison, data normalization, and contextual task execution.",
  },
  {
    title: "Automation Platforms",
    short: "Background Job Queues",
    description: "Cron-driven synchronization, automated email sequence runners, and system workflow engines.",
  },
  {
    title: "SaaS Systems",
    short: "Multi-Tenant Business Software",
    description: "Subscription platforms featuring OAuth connections, role permissions, and file processors.",
  },
  {
    title: "Payment Systems",
    short: "Recharge & BBPS Rails",
    description: "Secure financial transaction processors, recharge APIs, and automated ledger reconciliation.",
  },
  {
    title: "Blockchain / Web3",
    short: "Smart Contracts & Tokens",
    description: "Decentralized applications, BEP-20 smart contracts, and automated token distributor vaults.",
  },
  {
    title: "Developer Tools",
    short: "Custom Micro-Utilities",
    description: "CLI scripts, terminal components, schema generators, and deployment automation tools.",
  },
];

export const engineeringApproachSteps = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Business Problem & Systems Context",
    description: "Analyze core domain requirements, data flow constraints, vendor dependencies, and system objectives before writing code.",
  },
  {
    step: "02",
    title: "Architect",
    subtitle: "APIs, Schemas & Infrastructure",
    description: "Design relational database schemas, RESTful API contracts, caching boundaries, queue topologies, and integration adapters.",
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Scalable Backend & Reactive Frontend",
    description: "Write maintainable, strictly-typed PHP/Laravel services, Next.js components, and optimized database queries.",
  },
  {
    step: "04",
    title: "Integrate",
    subtitle: "Payments, OAuth, AI & Web3 Rails",
    description: "Connect payment gateways, BBPS services, email APIs, AI processing modules, and smart contracts into unified workflows.",
  },
  {
    step: "05",
    title: "Optimize",
    subtitle: "Performance, Security & Auditing",
    description: "Profile SQL query logs, implement index optimizations, harden authentication security, and establish transaction monitoring.",
  },
];

export interface Project {
  slug: string;
  title: string;
  category: "Payments" | "Backend" | "Automation" | "Web3" | "AI" | "SaaS" | "APIs";
  shortDescription: string;
  highlight: string;
  problem: string;
  solution: string;
  technologies: string[];
  architectureSteps: {
    from: string;
    to: string;
    label: string;
  }[];
  keyFeatures: string[];
  engineeringChallenges: string[];
  outcome: string;
  status: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    slug: "recharge-bill-payment",
    title: "Recharge & Bill Payment Platform",
    category: "Payments",
    shortDescription: "A high-throughput backend platform handling utility recharges, bill payments, external API connectors, and automated transaction verification.",
    highlight: "Built backend systems for recharge and bill payment workflows with external service integrations and transaction-driven processing.",
    problem: "Financial recharge services require zero-downtime execution, reliable rollback mechanisms for failed vendor API calls, idempotent transaction verification, and instant status callback handling under heavy load.",
    solution: "Engineered a modular Laravel/PHP backend with MySQL transaction tables, database locks, asynchronous verification queues, retry handlers, and BBPS integration for robust bill settlements.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "BBPS", "Transaction Processing", "Cron Jobs"],
    architectureSteps: [
      { from: "Client Request", to: "Laravel API Controller", label: "Idempotent POST /pay" },
      { from: "Laravel API Controller", to: "MySQL DB", label: "Lock & Initiate Transaction" },
      { from: "Laravel API Controller", to: "BBPS Gateway", label: "External Provider Request" },
      { from: "BBPS Gateway", to: "Status Handler", label: "Webhook Callback / Polling" },
      { from: "Status Handler", to: "MySQL DB", label: "Update Status & Audit Log" },
    ],
    keyFeatures: [
      "Idempotent API endpoints preventing duplicate payment debits.",
      "Asynchronous cron job scheduler for status checks and failed transaction reconciliation.",
      "BBPS bill fetch and instant payment execution workflow.",
      "Detailed audit reporting and admin ledger tracking.",
    ],
    engineeringChallenges: [
      "Handling unexpected third-party gateway timeouts without leaving transactions in ambiguous states.",
      "Optimizing database locks on high-traffic MySQL ledger tables during peak recharge hours.",
    ],
    outcome: "Delivered a reliable transaction processing engine supporting multi-category bill payments and automated status verification.",
    status: "Production System",
    githubUrl: "https://github.com/anshumansomvanshi",
  },
  {
    slug: "bbps-integration",
    title: "BBPS Integration Infrastructure",
    category: "APIs",
    shortDescription: "Enterprise-grade integration of Bharat Bill Payment System (BBPS) capabilities into backend business platforms.",
    highlight: "Integrated Bharat Bill Payment System endpoints with custom authentication, payload encryption, error handling, and transaction logging.",
    problem: "Connecting legacy backend systems with national payment rails like BBPS demands compliance with strict security protocols, dynamic payload validation across 100+ biller categories, and precise error handling.",
    solution: "Designed a clean API adapter pattern layer in Laravel that abstracts BBPS bill fetch, payment validation, key rotation, and response parsing into standardized internal microservices.",
    technologies: ["BBPS", "API Integration", "Laravel", "PHP", "MySQL", "JWT Auth", "Error Handling"],
    architectureSteps: [
      { from: "App Interface", to: "Internal BBPS Adapter", label: "Unified Biller Schema" },
      { from: "Internal BBPS Adapter", to: "Auth & Signature Engine", label: "HMAC / Request Sign" },
      { from: "Auth & Signature Engine", to: "National BBPS Node", label: "Encrypted Payload" },
      { from: "National BBPS Node", to: "Response Normalizer", label: "Biller Status & Receipt" },
    ],
    keyFeatures: [
      "Dynamic Biller Metadata fetch and schema normalization.",
      "Automated payload signature generation and error mapping.",
      "Robust exception handling with user-friendly error codes.",
      "Real-time transaction status webhooks.",
    ],
    engineeringChallenges: [
      "Standardizing highly varied biller response structures into a single consistent JSON response format for client applications.",
    ],
    outcome: "Successfully enabled seamless bill payment capabilities across mobile and web interfaces with full BBPS compliance.",
    status: "Production Integration",
    githubUrl: "https://github.com/anshumansomvanshi",
  },
  {
    slug: "outreach-email-automation",
    title: "Outreach & Email Automation Platform",
    category: "Automation",
    shortDescription: "A SaaS-style outreach platform featuring Gmail OAuth integration, email sequence engines, automated synchronization, and background inbox parsers.",
    highlight: "Engineered background mail sync, OAuth token management, and multi-step automated email sequence engines.",
    problem: "Executing automated cold outreach requires maintaining token state for hundreds of connected email accounts, respecting provider sending limits, managing template variables, and processing incoming replies asynchronously.",
    solution: "Built a background sync engine with Laravel queue workers, Gmail API / SMTP connectors, OAuth token refreshing, scheduled sequence engines, and periodic database synchronization via cron jobs.",
    technologies: ["Gmail OAuth", "Laravel", "PHP", "MySQL", "Background Queues", "Cron Sync", "REST APIs"],
    architectureSteps: [
      { from: "User Interface", to: "OAuth Connector", label: "Authenticate Google Mail" },
      { from: "OAuth Connector", to: "Email Provider APIs", label: "Store Encrypted Tokens" },
      { from: "Sequence Engine", to: "Queue Worker Pool", label: "Schedule Outbound Mails" },
      { from: "Inbox Sync Cron", to: "MySQL DB", label: "Process Replies & Bounce Events" },
    ],
    keyFeatures: [
      "Gmail OAuth2 flow with automatic refresh token rotation.",
      "Multi-stage automated email drip campaign scheduler.",
      "Inbox synchronization service parsing replies, bounces, and unsubscribe events.",
      "File upload API for campaign attachments and dynamic merge tags.",
    ],
    engineeringChallenges: [
      "Preventing mail server rate-limit blocks by building intelligent rate-throttled queue dispatchers.",
    ],
    outcome: "Empowered automated communication campaigns with automated database sync and real-time inbox telemetry.",
    status: "Production SaaS Engine",
    githubUrl: "https://github.com/anshumansomvanshi",
  },
  {
    slug: "indi-token-blockchain",
    title: "INDI Token & Royalty Distributor Contract",
    category: "Web3",
    shortDescription: "A BEP-20 smart contract token ecosystem built on BNB Smart Chain Testnet with automated royalty distribution vault logic.",
    highlight: "Developed BEP-20 token contracts with custom royalty distribution and Web3 wallet integration.",
    problem: "Distributing token rewards and royalties transparently on EVM blockchains requires gas-efficient Solidity code, access control management, and seamless Web3 frontend wallet interactions.",
    solution: "Authored OpenZeppelin-standard BEP-20 token smart contracts along with a dedicated distributor contract on BSC Testnet featuring wallet balance verification and automated dividend distribution logic.",
    technologies: ["Solidity", "BEP-20", "BSC Testnet", "Smart Contracts", "Web3.js", "Wallet Integration"],
    architectureSteps: [
      { from: "Web3 Wallet", to: "Web3 Application UI", label: "Connect MetaMask" },
      { from: "Web3 Application UI", to: "Smart Contract RPC", label: "Read / Write Transactions" },
      { from: "Smart Contract RPC", to: "INDI Token", label: "Transfer & Allowance" },
      { from: "INDI Token", to: "Distributor Vault", label: "Royalty Distribution Logic" },
    ],
    keyFeatures: [
      "BEP-20 compliant token contract deployed on BSC Testnet.",
      "Dedicated distributor contract for executing royalty payouts to eligible holders.",
      "Web3 frontend integration enabling one-click token addition and wallet interaction.",
    ],
    engineeringChallenges: [
      "Optimizing Solidity loop execution inside the distributor contract to prevent out-of-gas errors during batch transfers.",
    ],
    outcome: "Successfully deployed and tested smart contract architecture for token issuance and decentralized royalty distribution.",
    status: "BSC Testnet Deployment",
    githubUrl: "https://github.com/anshumansomvanshi",
  },
  {
    slug: "ai-price-comparison-agent",
    title: "AI Price Comparison & Extraction Agent",
    category: "AI",
    shortDescription: "An AI agent architecture designed to extract, normalize, and compare real-time product prices across quick-commerce platforms.",
    highlight: "Designed an AI-driven agent pipeline capable of cross-platform product matching and price normalization.",
    problem: "Product schemas and availability vary significantly across quick-commerce platforms like Blinkit, Zepto, and BigBasket, making real-time price comparisons challenging for standard scrapers.",
    solution: "Designed an AI agent framework that ingests raw search queries, retrieves structured platform endpoints, normalizes product units (e.g. 500g vs 1kg), and ranks optimal purchasing choices.",
    technologies: ["AI Agents", "Python / Node Engine", "REST APIs", "Data Normalization", "Comparison Logic"],
    architectureSteps: [
      { from: "User Query", to: "AI Intent Agent", label: "Parse Product Intent" },
      { from: "AI Intent Agent", to: "Data Extraction Services", label: "Parallel Platform Fetch" },
      { from: "Data Extraction Services", to: "Normalization Engine", label: "Unit & Price Standardizer" },
      { from: "Normalization Engine", to: "Comparison Ranker", label: "Evaluate Best Option" },
      { from: "Comparison Ranker", to: "User UI", label: "Structured Price Matrix" },
    ],
    keyFeatures: [
      "Multi-platform product search normalization.",
      "Unit-price (per 100g / per item) conversion engine.",
      "Structured JSON response outputs for instant UI rendering.",
    ],
    engineeringChallenges: [
      "Creating robust fuzzy-matching logic to identify identical products despite slight title discrepancies across platforms.",
    ],
    outcome: "Demonstrated an intelligent automated system concept for automated retail price intelligence.",
    status: "AI System Concept",
    githubUrl: "https://github.com/anshumansomvanshi",
  },
  {
    slug: "ai-product-image-generator",
    title: "AI Product Image Generation Studio",
    category: "AI",
    shortDescription: "An AI-powered product photography platform converting basic product inputs into studio-grade marketing visual assets.",
    highlight: "Built automated AI workflows for background removal, scene composition, and high-resolution product showcase generation.",
    problem: "Ecommerce brands spend substantial resources on product photography shoots across varying backgrounds and thematic contexts.",
    solution: "Engineered an AI image synthesis pipeline that takes raw product photos, segments the foreground subject, applies contextual background diffusion prompts, and renders marketing visuals.",
    technologies: ["Generative AI", "Image Processing Pipelines", "Next.js", "REST APIs", "Prompt Engineering"],
    architectureSteps: [
      { from: "Product Image Input", to: "Subject Segmenter", label: "Foreground Cutout" },
      { from: "Subject Segmenter", to: "Diffusion Generation Engine", label: "Contextual Scene Generation" },
      { from: "Diffusion Generation Engine", to: "Post-Processing Pipeline", label: "Blend & Color Match" },
      { from: "Post-Processing Pipeline", to: "Studio Output", label: "High-Res Marketing Asset" },
    ],
    keyFeatures: [
      "Automated product subject foreground isolation.",
      "Preset studio themes (Modern Minimalist, Vibrant Gradient, Tech Dark).",
      "High-resolution canvas exporter.",
    ],
    engineeringChallenges: [
      "Ensuring sharp edge preservation and realistic shadows during automated AI scene compositing.",
    ],
    outcome: "Created a functional AI image creation workflow for rapid product presentation visuals.",
    status: "AI Capability Prototype",
    githubUrl: "https://github.com/anshumansomvanshi",
  },
];

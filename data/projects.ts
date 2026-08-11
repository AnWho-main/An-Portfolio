export interface Project {
  slug: string;
  title: string;
  group: "Professional Projects" | "Completed Personal Projects" | "Currently Building";
  category: string;
  status: "COMPLETED" | "IN PROGRESS" | "EXPERIMENT" | "CONCEPT";
  progressVisual?: string;
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
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  // 1. PROFESSIONAL PROJECTS
  {
    slug: "influencer-outreach-platform",
    title: "Influencer Discovery & Outreach Platform",
    group: "Professional Projects",
    category: "Professional",
    status: "COMPLETED",
    shortDescription:
      "Influencer Discovery SaaS featuring an Outreach Module with email integration, templates, sequences, synchronization, and Redis queue scrapers.",
    highlight:
      "Led backend development of outreach sequences, OAuth token management, and Redis queue-based scraper services at Viral Pitch.",
    problem:
      "Managing cold email outreach across multiple influencer campaigns requires reliable email account synchronization, template variables, rate-limit throttling, and continuous data scraping.",
    solution:
      "Engineered a queue-driven Laravel backend with Redis scraper workers, Gmail OAuth authentication flow, email drip campaign schedulers, and reply parsing webhooks.",
    technologies: ["Laravel", "PHP", "MySQL", "Redis", "Gmail OAuth", "REST APIs", "Queues"],
    architectureSteps: [
      { from: "User Interface", to: "OAuth Connector", label: "Gmail Account Auth" },
      { from: "Sequence Engine", to: "Redis Queue Pool", label: "Schedule Outbound Mails" },
      { from: "Redis Scraper", to: "Data Parser", label: "Extract Influencer Metrics" },
      { from: "Data Parser", to: "MySQL Database", label: "Store Normalized Profile" },
    ],
    keyFeatures: [
      "Outreach Module with automated email sequences, templates, and mail sync.",
      "Gmail OAuth2 integration with automatic token refreshing.",
      "Redis + queue-based Scraper Module for asynchronous data processing.",
      "Scalable REST APIs for influencer search and campaign workflows.",
    ],
    engineeringChallenges: [
      "Preventing email provider rate limits by constructing adaptive rate-throttled queue dispatchers.",
    ],
    outcome:
      "Successfully built and deployed scalable backend services and outreach automation modules for Viral Pitch.",
  },
  {
    slug: "hotel-booking-vip-easemydeal",
    title: "Hotel Booking & Go-VIP Services",
    group: "Professional Projects",
    category: "Professional",
    status: "COMPLETED",
    shortDescription:
      "High-concurrency backend RESTful APIs for Hotel Booking and Go-VIP services on the EaseMyDeal application.",
    highlight:
      "Engineered performant backend endpoints and booking transaction handlers at EaseMyDeal.",
    problem:
      "Travel and VIP subscription booking services require fast response times, idempotent transaction validation, and secure API gateways under high user traffic.",
    solution:
      "Developed modular REST APIs in Laravel and CodeIgniter with optimized database schema queries, caching layers, and transaction safety controls.",
    technologies: ["Laravel", "PHP", "CodeIgniter", "MySQL", "REST APIs", "Caching"],
    architectureSteps: [
      { from: "Mobile / Web App", to: "API Gateway", label: "POST /booking/initiate" },
      { from: "API Gateway", to: "Booking Service", label: "Validate Availability & Rate" },
      { from: "Booking Service", to: "MySQL Database", label: "Lock & Reserve Inventory" },
      { from: "Booking Service", to: "Response Handler", label: "Return Instant Confirmation" },
    ],
    keyFeatures: [
      "RESTful API architecture for mobile and web client platforms.",
      "Hotel Booking engine integrated into the EaseMyDeal platform.",
      "Go-VIP premium service backend workflows.",
      "High-performance query optimization and data security controls.",
    ],
    engineeringChallenges: [
      "Maintaining low API latencies during peak booking hours while ensuring zero transactional double-bookings.",
    ],
    outcome:
      "Delivered reliable Hotel Booking and Go-VIP backend services for EaseMyDeal users.",
    demoUrl: "https://www.easemydeal.com/hotel-booking",
  },
  {
    slug: "recharge-bill-payment",
    title: "Recharge & Bill Payment Infrastructure (BBPS)",
    group: "Professional Projects",
    category: "Professional",
    status: "COMPLETED",
    shortDescription:
      "High-throughput transaction backend handling utility recharges, bill payments, BBPS integration, and automated status reconciliation.",
    highlight:
      "Built core payment and recharge transaction logic with BBPS national payment rails.",
    problem:
      "Utility payment platforms require zero-downtime execution, automatic rollback mechanisms for failed vendor calls, and audit-proof ledger tracking.",
    solution:
      "Engineered idempotent transaction pipelines in Laravel with database locks, BBPS bill fetch connectors, and automated background reconciliation jobs.",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "BBPS", "Cron Jobs"],
    architectureSteps: [
      { from: "Client Request", to: "Payment API Controller", label: "Idempotent POST /pay" },
      { from: "Payment API Controller", to: "MySQL DB", label: "Lock Ledger Transaction" },
      { from: "Payment API Controller", to: "BBPS Gateway", label: "Execute Settlement" },
      { from: "BBPS Gateway", to: "Status Scheduler", label: "Verify Receipt & Callback" },
    ],
    keyFeatures: [
      "Idempotent API endpoints preventing duplicate payment debits.",
      "Bharat Bill Payment System (BBPS) integration layer.",
      "Asynchronous cron jobs for failed transaction reconciliation.",
    ],
    engineeringChallenges: [
      "Handling ambiguous gateway timeouts gracefully without compromising transaction audit trails.",
    ],
    outcome:
      "Delivered production payment and recharge processing infrastructure for EaseMyDeal.",
  },
  {
    slug: "web3-dapp-decentralized",
    title: "Web3 & Decentralized Application",
    group: "Professional Projects",
    category: "Professional",
    status: "COMPLETED",
    shortDescription:
      "Decentralized Web3 platform supporting token transactions, cryptocurrency deposit and withdrawal workflows, and member/admin portals.",
    highlight:
      "Contributed to Web3 projects including DApps and blockchain-based solutions at Digiature Technology.",
    problem:
      "Integrating traditional web applications with cryptocurrency transactions requires secure wallet connectors, event listeners, and three-part portal architecture.",
    solution:
      "Built a three-tiered architecture (main website, member portal, admin panel) integrated with Web3.js, EVM smart contracts, and automated deposit/withdrawal handlers.",
    technologies: ["Web3.js", "Solidity", "BEP-20", "PHP", "Laravel", "MySQL"],
    architectureSteps: [
      { from: "Web3 Wallet", to: "Member Dashboard", label: "Connect MetaMask" },
      { from: "Member Dashboard", to: "Smart Contract RPC", label: "Deposit / Withdraw Tx" },
      { from: "Smart Contract RPC", to: "Admin Panel", label: "Verify On-Chain Status" },
    ],
    keyFeatures: [
      "Cryptocurrency deposit and withdrawal transaction workflows.",
      "Three-part architecture: Public Website, Member Panel, Admin Panel.",
      "BEP-20 token smart contract interactions and wallet verification.",
    ],
    engineeringChallenges: [
      "Ensuring real-time synchronization between on-chain transaction events and off-chain database ledgers.",
    ],
    outcome:
      "Successfully launched decentralized Web3 application portals for cryptocurrency interactions.",
  },

  // 2. CURRENTLY BUILDING / IN PROGRESS
  {
    slug: "ai-agents-automation",
    title: "AI Agents & Autonomous Automation",
    group: "Currently Building",
    category: "AI / Automation",
    status: "IN PROGRESS",
    progressVisual: "●●●○○",
    shortDescription:
      "Building AI-powered agents designed to automate tasks, interact with external services and solve real-world workflows.",
    highlight:
      "Developing autonomous multi-step AI agents with tool-calling capabilities and API integration pipelines.",
    problem:
      "Repetitive digital tasks and multi-step data extractions require intelligent agents capable of reasoning, calling APIs, and executing structured workflows automatically.",
    solution:
      "Engineering an agent framework that connects LLM reasoning engines with custom toolkits (web scrapers, REST APIs, JSON normalizers) for task automation.",
    technologies: ["AI Agents", "Python", "Node.js", "REST APIs", "OpenAI", "Automation"],
    architectureSteps: [
      { from: "User Task Request", to: "AI Agent Reasoner", label: "Decompose Task Intent" },
      { from: "AI Agent Reasoner", to: "Tool Execution Layer", label: "Call REST API / Scraper" },
      { from: "Tool Execution Layer", to: "Response Evaluator", label: "Verify Result Quality" },
      { from: "Response Evaluator", to: "User Dashboard", label: "Return Structured Output" },
    ],
    keyFeatures: [
      "Autonomous tool-calling and API execution logic.",
      "Multi-step task decomposition and status tracking.",
      "Extensible connector interface for external web services.",
    ],
    engineeringChallenges: [
      "Handling unexpected agent tool errors gracefully with automatic retry and self-correction loops.",
    ],
    outcome:
      "Active engineering project focused on practical AI task automation workflows.",
  },
  {
    slug: "ai-price-comparison-agent",
    title: "AI Price Comparison Agent",
    group: "Currently Building",
    category: "AI / Experiment",
    status: "EXPERIMENT",
    progressVisual: "●●○○○",
    shortDescription:
      "Exploring an AI-powered price comparison agent capable of collecting, comparing and presenting product prices across multiple platforms.",
    highlight:
      "Experimental AI agent pipeline parsing and normalizing grocery & ecommerce items across quick-commerce apps.",
    problem:
      "Product schemas, unit quantities (e.g. 500g vs 1kg), and search endpoints vary across platforms like Blinkit, Zepto, and BigBasket, preventing direct price comparison.",
    solution:
      "Building an AI agent prototype that ingests product queries, fetches parallel platform data, converts units to standard base rates, and ranks optimal deals.",
    technologies: ["AI Agents", "Data Normalization", "REST APIs", "Node.js", "Python"],
    architectureSteps: [
      { from: "Product Query", to: "Intent Normalizer", label: "Standardize Search Term" },
      { from: "Intent Normalizer", to: "Platform Scrapers", label: "Parallel Endpoint Fetch" },
      { from: "Platform Scrapers", to: "Unit Conversion Engine", label: "Normalize Rate (per 100g)" },
      { from: "Unit Conversion Engine", to: "Comparison Matrix", label: "Rank Best Value" },
    ],
    keyFeatures: [
      "Cross-platform product price comparison concept.",
      "Automated unit-price conversion and rate normalization.",
      "Structured comparison matrix generation.",
    ],
    engineeringChallenges: [
      "Matching non-identical product titles accurately across competing catalog schemas.",
    ],
    outcome:
      "Experimental prototype demonstrating automated retail price intelligence.",
  },
  {
    slug: "ai-product-image-generator",
    title: "AI Product Image Generation",
    group: "Currently Building",
    category: "AI / Generative",
    status: "IN PROGRESS",
    progressVisual: "●●●○○",
    shortDescription:
      "Exploring AI-powered product image generation for creating professional visual assets from product information and product imagery.",
    highlight:
      "Developing background synthesis and studio asset generation workflows for ecommerce product categories.",
    problem:
      "Ecommerce brands need high-quality product photography across various lifestyle settings without expensive physical photo shoots.",
    solution:
      "Building an image processing workflow that isolates product subjects, applies contextual background diffusion models, and renders marketing imagery.",
    technologies: ["Generative AI", "Next.js", "Image Processing", "REST APIs", "Prompt Design"],
    architectureSteps: [
      { from: "Raw Product Photo", to: "Subject Segmenter", label: "Isolate Foreground Product" },
      { from: "Subject Segmenter", to: "AI Diffusion Model", label: "Generate Contextual Scene" },
      { from: "AI Diffusion Model", to: "Asset Studio", label: "Render Studio Visual" },
    ],
    keyFeatures: [
      "Targeted product categories: Smartphones, Earbuds, Accessories, Ecommerce items.",
      "Automated product subject foreground isolation.",
      "Preset studio background styles.",
    ],
    engineeringChallenges: [
      "Maintaining razor-sharp subject edges and lighting consistency during AI background synthesis.",
    ],
    outcome:
      "In-progress exploration of generative AI applications for commercial product visual assets.",
  },

  // 3. COMPLETED PERSONAL / PREVIOUS PROJECTS
  {
    slug: "education-system-udrcnet",
    title: "Education System Software (UDRCNET)",
    group: "Completed Personal Projects",
    category: "Completed Personal",
    status: "COMPLETED",
    shortDescription:
      "Education platform featuring interactive book reviews, user feedback and ranking functionality.",
    highlight:
      "Personal project (UDRCNET.org) built with Laravel and MySQL for interactive educational content and reviews.",
    problem:
      "Educational resources needed a centralized hub where students could access materials, submit structured book reviews, and rank quality content.",
    solution:
      "Developed a full Laravel web application featuring user authentication, book cataloging, review submissions, and automated ranking algorithms.",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    architectureSteps: [
      { from: "User Interface", to: "Laravel Controller", label: "Submit Review / Rating" },
      { from: "Laravel Controller", to: "Ranking Calculator", label: "Compute Weighted Rank" },
      { from: "Ranking Calculator", to: "MySQL Database", label: "Update Book Statistics" },
    ],
    keyFeatures: [
      "Interactive book review submission and comment threads.",
      "Automated weighted book ranking system based on user feedback.",
      "Responsive user dashboard and search filters.",
    ],
    engineeringChallenges: [
      "Designing a fast ranking calculation query that updates dynamically as review scores accumulate.",
    ],
    outcome:
      "Completed personal freelancing platform delivering interactive education resource management.",
    demoUrl: "https://udrcnet.org/",
  },
  {
    slug: "ecommerce-zyrohealthcare",
    title: "Healthcare E-Commerce Platform (Zyro Healthcare)",
    group: "Completed Personal Projects",
    category: "Completed Personal",
    status: "COMPLETED",
    shortDescription:
      "Full e-commerce platform with admin panel, user dashboard, product management, payments, inventory and order tracking.",
    highlight:
      "Built full-featured e-commerce system (zyrohealthcare.com) with payment gateway integration and order tracking.",
    problem:
      "Healthcare products require structured catalog navigation, inventory stock locks, payment checkout, and live order status tracking.",
    solution:
      "Architected an end-to-end e-commerce solution on Laravel with custom shopping cart, payment gateway checkout, order status state machine, and admin portal.",
    technologies: ["Laravel", "PHP", "MySQL", "Payment Gateway", "JavaScript"],
    architectureSteps: [
      { from: "Shopping Cart", to: "Payment Gateway", label: "Initiate Checkout" },
      { from: "Payment Gateway", to: "Order State Engine", label: "Verify Payment Webhook" },
      { from: "Order State Engine", to: "Admin & User Dashboard", label: "Track Inventory & Order" },
    ],
    keyFeatures: [
      "Comprehensive product catalog and inventory management.",
      "Payment gateway integration for online purchases.",
      "User dashboard with real-time order tracking.",
      "Super Admin management portal for sales and stock management.",
    ],
    engineeringChallenges: [
      "Handling concurrent cart checkout requests while preserving accurate inventory stock balances.",
    ],
    outcome:
      "Completed full-stack healthcare e-commerce platform with production checkout capabilities.",
    demoUrl: "https://zyrohealthcare.com",
  },
  {
    slug: "multi-admin-management",
    title: "Multi-Admin Management System",
    group: "Completed Personal Projects",
    category: "Completed Personal",
    status: "COMPLETED",
    shortDescription:
      "Laravel-based multi-admin platform with role-based access control, permissions and Super Admin management.",
    highlight:
      "Implemented modular RBAC (Role-Based Access Control) architecture using Laravel MVC, middleware, and database migrations.",
    problem:
      "Enterprise admin applications need granular permission enforcement across multiple user tiers (Super Admin, Manager, Editor) to protect sensitive data.",
    solution:
      "Built a robust permission engine with custom Laravel middleware, role permission matrices, database seeders, and transactional activity logging.",
    technologies: ["Laravel", "PHP", "MySQL", "RBAC", "Middleware"],
    architectureSteps: [
      { from: "HTTP Request", to: "Role Middleware", label: "Check User Permission" },
      { from: "Role Middleware", to: "Admin Controller", label: "Authorize Action" },
      { from: "Admin Controller", to: "Audit Logger", label: "Record Admin Transaction" },
    ],
    keyFeatures: [
      "Granular Role-Based Access Control (RBAC).",
      "Super Admin management portal with full permission assignment.",
      "Custom Laravel middleware protecting restricted route groups.",
      "Transactional administrative audit logging.",
    ],
    engineeringChallenges: [
      "Creating a dynamic permission check system that avoids duplicate SQL queries per request.",
    ],
    outcome:
      "Completed reusable multi-admin framework for enterprise web software.",
  },
  {
    slug: "decentralized-application-web3",
    title: "Decentralized Application (DApp)",
    group: "Completed Personal Projects",
    category: "Completed Personal",
    status: "COMPLETED",
    shortDescription:
      "Web3 application with website, member panel and admin panel supporting cryptocurrency deposit and withdrawal workflows.",
    highlight:
      "Developed Web3 DApp with wallet connections, contract handlers, and cryptocurrency transaction management.",
    problem:
      "Crypto member platforms require transparent deposit verification, automated balance updating, and secure administrative payout controls.",
    solution:
      "Constructed a three-tier Web3 DApp connecting Web3.js with Laravel backends to manage member deposits, withdrawal requests, and transaction logs.",
    technologies: ["Web3", "Blockchain", "PHP", "Laravel", "MySQL"],
    architectureSteps: [
      { from: "MetaMask Wallet", to: "DApp Frontend", label: "Sign Transaction" },
      { from: "DApp Frontend", to: "Web3 Service", label: "Broadcast Tx to Blockchain" },
      { from: "Web3 Service", to: "Admin Verification", label: "Log Deposit & Payout" },
    ],
    keyFeatures: [
      "Web3 wallet integration for seamless user authentication.",
      "Cryptocurrency deposit and withdrawal transaction processing.",
      "Dedicated Member Dashboard and Super Admin control panel.",
    ],
    engineeringChallenges: [
      "Verifying block confirmations before marking member deposit requests as completed.",
    ],
    outcome:
      "Completed Web3 DApp architecture for cryptocurrency deposit and withdrawal workflows.",
  },
  {
    slug: "network-marketing-platform",
    title: "Network Marketing Platform",
    group: "Completed Personal Projects",
    category: "Completed Personal",
    status: "COMPLETED",
    shortDescription:
      "Multi-level marketing platform for managing sales, commissions, network growth and administrative operations.",
    highlight:
      "Designed commission calculation trees and network hierarchy management software.",
    problem:
      "Multi-level referral architectures require complex tree data processing, accurate commission calculations, and automated payout calculations.",
    solution:
      "Engineered relational database algorithms in PHP / Laravel to traverse referral hierarchies, compute multi-tier bonuses, and generate payout reports.",
    technologies: ["PHP", "Laravel", "MySQL", "Tree Algorithms"],
    architectureSteps: [
      { from: "New Referral Sale", to: "Tree Traverser", label: "Identify Upline Nodes" },
      { from: "Tree Traverser", to: "Commission Calculator", label: "Compute Tiered Payouts" },
      { from: "Commission Calculator", to: "Ledger DB", label: "Credit Member Wallets" },
    ],
    keyFeatures: [
      "Multi-level network tree visualization and hierarchy tracking.",
      "Automated commission and bonus calculation engine.",
      "Member wallet payouts and administrative sales reporting.",
    ],
    engineeringChallenges: [
      "Optimizing deep recursive database queries when calculating commissions across large referral networks.",
    ],
    outcome:
      "Completed network marketing management software.",
  },
];

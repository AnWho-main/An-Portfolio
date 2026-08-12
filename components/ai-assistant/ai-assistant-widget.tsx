"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Sparkles,
  Send,
  User,
  ArrowRight,
  Trash2,
  ShieldCheck,
  CreditCard,
  Code2,
  Briefcase,
  FolderGit2,
  Mail,
  FileText,
  ExternalLink,
  Cpu,
  GraduationCap,
  Search,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";

interface QuickAction {
  label: string;
  link: string;
  external?: boolean;
}

interface QuestionAnswer {
  id: string;
  q: string;
  a: string;
  category: "Featured" | "Fintech & Security" | "Experience" | "Projects" | "Tech Stack" | "AI & Web3" | "Education" | "Contact";
  quickAction?: QuickAction;
  followUps?: string[];
  keywords: string[];
}

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  quickAction?: QuickAction;
  followUps?: string[];
}

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "All", icon: Sparkles },
    { name: "Fintech & Security", icon: ShieldCheck },
    { name: "Experience", icon: Briefcase },
    { name: "Projects", icon: FolderGit2 },
    { name: "Tech Stack", icon: Code2 },
    { name: "AI & Web3", icon: Cpu },
    { name: "Contact", icon: Mail },
  ];

  const knowledgeBase: QuestionAnswer[] = [
    {
      id: "juspay-tokenization",
      q: "Tell me about your Juspay RBI Card Tokenization work",
      a: "Anshuman is currently engineering Juspay Credit Card Tokenization compliance following Reserve Bank of India (RBI) guidelines. This involves building secure Card-on-File (CoF) tokenization pipelines, replacing raw sensitive card numbers with cryptographic tokens, enforcing PCI-DSS compliance, and securing high-throughput payment processing gateways.",
      category: "Fintech & Security",
      quickAction: { label: "View Experience", link: "#experience" },
      followUps: [
        "What other fintech and payment systems have you built?",
        "What technologies do you use for backend security?",
      ],
      keywords: ["juspay", "tokenization", "rbi", "credit card", "card", "payment", "pci", "cof", "fintech", "security"],
    },
    {
      id: "current-role",
      q: "Where do you currently work?",
      a: "Anshuman works as a Software Engineer at Telgoo5 in Noida, India. He contributes to Billing and Fiber Management Systems, telecom operational workflows, service lifecycle management, and high-performance RESTful API microservices.",
      category: "Experience",
      quickAction: { label: "Explore Telgoo5 Role", link: "#experience" },
      followUps: [
        "What is your overall professional background?",
        "Tell me about your Juspay RBI Card Tokenization work",
      ],
      keywords: ["telgoo5", "current", "work", "job", "company", "role", "noida", "telecom", "billing"],
    },
    {
      id: "experience-summary",
      q: "What is your professional experience summary?",
      a: "Anshuman has 3+ years of software engineering experience across Telgoo5 (CURRENT - Billing & Fiber Systems), Viral Pitch (Influencer Discovery & Redis scraper queues), EaseMyDeal (GroundBreaker Award 2024 - Hotel Booking & BBPS), Digiature Technology (Web3 DApps), and Arudan Technologies.",
      category: "Experience",
      quickAction: { label: "View Full Experience", link: "#experience" },
      followUps: [
        "What did you build at EaseMyDeal?",
        "What were your achievements at Viral Pitch?",
      ],
      keywords: ["experience", "background", "summary", "years", "career", "history", "companies"],
    },
    {
      id: "easemydeal-award",
      q: "What did you build at EaseMyDeal?",
      a: "At EaseMyDeal (Inditab Esolutions), Anshuman developed core backend REST APIs for Hotel Booking and Go-VIP services. He optimized transaction safety, BBPS integrations, and query performance—winning the prestigious GroundBreaker Award (2024) with the IT team for technical impact.",
      category: "Fintech & Security",
      quickAction: { label: "GroundBreaker Award 2024", link: "#education-achievements" },
      followUps: [
        "Tell me about your Juspay RBI Card Tokenization work",
        "Which projects have live links?",
      ],
      keywords: ["easemydeal", "award", "groundbreaker", "hotel", "booking", "bbps", "govip", "inditab", "payments"],
    },
    {
      id: "viral-pitch-outreach",
      q: "What were your achievements at Viral Pitch?",
      a: "Led backend engineering for an Influencer Discovery & Outreach SaaS platform. Engineered Gmail OAuth2 email synchronization with token auto-refresh & rate throttling, plus a high-throughput Redis worker queue scraper module for asynchronous data ingestion.",
      category: "Experience",
      quickAction: { label: "View Experience", link: "#experience" },
      followUps: [
        "What technologies and frameworks do you specialize in?",
        "Tell me about your AI & Web3 projects",
      ],
      keywords: ["viral pitch", "influencer", "outreach", "redis", "queues", "gmail", "oauth", "scraper"],
    },
    {
      id: "live-projects",
      q: "Which of your projects have live links?",
      a: "Live production platforms include EaseMyDeal Hotel Booking (easemydeal.com/hotel-booking), UDRCNET Education Software (udrcnet.org), and Zyro Healthcare E-Commerce (zyrohealthcare.com). Repositories and AI agent tools are available on GitHub (github.com/AnWho-main).",
      category: "Projects",
      quickAction: { label: "View Live Projects", link: "/projects" },
      followUps: [
        "What technologies do you use for backend development?",
        "Tell me about your AI & Web3 projects",
      ],
      keywords: ["live", "projects", "links", "udrcnet", "zyro", "easemydeal", "website", "apps", "github"],
    },
    {
      id: "tech-stack",
      q: "What technologies and frameworks do you specialize in?",
      a: "Core stack: PHP, Laravel, Node.js, Next.js 14, React.js, CodeIgniter, MySQL, Redis, REST APIs, AI Tool-Calling Agent Frameworks, Solidity (BEP-20 Web3 smart contracts), Git, and GitHub Actions.",
      category: "Tech Stack",
      quickAction: { label: "Explore Skills Matrix", link: "#skills" },
      followUps: [
        "How do you handle API performance and backend scaling?",
        "Tell me about your AI & Web3 projects",
      ],
      keywords: ["tech", "stack", "technologies", "laravel", "php", "node", "nextjs", "react", "mysql", "redis", "solidity"],
    },
    {
      id: "ai-web3-work",
      q: "Tell me about your AI & Web3 projects",
      a: "AI: Custom tool-calling AI agent frameworks, automated price comparison normalizers, and generative asset pipelines. Web3: BEP-20 token contracts in Solidity, MetaMask wallet integrations, and DApp admin portals built during his time at Digiature Technology.",
      category: "AI & Web3",
      quickAction: { label: "View Engineering Projects", link: "/projects" },
      followUps: [
        "What technologies and frameworks do you specialize in?",
        "Which of your projects have live links?",
      ],
      keywords: ["ai", "web3", "agents", "solidity", "bep-20", "smart contracts", "blockchain", "dapp", "metamask"],
    },
    {
      id: "education-bg",
      q: "What is your educational background?",
      a: "Anshuman graduated with a Bachelor of Technology (B.Tech) in Computer Science & Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU, Lucknow) with a distinguished 82.2% score.",
      category: "Education",
      quickAction: { label: "View Education Details", link: "#education-achievements" },
      followUps: [
        "What is your professional experience summary?",
        "How can I contact or hire Anshuman?",
      ],
      keywords: ["education", "degree", "btech", "computer science", "aktu", "university", "college", "gpa", "score"],
    },
    {
      id: "contact-hire",
      q: "How can I contact or hire Anshuman?",
      a: "You can send a direct message via the portfolio Contact Form, email him at anshuman357main@gmail.com, or connect on LinkedIn (linkedin.com/in/anshuman-singh-somvanshi-4a150b1bb) or GitHub (github.com/AnWho-main).",
      category: "Contact",
      quickAction: { label: "Open Contact Form", link: "/contact" },
      followUps: [
        "Can I download Anshuman's resume?",
        "Tell me about your Juspay RBI Card Tokenization work",
      ],
      keywords: ["contact", "hire", "email", "linkedin", "github", "reach", "message", "phone"],
    },
    {
      id: "resume-download",
      q: "Can I download Anshuman's resume?",
      a: "Yes! You can view or download Anshuman's verified Software Engineer resume directly in PDF format.",
      category: "Featured",
      quickAction: { label: "📄 Download Resume PDF", link: "/resume/anshuman-singh-somvanshi-resume.pdf", external: true },
      followUps: [
        "What is your professional experience summary?",
        "What technologies and frameworks do you specialize in?",
      ],
      keywords: ["resume", "cv", "pdf", "download", "bio", "profile"],
    },
    {
      id: "api-performance",
      q: "How do you handle API performance and backend scaling?",
      a: "Anshuman leverages Redis queue workers for asynchronous tasks, OAuth token refresh limiters, database query indexing in MySQL/PostgreSQL, modular service architecture, and lightweight RESTful payloads to ensure low latency and high availability.",
      category: "Tech Stack",
      followUps: [
        "Tell me about your achievements at Viral Pitch?",
        "What technologies and frameworks do you specialize in?",
      ],
      keywords: ["api", "performance", "scaling", "backend", "redis", "mysql", "architecture", "database"],
    },
  ];

  // Scroll chat window to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSelectQA = (qa: QuestionAnswer) => {
    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: qa.q,
      timestamp: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: qa.a,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickAction: qa.quickAction,
        followUps: qa.followUps,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleSendCustomText = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    if (!textToSend) {
      setInputText("");
    }

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Fuzzy matching against knowledge base
    const lowerQuery = query.toLowerCase();
    const matchedQA = knowledgeBase.find((item) =>
      item.keywords.some((kw) => lowerQuery.includes(kw)) ||
      item.q.toLowerCase().includes(lowerQuery)
    );

    setTimeout(() => {
      let botMsg: ChatMessage;

      if (matchedQA) {
        botMsg = {
          id: `b-${Date.now()}`,
          sender: "bot",
          text: matchedQA.a,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          quickAction: matchedQA.quickAction,
          followUps: matchedQA.followUps,
        };
      } else {
        botMsg = {
          id: `b-${Date.now()}`,
          sender: "bot",
          text: `I couldn't find an exact answer for "${query}", but I can tell you about Anshuman's current role at Telgoo5, EaseMyDeal award, projects, or core tech stack! Choose one of the prompts below:`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          followUps: [
            "What is your professional experience summary?",
            "Which of your projects have live links?",
            "What technologies and frameworks do you specialize in?",
          ],
        };
      }

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const filteredQuestions =
    activeCategory === "All"
      ? knowledgeBase
      : knowledgeBase.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-slate-900/90 dark:bg-bg-card/95 border border-indigo-500/40 dark:border-accent-primary/40 text-white dark:text-txt-main shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_35px_rgba(79,70,229,0.45)] backdrop-blur-md transition-all duration-300 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-accent-primary dark:to-cyan-400 text-white dark:text-bg-dark font-bold shadow-sm">
            <Bot className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
          </div>
          <div className="text-left font-mono leading-tight">
            <div className="text-xs font-bold tracking-tight text-white dark:text-txt-main flex items-center gap-1.5">
              <span>AS² AI Assistant</span>
              <Sparkles className="w-3 h-3 text-amber-400 animate-spin-slow" />
            </div>
            <div className="text-[10px] text-indigo-200/80 dark:text-txt-subtle font-sans">Ask About My Work</div>
          </div>
        </motion.button>
      </div>

      {/* Assistant Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            className="fixed bottom-24 right-3 sm:right-6 z-50 w-[94vw] sm:w-[430px] bg-white/95 dark:bg-bg-card/95 backdrop-blur-xl border border-indigo-200/60 dark:border-border-dark rounded-3xl shadow-[0_25px_60px_rgba(15,23,42,0.25)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col h-[580px] max-h-[82vh]"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900 text-white dark:bg-bg-surface dark:text-txt-main border-b border-indigo-900/40 dark:border-border-dark flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-400 dark:text-accent-primary">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-mono text-xs font-bold tracking-wider uppercase text-white dark:text-txt-main">
                      AS² AI ENGINEER ASSISTANT
                    </h4>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      LIVE
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-300 dark:text-txt-subtle font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Local Engineering Knowledge Base</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={handleClearChat}
                    title="Clear Conversation"
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 dark:hover:bg-bg-elevated transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-txt-main hover:bg-slate-800 dark:hover:bg-bg-elevated transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Pills Filter */}
            <div className="px-3 py-2 bg-slate-50 dark:bg-bg-surface/80 border-b border-slate-200/80 dark:border-border-dark flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-mono whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border ${
                      isActive
                        ? "bg-indigo-600 text-white dark:bg-accent-primary dark:text-bg-dark border-indigo-600 font-bold shadow-sm"
                        : "bg-white dark:bg-bg-elevated text-slate-600 dark:text-txt-muted border-slate-200 dark:border-border-dark hover:border-indigo-400/50"
                    }`}
                  >
                    <IconComponent className="w-3 h-3" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Chat Body Thread */}
            <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs font-sans">
              {messages.length === 0 ? (
                <div className="space-y-4 py-2">
                  <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-accent-primary/10 border border-indigo-100 dark:border-accent-primary/20 text-slate-800 dark:text-txt-main space-y-2">
                    <div className="flex items-center gap-2 font-mono font-bold text-indigo-700 dark:text-accent-primary text-xs">
                      <Sparkles className="w-4 h-4" />
                      <span>Welcome! Ask me anything about Anshuman</span>
                    </div>
                    <p className="text-[11.5px] leading-relaxed text-slate-600 dark:text-txt-muted">
                      Select a prompt category above or type a custom question below to query Anshuman&apos;s background, Telgoo5 role, projects, and tech stack.
                    </p>
                  </div>

                  <div className="text-[10px] font-mono font-bold text-slate-400 dark:text-txt-subtle uppercase tracking-wider px-1 pt-1">
                    Recommended Prompts ({filteredQuestions.length}):
                  </div>
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="space-y-2">
                    {msg.sender === "user" ? (
                      <div className="flex items-start justify-end gap-2">
                        <div className="p-3 rounded-2xl bg-indigo-600 dark:bg-accent-primary text-white dark:text-bg-dark font-medium max-w-[85%] shadow-sm leading-relaxed">
                          {msg.text}
                        </div>
                        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-accent-primary/20 flex items-center justify-center text-indigo-700 dark:text-accent-primary shrink-0 mt-0.5">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-900 text-white dark:bg-bg-surface border border-indigo-500/40 dark:border-accent-primary/40 flex items-center justify-center text-indigo-400 dark:text-accent-primary shrink-0 mt-1">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-2 max-w-[85%]">
                          <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-bg-surface border border-slate-200/80 dark:border-border-dark text-slate-900 dark:text-txt-main leading-relaxed shadow-sm font-sans">
                            {msg.text}

                            {/* Embedded Quick Action Button */}
                            {msg.quickAction && (
                              <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-border-dark">
                                {msg.quickAction.external ? (
                                  <a
                                    href={msg.quickAction.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-mono font-medium transition-colors"
                                  >
                                    <span>{msg.quickAction.label}</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  <a
                                    href={msg.quickAction.link}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-mono font-medium transition-colors"
                                  >
                                    <span>{msg.quickAction.label}</span>
                                    <ArrowRight className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Contextual Follow-up Chips */}
                          {msg.followUps && msg.followUps.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {msg.followUps.map((fu, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleSendCustomText(fu)}
                                  className="text-left px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-bg-elevated hover:bg-indigo-100 dark:hover:bg-bg-card border border-indigo-200/60 dark:border-border-dark text-indigo-700 dark:text-txt-muted text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer"
                                >
                                  <span>↳ {fu}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-900 dark:bg-bg-surface border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-slate-500 dark:text-txt-subtle font-mono text-[11px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-accent-primary animate-ping" />
                    <span>Parsing query & knowledge base...</span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Scrollable Preset Questions List (When chat or categories active) */}
            <div className="px-3 py-2 bg-slate-50 dark:bg-bg-surface border-t border-slate-200 dark:border-border-dark max-h-[150px] overflow-y-auto space-y-1.5 shrink-0">
              <div className="text-[10px] font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider px-1">
                Select Prompt ({filteredQuestions.length}):
              </div>
              {filteredQuestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectQA(item)}
                  className="w-full text-left p-2 rounded-xl bg-white dark:bg-bg-elevated hover:bg-slate-100 dark:hover:bg-bg-card border border-slate-200/80 dark:border-border-dark hover:border-indigo-400/50 text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main font-mono text-[11px] transition-all flex items-center justify-between group cursor-pointer shadow-2xs"
                >
                  <span className="truncate pr-2">{item.q}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 dark:text-txt-subtle group-hover:text-indigo-600 dark:group-hover:text-accent-primary shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Text Search & Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendCustomText();
              }}
              className="p-3 bg-white dark:bg-bg-card border-t border-slate-200 dark:border-border-dark flex items-center gap-2 shrink-0"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type custom question or keyword..."
                  className="w-full pl-3 pr-8 py-2 rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main placeholder-slate-400 dark:placeholder-txt-subtle text-xs focus:outline-none focus:border-indigo-500 dark:focus:border-accent-primary font-sans transition-colors"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 dark:text-txt-subtle absolute right-2.5 top-2.5 pointer-events-none" />
              </div>
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


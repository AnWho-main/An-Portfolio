"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Database, Cpu, Binary, Globe, Terminal, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export const ArchitectureHeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>("laravel");

  const nodes = [
    {
      id: "client",
      title: "Client & UI",
      subtitle: "Next.js 14 App Router",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/50",
      code: "GET /api/v1/services HTTP/1.1\nHost: api.somvanshi.dev",
      details: "Client hydration, server components, optimistic UI updates.",
    },
    {
      id: "laravel",
      title: "Backend Core",
      subtitle: "Laravel / PHP Service",
      icon: Server,
      color: "from-indigo-500 to-sky-500",
      borderColor: "border-indigo-500/80",
      code: "Route::middleware(['auth:sanctum'])\n  ->group(fn() => $router->pay());",
      details: "RESTful business logic, OAuth2, payment validation & BBPS integrations.",
    },
    {
      id: "mysql",
      title: "Relational DB",
      subtitle: "MySQL Database",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-500/50",
      code: "SELECT * FROM transactions \nWHERE status = 'SETTLED' LOCK IN SHARE MODE;",
      details: "Normalized database schemas, query indexing, ACID transaction isolation.",
    },
    {
      id: "ai",
      title: "AI Engine",
      subtitle: "Autonomous Agents",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/50",
      code: "agent.execute(query)\n  .normalize(units)\n  .rankBestPrice();",
      details: "Product matching across quick-commerce data sources & generative prompts.",
    },
    {
      id: "web3",
      title: "Web3 Contract",
      subtitle: "Solidity BEP-20",
      icon: Binary,
      color: "from-amber-500 to-orange-500",
      borderColor: "border-amber-500/50",
      code: "contract RoyaltyVault is BEP20 {\n  function distribute() external;\n}",
      details: "Royalty payouts, BSC testnet verification, wallet transaction signing.",
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[1];

  return (
    <div className="relative w-full rounded-2xl bg-white dark:bg-bg-card border border-slate-200/90 dark:border-border-dark p-5 sm:p-6 backdrop-blur-xl shadow-2xl shadow-indigo-500/5 overflow-hidden group">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 dark:bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 dark:bg-accent-glow/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Console Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80 dark:border-border-dark">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-txt-subtle font-semibold tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent-primary" />
            SYSTEM_ARCHITECTURE.SVG
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-txt-subtle">
          <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20 font-semibold">
            <ShieldCheck className="w-3 h-3" /> SECURE
          </span>
          <span className="hidden sm:flex items-center gap-1 text-txt-subtle">
            <Activity className="w-3 h-3 text-accent-primary animate-pulse" /> 24ms
          </span>
        </div>
      </div>

      {/* System Node Network Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10 mb-6">
        {nodes.map((node) => {
          const IconComponent = node.icon;
          const isSelected = activeNode === node.id;

          return (
            <motion.button
              key={node.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveNode(node.id)}
              className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-300 cursor-pointer relative ${isSelected
                  ? `bg-indigo-50/70 dark:bg-bg-surface border-indigo-500/80 dark:border-accent-primary shadow-md ring-1 ring-indigo-500/30`
                  : "bg-slate-50/60 dark:bg-bg-surface/50 border-slate-200/80 dark:border-border-dark hover:border-indigo-400 hover:bg-slate-100/60"
                }`}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${node.color} p-0.5 flex items-center justify-center mb-2 shadow-sm`}
              >
                <div className="w-full h-full bg-white dark:bg-bg-card rounded-[7px] flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-txt-main" />
                </div>
              </div>
              <span className="font-bold text-xs text-txt-main tracking-tight">{node.title}</span>
              <span className="text-[10px] font-mono text-txt-subtle mt-0.5">{node.subtitle}</span>

              {isSelected && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1.5 w-6 h-1 rounded-full bg-indigo-600 dark:bg-accent-primary"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Code & Architectural Inspector Window */}
      <div className="rounded-xl bg-slate-50/80 dark:bg-bg-surface border border-slate-200/90 dark:border-border-dark p-4 font-mono text-xs relative overflow-hidden shadow-inner">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/80 dark:border-border-dark text-[11px] text-txt-subtle">
          <span className="text-accent-primary font-semibold flex items-center gap-1">
            <ArrowRight className="w-3 h-3" /> INSPECTOR: {currentNode.title.toUpperCase()}
          </span>
          <span className="text-txt-subtle text-[10px]">LIVE PIPELINE</span>
        </div>

        <p className="text-txt-muted mb-3 text-xs font-sans">{currentNode.details}</p>

        <div className="bg-emerald-50/70 dark:bg-bg-elevated p-3 rounded-lg border border-emerald-200/80 dark:border-border-dark text-emerald-700 dark:text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto whitespace-pre shadow-inner">
          {currentNode.code}
        </div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Zap, Layers, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/container";

export const AboutSection: React.FC = () => {
  const systemHighlights = [
    { label: "Payment & Recharge Engines", desc: "BBPS, wallet transactions, ledger auditing, status callbacks" },
    { label: "Email & SaaS Automation", desc: "Gmail OAuth2 sync, email sequences, cron background jobs" },
    { label: "AI Agent Pipelines", desc: "Product price extraction, data normalization, image generators" },
    { label: "Blockchain & Web3", desc: "Solidity BEP-20 contracts, royalty distributor vaults, wallet sync" },
  ];

  return (
    <section id="about" className="relative py-16 bg-white dark:bg-bg-surface border-y border-slate-200/80 dark:border-border-dark transition-colors duration-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-primary font-bold tracking-wider uppercase mb-3">
              <Server className="w-4 h-4" />
              <span>01 / ABOUT THE ENGINEER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight mb-6">
              Engineering Scalable Systems & High-Reliability Software
            </h2>

            <div className="space-y-4 text-txt-muted text-base leading-relaxed mb-8">
              <p>
                I am <span className="text-txt-main font-semibold">{profileData.name}</span>, a Software Engineer focused on building scalable web applications, backend systems, REST APIs, AI-powered solutions, automation platforms, and Web3 applications.
              </p>
              <p>
                My core backend ecosystem is grounded in <span className="text-accent-primary font-mono font-medium">PHP, Laravel, CodeIgniter, and MySQL</span>. I architect production systems engineered for high transaction volume, complex business logic, asynchronous queued background jobs, and robust third-party API integrations.
              </p>
              <p>
                Beyond standard backend APIs, I develop modern full-stack platforms with <span className="text-txt-main font-mono font-semibold">JavaScript and Next.js</span>, while extending software capabilities into autonomous AI agents, automated email sync engines, and EVM smart contracts on BNB Smart Chain.
              </p>
            </div>

            {/* Core Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {profileData.corePositioning.map((item) => (
                <div key={item} className="flex items-center gap-2.5 font-mono text-xs text-txt-main bg-slate-100 dark:bg-bg-elevated p-2.5 rounded-lg border border-slate-200 dark:border-border-dark shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-accent-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Architectural Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="rounded-xl bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Layers className="w-24 h-24 text-indigo-600 dark:text-accent-primary" />
              </div>

              <h3 className="font-bold text-lg text-txt-main mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-600 dark:text-accent-primary" />
                Systems I Build & Operate
              </h3>
              <p className="text-slate-500 dark:text-txt-subtle text-xs mb-6 font-mono">
                Production-focused software engineering across real-world business domains.
              </p>

              <div className="space-y-3">
                {systemHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/50 transition-colors shadow-sm"
                  >
                    <div className="font-bold text-sm text-txt-main mb-0.5">{item.label}</div>
                    <div className="text-xs text-slate-500 dark:text-txt-subtle font-mono">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

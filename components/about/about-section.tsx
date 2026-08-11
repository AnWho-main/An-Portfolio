"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Zap, Layers, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/container";

export const AboutSection: React.FC = () => {
  const systemHighlights = [
    { label: "Outreach & Email SaaS Modules", desc: "Gmail OAuth2 sync, email sequences, Redis scraper queues" },
    { label: "Hotel Booking & Go-VIP Services", desc: "High-performance RESTful APIs, transactional security" },
    { label: "Payment & Recharge Systems", desc: "BBPS integrations, automated settlement, audit ledgers" },
    { label: "AI Agents & Web3 Applications", desc: "Autonomous task automation, Solidity BEP-20, DApp portals" },
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
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-accent-primary font-bold tracking-wider uppercase mb-3 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60 self-start">
              <Server className="w-4 h-4 text-sky-500" />
              <span>01 / ABOUT THE ENGINEER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-txt-main tracking-tight mb-4">
              Software Engineer
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-txt-muted text-base leading-relaxed mb-6">
              <p className="text-lg font-medium text-slate-800 dark:text-txt-main">
                Software Engineer with 3+ years of experience building scalable web applications, backend systems, REST APIs, integrations, AI-powered solutions and Web3 applications.
              </p>
              <p>
                My engineering focus centers on building reliable backend architectures with <span className="font-semibold text-slate-900 dark:text-txt-main font-mono">PHP, Laravel, MySQL, and Node.js</span>, while developing full-stack interfaces with <span className="font-semibold text-slate-900 dark:text-txt-main font-mono">JavaScript and Next.js</span>, and exploring intelligent <span className="font-semibold text-sky-600 dark:text-sky-400 font-mono">AI Agents</span> and <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono">Web3 DApps</span>.
              </p>
            </div>

            {/* Core Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
              {profileData.corePositioning.map((item) => (
                <div key={item} className="flex items-center gap-2.5 font-mono text-xs text-slate-800 dark:text-txt-main bg-slate-50 dark:bg-bg-elevated p-3 rounded-xl border border-slate-200/80 dark:border-border-dark shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
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
            <div className="rounded-2xl bg-white dark:bg-bg-card border border-sky-100 dark:border-border-dark p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Layers className="w-24 h-24 text-sky-500" />
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-txt-main mb-1 flex items-center gap-2">
                <Zap className="w-5 h-5 text-sky-500" />
                Proven Software Capabilities
              </h3>
              <p className="text-slate-500 dark:text-txt-subtle text-xs mb-5 font-mono">
                Curated technical proof across production environments.
              </p>

              <div className="space-y-3">
                {systemHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-bg-elevated border border-slate-200/80 dark:border-border-dark hover:border-sky-400 transition-colors shadow-sm"
                  >
                    <div className="font-bold text-sm text-slate-900 dark:text-txt-main mb-0.5">{item.label}</div>
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

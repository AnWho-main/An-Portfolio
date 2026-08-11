"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Send, MessageSquare, User, ArrowRight } from "lucide-react";

interface QuestionAnswer {
  q: string;
  a: string;
}

export const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQA, setActiveQA] = useState<QuestionAnswer | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const presetQuestions: QuestionAnswer[] = [
    {
      q: "Where do you currently work?",
      a: "Anshuman is currently working as a Software Engineer at Telgoo5 in Noida, India. He contributes to Billing and Fiber Management Systems, telecom operations, and scalable RESTful API services.",
    },
    {
      q: "What is your professional experience?",
      a: "Software Engineer with 3+ years of experience across Telgoo5 (CURRENT), Viral Pitch (Influencer Discovery & Redis scraper queues), EaseMyDeal (Hotel Booking & Go-VIP services), Digiature Technology (Web3 DApps), and Arudan Technologies.",
    },
    {
      q: "Which projects have live links?",
      a: "Live platforms include EaseMyDeal Hotel Booking (easemydeal.com/hotel-booking), UDRCNET Education Software (udrcnet.org), and Zyro Healthcare E-Commerce (zyrohealthcare.com). Repositories are on GitHub (github.com/AnWho-main).",
    },
    {
      q: "What technologies do you use?",
      a: "Core stack includes PHP, Laravel, Node.js, Next.js 14, React.js, CodeIgniter, MySQL, Redis, REST APIs, AI Agents, Web3/Solidity smart contracts, Git, and GitHub Actions.",
    },
    {
      q: "Tell me about your AI & Web3 work",
      a: "AI: Custom tool-calling agent frameworks, automated price comparison normalizers, and generative product asset pipelines. Web3: Solidity BEP-20 smart contracts, MetaMask wallet integration, and DApp admin portals.",
    },
    {
      q: "How can I contact you?",
      a: "You can send a message directly via the contact form on this site, or reach out via email (anshuman357main@gmail.com), LinkedIn (linkedin.com/in/anshuman-singh-somvanshi-4a150b1bb), or GitHub (github.com/AnWho-main).",
    },
  ];

  const handleSelectQA = (qa: QuestionAnswer) => {
    setActiveQA(qa);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-white dark:bg-bg-card border border-indigo-200/80 dark:border-border-dark text-slate-900 dark:text-txt-main shadow-2xl hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-accent-primary/10 border border-indigo-500/40 dark:border-accent-primary/40 flex items-center justify-center text-white dark:text-accent-primary transition-colors">
            <Bot className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs font-bold tracking-tight">Ask About My Work</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </motion.button>
      </div>

      {/* Assistant Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[540px] shadow-[0_20px_50px_rgba(15,23,42,0.15)] dark:shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-slate-50 dark:bg-bg-surface border-b border-slate-200 dark:border-border-dark flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-accent-primary/10 border border-indigo-200 dark:border-accent-primary/30 text-indigo-600 dark:text-accent-primary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-txt-main">AS² AI ASSISTANT</h4>
                  <div className="text-[10px] text-slate-500 dark:text-txt-subtle font-mono">Local Engineering Knowledge Base</div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 dark:text-txt-subtle hover:text-slate-900 dark:hover:text-txt-main hover:bg-slate-100 dark:hover:bg-bg-elevated transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 overflow-y-auto space-y-4 flex-1 text-xs">
              {!activeQA ? (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-slate-700 dark:text-txt-muted font-sans space-y-2">
                  <p className="font-semibold text-slate-900 dark:text-txt-main">👋 Hi! Select a prompt below to query Anshuman&apos;s engineering background:</p>
                </div>
              ) : (
                <div className="space-y-3 font-sans">
                  {/* User Query bubble */}
                  <div className="flex items-start justify-end gap-2">
                    <div className="p-3 rounded-xl bg-indigo-600 dark:bg-accent-primary text-white dark:text-bg-dark font-medium max-w-[85%] shadow-sm">
                      {activeQA.q}
                    </div>
                  </div>

                  {/* Assistant Answer bubble */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-bg-surface border border-indigo-500/50 dark:border-accent-primary/50 flex items-center justify-center text-indigo-600 dark:text-accent-primary shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main leading-relaxed max-w-[85%] shadow-inner">
                      {isTyping ? (
                        <div className="flex items-center gap-1 font-mono text-slate-500 dark:text-txt-subtle">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-accent-primary animate-ping" />
                          <span>Parsing query...</span>
                        </div>
                      ) : (
                        activeQA.a
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Preset Questions Menu */}
            <div className="p-3 bg-slate-50 dark:bg-bg-surface border-t border-slate-200 dark:border-border-dark space-y-1.5 max-h-[180px] overflow-y-auto">
              <div className="text-[10px] font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider px-1">
                Select Prompt:
              </div>
              {presetQuestions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectQA(item)}
                  className="w-full text-left p-2 rounded-lg bg-white dark:bg-bg-elevated hover:bg-slate-100 dark:hover:bg-bg-card border border-slate-200 dark:border-border-dark hover:border-indigo-500/40 dark:hover:border-accent-primary/40 text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main font-mono text-[11px] transition-all flex items-center justify-between group cursor-pointer shadow-sm"
                >
                  <span className="truncate">{item.q}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 dark:text-txt-subtle group-hover:text-indigo-600 dark:group-hover:text-accent-primary shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

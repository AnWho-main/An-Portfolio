"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CheckCircle2, Building2, MapPin, Calendar, ChevronDown, ChevronUp, Award, GraduationCap } from "lucide-react";
import { experiences, earlyExperience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const ExperienceTimeline: React.FC = () => {
  // Array of expanded indexes
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (company: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [company]: !prev[company],
    }));
  };

  return (
    <section id="experience" className="relative py-20 bg-white dark:bg-bg-surface border-b border-slate-200/80 dark:border-border-dark transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-accent-primary font-bold tracking-wider uppercase mb-2 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60">
            <Briefcase className="w-4 h-4 text-sky-500" />
            <span>03 / PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-txt-main tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-txt-muted text-sm mt-2 max-w-2xl">
            Curated engineering contributions across backend development, REST APIs, outreach automation, and Web3 solutions.
          </p>
        </div>

        {/* Timeline Items Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-border-dark space-y-10 mb-16">
          {experiences.map((exp, index) => {
            const isExpanded = !!expandedItems[exp.company];

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-2 w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                    index === 0
                      ? "bg-sky-500 border-white dark:border-bg-dark shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                      : "bg-white dark:bg-bg-surface border-slate-300 dark:border-border-dark"
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`rounded-2xl border transition-all duration-300 p-6 ${
                    isExpanded
                      ? "bg-white dark:bg-bg-card border-sky-400 dark:border-accent-primary/60 shadow-xl"
                      : "bg-white dark:bg-bg-card border-slate-200 dark:border-border-dark hover:border-sky-300 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-txt-main tracking-tight">
                            {exp.company}
                          </h3>
                          {exp.badge && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                              {exp.badge.includes("Award") && <Award className="w-3 h-3 text-amber-500" />}
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-mono text-sky-600 dark:text-sky-400 font-semibold mt-0.5">
                          {exp.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-txt-subtle gap-1">
                      <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-txt-muted">
                        <Calendar className="w-3.5 h-3.5 text-sky-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Concise 2-4 Bullet Points */}
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-txt-muted mb-4">
                    {exp.keyResponsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Focus Area Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-border-dark">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-bg-elevated text-slate-700 dark:text-txt-muted border border-slate-200 dark:border-border-dark font-mono text-xs shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Details Toggle */}
                    {exp.expandedDetails && exp.expandedDetails.length > 0 && (
                      <button
                        onClick={() => toggleExpand(exp.company)}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 transition-colors py-1 px-2 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950/40 cursor-pointer"
                      >
                        <span>{isExpanded ? "Show Less" : "View Details"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    )}
                  </div>

                  {/* Expanded Additional Details */}
                  <AnimatePresence>
                    {isExpanded && exp.expandedDetails && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 pt-4 border-t border-dashed border-sky-200 dark:border-sky-800/60 bg-sky-50/40 dark:bg-sky-950/20 p-4 rounded-xl space-y-2"
                      >
                        <div className="text-xs font-mono font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider mb-2">
                          ADDITIONAL ARCHITECTURAL DETAILS:
                        </div>
                        <ul className="space-y-1.5 text-xs font-sans text-slate-700 dark:text-txt-muted">
                          {exp.expandedDetails.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Early Experience Section (Minimal Internship Card) */}
        <div className="mt-12 bg-slate-50/60 dark:bg-bg-card border border-slate-200/80 dark:border-border-dark rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                <GraduationCap className="w-4 h-4 text-sky-500" />
                EARLY EXPERIENCE & INTERNSHIP
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-txt-main">
                {earlyExperience.company} — <span className="font-mono text-sm text-sky-600 dark:text-sky-400 font-semibold">{earlyExperience.role}</span>
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-txt-subtle mt-0.5">
                {earlyExperience.period} • {earlyExperience.location}
              </p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-txt-muted text-sm leading-relaxed mt-3">
            {earlyExperience.description}
          </p>
        </div>
      </Container>
    </section>
  );
};

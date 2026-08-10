"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Building2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const ExperienceTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="experience" className="relative py-20 bg-white dark:bg-bg-surface border-b border-slate-200/80 dark:border-border-dark transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-primary font-bold tracking-wider uppercase mb-2">
            <Briefcase className="w-4 h-4" />
            <span>03 / CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight">
            Professional Software Engineering Experience
          </h2>
          <p className="text-txt-muted text-sm mt-2 max-w-2xl">
            Building backend systems, high-concurrency APIs, BBPS integrations, and automation workflows across real-world tech organizations.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-border-dark space-y-10">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Glowing Node Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 ${isExpanded
                      ? "bg-indigo-600 dark:bg-accent-primary border-white dark:border-bg-dark shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                      : "bg-white dark:bg-bg-surface border-slate-300 dark:border-border-dark"
                    }`}
                />

                {/* Card Container */}
                <div
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  className={`rounded-2xl border transition-all duration-300 p-6 cursor-pointer ${isExpanded
                      ? "bg-white dark:bg-bg-card border-indigo-500/60 dark:border-accent-primary/50 shadow-xl"
                      : "bg-white dark:bg-bg-card border-slate-200 dark:border-border-dark hover:border-indigo-500/50 shadow-sm"
                    }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark text-indigo-600 dark:text-accent-primary">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-txt-main tracking-tight">{exp.company}</h3>
                        <div className="text-sm font-mono text-indigo-600 dark:text-accent-primary font-semibold">
                          {exp.role}
                        </div>
                      </div>
                    </div>

                    {exp.badge && (
                      <Badge variant="accent" size="sm" className="self-start sm:self-center">
                        {exp.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-txt-muted text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Focus Areas Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.focusArea.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-bg-elevated text-slate-700 dark:text-txt-muted border border-slate-200 dark:border-border-dark font-mono text-xs shadow-sm"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Key Responsibilities */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-slate-200 dark:border-border-dark space-y-2"
                    >
                      <h4 className="text-xs font-mono font-bold text-txt-subtle uppercase tracking-wider mb-2">
                        Key Engineering Responsibilities:
                      </h4>
                      <ul className="space-y-2 text-sm text-txt-muted">
                        {exp.keyResponsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono text-txt-subtle mr-2">TECH STACK:</span>
                        {exp.technologies.map((t) => (
                          <Badge key={t} variant="default" size="sm">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

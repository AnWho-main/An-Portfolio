"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";

export const EducationAndAchievementSection: React.FC = () => {
  return (
    <section id="education-achievements" className="relative py-16 bg-slate-50/50 dark:bg-bg-card border-b border-slate-200/80 dark:border-border-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievement Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white dark:bg-bg-surface border border-sky-100 dark:border-border-dark p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Trophy className="w-32 h-32 text-amber-500" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-600 dark:text-amber-400 font-bold tracking-wider uppercase mb-3 bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-200/60 dark:border-amber-800/60">
                <Award className="w-4 h-4 text-amber-500" />
                <span>PROFESSIONAL ACCOMPLISHMENT</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-txt-main tracking-tight mb-1">
                GroundBreaker Award — EaseMyDeal
              </h3>

              <div className="text-xs font-mono text-slate-500 dark:text-txt-subtle font-semibold mb-4">
                Year: 2024 • Inditab Esolutions Pvt. Ltd. (EaseMyDeal)
              </div>

              <p className="text-slate-600 dark:text-txt-muted text-sm leading-relaxed">
                Recognized as part of the IT Team for innovation, technical contribution and impact on the EaseMyDeal project.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-border-dark flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Category: Technical Excellence & Innovation</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">IT Team Recognition</span>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl bg-white dark:bg-bg-surface border border-sky-100 dark:border-border-dark p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <BookOpen className="w-32 h-32 text-sky-500" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-sky-400 font-bold tracking-wider uppercase mb-3 bg-sky-50 dark:bg-sky-950/40 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60">
                <GraduationCap className="w-4 h-4 text-sky-500" />
                <span>FORMAL EDUCATION</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-txt-main tracking-tight mb-1">
                Bachelor of Computer Application (BCA)
              </h3>

              <div className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold mb-4">
                Allahabad State University • 2019 – 2022
              </div>

              <p className="text-slate-600 dark:text-txt-muted text-sm leading-relaxed">
                Foundational computer science degree covering software engineering principles, relational databases, data structures, and computer networks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-border-dark flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Degree: BCA</span>
              <span className="text-sky-600 dark:text-sky-400 font-bold">2019 – 2022</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

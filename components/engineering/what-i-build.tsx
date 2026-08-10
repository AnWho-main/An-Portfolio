"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, ArrowUpRight } from "lucide-react";
import { whatIBuildCategories } from "@/data/services";
import { Container } from "@/components/ui/container";

export const WhatIBuildSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-white dark:bg-bg-dark border-b border-slate-200/80 dark:border-border-dark">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-accent-primary font-bold tracking-wider uppercase mb-2">
            <Layers className="w-4 h-4" />
            <span>06 / CORE PRODUCT DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight">
            What I Build
          </h2>
          <p className="text-txt-muted text-sm mt-2 max-w-2xl">
            Software solutions designed from the ground up to solve business challenges, automate complex workflows, and process real transactions.
          </p>
        </div>

        {/* Large Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIBuildCategories.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/50 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-accent-primary bg-slate-100 dark:bg-bg-surface px-2.5 py-1 rounded border border-slate-200 dark:border-border-dark shadow-sm">
                    {item.short}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <h3 className="text-xl font-bold text-txt-main group-hover:text-indigo-600 dark:group-hover:text-accent-primary transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-txt-muted text-xs leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

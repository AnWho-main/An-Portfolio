"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Workflow, CheckCircle, ArrowRight } from "lucide-react";
import { engineeringApproachSteps } from "@/data/services";
import { Container } from "@/components/ui/container";

export const EngineeringApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-20 bg-white dark:bg-bg-surface border-b border-slate-200/80 dark:border-border-dark transition-colors duration-300">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-accent-primary font-bold tracking-wider uppercase mb-2">
            <Workflow className="w-4 h-4" />
            <span>05 / ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight">
            How I Build Software
          </h2>
          <p className="text-txt-muted text-sm mt-2 max-w-2xl">
            A structured 5-stage engineering pipeline designed for reliability, scalability, and long-term maintainability.
          </p>
        </div>

        {/* 5-Stage Interactive Step Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {engineeringApproachSteps.map((item, index) => {
            const isActive = activeStep === index;

            return (
              <motion.div
                key={item.step}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${isActive
                    ? "bg-white dark:bg-bg-card border-indigo-600 dark:border-accent-primary shadow-xl ring-1 ring-indigo-500/30"
                    : "bg-white dark:bg-bg-card border-slate-200 dark:border-border-dark hover:border-indigo-500/50 shadow-sm"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-indigo-600 dark:text-accent-primary">
                      {item.step}
                    </span>
                    {isActive && <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                  </div>

                  <h3 className="text-lg font-bold text-txt-main mb-1">{item.title}</h3>
                  <div className="text-xs font-mono text-slate-500 dark:text-txt-subtle mb-3">{item.subtitle}</div>
                  <p className="text-txt-muted text-xs leading-relaxed font-sans">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-border-dark flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-txt-subtle">
                  <span>STAGE {item.step}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-600 dark:text-accent-primary" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

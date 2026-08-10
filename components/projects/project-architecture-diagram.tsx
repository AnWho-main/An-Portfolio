"use client";

import React from "react";
import { ArrowRight, Server } from "lucide-react";

interface Step {
  from: string;
  to: string;
  label: string;
}

interface ProjectArchitectureDiagramProps {
  steps: Step[];
  title?: string;
}

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({
  steps,
  title = "SYSTEM ARCHITECTURE DATAFLOW",
}) => {
  return (
    <div className="rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark p-5 font-mono text-xs overflow-hidden shadow-inner">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-border-dark text-[11px] text-slate-500 dark:text-txt-subtle">
        <span className="text-indigo-600 dark:text-accent-primary font-bold tracking-wider flex items-center gap-1.5">
          <Server className="w-3.5 h-3.5" />
          {title}
        </span>
        <span className="text-slate-500 dark:text-txt-subtle font-mono text-[10px]">PIPELINE DIAGRAM</span>
      </div>

      <div className="flex flex-col gap-3 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 group">
            {/* From Node */}
            <div className="px-3 py-2 rounded-lg bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main font-semibold min-w-[140px] text-center shadow-sm">
              {step.from}
            </div>

            {/* Flow Arrow & Label */}
            <div className="flex-1 flex items-center justify-center gap-2 px-2 py-1 bg-white dark:bg-bg-elevated rounded border border-slate-200 dark:border-border-dark text-[11px] text-indigo-600 dark:text-accent-primary my-1 sm:my-0 shadow-sm">
              <span className="truncate">{step.label}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-400 dark:text-txt-subtle group-hover:translate-x-1 transition-transform" />
            </div>

            {/* To Node */}
            <div className="px-3 py-2 rounded-lg bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main font-semibold min-w-[140px] text-center shadow-sm">
              {step.to}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

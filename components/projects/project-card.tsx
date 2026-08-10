"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark p-6 flex flex-col justify-between hover:border-indigo-500/50 dark:hover:border-accent-primary/50 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:shadow-none"
      onClick={() => onSelect(project)}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="accent" size="sm">
            {project.category}
          </Badge>
          <span className="text-[11px] font-mono text-slate-600 dark:text-txt-subtle bg-slate-100 dark:bg-bg-surface px-2 py-0.5 rounded border border-slate-200 dark:border-border-dark shadow-sm">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-txt-main group-hover:text-accent-primary transition-colors tracking-tight mb-2 flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-txt-subtle group-hover:text-accent-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </h3>

        {/* Highlight Quote */}
        <p className="text-txt-muted text-sm leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Architecture snippet badge */}
        <div className="p-3 rounded-lg bg-emerald-50/80 dark:bg-bg-elevated border border-emerald-200/80 dark:border-border-dark font-mono text-xs text-emerald-700 dark:text-emerald-400 mb-6 font-medium leading-relaxed shadow-inner">
          &quot;{project.highlight}&quot;
        </div>
      </div>

      {/* Footer Technologies */}
      <div className="pt-4 border-t border-slate-200 dark:border-border-dark flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" size="sm">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <span className="text-xs font-mono text-txt-subtle group-hover:text-accent-primary font-semibold flex items-center gap-1">
          Explore Architecture →
        </span>
      </div>
    </motion.div>
  );
};

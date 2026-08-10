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
  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
      case "IN PROGRESS":
        return "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800";
      case "EXPERIMENT":
        return "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      default:
        return "bg-slate-100 dark:bg-bg-surface text-slate-700 dark:text-txt-muted border-slate-200 dark:border-border-dark";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-white dark:bg-bg-card border border-sky-100 dark:border-border-dark p-6 flex flex-col justify-between hover:border-sky-400 dark:hover:border-accent-primary/60 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-sm"
      onClick={() => onSelect(project)}
    >
      <div>
        {/* Top Header Status & Category Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-wider border shadow-sm flex items-center gap-1.5 ${getStatusColor(project.status)}`}>
            <span>{project.status}</span>
            {project.progressVisual && (
              <span className="font-mono text-[9px] opacity-80">{project.progressVisual}</span>
            )}
          </span>
          <Badge variant="outline" size="sm">
            {project.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-txt-main group-hover:text-sky-600 dark:group-hover:text-accent-primary transition-colors tracking-tight mb-2 flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
        </h3>

        {/* Short 1-2 Line Description */}
        <p className="text-slate-600 dark:text-txt-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Engineering Highlight snippet */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200/80 dark:border-border-dark font-mono text-xs text-slate-700 dark:text-txt-muted mb-5 leading-relaxed shadow-inner">
          &quot;{project.highlight}&quot;
        </div>
      </div>

      {/* Footer Technologies */}
      <div className="pt-4 border-t border-slate-100 dark:border-border-dark flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="accent" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" size="sm">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
          Explore →
        </span>
      </div>
    </motion.div>
  );
};

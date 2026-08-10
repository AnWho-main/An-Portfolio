"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, AlertCircle, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectArchitectureDiagram } from "./project-architecture-diagram";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative w-full max-w-4xl bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col shadow-[0_20px_50px_rgba(15,23,42,0.15)] dark:shadow-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-border-dark bg-white/95 dark:bg-bg-surface sticky top-0 z-20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="outline">{project.status}</Badge>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 dark:text-txt-subtle hover:text-slate-900 dark:hover:text-txt-main hover:bg-slate-100 dark:hover:bg-bg-elevated transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Title & Short Summary */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-txt-main tracking-tight mb-3">
                {project.title}
              </h2>
              <p className="text-txt-muted text-base leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Architecture Flow Diagram */}
            {project.architectureSteps && project.architectureSteps.length > 0 && (
              <div>
                <h3 className="text-xs font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider mb-3">
                  1. TECHNICAL ARCHITECTURE & DATAFLOW
                </h3>
                <ProjectArchitectureDiagram steps={project.architectureSteps} />
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>THE ENGINEERING PROBLEM</span>
                </div>
                <p className="text-txt-muted text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>THE SYSTEM SOLUTION</span>
                </div>
                <p className="text-txt-muted text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features & Engineering Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider mb-3">
                  KEY SYSTEM FEATURES
                </h3>
                <ul className="space-y-2 text-sm text-txt-muted">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-accent-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider mb-3">
                  KEY ENGINEERING CHALLENGES
                </h3>
                <ul className="space-y-2 text-sm text-txt-muted">
                  {project.engineeringChallenges.map((chal, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-accent-glow shrink-0 mt-2" />
                      <span>{chal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome & Technologies */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark space-y-4">
              <div>
                <div className="text-xs font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider mb-1">
                  VERIFIED OUTCOME
                </div>
                <p className="text-txt-main text-sm">{project.outcome}</p>
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider mb-2">
                  TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="accent" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 border-t border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-bg-surface flex items-center justify-between gap-4">
            <Link href={`/projects/${project.slug}`} passHref>
              <Button variant="secondary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Dedicated Project Page
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main bg-white dark:bg-bg-elevated px-4 py-2 rounded-lg border border-slate-200 dark:border-border-dark hover:border-indigo-500 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Sparkles, CheckCircle2, Hammer, Code } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
import { Container } from "@/components/ui/container";

export const ProjectsGridSection: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const groups = [
    { id: "All", label: "All Projects" },
    { id: "Professional Projects", label: "Professional Projects", icon: CheckCircle2 },
    { id: "Currently Building", label: "Currently Building", icon: Hammer },
    { id: "Completed Personal Projects", label: "Completed Personal Projects", icon: Code },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesGroup =
        activeGroup === "All" || proj.group === activeGroup;

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        proj.title.toLowerCase().includes(query) ||
        proj.shortDescription.toLowerCase().includes(query) ||
        proj.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesGroup && matchesSearch;
    });
  }, [activeGroup, searchQuery]);

  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-bg-dark border-b border-slate-200/80 dark:border-border-dark">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-600 dark:text-accent-primary font-bold tracking-wider uppercase mb-2 bg-sky-50 dark:bg-sky-950/50 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/60">
            <FolderGit2 className="w-4 h-4 text-sky-500" />
            <span>04 / FEATURED PROJECTS & SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-txt-main tracking-tight">
            Curated Proof of What I Build
          </h2>
          <p className="text-slate-600 dark:text-txt-muted text-sm mt-2 max-w-2xl">
            Categorized into Professional Experience, Active Explorations (AI & Automation), and Completed Personal / Freelance platforms.
          </p>
        </div>

        {/* Group Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-200/80 dark:border-border-dark pb-4">
          <div className="flex flex-wrap gap-2">
            {groups.map((grp) => {
              const isActive = activeGroup === grp.id;
              const IconComp = grp.icon;

              return (
                <button
                  key={grp.id}
                  onClick={() => setActiveGroup(grp.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-sky-500 via-indigo-600 to-indigo-700 text-white shadow-md shadow-sky-500/20 scale-[1.02]"
                      : "bg-white dark:bg-bg-card text-slate-700 dark:text-txt-muted border border-slate-200 dark:border-border-dark hover:border-sky-400 hover:text-sky-600 shadow-sm"
                  }`}
                >
                  {IconComp && <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-sky-500"}`} />}
                  <span>{grp.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-xs font-mono text-slate-900 dark:text-txt-main focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Project Grid Cards */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-slate-50 dark:bg-bg-card border border-slate-200 dark:border-border-dark font-mono text-slate-500 text-sm shadow-sm">
            No projects found matching current selection.
          </div>
        )}

        {/* Detailed Modal Inspector View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
};

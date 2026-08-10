"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filter";
import { ProjectModal } from "./project-modal";
import { Container } from "@/components/ui/container";

export const ProjectsGridSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Backend", "Payments", "Automation", "Web3", "AI", "SaaS", "APIs"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesCategory =
        activeCategory === "All" ||
        proj.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        proj.title.toLowerCase().includes(query) ||
        proj.shortDescription.toLowerCase().includes(query) ||
        proj.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-bg-dark border-b border-slate-200/80 dark:border-border-dark">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-primary font-bold tracking-wider uppercase mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>04 / FEATURED PROJECTS & SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight">
            Production Software & Architecture Showcase
          </h2>
          <p className="text-txt-muted text-sm mt-2 max-w-2xl">
            Detailed engineering breakdowns of payment platforms, BBPS APIs, email automation backends, AI agents, and BEP-20 smart contracts.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

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
          <div className="p-12 text-center rounded-2xl bg-bg-card border border-border-dark font-mono text-txt-muted text-sm shadow-sm">
            No projects found matching current filter or search parameters.
          </div>
        )}

        {/* Modal Inspector View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Server, Code, Binary, Cloud } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { TechUniverseVisual } from "./tech-universe";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("backend");

  const icons: Record<string, any> = {
    backend: Server,
    frontend: Code,
    "ai-automation": Cpu,
    "blockchain-web3": Binary,
    infrastructure: Cloud,
  };

  const currentCategoryData =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-bg-dark border-b border-slate-200/80 dark:border-border-dark">
      <Container>
        {/* Section Title */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-accent-primary font-bold tracking-wider uppercase mb-2">
            <Cpu className="w-4 h-4" />
            <span>02 / TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight">
            Engineering Stack & System Proficiency
          </h2>
          <p className="text-txt-muted text-sm mt-2 max-w-2xl">
            Categorized skills across backend architectures, API protocols, AI automation, Web3 contracts, and cloud deployment pipelines.
          </p>
        </div>

        {/* Standout Tech Universe Visual Component */}
        <div className="mb-16">
          <TechUniverseVisual />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-border-dark pb-4">
          {skillCategories.map((cat) => {
            const IconComp = icons[cat.id] || Server;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${isActive
                    ? "bg-indigo-600 text-white dark:bg-accent-primary dark:text-bg-dark shadow-md shadow-indigo-500/20"
                    : "bg-white dark:bg-bg-card text-slate-700 dark:text-txt-muted border border-slate-200 dark:border-border-dark hover:border-indigo-500 hover:text-slate-900 shadow-sm"
                  }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Description & Skill Grid */}
        <div className="bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-txt-main mb-1">{currentCategoryData.name}</h3>
            <p className="text-txt-muted text-sm">{currentCategoryData.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategoryData.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -3 }}
                className="p-4 rounded-xl bg-slate-50/80 dark:bg-bg-elevated border border-slate-200/80 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/50 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-txt-main group-hover:text-accent-primary transition-colors text-sm">
                    {skill.name}
                  </span>
                  <Badge variant={skill.level === "Core" ? "accent" : "default"} size="sm">
                    {skill.level}
                  </Badge>
                </div>
                <p className="text-txt-subtle text-xs leading-relaxed font-sans">
                  {skill.highlight}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

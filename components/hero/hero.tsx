"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Terminal, Code2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { SystemStatusTicker } from "./system-status";
import { ArchitectureHeroVisual } from "./architecture-hero-visual";
import { Button } from "@/components/ui/button";

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-bg-dark hero-gradient-overlay">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-400/10 dark:bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[280px] bg-blue-400/10 dark:bg-accent-glow/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Soft Wave Decorator for Light Mode */}
      <div className="absolute -bottom-28 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/40 via-purple-200/30 to-sky-200/20 rounded-full blur-3xl pointer-events-none dark:hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* System Status Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <SystemStatusTicker />
            </motion.div>

            {/* Core Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/90 dark:bg-bg-surface border border-slate-200 dark:border-border-dark font-mono text-xs text-slate-700 dark:text-txt-muted shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-accent-primary" />
              <span>{profileData.tagline}</span>
            </motion.div>

            {/* Main Headline with Gradient Highlights */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-txt-main tracking-tight leading-[1.15] mb-6"
            >
              Hi, I’m Anshuman Singh Somvanshi — a Software Engineer building scalable web applications,{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
                AI-powered solutions
              </span>
              , backend{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
                systems
              </span>
              , and{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:to-indigo-400 bg-clip-text text-transparent">
                blockchain applications
              </span>
              .
            </motion.h1>

            {/* Supporting Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-txt-muted font-normal leading-relaxed max-w-2xl mb-8"
            >
              {profileData.supportingIntro}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo("projects")}
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 dark:bg-none dark:bg-accent-primary dark:text-bg-dark"
              >
                View My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("contact")}
                icon={<Code2 className="w-4 h-4 text-accent-primary" />}
                className="bg-white dark:bg-bg-card text-txt-main border border-border-dark shadow-sm hover:border-accent-primary/40"
              >
                Let’s Work Together
              </Button>
            </motion.div>

            {/* Subtle Scroll Hint */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              onClick={() => scrollTo("about")}
              className="inline-flex items-center gap-2 font-mono text-xs text-txt-subtle hover:text-accent-primary transition-colors cursor-pointer group"
            >
              <span>Explore</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Column - Engineering Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <ArchitectureHeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

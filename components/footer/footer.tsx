"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, FileText, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/social";
import { Container } from "@/components/ui/container";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#07090E] border-t border-slate-200 dark:border-border-dark py-12 transition-colors duration-300">
      <Container className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-border-dark items-center">
          {/* Branding & Subtitle */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-bg-elevated border border-indigo-200 dark:border-accent-primary/40 flex items-center justify-center font-mono font-bold text-indigo-600 dark:text-accent-primary text-sm shadow-sm">
                {profileData.logoInitials}
              </div>
              <span className="font-bold text-txt-main text-lg tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-txt-muted text-xs font-mono max-w-md">
              Software Engineer building scalable systems, AI solutions and Web3 applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-x-6 gap-y-2 text-xs font-mono text-txt-muted">
            <Link href="/#hero" className="hover:text-accent-primary transition-colors">
              Home
            </Link>
            <Link href="/#about" className="hover:text-accent-primary transition-colors">
              About
            </Link>
            <Link href="/#projects" className="hover:text-accent-primary transition-colors">
              Projects
            </Link>
            <Link href="/resume" className="hover:text-accent-primary transition-colors">
              Resume
            </Link>
            <Link href="/#contact" className="hover:text-accent-primary transition-colors">
              Contact
            </Link>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-primary transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-primary transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-txt-subtle">
          <div>© 2026 Anshuman Singh Somvanshi. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-txt-subtle hover:text-accent-primary transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </Container>
    </footer>
  );
};

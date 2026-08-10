"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/data/social";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-40 lg:hidden"
          />

          {/* Slide-down / Slide-in Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-bg-card border-l border-slate-200 dark:border-border-dark p-6 z-50 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-border-dark">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-sm font-bold text-slate-900 dark:text-txt-main tracking-wider">AS² ARCHITECTURE</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-slate-500 dark:text-txt-subtle hover:text-slate-900 dark:hover:text-txt-main hover:bg-slate-100 dark:hover:bg-bg-elevated transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between text-lg font-medium text-slate-700 dark:text-txt-muted hover:text-indigo-600 dark:hover:text-accent-primary py-2 border-b border-slate-200 dark:border-border-dark transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 dark:text-txt-subtle group-hover:text-indigo-600 dark:group-hover:text-accent-primary" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-border-dark flex flex-col gap-4">
              <div className="flex items-center justify-around">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-bg-elevated text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main transition-colors border border-slate-200 dark:border-border-dark"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-bg-elevated text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main transition-colors border border-slate-200 dark:border-border-dark"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-bg-elevated text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main transition-colors border border-slate-200 dark:border-border-dark"
                  title="Resume"
                >
                  <FileText className="w-5 h-5" />
                </a>
              </div>

              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  onClose();
                  window.location.href = "#contact";
                }}
              >
                Let’s Work Together
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

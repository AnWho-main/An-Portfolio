"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, FileText, Menu } from "lucide-react";
import { profileData } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/social";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4",
          scrolled
            ? "bg-white/90 dark:bg-bg-surface/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark py-3 shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="/#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-bg-elevated border border-indigo-200 dark:border-accent-primary/40 flex items-center justify-center font-mono font-bold text-indigo-600 dark:text-accent-primary group-hover:scale-105 group-hover:border-indigo-500 transition-all duration-300 shadow-sm">
              {profileData.logoInitials}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-txt-main group-hover:text-indigo-600 dark:group-hover:text-accent-primary transition-colors text-base tracking-tight">
                {profileData.shortName}
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-txt-subtle -mt-1 hidden sm:block">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-bg-surface/80 border border-slate-200 dark:border-border-dark rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-xs font-medium px-3 py-1 rounded-full transition-all duration-200 relative",
                  item.label === "Home"
                    ? "text-blue-600 dark:text-sky-400 font-semibold"
                    : "text-slate-600 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main"
                )}
              >
                {item.label}
                {item.label === "Home" && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 dark:bg-sky-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Links & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center p-2 rounded-lg text-slate-600 dark:text-txt-subtle hover:text-slate-900 dark:hover:text-txt-main hover:bg-slate-100 dark:hover:bg-bg-elevated transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center p-2 rounded-lg text-slate-600 dark:text-txt-subtle hover:text-slate-900 dark:hover:text-txt-main hover:bg-slate-100 dark:hover:bg-bg-elevated transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-txt-muted hover:text-indigo-600 dark:hover:text-accent-primary px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-border-dark hover:border-indigo-400 bg-white dark:bg-bg-surface transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg bg-white dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main lg:hidden transition-colors shadow-sm"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { FileText, Download, Eye, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="relative py-20 bg-white dark:bg-bg-surface border-b border-slate-200/80 dark:border-border-dark transition-colors duration-300">
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark p-8 sm:p-12 shadow-xl relative overflow-hidden text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:shadow-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/10 dark:bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-100 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark text-indigo-600 dark:text-accent-primary mb-6 shadow-sm">
            <FileText className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight mb-3">
            My Experience, In One Document
          </h2>

          <p className="text-txt-muted text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Review detailed technical experience across backend architecture, Laravel REST APIs, BBPS integrations, automated mail sync engines, and Web3 smart contract deployments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={profileData.resumePath}
              download="anshuman-singh-somvanshi-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg" icon={<Download className="w-4 h-4" />}>
                Download Resume
              </Button>
            </a>

            <Link href="/resume" passHref>
              <Button variant="secondary" size="lg" icon={<Eye className="w-4 h-4 text-indigo-600 dark:text-accent-primary" />}>
                View Resume Page
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-border-dark flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-600 dark:text-txt-subtle">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Software Engineer
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Backend Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> AI & Web3
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectArchitectureDiagram } from "@/components/projects/project-architecture-diagram";
import { ArrowLeft, Github, AlertCircle, CheckCircle2, ShieldCheck, Layers } from "lucide-react";

interface ProjectSlugPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectSlugPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Anshuman Singh Somvanshi`,
    description: project.shortDescription,
  };
}

export default function ProjectSlugPage({ params }: ProjectSlugPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-bg-dark min-h-screen">
      <Container>
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-txt-subtle hover:text-accent-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        {/* Title Header */}
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{project.category}</Badge>
            <Badge variant="outline">{project.status}</Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-txt-main tracking-tight">
            {project.title}
          </h1>

          <p className="text-txt-muted text-lg leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Deep Dive */}
          <div className="lg:col-span-8 space-y-10">
            {/* Highlight Banner */}
            <div className="p-5 rounded-xl bg-bg-elevated border border-border-dark font-mono text-sm text-emerald-600 dark:text-emerald-400 font-medium shadow-sm">
              &quot;{project.highlight}&quot;
            </div>

            {/* Architecture Flow Diagram */}
            {project.architectureSteps && project.architectureSteps.length > 0 && (
              <div>
                <h3 className="text-xs font-mono font-bold text-txt-subtle uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent-primary" />
                  TECHNICAL ARCHITECTURE & DATAFLOW
                </h3>
                <ProjectArchitectureDiagram steps={project.architectureSteps} />
              </div>
            )}

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-bg-card border border-border-dark space-y-3 shadow-sm">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                  <AlertCircle className="w-4 h-4" />
                  <span>THE ENGINEERING PROBLEM</span>
                </div>
                <p className="text-txt-muted text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-bg-card border border-border-dark space-y-3 shadow-sm">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>THE SYSTEM SOLUTION</span>
                </div>
                <p className="text-txt-muted text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono font-bold text-txt-subtle uppercase tracking-wider mb-4">
                KEY SYSTEM FEATURES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-bg-elevated border border-border-dark flex items-start gap-3 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-txt-main">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Challenges */}
            <div>
              <h3 className="text-xs font-mono font-bold text-txt-subtle uppercase tracking-wider mb-4">
                KEY ENGINEERING CHALLENGES
              </h3>
              <div className="space-y-3">
                {project.engineeringChallenges.map((chal, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-bg-elevated border border-border-dark flex items-start gap-3 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-accent-glow shrink-0 mt-2" />
                    <span className="text-sm text-txt-muted">{chal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Meta Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-bg-card border border-border-dark p-6 space-y-6 sticky top-28 shadow-xl">
              <div>
                <div className="text-xs font-mono font-bold text-txt-subtle uppercase tracking-wider mb-2">
                  VERIFIED OUTCOME
                </div>
                <p className="text-sm text-txt-main leading-relaxed">
                  {project.outcome}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono font-bold text-txt-subtle uppercase tracking-wider mb-3">
                  TECHNOLOGIES USED
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <Badge key={t} variant="accent" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border-dark space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-bg-elevated border border-border-dark hover:border-accent-primary text-txt-main font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}

                <Link href="/#contact" passHref>
                  <Button variant="primary" className="w-full">
                    Discuss System Implementation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

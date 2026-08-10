import React from "react";
import { Container } from "@/components/ui/container";
import { ResumeSection } from "@/components/resume/resume-section";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Resume | Anshuman Singh Somvanshi",
  description: "View the official resume and engineering history of Anshuman Singh Somvanshi, Software Engineer.",
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-20 bg-white dark:bg-bg-dark min-h-screen">
      <Container>
        <div className="mb-12">
          <ResumeSection />
        </div>

        {/* Detailed Resume Breakdown Document */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-bg-card border border-border-dark p-8 sm:p-12 shadow-xl space-y-12">
          {/* Header info */}
          <div className="pb-8 border-b border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-txt-main tracking-tight">
                Anshuman Singh Somvanshi
              </h1>
              <p className="text-accent-primary font-mono text-sm font-semibold mt-1">
                Software Engineer • Backend Systems & AI/Web3
              </p>
            </div>
            <div className="text-xs font-mono text-txt-subtle space-y-1 sm:text-right">
              <div>Location: Noida, India</div>
              <div>Primary Stack: PHP, Laravel, MySQL, Next.js</div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-widest border-b border-border-dark pb-2">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.company} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-xl font-bold text-txt-main">{exp.company}</h3>
                    <span className="text-xs font-mono text-accent-primary font-semibold">{exp.role}</span>
                  </div>
                  <p className="text-txt-muted text-sm">{exp.description}</p>
                  <ul className="list-disc list-inside text-xs text-txt-muted space-y-1 pl-2">
                    {exp.keyResponsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <Badge key={t} variant="accent" size="sm">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-accent-primary uppercase tracking-widest border-b border-border-dark pb-2">
              TECHNICAL PROFICIENCIES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-4 rounded-xl bg-bg-elevated border border-border-dark space-y-2">
                  <h3 className="font-bold text-sm text-txt-main">{cat.name}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <Badge key={s.name} variant="default" size="sm">
                        {s.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

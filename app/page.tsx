import React from "react";
import { HeroSection } from "@/components/hero/hero";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { ProjectsGridSection } from "@/components/projects/project-grid";
import { EngineeringApproach } from "@/components/engineering/engineering-approach";
import { ServicesSection } from "@/components/services/services-section";
import { WhatIBuildSection } from "@/components/engineering/what-i-build";
import { InteractiveTerminal } from "@/components/terminal/interactive-terminal";
import { ResumeSection } from "@/components/resume/resume-section";
import { ContactSection } from "@/components/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsGridSection />
      <EngineeringApproach />
      <ServicesSection />
      <WhatIBuildSection />
      <InteractiveTerminal />
      <ResumeSection />
      <ContactSection />
    </>
  );
}

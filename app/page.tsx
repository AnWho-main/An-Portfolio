import React from "react";
import { HeroSection } from "@/components/hero/hero";
import { AboutSection } from "@/components/about/about-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsGridSection } from "@/components/projects/project-grid";
import { EngineeringApproach } from "@/components/engineering/engineering-approach";
import { EducationAndAchievementSection } from "@/components/education/education-achievement";
import { ContactSection } from "@/components/contact/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ProjectsGridSection />
      <EngineeringApproach />
      <EducationAndAchievementSection />
      <ContactSection />
    </>
  );
}

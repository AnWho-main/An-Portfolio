import React from "react";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";

export const metadata = {
  title: "About Anshuman Singh Somvanshi | Software Engineer",
  description: "Learn about Anshuman Singh Somvanshi's engineering background, PHP/Laravel backend expertise, AI automation, and Web3 skills.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

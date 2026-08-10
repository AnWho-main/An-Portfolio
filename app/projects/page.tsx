import React from "react";
import { ProjectsGridSection } from "@/components/projects/project-grid";

export const metadata = {
  title: "Projects | Anshuman Singh Somvanshi",
  description: "Browse software engineering projects including recharge & bill payment platforms, BBPS APIs, email automation backends, AI price comparison agents, and Web3 smart contracts.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsGridSection />
    </div>
  );
}

import React from "react";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata = {
  title: "Contact Anshuman Singh Somvanshi | Software Engineer",
  description: "Get in touch with Anshuman Singh Somvanshi for software engineering, backend architecture, REST API design, AI automation, or Web3 projects.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, MapPin, Send } from "lucide-react";
import { profileData } from "@/data/profile";
import { SOCIAL_LINKS } from "@/data/social";
import { Container } from "@/components/ui/container";
import { ContactForm } from "./contact-form";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-bg-dark border-b border-slate-200/80 dark:border-border-dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Links & Story */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-primary font-bold tracking-wider uppercase mb-3">
                <MessageSquare className="w-4 h-4" />
                <span>08 / START A CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight mb-4">
                Let&apos;s Build Something Meaningful
              </h2>

              <p className="text-txt-muted text-sm leading-relaxed mb-8">
                Have a project, idea, or opportunity in mind? Let&apos;s build something meaningful together.
              </p>

              {/* Direct Channels List */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-accent-primary/10 text-indigo-600 dark:text-accent-primary group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-bg-dark transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-txt-subtle font-bold uppercase">EMAIL</div>
                    <div className="text-sm font-semibold text-txt-main group-hover:text-indigo-600 dark:group-hover:text-accent-primary transition-colors">
                      {SOCIAL_LINKS.email}
                    </div>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-accent-primary/10 text-indigo-600 dark:text-accent-primary group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-bg-dark transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-txt-subtle font-bold uppercase">LINKEDIN</div>
                    <div className="text-sm font-semibold text-txt-main group-hover:text-indigo-600 dark:group-hover:text-accent-primary transition-colors">
                      linkedin.com/in/anshuman-singh-somvanshi-4a150b1bb
                    </div>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-accent-primary/10 text-indigo-600 dark:text-accent-primary group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:text-bg-dark transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-txt-subtle font-bold uppercase">GITHUB</div>
                    <div className="text-sm font-semibold text-txt-main group-hover:text-indigo-600 dark:group-hover:text-accent-primary transition-colors">
                      github.com/AnWho-main
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500 dark:text-txt-subtle font-mono text-xs pt-4 border-t border-slate-200 dark:border-border-dark">
              <MapPin className="w-4 h-4 text-indigo-600 dark:text-accent-primary shrink-0" />
              <span>Based in {profileData.location} • Available Worldwide</span>
            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="lg:col-span-7 bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark rounded-2xl p-6 sm:p-8 shadow-xl shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:shadow-none">
            <h3 className="text-xl font-bold text-txt-main mb-2">Send a Message</h3>
            <p className="text-slate-500 dark:text-txt-subtle text-xs font-mono mb-6">
              Messages dispatch directly to Anshuman&apos;s engineering inbox.
            </p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

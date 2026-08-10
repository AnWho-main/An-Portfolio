"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Layers, Code2, Cpu, Binary, Database, CheckCircle2, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { Container } from "@/components/ui/container";

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, any> = {
    Server,
    Layers,
    Code2,
    Cpu,
    Binary,
    Database,
  };

  return (
    <section id="services" className="relative py-20 bg-white dark:bg-bg-surface border-b border-slate-200/80 dark:border-border-dark transition-colors duration-300">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-primary font-bold tracking-wider uppercase mb-2">
            <Server className="w-4 h-4" />
            <span>07 / ENGINEERING SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-txt-main tracking-tight">
            Professional Engineering Services
          </h2>
          <p className="text-txt-muted text-sm mt-2 max-w-2xl">
            High-reliability technical services focused on backend architecture, REST API infrastructure, automated pipelines, and Web3 integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComp = iconMap[service.iconName] || Server;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:shadow-none"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-bg-elevated border border-slate-200 dark:border-border-dark flex items-center justify-center text-indigo-600 dark:text-accent-primary mb-4 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-txt-main mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-txt-muted text-xs leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono font-bold text-slate-500 dark:text-txt-subtle uppercase tracking-wider">
                      KEY DELIVERABLES:
                    </div>
                    {service.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-txt-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-accent-primary shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-border-dark flex items-center justify-between text-xs font-mono text-slate-500 dark:text-txt-subtle">
                  <span>PRODUCTION READY</span>
                  <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-accent-primary" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Database, Code, Cpu, Binary, Cloud, Sparkles } from "lucide-react";
import { techUniverseNodes } from "@/data/skills";

export const TechUniverseVisual: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>("backend");

  const categoryIcons: Record<string, any> = {
    backend: Server,
    database: Database,
    frontend: Code,
    ai: Cpu,
    web3: Binary,
    infra: Cloud,
  };

  const activeNodeInfo = techUniverseNodes.find((n) => n.id === selectedNode) || techUniverseNodes[1];

  return (
    <div className="rounded-2xl bg-white dark:bg-bg-card border border-slate-200 dark:border-border-dark p-6 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-border-dark">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-accent-primary animate-pulse" />
          <h3 className="font-mono text-sm font-bold text-txt-main tracking-wider">ENGINEERING STACK UNIVERSE</h3>
        </div>
        <span className="font-mono text-[11px] text-slate-600 dark:text-txt-subtle bg-slate-100 dark:bg-bg-surface px-2.5 py-1 rounded border border-slate-200 dark:border-border-dark shadow-sm">
          HOVER NODE TO EXPLORE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Node Network Visual */}
        <div className="md:col-span-7 relative flex items-center justify-center min-h-[300px] py-4">
          {/* Central Orbit Circle */}
          <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-slate-200 dark:border-border-dark animate-spin-slow pointer-events-none" />

          {/* Central Stack Core Node */}
          <div className="z-20 w-28 h-28 rounded-full bg-white dark:bg-bg-surface border-2 border-indigo-600 dark:border-accent-primary/80 flex flex-col items-center justify-center text-center p-2 shadow-lg">
            <span className="font-mono text-[10px] font-bold text-indigo-600 dark:text-accent-primary uppercase tracking-tighter">ENGINEERING</span>
            <span className="font-bold text-xs text-txt-main leading-tight mt-0.5">Anshuman&apos;s Core Stack</span>
          </div>

          {/* Orbiting Domain Nodes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {techUniverseNodes
              .filter((n) => n.id !== "core")
              .map((node, index) => {
                const total = 6;
                const angle = (index * (360 / total) * Math.PI) / 180;
                const radius = 135; // px distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const IconComp = categoryIcons[node.id] || Server;
                const isSelected = selectedNode === node.id;

                return (
                  <div
                    key={node.id}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="absolute pointer-events-auto"
                  >
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      onClick={() => setSelectedNode(node.id)}
                      onMouseEnter={() => setSelectedNode(node.id)}
                      className={`w-14 h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-md ${isSelected
                          ? "bg-white dark:bg-bg-surface border-2 border-indigo-600 dark:border-accent-primary text-txt-main shadow-indigo-500/20 ring-4 ring-indigo-500/20 scale-110"
                          : "bg-white dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-slate-600 dark:text-txt-muted hover:border-indigo-500"
                        }`}
                    >
                      <IconComp className="w-5 h-5 text-indigo-600 dark:text-accent-primary" />
                    </motion.button>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Selected Stack Details Inspector */}
        <div className="md:col-span-5 bg-slate-50 dark:bg-bg-surface border border-slate-200 dark:border-border-dark rounded-xl p-5 font-mono text-xs shadow-inner">
          <div className="text-[10px] text-indigo-600 dark:text-accent-primary uppercase tracking-wider font-bold mb-1">
            SELECTED DOMAIN NODE
          </div>
          <h4 className="text-lg font-bold text-txt-main mb-3 font-sans">
            {activeNodeInfo.label}
          </h4>

          <div className="space-y-2 mb-4">
            <div className="text-slate-600 dark:text-txt-subtle text-[11px] mb-2 font-sans">Associated Technologies & Protocols:</div>
            <div className="flex flex-wrap gap-1.5">
              {activeNodeInfo.tech?.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-white dark:bg-bg-elevated text-slate-800 dark:text-txt-main border border-slate-200 dark:border-border-dark font-mono text-xs shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-border-dark text-slate-600 dark:text-txt-subtle text-xs font-sans">
            Connected directly to backend logic, API integration pipelines, and database optimization layers.
          </div>
        </div>
      </div>
    </div>
  );
};

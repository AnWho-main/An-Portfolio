"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";

export const SystemStatusTicker: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % profileData.systemStatus.buildingItems.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-bg-surface border border-slate-200 dark:border-border-dark backdrop-blur-md font-mono text-xs shadow-sm">
      <div className="flex items-center gap-2 pr-3 border-r border-slate-200 dark:border-border-dark">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px] tracking-wider">
          {profileData.systemStatus.status}
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-hidden">
        <span className="text-slate-500 dark:text-txt-subtle font-semibold text-[11px] uppercase tracking-wider hidden sm:inline">
          BUILDING:
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-indigo-600 dark:text-accent-primary font-medium"
          >
            {profileData.systemStatus.buildingItems[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

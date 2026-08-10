"use client";

import React from "react";
import { Search } from "lucide-react";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
      {/* Category Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-indigo-600 text-white dark:bg-accent-primary dark:text-bg-dark shadow-md shadow-indigo-500/20"
                  : "bg-white dark:bg-bg-card text-slate-700 dark:text-txt-muted border border-slate-200 dark:border-border-dark hover:border-indigo-500 hover:text-slate-900 shadow-sm"
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Lightweight Search Input */}
      <div className="relative min-w-[240px]">
        <Search className="w-4 h-4 text-slate-400 dark:text-txt-subtle absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-white dark:bg-bg-surface border border-slate-200 dark:border-border-dark text-slate-900 dark:text-txt-main text-xs font-mono placeholder:text-slate-400 dark:placeholder:text-txt-subtle focus:outline-none focus:border-indigo-600 dark:focus:border-accent-primary transition-colors shadow-sm"
        />
      </div>
    </div>
  );
};

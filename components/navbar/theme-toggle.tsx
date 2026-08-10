"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-bg-surface border border-border-dark" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 px-3 rounded-full bg-bg-surface border border-border-dark text-txt-main hover:text-accent-primary hover:border-accent-primary transition-all duration-300 cursor-pointer shadow-sm flex items-center justify-center gap-1.5 font-mono text-xs"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <>
          <Moon className="w-4 h-4 text-sky-400" />
          <span className="hidden sm:inline text-sky-400 font-medium">Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline text-slate-800 dark:text-amber-400 font-medium">Light</span>
        </>
      )}
    </button>
  );
};

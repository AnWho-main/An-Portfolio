import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
}) => {
  const base = "inline-flex items-center font-mono rounded-full border font-medium transition-colors";
  
  const variants = {
    default: "bg-slate-100 dark:bg-bg-elevated text-slate-700 dark:text-txt-muted border-slate-200 dark:border-border-dark shadow-sm",
    accent: "bg-indigo-500/10 text-indigo-700 dark:text-accent-primary border-indigo-500/30 dark:border-accent-primary/30",
    success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30",
    outline: "bg-transparent text-txt-muted border-border-dark",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};

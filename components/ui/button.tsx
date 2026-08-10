import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 dark:bg-accent-primary dark:hover:bg-sky-400 text-white dark:text-bg-dark font-semibold shadow-md shadow-indigo-500/20 dark:shadow-accent-primary/25 hover:-translate-y-0.5",
    secondary:
      "bg-white dark:bg-bg-card hover:bg-slate-50 dark:hover:bg-bg-elevated text-slate-900 dark:text-txt-main border border-slate-200 dark:border-border-dark hover:border-indigo-500/50 dark:hover:border-accent-primary/40 shadow-sm hover:-translate-y-0.5",
    outline:
      "border border-slate-200 dark:border-border-dark hover:border-indigo-500 text-slate-700 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-accent-primary/10",
    ghost:
      "text-slate-600 dark:text-txt-muted hover:text-slate-900 dark:hover:text-txt-main hover:bg-slate-100 dark:hover:bg-bg-elevated/60 bg-transparent",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};

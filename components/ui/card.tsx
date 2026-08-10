import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glowOnHover = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-white dark:bg-bg-card/80 backdrop-blur-md border border-slate-200 dark:border-border-dark p-6 transition-all duration-300 relative overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:shadow-none",
        glowOnHover &&
          "hover:border-indigo-500/40 dark:hover:border-accent-primary/40 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

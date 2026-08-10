import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
  return (
    <div id={id} className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24", className)}>
      {children}
    </div>
  );
};

import React from "react";
import { cn } from "@/lib/utils";

interface CleanSheetProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function CleanSheet({ title, subtitle, children, className }: CleanSheetProps) {
  return (
    <div className={cn("bg-white w-full h-full flex flex-col p-6 rounded-sm", className)}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-brand-primary tracking-tighter leading-none">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs uppercase tracking-widest text-brand-muted mt-2 font-semibold">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex-1 w-full relative min-h-[300px]">
        {children}
      </div>
    </div>
  );
}

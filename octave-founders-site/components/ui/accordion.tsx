import * as React from "react";
import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

export function AccordionItem({ className, ...props }: React.HTMLAttributes<HTMLDetailsElement>) {
  return <details className={cn("group rounded-2xl border border-white/10 bg-white/5", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: React.HTMLAttributes<HTMLSummaryElement>) {
  return (
    <summary
      className={cn(
        "cursor-pointer list-none select-none px-5 py-4 text-sm font-medium text-white/90 outline-none",
        "flex items-center justify-between gap-3",
        className
      )}
      {...props}
    >
      {children}
      <span className="text-white/40 transition group-open:rotate-45">+</span>
    </summary>
  );
}

export function AccordionContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-5 pb-5 text-sm text-white/70", className)} {...props} />;
}

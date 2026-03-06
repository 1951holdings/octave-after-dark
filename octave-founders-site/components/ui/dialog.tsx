import * as React from "react";
import { cn } from "@/lib/utils";

type DialogContextValue = { open: boolean; setOpen: (v: boolean) => void };
const DialogContext = React.createContext<DialogContextValue | null>(null);

export function Dialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactElement }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) return children;
  const onClick = () => ctx.setOpen(true);
  return React.cloneElement(children, { onClick });
}

export function DialogContent({ className, children }: { className?: string; children: React.ReactNode }) {
  const ctx = React.useContext(DialogContext);
  if (!ctx || !ctx.open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={() => ctx.setOpen(false)} />
      <div
        className={cn(
          "relative mx-auto mt-24 w-[92%] max-w-lg rounded-2xl border border-white/10 bg-octave-panel p-5",
          className
        )}
      >
        {children}
        <button
          className="absolute right-3 top-3 rounded-lg px-2 py-1 text-white/60 hover:bg-white/10 hover:text-white"
          onClick={() => ctx.setOpen(false)}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1", className)} {...props} />;
}

export function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn("text-lg font-semibold", className)} {...props} />;
}

export function DialogDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-white/70", className)} {...props} />;
}

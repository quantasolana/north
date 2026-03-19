"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[var(--text-secondary)]"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          className={cn(
            "h-10 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-white placeholder:text-[var(--text-muted)] transition-colors duration-200",
            "focus:outline-none focus:border-[var(--border-cyan)] focus:ring-1 focus:ring-[var(--cyan)]/30",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-[var(--error)] focus:border-[var(--error)]",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs text-[var(--error)]">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

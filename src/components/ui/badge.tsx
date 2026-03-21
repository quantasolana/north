import { type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        success: "bg-green-500/10 text-green-400 border border-green-500/20",
        warning:
          "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
        error: "bg-red-500/10 text-red-400 border border-red-500/20",
        info: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
        default:
          "bg-[var(--coral-glow)] text-[var(--coral)] border border-[var(--border-coral)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

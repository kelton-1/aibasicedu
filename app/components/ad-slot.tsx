import { cn } from "@/lib/utils"

interface AdSlotProps {
  variant: "banner" | "sidebar" | "inline" | "footer"
  className?: string
}

export function AdSlot({ variant, className }: AdSlotProps) {
  const sizes = {
    banner: "h-24 md:h-28",
    sidebar: "h-64",
    inline: "h-20",
    footer: "h-24",
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-dashed border-border/50 bg-card/50 flex items-center justify-center",
        sizes[variant],
        className
      )}
      data-ad-slot={variant}
      aria-hidden="true"
    >
      <div className="text-center">
        <p className="text-xs text-muted-foreground/50">Sponsored</p>
      </div>
    </div>
  )
}

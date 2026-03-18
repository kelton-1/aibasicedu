"use client"

import { AdSlot } from "@/app/components/ad-slot"
import { cn } from "@/lib/utils"

interface NativeAdCardProps {
  className?: string
  adSlotId?: string
}

export function NativeAdCard({ className, adSlotId }: NativeAdCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 flex flex-col items-center justify-center",
        className
      )}
    >
      <p className="label-text text-muted-foreground/40 mb-3">Sponsored</p>
      <AdSlot variant="medium-rectangle" adSlotId={adSlotId} className="w-full" />
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AdSlotProps {
  variant: "banner" | "sidebar" | "inline" | "footer"
  className?: string
  adSlotId?: string
}

export function AdSlot({ variant, className, adSlotId }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const adsenseId = typeof window !== "undefined" ? undefined : undefined // client-only check

  const sizes = {
    banner: "h-24 md:h-28",
    sidebar: "h-64",
    inline: "h-20",
    footer: "h-24",
  }

  const formats = {
    banner: "horizontal",
    sidebar: "vertical",
    inline: "horizontal",
    footer: "horizontal",
  }

  useEffect(() => {
    if (adSlotId && typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch (e) {
        // AdSense not loaded
      }
    }
  }, [adSlotId])

  // If no AdSense slot ID, show placeholder
  if (!adSlotId) {
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
        <p className="text-xs text-muted-foreground/40">Sponsored</p>
      </div>
    )
  }

  return (
    <div ref={adRef} className={cn("overflow-hidden", className)}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={adSlotId}
        data-ad-format={formats[variant]}
        data-full-width-responsive="true"
      />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function StickyFooterCta() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.5)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [dismissed])

  if (dismissed || !visible) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm",
        "transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground hidden sm:block">
          Stay ahead in AI — get weekly insights delivered to your inbox.
        </p>
        <p className="text-sm text-muted-foreground sm:hidden">
          Get weekly AI insights.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            asChild
            size="sm"
            className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl text-xs h-8 px-4"
          >
            <a href="/get-started">
              Subscribe <ArrowRight className="ml-1.5 h-3 w-3" />
            </a>
          </Button>
          <button
            onClick={() => setDismissed(true)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

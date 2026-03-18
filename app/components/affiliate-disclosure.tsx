import { Info } from "lucide-react"

export function AffiliateDisclosure({ className }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-border/50 bg-card/50 px-4 py-3 flex items-start gap-3 ${className ?? ""}`}>
      <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
      <p className="text-xs text-muted-foreground leading-relaxed">
        Some links on this page are affiliate links. If you make a purchase through these links, we may earn a small commission at no extra cost to you. This helps support our free educational content.
      </p>
    </div>
  )
}

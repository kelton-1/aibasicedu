import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AffiliateToolCardProps {
  name: string
  description: string
  pricing: { free: string; pro: string }
  bestFor: string
  url: string
  category: string
  affiliateTag?: string
}

export function AffiliateToolCard({
  name,
  description,
  pricing,
  bestFor,
  url,
  category,
  affiliateTag,
}: AffiliateToolCardProps) {
  const trackedUrl = `${url}${url.includes("?") ? "&" : "?"}utm_source=aibasicedu&utm_medium=affiliate&utm_campaign=tools${affiliateTag ? `&ref=${affiliateTag}` : ""}`

  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-gold-light transition-colors duration-300">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{category}</p>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Free tier</span>
          <span className="text-foreground">{pricing.free}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Pro</span>
          <span className="text-gold">{pricing.pro}</span>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-4">
        <span className="text-gold">Best for:</span> {bestFor}
      </p>

      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
        Some links may be affiliate links. Recommendations are editorially selected using our criteria for features, pricing, usability, and fit.
      </p>

      <Button
        asChild
        className="w-full bg-gold hover:bg-gold-light text-black font-medium rounded-xl text-sm h-9"
      >
        <a href={trackedUrl} target="_blank" rel="noopener noreferrer">
          Try {name} <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
        </a>
      </Button>
    </div>
  )
}

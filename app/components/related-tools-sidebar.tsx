import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AdSlot } from "@/app/components/ad-slot"

interface RelatedTool {
  name: string
  description: string
  url: string
  price?: string
}

interface RelatedToolsSidebarProps {
  tools: RelatedTool[]
  adSlotId?: string
}

export function RelatedToolsSidebar({ tools, adSlotId }: RelatedToolsSidebarProps) {
  return (
    <>
      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="label-text text-gold mb-4">Related Tools</p>
        <div className="space-y-4">
          {tools.map((tool) => {
            const trackedUrl = `${tool.url}${tool.url.includes("?") ? "&" : "?"}utm_source=aibasicedu&utm_medium=sidebar&utm_campaign=related`
            return (
              <div key={tool.name} className="group">
                <a
                  href={trackedUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block"
                >
                  <h4 className="text-sm font-medium text-foreground group-hover:text-gold-light transition-colors duration-300">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
                  {tool.price && (
                    <p className="text-xs text-gold mt-1">{tool.price}</p>
                  )}
                </a>
              </div>
            )
          })}
        </div>
        <Button
          asChild
          variant="outline"
          className="w-full mt-4 border-border bg-transparent hover:bg-accent text-foreground rounded-xl text-xs h-8"
        >
          <a href="/tools">
            View All Tools <ArrowUpRight className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </div>
      <AdSlot variant="sticky-sidebar" adSlotId={adSlotId} />
    </>
  )
}

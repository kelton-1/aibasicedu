import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContentWithSidebarProps {
  children: ReactNode
  sidebar: ReactNode
  className?: string
}

export function ContentWithSidebar({ children, sidebar, className }: ContentWithSidebarProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-8", className)}>
      <main className="flex-1 min-w-0">{children}</main>
      <aside className="w-full lg:w-72 shrink-0">
        <div className="lg:sticky lg:top-24 space-y-6">{sidebar}</div>
      </aside>
    </div>
  )
}

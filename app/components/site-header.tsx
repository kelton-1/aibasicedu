import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"
import { MobileNav } from "@/app/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="section-container flex h-14 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2 group">
          <span className="text-lg font-semibold tracking-tight gold-text">
            AI Learning Hub
          </span>
        </Link>
        <div className="hidden md:flex flex-1">
          <MainNav />
        </div>
        <div className="flex items-center space-x-2 ml-auto">
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              size="sm"
              className="h-8 bg-gold hover:bg-gold-light text-black font-medium rounded-lg px-4 text-xs"
            >
              Sign In
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

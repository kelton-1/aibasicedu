import Link from "next/link"
import { MainNav } from "@/app/components/main-nav"
import { MobileNav } from "@/app/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">AI Learning Hub</span>
        </Link>
        <div className="hidden md:flex">
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="hidden md:flex">
              <Button variant="outline" size="icon" className="mr-2">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button>Sign In</Button>
            </div>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}


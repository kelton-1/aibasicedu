import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2025 AI Learning Hub. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/privacy">Privacy</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/terms">Terms</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}


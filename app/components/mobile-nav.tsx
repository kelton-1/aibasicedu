"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search } from "lucide-react"
import { MOBILE_NAV_ITEMS } from "@/app/lib/route-map"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] bg-background border-border p-0">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border flex items-center space-x-2">
            <Image
              src="/logo-header.png"
              alt="AI Learning Hub"
              width={40}
              height={22}
              className="h-6 w-auto"
            />
            <span className="text-lg font-semibold tracking-tight gold-text">
              AI Learning Hub
            </span>
          </div>
          <div className="flex-1 py-4 px-3">
            {MOBILE_NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="p-4 border-t border-border space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm h-9 rounded-lg">
              <Search className="h-4 w-4 mr-2" /> Search
            </Button>
            <Button className="w-full h-9 bg-gold hover:bg-gold-light text-black font-medium text-sm rounded-lg">
              Sign In
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

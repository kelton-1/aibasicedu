"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, BookOpen, Lightbulb, Newspaper, Compass, BookMarked, GraduationCap, Search } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <span className="font-bold">AI Learning Hub</span>
          </Link>
          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium">
              Home
            </Link>
            <Link href="/glossary" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-2" />
              Glossary
            </Link>
            <Link href="/prompts" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium">
              <Lightbulb className="h-4 w-4 mr-2" />
              Prompts
            </Link>
            <Link href="/news" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium">
              <Newspaper className="h-4 w-4 mr-2" />
              News
            </Link>
            <Link href="/tutorials" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium">
              <GraduationCap className="h-4 w-4 mr-2" />
              Tutorials
            </Link>
            <Link href="/personalize" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium">
              <Compass className="h-4 w-4 mr-2" />
              Personalize
            </Link>
            <Link href="/dashboard" onClick={() => setOpen(false)} className="flex items-center text-sm font-medium">
              <BookMarked className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
          </div>
          <div className="mt-6 flex flex-col space-y-3">
            <Button variant="outline" className="justify-start">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button className="justify-start">Sign In</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}


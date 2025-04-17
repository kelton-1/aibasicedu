import Link from "next/link"
import { BookOpen, Lightbulb, Newspaper, Compass, BookMarked, GraduationCap } from "lucide-react"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link
        href="/glossary"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <BookOpen className="h-4 w-4 mr-1" />
        Glossary
      </Link>
      <Link
        href="/prompts"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <Lightbulb className="h-4 w-4 mr-1" />
        Prompts
      </Link>
      <Link
        href="/news"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <Newspaper className="h-4 w-4 mr-1" />
        News
      </Link>
      <Link
        href="/tutorials"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <GraduationCap className="h-4 w-4 mr-1" />
        Tutorials
      </Link>
      <Link
        href="/personalize"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <Compass className="h-4 w-4 mr-1" />
        Personalize
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary flex items-center"
      >
        <BookMarked className="h-4 w-4 mr-1" />
        Dashboard
      </Link>
    </nav>
  )
}


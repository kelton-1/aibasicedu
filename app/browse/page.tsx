import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function BrowsePage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Browse Resources</h1>
      <p className="text-muted-foreground">Discover tutorials, prompts, news, and glossary entries to support your AI learning journey.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function QuickGuidesPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Quick Start Guides</h1>
      <p className="text-muted-foreground">Start with concise, beginner-friendly guides to core AI concepts and workflows.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

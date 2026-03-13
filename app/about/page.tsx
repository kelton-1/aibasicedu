import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function AboutPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">About AI Learning Hub</h1>
      <p className="text-muted-foreground">We help learners build AI skills with practical guides, curated tutorials, and personalized recommendations.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

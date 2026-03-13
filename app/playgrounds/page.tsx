import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function PlaygroundsPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Playgrounds</h1>
      <p className="text-muted-foreground">Experiment with interactive AI playgrounds to practice prompting and model behavior.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

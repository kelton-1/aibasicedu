import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function ProjectsPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-muted-foreground">Build hands-on AI projects to apply concepts and strengthen your portfolio.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function CommunityPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Community</h1>
      <p className="text-muted-foreground">Connect with other learners, ask questions, and share your progress.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

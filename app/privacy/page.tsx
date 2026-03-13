import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function PrivacyPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">Learn how we collect, use, and protect your data while you use AI Learning Hub.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

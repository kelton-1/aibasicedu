import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function TermsPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="text-muted-foreground">Review the rules and expectations for using AI Learning Hub resources and services.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

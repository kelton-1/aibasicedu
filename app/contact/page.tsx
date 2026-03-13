import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function ContactPage() {
  return (
    <main className="container py-12 space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-muted-foreground">Have a question or feedback? Reach out and our team will get back to you soon.</p>
      <Link href={ROUTE_MAP.home} className="text-primary underline underline-offset-4">
        Back to home
      </Link>
    </main>
  )
}

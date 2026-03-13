"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function ErrorTestPage() {
  const searchParams = useSearchParams()

  if (searchParams.get("crash") === "1") {
    throw new Error("Intentional render exception for error boundary verification")
  }

  return (
    <div className="container py-16">
      <h1 className="mb-4 text-2xl font-bold">Error Boundary Test Route</h1>
      <p className="mb-6 text-gray-600">Use the button below to intentionally trigger a render exception.</p>
      <Button asChild>
        <Link href="/error-test?crash=1">Trigger Render Error</Link>
      </Button>
    </div>
  )
}

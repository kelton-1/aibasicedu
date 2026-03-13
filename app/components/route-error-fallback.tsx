"use client"

import Link from "next/link"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface RouteErrorFallbackProps {
  error: Error & { digest?: string }
  reset: () => void
  title?: string
  description?: string
}

export function RouteErrorFallback({
  error,
  reset,
  title = "Something went wrong",
  description = "An unexpected rendering error occurred in this route.",
}: RouteErrorFallbackProps) {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-4 rounded-full bg-red-100 p-4">
        <AlertTriangle className="h-8 w-8 text-red-600" />
      </div>
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <p className="mb-2 max-w-md text-gray-600">{description}</p>
      <p className="mb-6 max-w-md text-xs text-gray-500">{error.message}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reload Page
        </Button>
        <Button asChild variant="ghost">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

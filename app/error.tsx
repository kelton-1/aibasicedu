"use client"

import { useEffect } from "react"

import { RouteErrorFallback } from "@/app/components/route-error-fallback"

export default function GlobalRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Route error boundary: app", error)
  }, [error])

  return (
    <RouteErrorFallback
      error={error}
      reset={reset}
      title="We couldn't load this page"
      description="The page failed to render. Try again or reload to recover."
    />
  )
}

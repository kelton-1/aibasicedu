"use client"

import { useEffect } from "react"

import { RouteErrorFallback } from "@/app/components/route-error-fallback"

export default function CompaniesError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Route error boundary: companies", error)
  }, [error])

  return (
    <RouteErrorFallback
      error={error}
      reset={reset}
      title="Companies section failed to render"
      description="We couldn't render company content right now."
    />
  )
}

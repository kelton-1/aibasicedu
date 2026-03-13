"use client"

import { useEffect } from "react"

import { RouteErrorFallback } from "@/app/components/route-error-fallback"

export default function TutorialsError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Route error boundary: tutorials", error)
  }, [error])

  return (
    <RouteErrorFallback
      error={error}
      reset={reset}
      title="Tutorials failed to render"
      description="Something broke while rendering this tutorial route."
    />
  )
}

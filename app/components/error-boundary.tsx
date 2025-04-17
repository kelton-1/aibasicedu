"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (event: ErrorEvent) => {
      event.preventDefault()
      setHasError(true)
      setError(new Error(event.message))

      // Log error to console or analytics service
      console.error("Error caught by boundary:", event.error)
    }

    window.addEventListener("error", errorHandler)
    return () => window.removeEventListener("error", errorHandler)
  }, [])

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6 max-w-md">
          We've encountered an error while loading this content. Our team has been notified.
        </p>
        <div className="space-x-4">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Refresh Page
          </Button>
          <Button
            onClick={() => {
              setHasError(false)
              setError(null)
            }}
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}


"use client"

import { useEffect } from "react"

export function ErrorTelemetry() {
  useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => {
      console.error("window.onerror telemetry", event.error ?? event.message)
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("unhandledrejection telemetry", event.reason)
    }

    window.addEventListener("error", handleWindowError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("error", handleWindowError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  return null
}

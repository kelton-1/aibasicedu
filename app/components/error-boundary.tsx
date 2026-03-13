"use client"

import type React from "react"
import { Component } from "react"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Global error boundary caught an exception", { error, errorInfo })
  }

  private handleTryAgain = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 rounded-full bg-red-100 p-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Something went wrong</h2>
          <p className="mb-6 max-w-md text-gray-600">
            We hit an unexpected issue while rendering this page. You can retry or refresh the app.
          </p>
          <div className="space-x-4">
            <Button variant="outline" onClick={() => window.location.reload()}>
              Refresh Page
            </Button>
            <Button onClick={this.handleTryAgain}>Try Again</Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

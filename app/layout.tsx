import type React from "react"

import { AnimatedBackground } from "@/app/components/animated-background"
import { ErrorBoundary } from "@/app/components/error-boundary"
import { ErrorTelemetry } from "@/app/components/error-telemetry"
import { LinkChecker } from "@/app/components/link-checker"
import { SiteFooter } from "@/app/components/site-footer"
import { SiteHeader } from "@/app/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

export const metadata = {
  title: "AI Learning Hub",
  description: "Personalized AI education for everyone",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ErrorBoundary>
            <div className="relative flex min-h-screen flex-col">
              <AnimatedBackground />
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            {process.env.NODE_ENV === "development" && <LinkChecker />}
            <ErrorTelemetry />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}

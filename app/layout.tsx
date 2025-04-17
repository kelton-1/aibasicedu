import type React from "react"
import { SiteHeader } from "@/app/components/site-header"
import { SiteFooter } from "@/app/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedBackground } from "@/app/components/animated-background"
import { LinkChecker } from "@/app/components/link-checker"
import { ErrorBoundary } from "@/app/components/error-boundary"
import "./globals.css"

export const metadata = {
  title: "AI Learning Hub",
  description: "Personalized AI education for everyone",
    generator: 'v0.dev'
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
            {/* Only include in development */}
            {process.env.NODE_ENV === "development" && <LinkChecker />}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
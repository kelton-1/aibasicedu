import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/app/components/site-header"
import { SiteFooter } from "@/app/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedBackground } from "@/app/components/animated-background"
import { LinkChecker } from "@/app/components/link-checker"
import { ErrorBoundary } from "@/app/components/error-boundary"
import { OrganizationJsonLd, WebsiteJsonLd } from "@/app/components/json-ld"
import { GoogleAnalytics } from "@/app/components/analytics"
import { GoogleAdSense } from "@/app/components/adsense"
import { StickyFooterCta } from "@/app/components/sticky-footer-cta"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aibasicedu.com"),
  title: {
    default: "AI Learning Hub",
    template: "%s | AI Learning Hub",
  },
  description:
    "Personalized AI education for everyone, from beginner-friendly lessons to advanced tutorials and industry insights.",
  keywords: [
    "AI learning",
    "artificial intelligence tutorials",
    "prompt engineering",
    "machine learning basics",
    "AI companies",
    "AI news",
  ],
  openGraph: {
    type: "website",
    siteName: "AI Learning Hub",
    title: "AI Learning Hub",
    description:
      "Learn AI with guided tutorials, company deep-dives, and the latest news in one place.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI Learning Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Learning Hub",
    description: "Personalized AI education for everyone.",
    images: ["/twitter-image"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <GoogleAnalytics />
        <GoogleAdSense />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ErrorBoundary>
            <div className="relative flex min-h-screen flex-col">
              <AnimatedBackground />
              <SiteHeader />
              <main className="flex-1 relative">{children}</main>
              <SiteFooter />
              <StickyFooterCta />
            </div>
            {process.env.NODE_ENV === "development" && <LinkChecker />}
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}

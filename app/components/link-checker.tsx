"use client"

import { useEffect } from "react"

// This component checks for broken links on the page
export function LinkChecker() {
  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") return

    const checkLinks = () => {
      const links = document.querySelectorAll("a")

      links.forEach((link) => {
        const href = link.getAttribute("href")

        // Skip external links, anchor links, and javascript: links
        if (
          !href ||
          href.startsWith("http") ||
          href.startsWith("#") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:") ||
          href.startsWith("javascript:")
        ) {
          return
        }

        // Add a visual indicator for development
        link.dataset.checked = "pending"

        // Simple check if the route exists in Next.js
        // This is a basic check and won't catch all issues
        fetch(href, { method: "HEAD" })
          .then((response) => {
            if (response.ok) {
              link.dataset.checked = "valid"
            } else {
              console.warn(`Potentially broken link: ${href}`)
              link.dataset.checked = "invalid"
              link.style.outline = "2px solid red"
              link.title = "Warning: This link may be broken"
            }
          })
          .catch(() => {
            console.warn(`Potentially broken link: ${href}`)
            link.dataset.checked = "invalid"
            link.style.outline = "2px solid red"
            link.title = "Warning: This link may be broken"
          })
      })
    }

    // Run the check after the page has loaded
    setTimeout(checkLinks, 1000)
  }, [])

  return null
}


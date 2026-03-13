import type { MetadataRoute } from "next"

const baseUrl = "https://www.aibasicedu.com"

const publicRoutes = [
  "",
  "/tutorials",
  "/companies",
  "/news",
  "/glossary",
  "/prompts",
  "/get-started",
  "/personalize",
  "/dashboard",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }))
}

import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aibasicedu.com"

  const routes = [
    "",
    "/about",
    "/browse",
    "/companies",
    "/companies/openai",
    "/companies/google-deepmind",
    "/contact",
    "/dashboard",
    "/get-started",
    "/glossary",
    "/news",
    "/personalize",
    "/playgrounds",
    "/privacy",
    "/projects",
    "/prompts",
    "/quick-guides",
    "/terms",
    "/tutorials",
    "/tutorials/prompt-engineering-basics",
    "/tutorials/understanding-llms",
    "/tutorials/image-generation-playground",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : route.startsWith("/news") ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/tutorials" ? 0.9 : route === "/glossary" ? 0.9 : 0.7,
  }))
}

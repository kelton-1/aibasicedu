import type { MetadataRoute } from "next"
import { staticCompanyDetailList } from "@/app/lib/data/company-details"
import { buildSitemap, type StaticRouteConfig } from "@/app/lib/sitemap"
import { staticTutorials } from "@/app/lib/data/tutorials-data-static"

const baseUrl = "https://www.aibasicedu.com"

const topLevelRoutes: StaticRouteConfig[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/get-started", changeFrequency: "weekly", priority: 0.95 },
  { path: "/browse", changeFrequency: "weekly", priority: 0.92 },
  { path: "/tutorials", changeFrequency: "weekly", priority: 0.9 },
  { path: "/tools", changeFrequency: "weekly", priority: 0.88 },
  { path: "/compare", changeFrequency: "weekly", priority: 0.86 },
  { path: "/quick-guides", changeFrequency: "weekly", priority: 0.86 },
  { path: "/prompts", changeFrequency: "weekly", priority: 0.85 },
  { path: "/companies", changeFrequency: "weekly", priority: 0.84 },
  { path: "/news", changeFrequency: "daily", priority: 0.84 },
  { path: "/glossary", changeFrequency: "weekly", priority: 0.82 },
  { path: "/playgrounds", changeFrequency: "weekly", priority: 0.78 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.76 },
  { path: "/community", changeFrequency: "weekly", priority: 0.72 },
  { path: "/about", changeFrequency: "monthly", priority: 0.68 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.54 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildSitemap({
    baseUrl,
    staticRoutes: topLevelRoutes,
    staticCollections: [
      {
        items: staticCompanyDetailList,
        getPath: (company) => `/companies/${company.slug}`,
        getLastModified: (company) => company.timeline[0]?.date,
        changeFrequency: "monthly",
        priority: 0.74,
      },
      {
        items: staticTutorials.filter((tutorial) => tutorial.status === "published"),
        getPath: (tutorial) => `/tutorials/${tutorial.id}`,
        getLastModified: (tutorial) => tutorial.updated_at,
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ],
    supabaseCollections: [
      {
        table: "companies",
        select: "slug,updated_at,created_at,status",
        getPath: (company) => `/companies/${company.slug}`,
        getLastModified: (company) => company.updated_at || company.created_at,
        orderBy: "updated_at",
        changeFrequency: "monthly",
        priority: 0.74,
      },
      {
        table: "tutorials",
        select: "slug,updated_at,created_at,status",
        getPath: (tutorial) => `/tutorials/${tutorial.slug}`,
        getLastModified: (tutorial) => tutorial.updated_at || tutorial.created_at,
        orderBy: "updated_at",
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ],
  })
}

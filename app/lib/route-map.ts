export const ROUTE_MAP = {
  home: "/",
  about: "/about",
  browse: "/browse",
  companies: "/companies",
  community: "/community",
  contact: "/contact",
  dashboard: "/dashboard",
  getStarted: "/get-started",
  glossary: "/glossary",
  news: "/news",
  personalize: "/personalize",
  playgrounds: "/playgrounds",
  privacy: "/privacy",
  projects: "/projects",
  prompts: "/prompts",
  quickGuides: "/quick-guides",
  terms: "/terms",
  tools: "/tools",
  tutorials: "/tutorials",
} as const

export const INTERNAL_ROUTES = Object.values(ROUTE_MAP)

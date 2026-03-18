export const ROUTE_MAP = {
  home: "/",
  about: "/about",
  browse: "/browse",
  companies: "/companies",
  community: "/community",
  compare: "/compare",
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

/** Navigation items shared between desktop and mobile navs */
export const NAV_ITEMS = [
  { href: ROUTE_MAP.glossary, label: "Glossary" },
  { href: ROUTE_MAP.tutorials, label: "Tutorials" },
  { href: ROUTE_MAP.prompts, label: "Prompts" },
  { href: ROUTE_MAP.news, label: "News" },
  { href: ROUTE_MAP.tools, label: "Tools" },
  { href: ROUTE_MAP.companies, label: "Companies" },
  { href: ROUTE_MAP.dashboard, label: "Dashboard" },
] as const

/** Extended navigation items for mobile (includes Home + Personalize) */
export const MOBILE_NAV_ITEMS = [
  { href: ROUTE_MAP.home, label: "Home" },
  ...NAV_ITEMS,
  { href: ROUTE_MAP.personalize, label: "Personalize" },
] as const

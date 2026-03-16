const BASE_URL = "https://www.aibasicedu.com"

export function getCanonicalUrl(path: string): string {
  return `${BASE_URL}${path}`
}

export function generatePageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
}) {
  const url = getCanonicalUrl(path)
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | AI Learning Hub`,
      description,
      url,
      type: "website" as const,
    },
    twitter: {
      title: `${title} | AI Learning Hub`,
      description,
    },
  }
}

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>
}

export interface BreadcrumbListItem {
  name: string
  url: string
}

export interface ItemListEntry {
  name: string
  url?: string
  description?: string
  position?: number
  itemType?: string
  additionalFields?: Record<string, unknown>
}

export interface DefinedTermEntry {
  name: string
  description: string
  url?: string
  inDefinedTermSet?: string
  termCode?: string
}

export interface EditorialSection {
  heading: string
  body: string
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  )
}

function buildEditorialSections(sections: EditorialSection[], url?: string) {
  return sections.map((section) => ({
    "@type": "WebPageElement",
    name: section.heading,
    text: section.body,
    ...(url ? { url: `${url}#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}` } : {}),
  }))
}

export function BreadcrumbListJsonLd({ items }: { items: BreadcrumbListItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}

export function ItemListJsonLd({
  name,
  description,
  url,
  items,
}: {
  name: string
  description?: string
  url?: string
  items: ItemListEntry[]
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        ...(description ? { description } : {}),
        ...(url ? { url } : {}),
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: item.position ?? index + 1,
          item: {
            "@type": item.itemType ?? "Thing",
            name: item.name,
            ...(item.url ? { url: item.url } : {}),
            ...(item.description ? { description: item.description } : {}),
            ...(item.additionalFields ?? {}),
          },
        })),
      }}
    />
  )
}

export function DefinedTermSetJsonLd({
  name,
  description,
  url,
  terms,
}: {
  name: string
  description?: string
  url?: string
  terms: DefinedTermEntry[]
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name,
        ...(description ? { description } : {}),
        ...(url ? { url } : {}),
        hasDefinedTerm: terms.map((term) => ({
          "@type": "DefinedTerm",
          name: term.name,
          description: term.description,
          ...(term.url ? { url: term.url } : {}),
          ...(term.inDefinedTermSet ? { inDefinedTermSet: term.inDefinedTermSet } : {}),
          ...(term.termCode ? { termCode: term.termCode } : {}),
        })),
      }}
    />
  )
}

export function CollectionPageJsonLd({
  title,
  description,
  url,
  breadcrumbs,
  lastReviewed,
  sections,
  mainEntity,
}: {
  title: string
  description: string
  url: string
  breadcrumbs?: BreadcrumbListItem[]
  lastReviewed?: string
  sections?: EditorialSection[]
  mainEntity?: Record<string, unknown>
}) {
  const data: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url,
      ...(lastReviewed ? { dateModified: lastReviewed } : {}),
      ...(sections?.length ? { hasPart: buildEditorialSections(sections, url) } : {}),
      ...(mainEntity ? { mainEntity } : {}),
    },
  ]

  if (breadcrumbs?.length) {
    data.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    })
  }

  return <JsonLd data={data} />
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "AI Learning Hub",
        url: "https://www.aibasicedu.com",
        description: "Personalized AI education for everyone — from complete beginners to seasoned experts.",
        sameAs: [],
        logo: "https://www.aibasicedu.com/logo.png",
        foundingDate: "2025",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: "https://www.aibasicedu.com/contact",
        },
      }}
    />
  )
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "AI Learning Hub",
        url: "https://www.aibasicedu.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.aibasicedu.com/glossary?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  modifiedAt,
  category,
}: {
  title: string
  description: string
  url: string
  publishedAt: string
  modifiedAt?: string
  category?: string
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished: publishedAt,
        dateModified: modifiedAt || publishedAt,
        author: {
          "@type": "Organization",
          name: "AI Learning Hub",
        },
        publisher: {
          "@type": "Organization",
          name: "AI Learning Hub",
          url: "https://www.aibasicedu.com",
        },
        ...(category && { articleSection: category }),
      }}
    />
  )
}

export function CourseJsonLd({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name: title,
        description,
        url,
        provider: {
          "@type": "Organization",
          name: "AI Learning Hub",
          url: "https://www.aibasicedu.com",
        },
        isAccessibleForFree: true,
        educationalLevel: "Beginner",
      }}
    />
  )
}

export function FAQJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  )
}

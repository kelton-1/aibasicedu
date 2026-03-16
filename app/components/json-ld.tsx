interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
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

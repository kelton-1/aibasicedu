import type { Metadata } from "next"
import { FadeIn } from "@/app/components/fade-in"
import { AffiliateToolCard } from "@/app/components/affiliate-tool-card"
import { AdSlot } from "@/app/components/ad-slot"
import { aiTools } from "@/app/lib/data/tools-data"
import { NewsletterSubscription } from "@/app/components/newsletter-subscription"
import { CollectionPageJsonLd } from "@/app/components/json-ld"

export const metadata: Metadata = {
  title: "Best AI Tools 2026 — Compared & Ranked",
  description: "Compare the best AI tools in 2026. ChatGPT vs Claude vs Gemini vs Copilot — pricing, features, and which one is right for you.",
  keywords: ["best AI tools", "ChatGPT vs Claude", "AI tools comparison", "AI tools pricing 2026"],
}

const pageUrl = "https://www.aibasicedu.com/tools"
const lastReviewed = "2026-03-18"
const methodologySections = [
  {
    heading: "Who these tool recommendations are for",
    body: "This directory is for learners, operators, creators, and teams who want a practical shortlist of AI tools by use case instead of a vendor-by-vendor feature dump.",
  },
  {
    heading: "How we curate the directory",
    body: "We organize tools by category, summarize their main strengths, and compare fit, pricing, and intended workflows so readers can narrow choices quickly before deeper product research.",
  },
  {
    heading: "Last reviewed",
    body: "Last reviewed on March 18, 2026. We revise rankings and copy whenever positioning, pricing, or best-fit recommendations materially change.",
  },
  {
    heading: "Recommendation criteria",
    body: "Recommendations emphasize category fit, pricing clarity, quality of output, workflow coverage, ease of adoption, and the specific audience each tool serves best.",
  },
] as const

export default function ToolsPage() {
  const categories = [
    { key: "chatbot", label: "AI Assistants" },
    { key: "coding", label: "Coding Tools" },
    { key: "image", label: "Image Generation" },
    { key: "research", label: "Research" },
    { key: "productivity", label: "Productivity" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <CollectionPageJsonLd
        title="Best AI Tools 2026 — Compared & Ranked"
        description="Compare the best AI tools in 2026. ChatGPT vs Claude vs Gemini vs Copilot — pricing, features, and which one is right for you."
        url={pageUrl}
        breadcrumbs={[
          { name: "Home", url: "https://www.aibasicedu.com" },
          { name: "Tools", url: pageUrl },
        ]}
        lastReviewed={lastReviewed}
        sections={[...methodologySections]}
        mainEntity={{
          "@type": "ItemList",
          name: "AI tools directory",
          numberOfItems: aiTools.length,
          itemListElement: aiTools.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: tool.name,
              description: tool.description,
              applicationCategory: tool.category,
              offers: {
                "@type": "AggregateOffer",
                lowPrice: tool.pricing.pro.replace(/[^0-9.]/g, "") || undefined,
                priceCurrency: "USD",
              },
              audience: { "@type": "Audience", audienceType: tool.bestFor },
            },
          })),
        }}
      />

      <section className="w-full py-24 md:py-32">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn direction="up" delay={50}><p className="label-text mb-4">Tools & Resources</p></FadeIn>
            <FadeIn direction="up" delay={150}><h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">The best <span className="gold-text">AI tools</span> in 2026</h1></FadeIn>
            <FadeIn direction="up" delay={250}><p className="mt-6 text-lg text-muted-foreground leading-relaxed">We test and compare every major AI tool so you don&apos;t have to. Honest recommendations based on real usage.</p></FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20" aria-labelledby="tools-methodology">
        <div className="section-container">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <FadeIn direction="up" delay={50}><div className="mb-8"><p className="label-text mb-3">Editorial Standards</p><h2 id="tools-methodology" className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">How we curate and rank tools</h2></div></FadeIn>
            <div className="grid gap-6 md:grid-cols-2">
              {methodologySections.map((section, index) => (
                <FadeIn key={section.heading} direction="up" delay={100 + index * 50}>
                  <section id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} className="rounded-2xl border border-border/80 bg-background p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{section.body}</p>
                  </section>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-container mb-12"><AdSlot variant="banner" /></div>

      {categories.map((cat) => {
        const tools = aiTools.filter((t) => t.category === cat.key)
        if (tools.length === 0) return null
        return (
          <section key={cat.key} className="w-full py-12">
            <div className="section-container">
              <FadeIn direction="up" delay={100}><p className="label-text mb-3">{cat.label}</p><div className="gold-line mb-8" /></FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool, i) => (
                  <FadeIn key={tool.name} direction="up" delay={100 + i * 80}>
                    <AffiliateToolCard
                      name={tool.name}
                      description={tool.description}
                      pricing={tool.pricing}
                      bestFor={tool.bestFor}
                      url={tool.url}
                      category={cat.label}
                      affiliateTag={tool.affiliateTag}
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <div className="section-container my-12"><AdSlot variant="banner" /></div>
      <section className="w-full py-16 md:py-20"><div className="section-container"><div className="max-w-2xl mx-auto"><NewsletterSubscription /></div></div></section>
    </div>
  )
}

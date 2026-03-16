import type { Metadata } from "next"
import { FadeIn } from "@/app/components/fade-in"
import { AffiliateToolCard } from "@/app/components/affiliate-tool-card"
import { AdSlot } from "@/app/components/ad-slot"
import { aiTools } from "@/app/lib/data/tools-data"
import { NewsletterSubscription } from "@/app/components/newsletter-subscription"

export const metadata: Metadata = {
  title: "Best AI Tools 2026 — Compared & Ranked",
  description: "Compare the best AI tools in 2026. ChatGPT vs Claude vs Gemini vs Copilot — pricing, features, and which one is right for you.",
  keywords: ["best AI tools", "ChatGPT vs Claude", "AI tools comparison", "AI tools pricing 2026"],
}

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
      {/* Hero */}
      <section className="w-full py-24 md:py-32">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn direction="up" delay={50}>
              <p className="label-text mb-4">Tools & Resources</p>
            </FadeIn>
            <FadeIn direction="up" delay={150}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                The best <span className="gold-text">AI tools</span> in 2026
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={250}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We test and compare every major AI tool so you don&apos;t have to. Honest recommendations based on real usage.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <div className="section-container mb-12">
        <AdSlot variant="banner" />
      </div>

      {/* Tools by category */}
      {categories.map((cat) => {
        const tools = aiTools.filter((t) => t.category === cat.key)
        if (tools.length === 0) return null
        return (
          <section key={cat.key} className="w-full py-12">
            <div className="section-container">
              <FadeIn direction="up" delay={100}>
                <p className="label-text mb-3">{cat.label}</p>
                <div className="gold-line mb-8" />
              </FadeIn>
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
                    />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom ad */}
      <div className="section-container my-12">
        <AdSlot variant="banner" />
      </div>

      {/* Newsletter */}
      <section className="w-full py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <NewsletterSubscription />
          </div>
        </div>
      </section>
    </div>
  )
}

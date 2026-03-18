import type { Metadata } from "next"
import { Check, X } from "lucide-react"
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

const pageSections = {
  whoItsFor: [
    "People choosing their first serious AI subscription and wanting practical tradeoffs instead of hype.",
    "Teams comparing assistants, coding tools, and creative apps across different budgets and workflows.",
    "Buyers who need a fast way to see strengths, weaknesses, and realistic alternatives in one place.",
  ],
  howWeEvaluate: [
    "Daily usability: how quickly a tool becomes valuable for common tasks without a steep setup cost.",
    "Workflow fit: whether the product integrates naturally into coding, research, writing, or media creation habits.",
    "Value for money: how much capability you get on free and paid tiers relative to likely usage.",
    "Consistency: whether outputs stay reliable across repeated prompts, longer sessions, and collaborative work.",
  ],
  faqs: [
    {
      question: "Should I start with a general assistant or a specialist tool?",
      answer:
        "Start with a general assistant like ChatGPT, Claude, or Gemini if your work spans writing, analysis, and ideation. Choose a specialist when one workflow dominates, like Cursor for coding or Midjourney for visual generation.",
    },
    {
      question: "Are paid tiers worth it?",
      answer:
        "Usually yes if you use AI weekly for meaningful work. Paid plans typically unlock stronger models, fewer caps, better collaboration features, and a smoother experience during heavy usage.",
    },
    {
      question: "How should I compare alternatives?",
      answer:
        "Look at the output you need, the app you already live in, and how much review work remains after generation. The best tool is the one that removes the most friction from your real workflow.",
    },
  ],
}

export default function ToolsPage() {
  const categories = [
    { key: "chatbot", label: "AI Assistants" },
    { key: "coding", label: "Coding Tools" },
    { key: "image", label: "Image Generation" },
    { key: "research", label: "Research" },
    { key: "productivity", label: "Productivity" },
  ] as const

  return (
    <div className="flex flex-col min-h-screen">
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

      <div className="section-container mb-12">
        <AdSlot variant="banner" />
      </div>

      {categories.map((cat) => {
        const tools = aiTools.filter((t) => t.category === cat.key)
        if (tools.length === 0) return null
        return (
          <section key={cat.key} className="w-full py-12">
            <div className="section-container space-y-10">
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
                      affiliateTag={tool.affiliateTag}
                    />
                  </FadeIn>
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {tools.map((tool, i) => (
                  <FadeIn key={`${tool.name}-details`} direction="up" delay={120 + i * 70}>
                    <article className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-6 h-full">
                      <div>
                        <p className="label-text mb-2">Comparison snapshot</p>
                        <h2 className="text-2xl font-semibold text-foreground">{tool.name}</h2>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-3">Best for</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{tool.bestFor}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-3">Ideal users</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {tool.idealUsers.map((user) => (
                              <li key={user} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                                <span>{user}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-3">Strengths</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {tool.strengths.map((strength) => (
                              <li key={strength} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-3">Not ideal for</h3>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {tool.weaknesses.map((weakness) => (
                              <li key={weakness} className="flex items-start gap-2">
                                <X className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                <span>{weakness}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3">Related tools / alternatives</h3>
                        <div className="flex flex-wrap gap-2">
                          {tool.alternatives.map((alternative) => (
                            <span key={alternative} className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                              {alternative}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="w-full py-12 md:py-16">
        <div className="section-container grid gap-6 lg:grid-cols-2">
          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-border bg-card p-8 h-full">
              <p className="label-text mb-3">Who this is for</p>
              <h2 className="text-2xl font-semibold text-foreground mb-4">A buyer&apos;s guide for real-world AI usage</h2>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {pageSections.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={180}>
            <div className="rounded-2xl border border-border bg-card p-8 h-full">
              <p className="label-text mb-3">How we evaluate</p>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What matters in our rankings</h2>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {pageSections.howWeEvaluate.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full py-12 md:py-16">
        <div className="section-container">
          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <p className="label-text mb-3">Common questions</p>
              <h2 className="text-2xl font-semibold text-foreground mb-6">How to pick the right AI tool</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {pageSections.faqs.map((item) => (
                  <div key={item.question} className="rounded-xl border border-border/80 p-5">
                    <h3 className="text-base font-semibold text-foreground mb-2">{item.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-container my-12">
        <AdSlot variant="banner" />
      </div>

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

import type { Metadata } from "next"
import { FadeIn } from "@/app/components/fade-in"
import { AdSlot } from "@/app/components/ad-slot"
import { NewsletterSubscription } from "@/app/components/newsletter-subscription"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Minus, Zap, BookOpen, Search } from "lucide-react"
import { generatePageMetadata } from "@/app/lib/seo"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { CollectionPageJsonLd } from "@/app/components/json-ld"

export const metadata: Metadata = generatePageMetadata({
  title: "ChatGPT vs Claude vs Gemini — AI Comparison 2026",
  description: "Detailed comparison of ChatGPT, Claude, and Gemini in 2026. Pricing, features, strengths, and which AI assistant is best for you.",
  path: "/compare",
  keywords: ["ChatGPT vs Claude", "ChatGPT vs Gemini", "best AI chatbot 2026", "AI comparison"],
})

const pageUrl = "https://www.aibasicedu.com/compare"
const lastReviewed = "2026-03-18"
const methodologySections = [
  {
    heading: "Who this comparison is for",
    body: "This comparison is for beginners choosing a first AI assistant, professionals evaluating a paid upgrade, and teams deciding which general-purpose model best fits their workflow.",
  },
  {
    heading: "How we evaluate the models",
    body: "We compare product positioning, everyday usability, multimodal features, pricing, ecosystem fit, and strengths that matter in real learning and work scenarios rather than repeating vendor marketing claims.",
  },
  {
    heading: "Last reviewed",
    body: "Last reviewed on March 18, 2026. We update this page when pricing, key capabilities, or recommended use cases materially change.",
  },
  {
    heading: "Comparison criteria",
    body: "Our side-by-side comparison weighs free access, paid pricing, context window, coding help, writing quality, research utility, speed, multimodal support, web access, image generation, and file handling.",
  },
] as const

const tools = [
  {
    name: "ChatGPT",
    maker: "OpenAI",
    description:
      "The most widely adopted AI assistant. ChatGPT excels at general-purpose tasks, has a massive plugin ecosystem, and supports image generation, voice, and browsing. The go-to choice for most users.",
    strengths: ["Largest user base and ecosystem", "Strong multimodal capabilities", "Extensive plugin and GPT store", "Real-time web browsing"],
    bestFor: "All-around use",
  },
  {
    name: "Claude",
    maker: "Anthropic",
    description:
      "Built with safety and helpfulness at its core. Claude handles extremely long documents, produces nuanced writing, and is the leading choice for developers and researchers who need depth, accuracy, and large context windows.",
    strengths: ["Industry-leading context window", "Superior coding assistance", "Nuanced, detailed writing", "Strong document analysis"],
    bestFor: "Coding & long docs",
  },
  {
    name: "Gemini",
    maker: "Google",
    description:
      "Deeply integrated with Google's ecosystem. Gemini shines for users already in Google Workspace, offers strong multimodal reasoning, and leverages Google Search for real-time information retrieval.",
    strengths: ["Native Google Workspace integration", "Strong multimodal reasoning", "Real-time Google Search access", "Competitive free tier"],
    bestFor: "Google ecosystem",
  },
]

const comparisonRows = [
  { label: "Free tier", chatgpt: "GPT-4o mini", claude: "Claude 3.5 Sonnet", gemini: "Gemini 1.5 Flash", best: null },
  { label: "Pro price", chatgpt: "$20/mo", claude: "$20/mo", gemini: "$20/mo", best: null },
  { label: "Context window", chatgpt: "128K tokens", claude: "1M tokens", gemini: "2M tokens", best: "gemini" },
  { label: "Best for", chatgpt: "General use", claude: "Coding & docs", gemini: "Google users", best: null },
  { label: "Coding", chatgpt: true, claude: true, gemini: true, best: "claude" },
  { label: "Writing", chatgpt: true, claude: true, gemini: true, best: "claude" },
  { label: "Research", chatgpt: true, claude: true, gemini: true, best: "chatgpt" },
  { label: "Speed", chatgpt: true, claude: true, gemini: true, best: "gemini" },
  { label: "Multimodal", chatgpt: true, claude: true, gemini: true, best: "chatgpt" },
  { label: "Web browsing", chatgpt: true, claude: false, gemini: true, best: "chatgpt" },
  { label: "Image generation", chatgpt: true, claude: false, gemini: true, best: "chatgpt" },
  { label: "File uploads", chatgpt: true, claude: true, gemini: true, best: null },
]

const quickPicks = [
  {
    label: "Best all-rounder",
    tool: "ChatGPT",
    description: "The most versatile AI assistant with the widest feature set, plugin ecosystem, and multimodal capabilities. If you only pick one tool, start here.",
    icon: Zap,
  },
  {
    label: "Best for coding & long docs",
    tool: "Claude",
    description: "Unmatched for software development, document analysis, and any task requiring deep reasoning over large amounts of text. The developer favorite.",
    icon: BookOpen,
  },
  {
    label: "Best for Google users",
    tool: "Gemini",
    description: "If you live in Google Workspace and want AI that integrates natively with Gmail, Docs, and Search, Gemini is the natural choice.",
    icon: Search,
  },
]

function CellValue({ value, isBest }: { value: boolean | string; isBest: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className={`flex items-center justify-center ${isBest ? "text-gold" : "text-foreground"}`}>
        <Check className="h-5 w-5" />
      </div>
    ) : (
      <div className="flex items-center justify-center text-muted-foreground/40">
        <Minus className="h-5 w-5" />
      </div>
    )
  }
  return <span className={`text-sm ${isBest ? "text-gold font-medium" : "text-muted-foreground"}`}>{value}</span>
}

export default function ComparePage() {
  return (
    <main>
      <CollectionPageJsonLd
        title="ChatGPT vs Claude vs Gemini — AI Comparison 2026"
        description="Detailed comparison of ChatGPT, Claude, and Gemini in 2026. Pricing, features, strengths, and which AI assistant is best for you."
        url={pageUrl}
        breadcrumbs={[
          { name: "Home", url: "https://www.aibasicedu.com" },
          { name: "Compare", url: pageUrl },
        ]}
        lastReviewed={lastReviewed}
        sections={[...methodologySections]}
        mainEntity={{
          "@type": "ItemList",
          name: "AI assistant comparison list",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: tools.length,
          itemListElement: tools.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "SoftwareApplication",
              name: tool.name,
              description: tool.description,
              applicationCategory: "AI assistant",
              creator: tool.maker,
            },
          })),
        }}
      />

      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <FadeIn direction="up" delay={50}>
            <p className="label-text mb-4">AI Comparison 2026</p>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Which AI is <span className="gold-text">right for you</span>?
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <p className="mt-6 mx-auto max-w-[640px] text-muted-foreground md:text-lg leading-relaxed">
              An honest, side-by-side comparison of ChatGPT, Claude, and Gemini. No hype, no affiliate bias — just the facts to help you choose.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 md:pb-20" aria-labelledby="comparison-methodology">
        <div className="section-container">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <FadeIn direction="up" delay={50}>
              <div className="mb-8">
                <p className="label-text mb-3">Editorial Standards</p>
                <h2 id="comparison-methodology" className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">How this comparison is curated</h2>
              </div>
            </FadeIn>
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

      <div className="section-container pb-12">
        <AdSlot variant="banner" />
      </div>

      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <FadeIn direction="up" delay={50}>
            <div className="text-center mb-16">
              <p className="label-text mb-4">Head to Head</p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">Feature comparison</h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-4 border-b border-border">
                <div className="p-4 md:p-6">
                  <span className="text-sm font-medium text-muted-foreground">Feature</span>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-border">
                  <span className="text-sm font-semibold text-foreground">ChatGPT</span>
                  <p className="text-xs text-muted-foreground mt-0.5">OpenAI</p>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-border">
                  <span className="text-sm font-semibold text-foreground">Claude</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Anthropic</p>
                </div>
                <div className="p-4 md:p-6 text-center border-l border-border">
                  <span className="text-sm font-semibold text-foreground">Gemini</span>
                  <p className="text-xs text-muted-foreground mt-0.5">Google</p>
                </div>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.label} className="grid grid-cols-4 border-b border-border last:border-b-0 hover:bg-accent/30 transition-colors">
                  <div className="p-4 md:p-6 flex items-center">
                    <span className="text-sm text-foreground font-medium">{row.label}</span>
                  </div>
                  <div className="p-4 md:p-6 flex items-center justify-center border-l border-border"><CellValue value={row.chatgpt} isBest={row.best === "chatgpt"} /></div>
                  <div className="p-4 md:p-6 flex items-center justify-center border-l border-border"><CellValue value={row.claude} isBest={row.best === "claude"} /></div>
                  <div className="p-4 md:p-6 flex items-center justify-center border-l border-border"><CellValue value={row.gemini} isBest={row.best === "gemini"} /></div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="section-container pb-12"><AdSlot variant="inline" /></div>

      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <FadeIn direction="up" delay={50}><div className="text-center mb-16"><p className="label-text mb-4">Deep Dive</p><h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">Tool breakdowns</h2></div></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <FadeIn key={tool.name} direction="up" delay={100 + index * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20 flex flex-col">
                  <div className="mb-6"><p className="label-text mb-2">{tool.maker}</p><h3 className="text-xl font-bold text-foreground mb-1">{tool.name}</h3><p className="text-xs text-gold font-medium">Best for {tool.bestFor}</p></div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tool.description}</p>
                  <div className="mt-auto"><p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mb-3">Key Strengths</p><ul className="space-y-2">{tool.strengths.map((strength) => (<li key={strength} className="flex items-start text-sm text-muted-foreground"><Check className="h-4 w-4 text-gold mr-2 mt-0.5 flex-shrink-0" /><span>{strength}</span></li>))}</ul></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <FadeIn direction="up" delay={50}><div className="text-center mb-16"><p className="label-text mb-4">Quick Pick</p><h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">Our recommendations</h2></div></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickPicks.map((pick, index) => (
              <FadeIn key={pick.label} direction="up" delay={100 + index * 100}>
                <div className="h-full rounded-2xl border border-gold/20 bg-card p-8 transition-all duration-300 hover:border-gold/40">
                  <pick.icon className="h-6 w-6 text-gold mb-5" />
                  <p className="label-text mb-2">{pick.label}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-3"><span className="gold-text">{pick.tool}</span></h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pick.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32"><div className="section-container"><FadeIn direction="up" delay={100}><div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center"><h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">Want the full picture?</h2><p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">Explore our complete AI tools directory with detailed reviews, pricing breakdowns, and use-case recommendations for every major AI platform.</p><Button asChild className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 transition-colors duration-300"><Link href={ROUTE_MAP.tools}>Browse All AI Tools<ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></FadeIn></div></section>
      <section className="pb-24 md:pb-32"><div className="section-container"><div className="max-w-2xl mx-auto"><NewsletterSubscription /></div></div></section>
      <div className="section-container pb-12"><AdSlot variant="footer" /></div>
    </main>
  )
}

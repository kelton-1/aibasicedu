import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { Zap, BookOpen, Brain, Sparkles, Shield, ArrowRight } from "lucide-react"

const planned = [
  {
    icon: Brain,
    title: "AI in 5 Minutes",
    description: "A rapid-fire introduction to artificial intelligence: what it is, how it works, and why it matters.",
  },
  {
    icon: Sparkles,
    title: "Your First AI Prompt",
    description: "Write your first effective prompt in under 3 minutes. No experience required.",
  },
  {
    icon: BookOpen,
    title: "AI Jargon Decoded",
    description: "The 20 most important AI terms explained simply. From LLMs to transformers, get fluent fast.",
  },
  {
    icon: Shield,
    title: "AI Safety Essentials",
    description: "Quick overview of responsible AI use: bias, privacy, hallucinations, and how to stay informed.",
  },
]

export default function QuickGuidesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="Quick Guides"
            title="Get up to speed, fast"
            description="Concise, beginner-friendly guides to core AI concepts and workflows. Each guide is designed to be completed in under 10 minutes."
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-4xl mx-auto">
          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-gold/20 bg-card p-10 md:p-14 text-center mb-16">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 bg-gold/5 mb-6">
                <Zap className="h-6 w-6 text-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                <span className="gold-text">Coming soon</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                We're writing quick-start guides that distill key AI concepts into bite-sized, actionable lessons. Perfect
                for busy learners who want to build understanding quickly.
              </p>
              <Link
                href={ROUTE_MAP.glossary}
                className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 transition-colors duration-300"
              >
                Browse the glossary
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Planned guides */}
          <FadeIn direction="up" delay={200}>
            <p className="label-text text-center mb-10">Planned guides</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {planned.map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={250 + index * 100}>
                <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <item.icon className="h-6 w-6 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

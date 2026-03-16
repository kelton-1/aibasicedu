import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { BookOpen, FileText, Newspaper, Building2, ArrowRight, Target, Eye, Zap } from "lucide-react"
import { generatePageMetadata } from "@/app/lib/seo"

export const metadata = generatePageMetadata({
  title: "About",
  description: "AI Learning Hub is a personalized AI education platform making artificial intelligence accessible to everyone — from complete beginners to seasoned experts.",
  path: "/about",
  keywords: ["AI education", "learn AI", "artificial intelligence courses", "AI learning platform"],
})

const offerings = [
  {
    icon: BookOpen,
    title: "Tutorials",
    description:
      "Interactive, hands-on tutorials that walk you through AI concepts from the fundamentals to advanced techniques. Learn by doing.",
    href: ROUTE_MAP.tutorials,
  },
  {
    icon: FileText,
    title: "Glossary",
    description:
      "A comprehensive reference of AI terms and concepts, explained in plain language. Build your AI vocabulary with confidence.",
    href: ROUTE_MAP.glossary,
  },
  {
    icon: Newspaper,
    title: "News & Insights",
    description:
      "Stay current with curated AI news, breakthrough research, and industry trends that shape the future of technology.",
    href: ROUTE_MAP.news,
  },
  {
    icon: Building2,
    title: "Company Insights",
    description:
      "Deep dives into the companies driving AI innovation. Understand who is building the future and how their work impacts you.",
    href: ROUTE_MAP.companies,
  },
]

const stats = [
  { label: "Active Learners", value: "10,000+" },
  { label: "Tutorials & Guides", value: "200+" },
  { label: "AI Terms Explained", value: "500+" },
  { label: "Countries Reached", value: "120+" },
]

const visionPoints = [
  {
    icon: Target,
    title: "Practitioners First",
    description:
      "Built by people who use AI daily in real work, not theorists who only publish papers. Every piece of content is grounded in practical experience.",
  },
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description:
      "We saw the gap between AI hype and real understanding. Too many resources assume prior knowledge or bury insights in jargon. We bridge that gap.",
  },
  {
    icon: Zap,
    title: "Always Current",
    description:
      "AI moves fast. Our content is continuously updated to reflect the latest tools, models, and best practices so you never fall behind.",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="About"
            title="AI Learning Hub"
            description="We believe AI literacy should be accessible to everyone. Our mission is to demystify artificial intelligence through clear, practical education that empowers learners at every level."
          />
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="section-container">
          <FadeIn direction="up" delay={50}>
            <p className="label-text text-center mb-10">By the Numbers</p>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <div className="flex flex-wrap items-center justify-center">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  <div className="flex flex-col items-center px-6 md:px-10 py-4">
                    <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.15em]">
                      {stat.label}
                    </span>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="h-10 w-px bg-border flex-shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn direction="up" delay={50}>
              <p className="label-text mb-4">Why We Built This</p>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground mb-6">
                AI education shouldn&apos;t be <span className="gold-text">gatekept</span>
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-6">
                The AI revolution is here, but access to quality education about it remains locked behind expensive courses, paywalled bootcamps, and dense academic papers filled with jargon. We believe that is fundamentally wrong.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-6">
                AI Learning Hub was created to democratize AI knowledge. No $2,000 courses. No prerequisites. No gatekeepers. Just clear, practical education designed for real people with real goals — whether you want to understand how ChatGPT works, build your first AI project, or lead an AI transformation at your company.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                We curate, simplify, and structure the best AI knowledge so you can focus on learning — not searching. Every tutorial, glossary entry, and guide is written with one goal: making you confident and capable in the age of AI.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn direction="up" delay={50}>
              <p className="label-text mb-4">Our Mission</p>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground mb-6">
                Democratizing AI knowledge
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="text-muted-foreground md:text-lg leading-relaxed mb-6">
                Artificial intelligence is transforming every industry, but understanding it shouldn&apos;t require a PhD. We
                created AI Learning Hub to bridge the gap between cutting-edge AI research and everyday learners.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                Whether you&apos;re a student exploring career paths, a professional adapting to new tools, or simply curious
                about how AI works, our resources are designed to meet you where you are and help you grow.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet the Vision */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="section-container">
          <SectionHeading
            label="Our Approach"
            title="Meet the vision"
            description="Built by practitioners who saw the gap between AI hype and real understanding."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionPoints.map((point, index) => (
              <FadeIn key={point.title} direction="up" delay={100 + index * 100}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <point.icon className="h-6 w-6 text-gold mb-6" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="section-container">
          <SectionHeading
            label="Resources"
            title="What we offer"
            description="Everything you need to build a strong foundation in AI, all in one place."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={100 + index * 100}>
                <Link href={item.href} className="block h-full group">
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20 group-hover:bg-accent/50">
                    <item.icon className="h-6 w-6 text-gold mb-6" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                    <span className="inline-flex items-center text-sm font-medium text-gold transition-colors duration-300 group-hover:text-gold-light">
                      Explore
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="section-container text-center">
          <FadeIn direction="up" delay={100}>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground mb-4">
              Ready to start learning?
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <p className="text-muted-foreground md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Take the first step toward AI fluency. Our guided path helps you build skills at your own pace.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={300}>
            <Link
              href={ROUTE_MAP.getStarted}
              className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 transition-colors duration-300"
            >
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { FadeIn } from "@/app/components/fade-in"
import { BookOpen, MessageSquare, Newspaper, Building2, FolderOpen, GraduationCap, ArrowRight } from "lucide-react"
import { generatePageMetadata } from "@/app/lib/seo"

export const metadata = generatePageMetadata({
  title: "Browse AI Resources",
  description: "Discover tutorials, prompts, news, glossary entries, and company insights to support your AI learning journey.",
  path: "/browse",
  keywords: ["AI resources", "AI tutorials", "AI glossary", "AI news", "learn artificial intelligence"],
})

const resources = [
  {
    title: "AI Glossary",
    description: "Comprehensive dictionary of AI terms and concepts, explained in plain language for all levels.",
    href: ROUTE_MAP.glossary,
    icon: BookOpen,
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides on AI topics, from fundamentals to advanced techniques and workflows.",
    href: ROUTE_MAP.tutorials,
    icon: GraduationCap,
  },
  {
    title: "Prompt Library",
    description: "Curated collection of effective prompts for various AI models and use cases.",
    href: ROUTE_MAP.prompts,
    icon: MessageSquare,
  },
  {
    title: "AI News",
    description: "Latest developments, breakthroughs, and industry updates from the world of artificial intelligence.",
    href: ROUTE_MAP.news,
    icon: Newspaper,
  },
  {
    title: "AI Companies",
    description: "Profiles of leading AI companies, research labs, and platforms driving innovation forward.",
    href: ROUTE_MAP.companies,
    icon: Building2,
  },
  {
    title: "Projects",
    description: "Hands-on AI projects to build practical skills and deepen your understanding of key concepts.",
    href: ROUTE_MAP.projects,
    icon: FolderOpen,
  },
]

export default function BrowsePage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <FadeIn direction="up" delay={50}>
            <p className="label-text mb-4">Explore</p>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Browse <span className="gold-text">Resources</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <p className="mt-6 mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
              Discover tutorials, prompts, news, and glossary entries to support your AI learning journey.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <FadeIn key={resource.title} direction="up" delay={100 + index * 80}>
                <Link href={resource.href} className="block group h-full">
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20 hover:shadow-[0_0_30px_rgba(179,135,40,0.04)] flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <resource.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-2">{resource.title}</h2>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{resource.description}</p>
                    <div className="mt-6 flex items-center text-sm text-gold group-hover:text-gold-light transition-colors">
                      Explore <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pb-24 md:pb-32">
        <div className="section-container text-center">
          <FadeIn direction="up" delay={200}>
            <Link
              href={ROUTE_MAP.home}
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              Back to home
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

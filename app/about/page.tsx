import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { BookOpen, FileText, Newspaper, Building2, ArrowRight } from "lucide-react"

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
                Artificial intelligence is transforming every industry, but understanding it shouldn't require a PhD. We
                created AI Learning Hub to bridge the gap between cutting-edge AI research and everyday learners.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                Whether you're a student exploring career paths, a professional adapting to new tools, or simply curious
                about how AI works, our resources are designed to meet you where you are and help you grow.
              </p>
            </FadeIn>
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

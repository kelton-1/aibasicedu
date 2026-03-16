import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { FolderOpen, Bot, FileText, BarChart3, Layers, ArrowRight } from "lucide-react"

const planned = [
  {
    icon: Bot,
    title: "Build a Chatbot",
    description: "Create a functional AI chatbot from scratch. Learn API integration, conversation design, and deployment.",
    difficulty: "Beginner",
  },
  {
    icon: FileText,
    title: "Document Summarizer",
    description: "Build a tool that uses LLMs to summarize long documents, extracting key points and themes automatically.",
    difficulty: "Intermediate",
  },
  {
    icon: BarChart3,
    title: "Sentiment Analyzer",
    description: "Develop a sentiment analysis pipeline that processes text data and visualizes emotional trends.",
    difficulty: "Intermediate",
  },
  {
    icon: Layers,
    title: "RAG Application",
    description: "Build a retrieval-augmented generation system that answers questions using your own documents as context.",
    difficulty: "Advanced",
  },
]

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="Projects"
            title="Learn by building"
            description="Hands-on AI projects that let you apply concepts, build real tools, and strengthen your portfolio with practical experience."
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-4xl mx-auto">
          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-gold/20 bg-card p-10 md:p-14 text-center mb-16">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 bg-gold/5 mb-6">
                <FolderOpen className="h-6 w-6 text-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                <span className="gold-text">Coming soon</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                We're developing guided, hands-on projects that walk you through building real AI applications step by
                step. Each project includes starter code, instructions, and checkpoints.
              </p>
              <Link
                href={ROUTE_MAP.tutorials}
                className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 transition-colors duration-300"
              >
                Start with tutorials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Planned projects */}
          <FadeIn direction="up" delay={200}>
            <p className="label-text text-center mb-10">Planned projects</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {planned.map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={250 + index * 100}>
                <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="h-6 w-6 text-gold" />
                    <span className="text-xs uppercase tracking-wider font-medium text-muted-foreground border border-border rounded-full px-3 py-1">
                      {item.difficulty}
                    </span>
                  </div>
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

import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { Terminal, MessageSquare, ImageIcon, Code2, ArrowRight } from "lucide-react"

const planned = [
  {
    icon: MessageSquare,
    title: "Prompt Sandbox",
    description: "Experiment with different prompting techniques and compare outputs from multiple AI models side by side.",
  },
  {
    icon: ImageIcon,
    title: "Image Generation Lab",
    description: "Create AI-generated images with intuitive controls. Explore how parameters affect visual output.",
  },
  {
    icon: Code2,
    title: "Code Assistant",
    description: "Practice using AI for code generation, debugging, and refactoring in a safe, sandboxed environment.",
  },
  {
    icon: Terminal,
    title: "Model Comparison",
    description: "Send the same prompt to different models and compare their responses, latency, and capabilities.",
  },
]

export default function PlaygroundsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="Playgrounds"
            title="Hands-on AI experimentation"
            description="Interactive environments where you can practice prompting, test model behavior, and develop intuition for how AI systems work."
          />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-4xl mx-auto">
          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-gold/20 bg-card p-10 md:p-14 text-center mb-16">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 bg-gold/5 mb-6">
                <Terminal className="h-6 w-6 text-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                <span className="gold-text">Coming soon</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                We're building interactive AI playgrounds where you can experiment with real models, test prompts, and
                see results in real time. No setup required.
              </p>
              <Link
                href={ROUTE_MAP.tutorials}
                className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 transition-colors duration-300"
              >
                Explore tutorials in the meantime
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Planned features */}
          <FadeIn direction="up" delay={200}>
            <p className="label-text text-center mb-10">What we're building</p>
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

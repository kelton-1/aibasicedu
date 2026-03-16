import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { Users, MessageSquare, Share2, Award, ArrowRight } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Discussion Forums",
    description: "Ask questions, share insights, and learn from fellow AI enthusiasts in topic-specific forums.",
  },
  {
    icon: Share2,
    title: "Project Showcases",
    description: "Share your AI projects and get constructive feedback from peers and mentors.",
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Join or form study groups to work through tutorials and courses together.",
  },
  {
    icon: Award,
    title: "Mentorship",
    description: "Connect with experienced practitioners who can guide your AI learning journey.",
  },
]

export default function CommunityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="Community"
            title="Learn together"
            description="Connect with other learners, ask questions, and share your progress. The AI Learning Hub community is where knowledge grows."
          />
        </div>
      </section>

      {/* Coming Soon Card */}
      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-4xl mx-auto">
          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-gold/20 bg-card p-10 md:p-14 text-center mb-16">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/20 bg-gold/5 mb-6">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                <span className="gold-text">Coming soon</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                We're building a space for AI learners to connect, collaborate, and grow together. Be the first to know
                when the community launches.
              </p>
              <Link
                href={ROUTE_MAP.getStarted}
                className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 transition-colors duration-300"
              >
                Get started while you wait
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>

          {/* Preview features */}
          <FadeIn direction="up" delay={200}>
            <p className="label-text text-center mb-10">What to expect</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} direction="up" delay={250 + index * 100}>
                <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <feature.icon className="h-6 w-6 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

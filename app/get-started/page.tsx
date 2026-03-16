import Link from "next/link"
import { ArrowRight, BookOpen, Lightbulb, Users, Compass } from "lucide-react"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { FadeIn } from "@/app/components/fade-in"

export default function GetStartedPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <FadeIn direction="up" delay={50}>
            <p className="label-text mb-4">Your Journey Starts Here</p>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Begin Your <span className="gold-text">AI Learning</span> Journey
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <p className="mt-6 mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
              Choose the path that best fits your goals and experience level.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two Main Pathways */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Path - Personalized */}
            <FadeIn direction="up" delay={100}>
              <div className="flex flex-col h-full rounded-2xl border border-gold/20 bg-card p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_0_30px_rgba(179,135,40,0.06)]">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <Compass className="h-6 w-6 text-gold" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Personalized Learning Path</h2>
                  <p className="text-sm text-muted-foreground">
                    Get a customized curriculum based on your interests, goals, and experience level.
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Take a quick assessment to help us understand your needs and create a tailored learning journey just for
                    you. This is the recommended option for most learners.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-muted-foreground">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>Customized to your experience level</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>Focus on topics you&apos;re interested in</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>Adaptive learning based on your progress</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href={ROUTE_MAP.personalize}
                    className="inline-flex items-center justify-center w-full bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-6 py-3 text-sm transition-colors"
                  >
                    Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Secondary Path - Self-Guided */}
            <FadeIn direction="up" delay={200}>
              <div className="flex flex-col h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center mb-5">
                    <BookOpen className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Self-Guided Exploration</h2>
                  <p className="text-sm text-muted-foreground">
                    Browse our comprehensive library of AI resources at your own pace.
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Explore our organized collection of articles, tutorials, and guides on various AI topics. Perfect if you
                    prefer to chart your own learning journey.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-muted-foreground">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-border flex-shrink-0" />
                      <span>Access to all learning materials</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-border flex-shrink-0" />
                      <span>Learn at your own pace</span>
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-border flex-shrink-0" />
                      <span>Bookmark resources for later</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href={ROUTE_MAP.browse}
                    className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:border-gold/20 transition-colors"
                  >
                    Browse Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Secondary Options */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <FadeIn direction="up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center mb-12">
              Other Ways to Get Started
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn direction="up" delay={150}>
              <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20 h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Lightbulb className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Quick Start Guides</h3>
                <p className="text-sm text-muted-foreground mb-2">Bite-sized introductions to key AI concepts</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  Perfect for beginners who want to quickly understand the fundamentals of AI.
                </p>
                <div className="mt-6">
                  <Link
                    href={ROUTE_MAP.quickGuides}
                    className="text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center"
                  >
                    View Guides <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={250}>
              <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20 h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Users className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">Join the Community</h3>
                <p className="text-sm text-muted-foreground mb-2">Connect with other learners and AI enthusiasts</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  Share experiences, ask questions, and learn together with our supportive community.
                </p>
                <div className="mt-6">
                  <Link
                    href={ROUTE_MAP.community}
                    className="text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center"
                  >
                    Join Now <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={350}>
              <div className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20 h-full flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <BookOpen className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">AI Glossary</h3>
                <p className="text-sm text-muted-foreground mb-2">Comprehensive dictionary of AI terms</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  Understand the terminology that powers AI, explained in plain language.
                </p>
                <div className="mt-6">
                  <Link
                    href={ROUTE_MAP.glossary}
                    className="text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center"
                  >
                    Explore Glossary <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <FadeIn direction="up" delay={200}>
            <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
                Not Sure Where to Begin?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                If you&apos;re new to AI and feeling overwhelmed, we recommend starting with our personalized assessment. It only
                takes 2 minutes and will help us guide you on the perfect learning path.
              </p>
              <Link
                href={ROUTE_MAP.personalize}
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 text-sm transition-colors"
              >
                Take the 2-Minute Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

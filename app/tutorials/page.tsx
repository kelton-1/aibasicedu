import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Brain, Lightbulb, ArrowRight, Clock, BarChart3 } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"
import { SectionHeading } from "@/app/components/section-heading"
import { AdSlot } from "@/app/components/ad-slot"
import { tutorialCategories } from "./tutorial-data"
import { createServerClient } from "@/lib/supabase/server"
import { staticTutorials } from "@/app/lib/data/tutorials-data-static"
import { generatePageMetadata } from "@/app/lib/seo"
import { CourseJsonLd } from "@/app/components/json-ld"

export const revalidate = 3600

export const metadata = generatePageMetadata({
  title: "Tutorials",
  description: "Explore guided AI tutorials covering prompt engineering, model fundamentals, and practical workflows.",
  path: "/tutorials",
  keywords: ["AI tutorials", "prompt engineering", "machine learning tutorials", "AI courses", "learn AI"],
})

export default async function TutorialsPage() {
  const supabase = createServerClient()
  const { data: tutorialsData } = await supabase
    .from("tutorials")
    .select("*")
    .order("created_at", { ascending: true })
  const tutorials = tutorialsData?.length
    ? tutorialsData
    : staticTutorials.map((t) => ({
        id: t.id,
        slug: t.id,
        title: t.title,
        description: t.description,
        category: t.category,
        level: t.difficulty,
        duration: `${t.duration_minutes} min`,
        image_url: null as string | null,
        modules: t.modules_count,
        exercises: t.exercises_count,
        available: t.status === "published",
        content: null as string | null,
        status: t.status,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }))

  const getLevelBadge = (level: string) => {
    if (level === "advanced") {
      return "border border-gold/20 text-gold"
    }
    return "border border-border text-muted-foreground"
  }

  const renderTutorialCard = (tutorial: (typeof tutorials)[number], index: number) => (
    <FadeIn key={tutorial.id} direction="up" delay={50 + index * 40}>
      <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-gold/20 transition-all duration-300 flex flex-col h-full group">
        {tutorial.image_url && (
          <div className="relative overflow-hidden h-48">
            <img
              src={tutorial.image_url || "/placeholder.svg"}
              alt={tutorial.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-medium bg-card/90 backdrop-blur-sm ${getLevelBadge(tutorial.level)}`}>
                {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
              </span>
              {!tutorial.available && (
                <span className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-medium border border-border text-muted-foreground bg-card/90 backdrop-blur-sm">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <span className="label-text text-gold mb-2">
            {tutorial.category
              .split("-")
              .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
          <h3 className="font-semibold text-foreground text-lg mb-2">{tutorial.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{tutorial.description}</p>

          <div className="flex justify-between text-xs text-muted-foreground mb-5 pb-4 border-b border-border">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{tutorial.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{tutorial.modules} modules</span>
            </div>
            <div className="flex items-center gap-1">
              <Lightbulb className="h-3.5 w-3.5" />
              <span>{tutorial.exercises} exercises</span>
            </div>
          </div>

          {tutorial.available ? (
            <Button
              className="w-full bg-gold hover:bg-gold-light text-black font-medium rounded-xl"
              asChild
            >
              <Link href={`/tutorials/${tutorial.id}`}>
                Start Tutorial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button disabled className="w-full rounded-xl" variant="secondary">
              Coming soon
            </Button>
          )}
        </div>
      </div>
    </FadeIn>
  )

  const renderTutorialCards = (filteredTutorials = tutorials) =>
    filteredTutorials.map((tutorial, index) => renderTutorialCard(tutorial, index))

  return (
    <div className="section-container py-24 md:py-32">
      {staticTutorials.filter(t => t.status === "published").map(t => (
        <CourseJsonLd
          key={t.id}
          title={t.title}
          description={t.description}
          url={`https://www.aibasicedu.com/tutorials/${t.id}`}
        />
      ))}

      {/* Hero */}
      <SectionHeading
        label="Learn"
        title="Tutorials"
        description="Learn AI concepts through hands-on exercises and interactive demonstrations."
      />

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        <FadeIn direction="up" delay={100}>
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-gold/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <Brain className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Learn by Doing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interactive exercises reinforce concepts with immediate feedback to solidify your understanding.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-gold/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <Code className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Real-world Examples</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              See how AI concepts are applied in practical scenarios with interactive demonstrations.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={300}>
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-gold/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <BarChart3 className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Track Your Progress</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Complete exercises and quizzes to track your understanding and mastery of AI concepts.
            </p>
          </div>
        </FadeIn>
      </div>

      <AdSlot variant="inline" className="mb-12" />

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <FadeIn direction="up" delay={350}>
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="bg-card border border-border rounded-xl p-1.5 inline-flex gap-1">
              <TabsList className="bg-transparent p-0 h-auto gap-1">
                <TabsTrigger
                  value="all"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  All Tutorials
                </TabsTrigger>
                <TabsTrigger
                  value="prompt-engineering"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Prompt Engineering
                </TabsTrigger>
                <TabsTrigger
                  value="ai-concepts"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  AI Concepts
                </TabsTrigger>
                <TabsTrigger
                  value="generative-ai"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Generative AI
                </TabsTrigger>
                <TabsTrigger
                  value="ai-ethics"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  AI Ethics
                </TabsTrigger>
                <TabsTrigger
                  value="practical-ai"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Practical AI
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </FadeIn>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{renderTutorialCards()}</div>
        </TabsContent>

        {tutorialCategories.map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderTutorialCards(tutorials.filter((tutorial) => tutorial.category === category))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* CTA */}
      <FadeIn direction="up" delay={400}>
        <div className="mt-24 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                We&apos;re constantly adding new tutorials based on user feedback and the latest AI developments.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="outline" className="rounded-xl border-border hover:border-gold/20">
                Request a Tutorial
              </Button>
              <Button className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl">
                Browse All Resources
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

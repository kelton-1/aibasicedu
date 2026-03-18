import type { Metadata } from "next"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Search } from "lucide-react"
import { createServerClient } from "@/lib/supabase/server"
import { FadeIn } from "@/app/components/fade-in"
import { AdSlot } from "@/app/components/ad-slot"
import { glossaryTerms as staticGlossaryTerms, type GlossaryTerm } from "@/app/lib/data/glossary-data"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "AI Glossary",
  description: "Comprehensive dictionary of AI terms and concepts explained in plain language.",
  openGraph: {
    title: "AI Glossary | AI Learning Hub",
    description: "Comprehensive dictionary of AI terms and concepts explained in plain language.",
    url: "/glossary",
  },
  twitter: {
    title: "AI Glossary | AI Learning Hub",
    description: "Comprehensive dictionary of AI terms and concepts explained in plain language.",
  },
}


type GlossaryRecord = GlossaryTerm & {
  id?: string
  related_terms?: string[] | null
  status?: "draft" | "published" | "archived"
  created_at?: string
  updated_at?: string
}

const slugifyTerm = (term: string) => term.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

const pageSections = {
  whoItsFor: [
    "Beginners trying to understand AI vocabulary without reading academic papers.",
    "Professionals who need plain-English explanations they can use in meetings and buying decisions.",
    "Students, marketers, operators, and developers who want fast examples and related concepts in one place.",
  ],
  howWeEvaluate: [
    "Definitions are written for clarity first, with enough detail to be useful in practical decisions.",
    "Each term includes examples, real use cases, and related concepts so readers can build mental models instead of memorizing jargon.",
    "We group terms by category and level to make the glossary usable for both first-time readers and more advanced users.",
  ],
  commonQuestions: [
    {
      question: "How should I use this glossary?",
      answer: "Start with fundamentals, then jump through related terms whenever a concept references another idea you do not fully understand yet.",
    },
    {
      question: "Do I need to read every term in order?",
      answer: "No. Use the categories as a map and follow the expandable sections that connect theory to examples and practical use cases.",
    },
    {
      question: "What makes a term beginner or advanced?",
      answer: "Beginner terms explain the basic building blocks, while advanced terms usually matter when you are deploying, evaluating, or customizing AI systems.",
    },
  ],
}

export default async function GlossaryPage() {
  const supabase = createServerClient()
  const { data: glossaryData } = await supabase
    .from("glossary_terms")
    .select("*")
    .order("term", { ascending: true })
  const glossaryTerms: GlossaryRecord[] = glossaryData?.length
    ? glossaryData.map((item) => ({
        term: item.term,
        definition: item.definition,
        category: item.category as GlossaryTerm["category"],
        level: item.level,
        relatedTerms: item.related_terms ?? [],
        examples: [],
        practicalUseCases: [],
        id: item.id,
        related_terms: item.related_terms,
        status: item.status,
        created_at: item.created_at,
        updated_at: item.updated_at,
      }))
    : staticGlossaryTerms

  const renderGlossaryCard = (item: GlossaryRecord, index: number) => (
    <FadeIn key={index} direction="up" delay={50 + index * 30}>
      <details className="group rounded-2xl border border-border bg-card p-6 hover:border-gold/20 transition-all duration-300">
        <summary className="list-none cursor-pointer">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-semibold text-foreground text-lg">{item.term}</h3>
            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center border border-gold/20 text-gold text-xs px-2.5 py-0.5 rounded-full font-medium">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
              <span className="inline-flex items-center border border-border text-muted-foreground text-xs px-2.5 py-0.5 rounded-full">
                {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
              </span>
              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.definition}</p>
        </summary>

        <div className="mt-5 space-y-5 border-t border-border pt-5">
          {!!item.examples?.length && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Examples</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {item.examples.map((example) => (
                  <li key={example} className="rounded-lg border border-border/70 px-3 py-2">{example}</li>
                ))}
              </ul>
            </div>
          )}

          {!!item.practicalUseCases?.length && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Practical use cases</h4>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {item.practicalUseCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </div>
          )}

          {!!item.relatedTerms?.length && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Related terms</h4>
              <div className="flex flex-wrap gap-2">
                {item.relatedTerms.map((term) => (
                  <Link
                    key={term}
                    href={`/glossary#${slugifyTerm(term)}`}
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:border-gold/30 hover:text-foreground transition-colors"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </details>
    </FadeIn>
  )

  const renderSection = (items: GlossaryRecord[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={item.term} id={slugifyTerm(item.term)}>{renderGlossaryCard(item, index)}</div>
      ))}
    </div>
  )

  return (
    <div className="section-container py-24 md:py-32 space-y-16">
      <div className="text-center mb-16 space-y-4">
        <FadeIn direction="up" delay={50}>
          <p className="label-text">Reference</p>
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            AI <span className="gold-text">Glossary</span>
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={200}>
          <p className="mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
            Comprehensive dictionary of AI terms and concepts explained in plain language.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={300}>
          <div className="w-full max-w-md mx-auto relative mt-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search terms..." className="pl-10 border-border bg-background rounded-xl h-11" />
          </div>
        </FadeIn>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <FadeIn direction="up" delay={350}>
          <div className="flex justify-center mb-12">
            <div className="bg-card border border-border rounded-xl p-1.5 inline-flex gap-1">
              <TabsList className="bg-transparent p-0 h-auto gap-1">
                <TabsTrigger value="all" className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all">All Terms</TabsTrigger>
                <TabsTrigger value="fundamentals" className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all">Fundamentals</TabsTrigger>
                <TabsTrigger value="techniques" className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all">Techniques</TabsTrigger>
                <TabsTrigger value="applications" className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all">Applications</TabsTrigger>
              </TabsList>
            </div>
          </div>
        </FadeIn>

        <AdSlot variant="inline" className="mb-8" />

        <TabsContent value="all" className="space-y-4">{renderSection(glossaryTerms)}</TabsContent>
        <TabsContent value="fundamentals" className="space-y-4">{renderSection(glossaryTerms.filter((item) => item.category === "fundamentals"))}</TabsContent>
        <TabsContent value="techniques" className="space-y-4">{renderSection(glossaryTerms.filter((item) => item.category === "techniques"))}</TabsContent>
        <TabsContent value="applications" className="space-y-4">{renderSection(glossaryTerms.filter((item) => item.category === "applications"))}</TabsContent>
      </Tabs>

      <section className="grid gap-6 lg:grid-cols-2">
        <FadeIn direction="up" delay={100}>
          <div className="rounded-2xl border border-border bg-card p-8 h-full">
            <p className="label-text mb-3">Who this is for</p>
            <h2 className="text-2xl font-semibold text-foreground mb-4">A practical dictionary for everyday AI work</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {pageSections.whoItsFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={180}>
          <div className="rounded-2xl border border-border bg-card p-8 h-full">
            <p className="label-text mb-3">How we evaluate</p>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How this glossary is structured</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              {pageSections.howWeEvaluate.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <section>
        <FadeIn direction="up" delay={220}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="label-text mb-3">Common questions</p>
            <h2 className="text-2xl font-semibold text-foreground mb-6">How to navigate the glossary</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {pageSections.commonQuestions.map((item) => (
                <div key={item.question} className="rounded-xl border border-border/80 p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}

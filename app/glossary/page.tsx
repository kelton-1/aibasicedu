import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { createServerClient } from "@/lib/supabase/server"
import { FadeIn } from "@/app/components/fade-in"
import { AdSlot } from "@/app/components/ad-slot"
import { glossaryTerms as staticGlossaryTerms } from "@/app/lib/data/glossary-data"

export const revalidate = 3600

const baseMetadata = {
  title: "AI Glossary",
  description: "Comprehensive dictionary of AI terms and concepts explained in plain language.",
} as const

type GlossarySearchParams = {
  q?: string | string[]
}

type GlossaryPageProps = {
  searchParams: Promise<GlossarySearchParams>
}

function getQueryValue(q?: string | string[]) {
  const value = Array.isArray(q) ? q[0] : q
  return value?.trim() ?? ""
}

function normalizeSearchValue(value: string) {
  return value.toLocaleLowerCase()
}

export async function generateMetadata({ searchParams }: GlossaryPageProps): Promise<Metadata> {
  const { q } = await searchParams
  const query = getQueryValue(q)

  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    alternates: {
      canonical: "/glossary",
    },
    robots: query
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
    openGraph: {
      title: `${baseMetadata.title} | AI Learning Hub`,
      description: baseMetadata.description,
      url: "/glossary",
    },
    twitter: {
      title: `${baseMetadata.title} | AI Learning Hub`,
      description: baseMetadata.description,
    },
  }
}

export default async function GlossaryPage({ searchParams }: GlossaryPageProps) {
  const { q } = await searchParams
  const query = getQueryValue(q)
  const normalizedQuery = normalizeSearchValue(query)

  const supabase = createServerClient()
  const { data: glossaryData } = await supabase.from("glossary_terms").select("*").order("term", { ascending: true })
  const glossaryTerms = glossaryData?.length ? glossaryData : staticGlossaryTerms
  const filteredGlossaryTerms = normalizedQuery
    ? glossaryTerms.filter((item) =>
        [item.term, item.definition, item.category, item.level].some((value) =>
          normalizeSearchValue(value).includes(normalizedQuery),
        ),
      )
    : glossaryTerms

  const searchSummary = query
    ? `${filteredGlossaryTerms.length} result${filteredGlossaryTerms.length === 1 ? "" : "s"} for “${query}”`
    : null

  const renderGlossaryCard = (item: (typeof glossaryTerms)[number], index: number) => (
    <FadeIn key={`${item.term}-${index}`} direction="up" delay={50 + index * 30}>
      <div className="rounded-2xl border border-border bg-card p-6 hover:border-gold/20 transition-all duration-300">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">{item.term}</h3>
          <div className="flex shrink-0 items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-gold/20 px-2.5 py-0.5 text-xs font-medium text-gold">
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </span>
            <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
              {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{item.definition}</p>
      </div>
    </FadeIn>
  )

  const renderGlossaryGrid = (items: typeof filteredGlossaryTerms) => {
    if (!items.length) {
      return (
        <FadeIn direction="up" delay={120}>
          <div className="rounded-2xl border border-dashed border-border bg-card/60 px-6 py-12 text-center">
            <h2 className="text-xl font-semibold text-foreground">No glossary terms found</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We couldn&apos;t find any glossary entries matching “{query}”. Try a broader keyword, check your spelling,
              or browse all terms below.
            </p>
          </div>
        </FadeIn>
      )
    }

    return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{items.map(renderGlossaryCard)}</div>
  }

  return (
    <div className="section-container py-24 md:py-32">
      <div className="mb-16 space-y-4 text-center">
        <FadeIn direction="up" delay={50}>
          <p className="label-text">Reference</p>
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            AI <span className="gold-text">Glossary</span>
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={200}>
          <p className="mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
            Comprehensive dictionary of AI terms and concepts explained in plain language.
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={300}>
          <form action="/glossary" method="get" className="relative mx-auto mt-6 w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search terms..."
              className="h-11 rounded-xl border-border bg-background pl-10"
            />
          </form>
        </FadeIn>
        {searchSummary ? (
          <FadeIn direction="up" delay={350}>
            <div className="space-y-2 pt-2">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">{searchSummary}</h2>
              <p className="text-sm text-muted-foreground md:text-base">
                Showing server-rendered glossary matches for your search.
              </p>
            </div>
          </FadeIn>
        ) : null}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <FadeIn direction="up" delay={400}>
          <div className="mb-12 flex justify-center">
            <div className="inline-flex gap-1 rounded-xl border border-border bg-card p-1.5">
              <TabsList className="h-auto gap-1 bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  All Terms
                </TabsTrigger>
                <TabsTrigger
                  value="fundamentals"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Fundamentals
                </TabsTrigger>
                <TabsTrigger
                  value="techniques"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Techniques
                </TabsTrigger>
                <TabsTrigger
                  value="applications"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Applications
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </FadeIn>

        <AdSlot variant="inline" className="mb-8" />

        <TabsContent value="all" className="space-y-4">
          {renderGlossaryGrid(filteredGlossaryTerms)}
        </TabsContent>

        <TabsContent value="fundamentals" className="space-y-4">
          {renderGlossaryGrid(filteredGlossaryTerms.filter((item) => item.category === "fundamentals"))}
        </TabsContent>

        <TabsContent value="techniques" className="space-y-4">
          {renderGlossaryGrid(filteredGlossaryTerms.filter((item) => item.category === "techniques"))}
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          {renderGlossaryGrid(filteredGlossaryTerms.filter((item) => item.category === "applications"))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

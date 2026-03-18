import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { createServerClient } from "@/lib/supabase/server"
import { FadeIn } from "@/app/components/fade-in"
import { AdSlot } from "@/app/components/ad-slot"
import { NativeAdCard } from "@/app/components/native-ad-card"
import { glossaryTerms as staticGlossaryTerms } from "@/app/lib/data/glossary-data"

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

export default async function GlossaryPage() {
  const supabase = createServerClient()
  const { data: glossaryData } = await supabase
    .from("glossary_terms")
    .select("*")
    .order("term", { ascending: true })
  const glossaryTerms = glossaryData?.length ? glossaryData : staticGlossaryTerms

  const renderGlossaryCard = (item: (typeof glossaryTerms)[number], index: number) => (
    <FadeIn key={index} direction="up" delay={50 + index * 30}>
      <div className="rounded-2xl border border-border bg-card p-6 hover:border-gold/20 transition-all duration-300">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-foreground text-lg">{item.term}</h3>
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center border border-gold/20 text-gold text-xs px-2.5 py-0.5 rounded-full font-medium">
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </span>
            <span className="inline-flex items-center border border-border text-muted-foreground text-xs px-2.5 py-0.5 rounded-full">
              {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
            </span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{item.definition}</p>
      </div>
    </FadeIn>
  )

  return (
    <div className="section-container py-24 md:py-32">
      {/* Hero */}
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
            <Input
              type="search"
              placeholder="Search terms..."
              className="pl-10 border-border bg-background rounded-xl h-11"
            />
          </div>
        </FadeIn>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <FadeIn direction="up" delay={350}>
          <div className="flex justify-center mb-12">
            <div className="bg-card border border-border rounded-xl p-1.5 inline-flex gap-1">
              <TabsList className="bg-transparent p-0 h-auto gap-1">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms.map((item, index) => (
              <>{renderGlossaryCard(item, index)}{index === 8 && <NativeAdCard key="native-ad" />}</>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fundamentals" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms
              .filter((item) => item.category === "fundamentals")
              .map((item, index) => renderGlossaryCard(item, index))}
          </div>
        </TabsContent>

        <TabsContent value="techniques" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms
              .filter((item) => item.category === "techniques")
              .map((item, index) => renderGlossaryCard(item, index))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms
              .filter((item) => item.category === "applications")
              .map((item, index) => renderGlossaryCard(item, index))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

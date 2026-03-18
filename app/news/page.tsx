import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ArrowUpRight, BookmarkPlus } from "lucide-react"
import Link from "next/link"
import { createServerClient } from "@/lib/supabase/server"
import { FadeIn } from "@/app/components/fade-in"
import { AdSlot } from "@/app/components/ad-slot"
import { NativeAdCard } from "@/app/components/native-ad-card"
import { newsArticles as staticNewsArticles } from "@/app/lib/data/news-data"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "AI News",
  description:
    "Stay current with AI breakthroughs, policy updates, product launches, and research highlights from across the industry.",
  openGraph: {
    title: "AI News & Trends | AI Learning Hub",
    description:
      "Stay current with AI breakthroughs, policy updates, product launches, and research highlights from across the industry.",
    url: "/news",
  },
  twitter: {
    title: "AI News & Trends | AI Learning Hub",
    description: "Read the latest AI news, trends, and research highlights.",
  },
}

export default async function NewsPage() {
  const supabase = createServerClient()
  const { data: newsArticles } = await supabase
    .from("news_articles")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(50)
  const articles = newsArticles?.length ? newsArticles : staticNewsArticles

  const renderArticleCard = (article: (typeof articles)[number], index: number) => (
    <FadeIn key={article.id} direction="up" delay={50 + index * 30}>
      <div className="rounded-2xl border border-border bg-card overflow-hidden hover:border-gold/20 transition-all duration-300 flex flex-col h-full group">
        <div className="relative overflow-hidden h-48">
          <img
            src={article.image_url || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <span className="inline-flex items-center border border-border text-xs px-2.5 py-0.5 rounded-full text-muted-foreground font-medium">
              {article.category}
            </span>
            <div className="flex items-center text-muted-foreground text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {article.read_time}
            </div>
          </div>
          <h3 className="font-semibold text-foreground text-lg mb-1 leading-snug">{article.title}</h3>
          <p className="text-xs text-muted-foreground mb-3">
            {article.published_at} &middot; {article.source}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{article.summary}</p>
          <div className="flex justify-between items-center mt-5 pt-4 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              className="text-gold hover:text-gold-light hover:bg-gold/5 px-3 -ml-3"
              asChild
            >
              <Link href={article.source_url ?? "#"}>
                Read Article <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground px-2">
              <BookmarkPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  )

  return (
    <div className="section-container py-24 md:py-32">
      {/* Hero */}
      <div className="text-center mb-16 space-y-4">
        <FadeIn direction="up" delay={50}>
          <p className="label-text">Stay Informed</p>
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            AI <span className="gold-text">News</span>
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={200}>
          <p className="mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
            Stay updated with the latest developments, breakthroughs, and trends in AI.
          </p>
        </FadeIn>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <FadeIn direction="up" delay={250}>
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="bg-card border border-border rounded-xl p-1.5 inline-flex gap-1">
              <TabsList className="bg-transparent p-0 h-auto gap-1">
                <TabsTrigger
                  value="all"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  All News
                </TabsTrigger>
                <TabsTrigger
                  value="models"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  AI Models
                </TabsTrigger>
                <TabsTrigger
                  value="research"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Research
                </TabsTrigger>
                <TabsTrigger
                  value="applications"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Applications
                </TabsTrigger>
                <TabsTrigger
                  value="policy"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Policy & Ethics
                </TabsTrigger>
                <TabsTrigger
                  value="business"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                >
                  Business
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </FadeIn>

        <AdSlot variant="inline" className="mb-8" />

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <>{renderArticleCard(article, index)}{index === 5 && <NativeAdCard key="native-ad" />}</>
            ))}
          </div>
        </TabsContent>

        {["models", "research", "applications", "policy", "business"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles
                .filter((article) => article.category === category)
                .map((article, index) => renderArticleCard(article, index))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Newsletter */}
      <FadeIn direction="up" delay={300}>
        <div className="mt-24 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
                Subscribe to AI News Updates
              </h2>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Get the latest AI news and trends delivered straight to your inbox. Choose your interests to receive
                personalized updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full sm:w-64 rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/40"
              />
              <Button className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl h-11 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

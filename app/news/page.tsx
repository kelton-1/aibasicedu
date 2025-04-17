import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ArrowUpRight, BookmarkPlus } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  // This would typically come from an API or database
  const newsArticles = [
    {
      id: 1,
      title: "OpenAI Announces GPT-5 with Enhanced Reasoning Capabilities",
      summary: "The latest model shows significant improvements in logical reasoning and problem-solving abilities.",
      date: "2025-04-03",
      readTime: "5 min read",
      source: "AI Insider",
      sourceUrl: "#",
      category: "models",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "New Research Shows AI Can Predict Protein Structures with 99% Accuracy",
      summary: "Breakthrough in computational biology could accelerate drug discovery and medical research.",
      date: "2025-04-02",
      readTime: "8 min read",
      source: "Science Daily",
      sourceUrl: "#",
      category: "research",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "EU Passes Comprehensive AI Regulation Framework",
      summary:
        "New legislation sets standards for transparency, accountability, and safety in artificial intelligence systems.",
      date: "2025-04-01",
      readTime: "6 min read",
      source: "Tech Policy Journal",
      sourceUrl: "#",
      category: "policy",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "AI-Generated Art Wins Major International Competition",
      summary:
        "Controversy erupts as AI-created piece takes first prize in prestigious art contest, raising questions about creativity and authorship.",
      date: "2025-03-30",
      readTime: "4 min read",
      source: "Arts Today",
      sourceUrl: "#",
      category: "applications",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Small Businesses Adopting AI at Record Rates, Survey Finds",
      summary: "New report shows 78% of small businesses now use some form of AI, up from 45% last year.",
      date: "2025-03-29",
      readTime: "7 min read",
      source: "Business Insider",
      sourceUrl: "#",
      category: "business",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Researchers Develop New Method to Reduce AI Hallucinations",
      summary: "Novel approach significantly decreases false or misleading outputs from large language models.",
      date: "2025-03-28",
      readTime: "9 min read",
      source: "AI Research Weekly",
      sourceUrl: "#",
      category: "research",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI News & Trends</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Stay updated with the latest developments, breakthroughs, and trends in AI.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8 overflow-x-auto">
          <TabsList>
            <TabsTrigger value="all">All News</TabsTrigger>
            <TabsTrigger value="models">AI Models</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="policy">Policy & Ethics</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden flex flex-col">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-2">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">
                    {article.date} • {article.source}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{article.summary}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={article.sourceUrl}>
                      Read Full Article <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {["models", "research", "applications", "policy", "business"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles
                .filter((article) => article.category === category)
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden flex flex-col">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl mt-2">{article.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        {article.date} • {article.source}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{article.summary}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={article.sourceUrl}>
                          Read Full Article <ArrowUpRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Subscribe to AI News Updates</h2>
        <p className="text-gray-500 mb-6">
          Get the latest AI news and trends delivered straight to your inbox. Choose your interests to receive
          personalized updates.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button className="md:w-auto">Subscribe</Button>
        </div>
      </div>
    </div>
  )
}


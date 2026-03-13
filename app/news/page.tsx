import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, ArrowUpRight, BookmarkPlus } from "lucide-react"
import Link from "next/link"
import { newsArticles } from "@/lib/content/news"

export default function NewsPage() {
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
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
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
                    <Link href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
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
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
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
                        <Link href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
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

      <div className="mt-12 p-6 border rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold mb-4">Subscribe to AI News Updates</h2>
        <p className="text-gray-600 mb-4">
          Get the latest AI news and trends delivered straight to your inbox. Choose your interests to receive
          personalized updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}

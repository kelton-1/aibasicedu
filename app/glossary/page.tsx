import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { createServerClient } from "@/lib/supabase/server"

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
  const glossaryTerms = glossaryData ?? []

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Glossary</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Comprehensive dictionary of AI terms and concepts explained in plain language.
        </p>
        <div className="w-full max-w-md flex items-center space-x-2">
          <Input type="search" placeholder="Search terms..." className="flex-1" />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Terms</TabsTrigger>
            <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
            <TabsTrigger value="techniques">Techniques</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.term}</CardTitle>
                  <CardDescription>
                    Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)} | Level:{" "}
                    {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fundamentals" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms
              .filter((item) => item.category === "fundamentals")
              .map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.term}</CardTitle>
                    <CardDescription>Level: {item.level.charAt(0).toUpperCase() + item.level.slice(1)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="techniques" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms
              .filter((item) => item.category === "techniques")
              .map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.term}</CardTitle>
                    <CardDescription>Level: {item.level.charAt(0).toUpperCase() + item.level.slice(1)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms
              .filter((item) => item.category === "applications")
              .map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.term}</CardTitle>
                    <CardDescription>Level: {item.level.charAt(0).toUpperCase() + item.level.slice(1)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


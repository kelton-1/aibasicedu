import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function GlossaryPage() {
  // This would typically come from a database or API
  const glossaryTerms = [
    {
      term: "Artificial Intelligence (AI)",
      definition: "The simulation of human intelligence processes by machines, especially computer systems.",
      category: "fundamentals",
      level: "beginner",
    },
    {
      term: "Machine Learning (ML)",
      definition:
        "A subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.",
      category: "fundamentals",
      level: "beginner",
    },
    {
      term: "Deep Learning",
      definition:
        "A subset of machine learning that uses neural networks with many layers (hence 'deep') to analyze various factors of data.",
      category: "techniques",
      level: "intermediate",
    },
    {
      term: "Neural Network",
      definition:
        "Computing systems inspired by the biological neural networks that constitute animal brains, designed to recognize patterns.",
      category: "techniques",
      level: "intermediate",
    },
    {
      term: "Natural Language Processing (NLP)",
      definition:
        "A field of AI that gives computers the ability to understand text and spoken words in the same way humans can.",
      category: "applications",
      level: "intermediate",
    },
    {
      term: "Large Language Model (LLM)",
      definition: "A type of AI model trained on vast amounts of text data to understand and generate human-like text.",
      category: "applications",
      level: "intermediate",
    },
    {
      term: "Prompt Engineering",
      definition: "The process of designing effective inputs (prompts) for AI systems to get desired outputs.",
      category: "techniques",
      level: "beginner",
    },
    {
      term: "Generative AI",
      definition:
        "AI systems that can generate new content, such as text, images, audio, or video, based on what they've learned from existing data.",
      category: "applications",
      level: "beginner",
    },
    {
      term: "Transformer",
      definition:
        "A deep learning model architecture that uses self-attention mechanisms, forming the basis for many modern language models.",
      category: "techniques",
      level: "advanced",
    },
    {
      term: "Fine-tuning",
      definition:
        "The process of taking a pre-trained model and further training it on a specific dataset for a particular task.",
      category: "techniques",
      level: "advanced",
    },
    {
      term: "Reinforcement Learning",
      definition:
        "A type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize some notion of reward.",
      category: "techniques",
      level: "advanced",
    },
    {
      term: "Computer Vision",
      definition:
        "A field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs.",
      category: "applications",
      level: "intermediate",
    },
  ]

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


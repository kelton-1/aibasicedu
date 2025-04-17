import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Brain, Lightbulb, ArrowRight, Clock, BarChart3 } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"
import { SectionHeading } from "@/app/components/section-heading"
import { ContentCard } from "@/app/components/content-card"

export default function TutorialsPage() {
  // This would typically come from a database or API
  const tutorials = [
    {
      id: "prompt-engineering-basics",
      title: "Prompt Engineering Basics",
      description: "Learn the fundamentals of crafting effective prompts for AI systems.",
      category: "prompt-engineering",
      level: "beginner",
      duration: "20 min",
      image: "/placeholder.svg?height=200&width=400",
      modules: 5,
      exercises: 3,
    },
    {
      id: "understanding-llms",
      title: "Understanding Large Language Models",
      description: "Interactive exploration of how LLMs work and generate text.",
      category: "ai-concepts",
      level: "intermediate",
      duration: "30 min",
      image: "/placeholder.svg?height=200&width=400",
      modules: 7,
      exercises: 4,
    },
    {
      id: "image-generation-playground",
      title: "AI Image Generation Playground",
      description: "Experiment with prompts and parameters to generate AI images.",
      category: "generative-ai",
      level: "beginner",
      duration: "25 min",
      image: "/placeholder.svg?height=200&width=400",
      modules: 4,
      exercises: 5,
    },
    {
      id: "chain-of-thought-prompting",
      title: "Chain-of-Thought Prompting",
      description: "Master advanced prompting techniques for complex reasoning tasks.",
      category: "prompt-engineering",
      level: "advanced",
      duration: "45 min",
      image: "/placeholder.svg?height=200&width=400",
      modules: 8,
      exercises: 6,
    },
    {
      id: "ai-ethics-scenarios",
      title: "AI Ethics Interactive Scenarios",
      description: "Navigate ethical dilemmas and decision-making in AI development.",
      category: "ai-ethics",
      level: "intermediate",
      duration: "35 min",
      image: "/placeholder.svg?height=200&width=400",
      modules: 6,
      exercises: 4,
    },
    {
      id: "build-simple-classifier",
      title: "Build a Simple Text Classifier",
      description: "Create and train a basic AI model to classify text.",
      category: "practical-ai",
      level: "intermediate",
      duration: "50 min",
      image: "/placeholder.svg?height=200&width=400",
      modules: 9,
      exercises: 7,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        title="Interactive AI Tutorials"
        description="Learn AI concepts through hands-on exercises and interactive demonstrations."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FadeIn direction="up" delay={100}>
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-0 hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle>Learn by Doing</CardTitle>
                <CardDescription>Interactive exercises reinforce concepts</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Hands-on practice with immediate feedback helps solidify your understanding of AI concepts.</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle>Real-world Examples</CardTitle>
                <CardDescription>Apply concepts to practical scenarios</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>See how AI concepts are applied in real-world situations with interactive demonstrations.</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn direction="up" delay={300}>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 hover:shadow-md transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <CardTitle>Track Your Progress</CardTitle>
                <CardDescription>Monitor your learning journey</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Complete exercises and quizzes to track your understanding and mastery of AI concepts.</p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8 overflow-x-auto">
          <TabsList className="bg-gray-100/80 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              All Tutorials
            </TabsTrigger>
            <TabsTrigger
              value="prompt-engineering"
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Prompt Engineering
            </TabsTrigger>
            <TabsTrigger value="ai-concepts" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              AI Concepts
            </TabsTrigger>
            <TabsTrigger value="generative-ai" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Generative AI
            </TabsTrigger>
            <TabsTrigger value="ai-ethics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              AI Ethics
            </TabsTrigger>
            <TabsTrigger value="practical-ai" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Practical AI
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <ContentCard
                key={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                image={tutorial.image}
                badge={tutorial.category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                delay={100 + index * 50}
                footer={
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                    asChild
                  >
                    <Link href={`/tutorials/${tutorial.id}`}>
                      Start Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                }
              >
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{tutorial.modules} modules</span>
                  </div>
                  <div className="flex items-center">
                    <Lightbulb className="h-4 w-4 mr-1" />
                    <span>{tutorial.exercises} exercises</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={
                      tutorial.level === "beginner"
                        ? "secondary"
                        : tutorial.level === "intermediate"
                          ? "outline"
                          : "destructive"
                    }
                  >
                    {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
                  </Badge>
                </div>
              </ContentCard>
            ))}
          </div>
        </TabsContent>

        {["prompt-engineering", "ai-concepts", "generative-ai", "ai-ethics", "practical-ai"].map((category) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials
                .filter((tutorial) => tutorial.category === category)
                .map((tutorial, index) => (
                  <ContentCard
                    key={tutorial.id}
                    title={tutorial.title}
                    description={tutorial.description}
                    image={tutorial.image}
                    badge={tutorial.category
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")}
                    delay={100 + index * 50}
                    footer={
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        asChild
                      >
                        <Link href={`/tutorials/${tutorial.id}`}>
                          Start Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    }
                  >
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        <span>{tutorial.modules} modules</span>
                      </div>
                      <div className="flex items-center">
                        <Lightbulb className="h-4 w-4 mr-1" />
                        <span>{tutorial.exercises} exercises</span>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant={
                          tutorial.level === "beginner"
                            ? "secondary"
                            : tutorial.level === "intermediate"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
                      </Badge>
                    </div>
                  </ContentCard>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <FadeIn direction="up" delay={400}>
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">Can't find what you're looking for?</h2>
              <p className="text-gray-600 max-w-md">
                We're constantly adding new tutorials based on user feedback and the latest AI developments.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Button variant="outline" className="w-full md:w-auto border-purple-200 hover:bg-purple-50">
                Request a Tutorial
              </Button>
              <Button className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Browse All Resources
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}


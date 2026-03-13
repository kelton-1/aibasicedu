import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, BookOpen, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/app/components/fade-in"
import { ContentCard } from "@/app/components/content-card"
import { tutorials } from "@/lib/content/tutorials"

export default function TutorialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interactive AI Tutorials</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Learn AI concepts through hands-on exercises and practical examples.
        </p>
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

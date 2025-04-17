"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Copy, CheckCircle, BookOpen, Code, Palette } from "lucide-react"

export default function PromptsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const promptTemplates = [
    {
      title: "Basic Question",
      description: "For simple, factual questions",
      template: "What is [topic]?",
      example: "What is machine learning?",
      tips: ["Be specific about what you want to know", "Ask one question at a time"],
      category: "beginner",
    },
    {
      title: "Explain Like I'm Five",
      description: "Get simple explanations for complex topics",
      template: "Explain [complex topic] in simple terms as if I'm 5 years old.",
      example: "Explain neural networks in simple terms as if I'm 5 years old.",
      tips: ["Use for technical or abstract concepts", "Great for initial understanding"],
      category: "beginner",
    },
    {
      title: "Step-by-Step Guide",
      description: "Get detailed instructions",
      template: "Provide a step-by-step guide on how to [task].",
      example: "Provide a step-by-step guide on how to fine-tune a language model.",
      tips: ["Be specific about the task", "Mention your experience level if relevant"],
      category: "intermediate",
    },
    {
      title: "Compare and Contrast",
      description: "Understand differences between concepts",
      template: "Compare and contrast [concept A] and [concept B], highlighting key differences and similarities.",
      example:
        "Compare and contrast supervised learning and unsupervised learning, highlighting key differences and similarities.",
      tips: ["Choose related concepts for meaningful comparison", "Specify aspects you're interested in"],
      category: "intermediate",
    },
    {
      title: "Code Generation",
      description: "Get code examples",
      template: "Write a [language] function that [functionality]. Include comments explaining the code.",
      example:
        "Write a Python function that implements a simple neural network for image classification. Include comments explaining the code.",
      tips: [
        "Specify programming language",
        "Describe desired functionality clearly",
        "Ask for comments if you need explanations",
      ],
      category: "advanced",
    },
    {
      title: "Creative Content",
      description: "Generate creative content",
      template: "Write a [content type] about [topic] in the style of [style/author].",
      example: "Write a blog post about the future of AI in healthcare in the style of a scientific journal.",
      tips: ["Be specific about tone and style", "Provide context or background information"],
      category: "advanced",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Prompt Engineering</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Learn how to craft effective prompts to get the best results from AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="h-8 w-8 text-blue-500" />
            <div>
              <CardTitle>Learn the Basics</CardTitle>
              <CardDescription>Understand prompt fundamentals</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>Master the core principles of effective prompting to get better results from AI systems.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Code className="h-8 w-8 text-purple-500" />
            <div>
              <CardTitle>Practice Templates</CardTitle>
              <CardDescription>Use proven prompt patterns</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>Browse our library of prompt templates for different use cases and experience levels.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Palette className="h-8 w-8 text-green-500" />
            <div>
              <CardTitle>Workshop Your Prompts</CardTitle>
              <CardDescription>Refine and improve</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>Test and iterate on your prompts with our interactive workshop tools.</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Prompt Templates Library</h2>
          <p className="text-gray-500 mb-6">
            Browse our collection of prompt templates for different use cases. Click on any template to copy it and use
            with your favorite AI tool.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Templates</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promptTemplates.map((prompt, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="flex items-center">
                        <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                        {prompt.title}
                      </CardTitle>
                      <Badge variant="outline">{prompt.category}</Badge>
                    </div>
                    <CardDescription>{prompt.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-3 rounded-md mb-4">
                      <p className="font-mono text-sm">{prompt.template}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Example:</p>
                      <p className="text-sm text-gray-600">{prompt.example}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold mb-1">Tips:</p>
                      <ul className="text-sm text-gray-600 list-disc pl-5">
                        {prompt.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => copyToClipboard(prompt.template, index)}
                    >
                      {copiedIndex === index ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Template
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["beginner", "intermediate", "advanced"].map((level) => (
            <TabsContent key={level} value={level} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promptTemplates
                  .filter((prompt) => prompt.category === level)
                  .map((prompt, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="flex items-center">
                            <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                            {prompt.title}
                          </CardTitle>
                          <Badge variant="outline">{prompt.category}</Badge>
                        </div>
                        <CardDescription>{prompt.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 p-3 rounded-md mb-4">
                          <p className="font-mono text-sm">{prompt.template}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1">Example:</p>
                          <p className="text-sm text-gray-600">{prompt.example}</p>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-semibold mb-1">Tips:</p>
                          <ul className="text-sm text-gray-600 list-disc pl-5">
                            {prompt.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => copyToClipboard(prompt.template, index)}
                        >
                          {copiedIndex === index ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 mr-2" />
                              Copy Template
                            </>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Prompt Workshop</h2>
          <p className="text-gray-500 mb-6">
            Practice crafting your own prompts. Enter a prompt below, and we'll provide feedback and suggestions for
            improvement.
          </p>
          <div className="space-y-4">
            <Textarea placeholder="Enter your prompt here..." className="min-h-[150px]" />
            <Button className="w-full md:w-auto">Analyze Prompt</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


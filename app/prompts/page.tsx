"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Lightbulb, Copy, CheckCircle, BookOpen, Code, Palette } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"
import { AdSlot } from "@/app/components/ad-slot"

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

  const renderPromptCard = (prompt: (typeof promptTemplates)[number], index: number) => (
    <FadeIn key={index} direction="up" delay={50 + index * 40}>
      <div className="rounded-2xl border border-border bg-card p-6 hover:border-gold/20 transition-all duration-300 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-gold" />
            <h3 className="font-semibold text-foreground">{prompt.title}</h3>
          </div>
          <span className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-medium ${
            prompt.category === "advanced"
              ? "border border-gold/20 text-gold"
              : "border border-border text-muted-foreground"
          }`}>
            {prompt.category.charAt(0).toUpperCase() + prompt.category.slice(1)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{prompt.description}</p>

        {/* Template */}
        <div className="font-mono text-sm bg-background p-4 rounded-lg border border-border mb-4">
          {prompt.template}
        </div>

        {/* Example */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Example</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{prompt.example}</p>
        </div>

        {/* Tips */}
        <div className="mb-5 flex-grow">
          <p className="text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">Tips</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {prompt.tips.map((tip, tipIndex) => (
              <li key={tipIndex} className="flex items-start gap-2">
                <span className="text-gold mt-1.5 text-[6px]">&#9679;</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Copy Button */}
        <Button
          variant="outline"
          className={`w-full rounded-xl border-border transition-all duration-300 ${
            copiedIndex === index
              ? "border-gold/40 text-gold bg-gold/5"
              : "hover:border-gold/20 hover:text-foreground"
          }`}
          onClick={() => copyToClipboard(prompt.template, index)}
        >
          {copiedIndex === index ? (
            <>
              <CheckCircle className="h-4 w-4 mr-2 text-gold" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-2" />
              Copy Template
            </>
          )}
        </Button>
      </div>
    </FadeIn>
  )

  return (
    <div className="section-container py-24 md:py-32">
      {/* Hero */}
      <div className="text-center mb-16 space-y-4">
        <FadeIn direction="up" delay={50}>
          <p className="label-text">Master the Craft</p>
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Prompt <span className="gold-text">Engineering</span>
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={200}>
          <p className="mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
            Learn how to craft effective prompts to get the best results from AI systems.
          </p>
        </FadeIn>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
        <FadeIn direction="up" delay={100}>
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-gold/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <BookOpen className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Learn the Basics</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Master the core principles of effective prompting to get better results from AI systems.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-gold/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <Code className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Practice Templates</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Browse our library of prompt templates for different use cases and experience levels.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={300}>
          <div className="rounded-2xl border border-border bg-card p-8 hover:border-gold/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <Palette className="h-5 w-5 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Workshop Your Prompts</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Test and iterate on your prompts with our interactive workshop tools.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Ad: Below hero */}
      <AdSlot variant="leaderboard" className="mb-16" />

      {/* Templates Section */}
      <div className="space-y-8">
        <FadeIn direction="up" delay={100}>
          <div className="text-center mb-4">
            <p className="label-text mb-4">Templates</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-3">
              Prompt Templates Library
            </h2>
            <p className="text-muted-foreground max-w-[560px] mx-auto leading-relaxed">
              Browse our collection of prompt templates for different use cases. Click on any template to copy it and use
              with your favorite AI tool.
            </p>
          </div>
        </FadeIn>

        <Tabs defaultValue="all" className="w-full">
          <FadeIn direction="up" delay={200}>
            <div className="flex justify-center mb-12">
              <div className="bg-card border border-border rounded-xl p-1.5 inline-flex gap-1">
                <TabsList className="bg-transparent p-0 h-auto gap-1">
                  <TabsTrigger
                    value="all"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                  >
                    All Templates
                  </TabsTrigger>
                  <TabsTrigger
                    value="beginner"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                  >
                    Beginner
                  </TabsTrigger>
                  <TabsTrigger
                    value="intermediate"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                  >
                    Intermediate
                  </TabsTrigger>
                  <TabsTrigger
                    value="advanced"
                    className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                  >
                    Advanced
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </FadeIn>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promptTemplates.map((prompt, index) => renderPromptCard(prompt, index))}
            </div>
          </TabsContent>

          {["beginner", "intermediate", "advanced"].map((level) => (
            <TabsContent key={level} value={level} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {promptTemplates
                  .filter((prompt) => prompt.category === level)
                  .map((prompt, index) => renderPromptCard(prompt, index))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Ad: After template grid */}
        <AdSlot variant="inline" className="mt-8" />

        {/* Prompt Workshop */}
        <FadeIn direction="up" delay={300}>
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="label-text mb-4">Workshop</p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-2">Prompt Workshop</h2>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                Practice crafting your own prompts. Enter a prompt below, and we'll provide feedback and suggestions for
                improvement.
              </p>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              <Textarea
                placeholder="Enter your prompt here..."
                className="min-h-[150px] bg-background border-border rounded-xl text-foreground placeholder:text-muted-foreground resize-none focus-visible:ring-1 focus-visible:ring-gold/40"
              />
              <div className="flex justify-center">
                <Button className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8">
                  Analyze Prompt
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

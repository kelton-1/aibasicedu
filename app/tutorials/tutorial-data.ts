export const tutorialCategories = [
  "prompt-engineering",
  "ai-concepts",
  "generative-ai",
  "ai-ethics",
  "practical-ai",
] as const

export type TutorialCategory = (typeof tutorialCategories)[number]

export type TutorialLevel = "beginner" | "intermediate" | "advanced"

export type Tutorial = {
  id: string
  title: string
  description: string
  category: TutorialCategory
  level: TutorialLevel
  duration: string
  image: string
  modules: number
  exercises: number
  available: boolean
}

export const tutorials: Tutorial[] = [
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
    available: true,
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
    available: true,
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
    available: true,
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
    available: false,
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
    available: false,
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
    available: false,
  },
]

export const tutorialById = Object.fromEntries(tutorials.map((tutorial) => [tutorial.id, tutorial])) as Record<
  string,
  Tutorial
>

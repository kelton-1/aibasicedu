export type TutorialCategory = "prompt-engineering" | "ai-concepts" | "generative-ai" | "ai-ethics" | "practical-ai"
export type TutorialLevel = "beginner" | "intermediate" | "advanced"

export interface Tutorial {
  id: string
  title: string
  description: string
  category: TutorialCategory
  level: TutorialLevel
  duration: string
  modules: number
  exercises: number
  image: string
  publishedAt: string
}

export const tutorials: Tutorial[] = [
  {
    id: "prompt-engineering-basics",
    title: "Prompt Engineering Basics",
    description: "Learn the fundamentals of crafting effective prompts for AI language models.",
    category: "prompt-engineering",
    level: "beginner",
    duration: "45 min",
    modules: 4,
    exercises: 8,
    image: "/assets/media/tutorial-prompt.svg",
    publishedAt: "2024-04-15",
  },
  {
    id: "understanding-llms",
    title: "Understanding Large Language Models",
    description: "Explore how LLMs work, their capabilities, and limitations.",
    category: "ai-concepts",
    level: "intermediate",
    duration: "60 min",
    modules: 5,
    exercises: 6,
    image: "/assets/media/tutorial-concepts.svg",
    publishedAt: "2024-05-10",
  },
  {
    id: "image-generation-playground",
    title: "AI Image Generation Playground",
    description: "Hands-on tutorial for creating and refining AI-generated images.",
    category: "generative-ai",
    level: "beginner",
    duration: "30 min",
    modules: 3,
    exercises: 10,
    image: "/assets/media/tutorial-generative.svg",
    publishedAt: "2024-05-20",
  },
  {
    id: "chain-of-thought-prompting",
    title: "Chain-of-Thought Prompting",
    description: "Advanced techniques for improving reasoning in AI responses.",
    category: "prompt-engineering",
    level: "advanced",
    duration: "75 min",
    modules: 6,
    exercises: 12,
    image: "/assets/media/tutorial-prompt.svg",
    publishedAt: "2024-06-02",
  },
  {
    id: "ai-ethics-interactive-scenarios",
    title: "AI Ethics Interactive Scenarios",
    description: "Navigate ethical dilemmas in AI development through case studies.",
    category: "ai-ethics",
    level: "intermediate",
    duration: "50 min",
    modules: 4,
    exercises: 7,
    image: "/assets/media/tutorial-ethics.svg",
    publishedAt: "2024-06-16",
  },
  {
    id: "build-a-simple-text-classifier",
    title: "Build a Simple Text Classifier",
    description: "Create a practical AI application using modern machine learning tools.",
    category: "practical-ai",
    level: "intermediate",
    duration: "90 min",
    modules: 7,
    exercises: 9,
    image: "/assets/media/tutorial-practical.svg",
    publishedAt: "2024-06-28",
  },
]

export function getLatestTutorials(limit = 3) {
  return [...tutorials]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

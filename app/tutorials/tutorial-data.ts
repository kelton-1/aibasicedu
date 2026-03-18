import { staticTutorials } from "@/app/lib/data/tutorials-data-static"

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

/** Derive the tutorial list from the single source of truth in tutorials-data-static */
export const tutorials: Tutorial[] = staticTutorials.map((t) => ({
  id: t.id,
  title: t.title,
  description: t.description,
  category: t.category as TutorialCategory,
  level: t.difficulty,
  duration: `${t.duration_minutes} min`,
  image: "/placeholder.svg?height=200&width=400",
  modules: t.modules_count,
  exercises: t.exercises_count,
  available: t.status === "published",
}))

export const tutorialById = Object.fromEntries(tutorials.map((tutorial) => [tutorial.id, tutorial])) as Record<
  string,
  Tutorial
>

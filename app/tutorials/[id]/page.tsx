import { notFound } from "next/navigation"
import { tutorialById } from "../tutorial-data"
import PromptEngineeringBasicsTutorial from "../prompt-engineering-basics/page"
import UnderstandingLLMsTutorial from "../understanding-llms/page"
import ImageGenerationPlaygroundTutorial from "../image-generation-playground/page"

const tutorialPages = {
  "prompt-engineering-basics": PromptEngineeringBasicsTutorial,
  "understanding-llms": UnderstandingLLMsTutorial,
  "image-generation-playground": ImageGenerationPlaygroundTutorial,
} as const

type TutorialRouteParams = {
  id: string
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(tutorialPages).map((id) => ({ id }))
}

export const dynamicParams = false

export default async function TutorialDetailPage({ params }: { params: Promise<TutorialRouteParams> }) {
  const { id } = await params

  const tutorial = tutorialById[id]
  if (!tutorial) {
    notFound()
  }

  const TutorialPage = tutorialPages[id as keyof typeof tutorialPages]

  if (!TutorialPage) {
    notFound()
  }

  return <TutorialPage />
}

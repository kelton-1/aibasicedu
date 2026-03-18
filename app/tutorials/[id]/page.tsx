import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { tutorialById } from "../tutorial-data"
import PromptEngineeringBasicsTutorial from "../prompt-engineering-basics/page"
import UnderstandingLLMsTutorial from "../understanding-llms/page"
import ImageGenerationPlaygroundTutorial from "../image-generation-playground/page"
import { getCanonicalUrl } from "@/app/lib/seo"

const tutorialPages = {
  "prompt-engineering-basics": PromptEngineeringBasicsTutorial,
  "understanding-llms": UnderstandingLLMsTutorial,
  "image-generation-playground": ImageGenerationPlaygroundTutorial,
} as const

type TutorialRouteParams = {
  id: string
}

export function generateStaticParams() {
  return Object.keys(tutorialPages).map((id) => ({ id }))
}

export async function generateMetadata({ params }: { params: Promise<TutorialRouteParams> }): Promise<Metadata> {
  const { id } = await params
  const tutorial = tutorialById[id]

  if (!tutorial) {
    return {}
  }

  const title = tutorial.title
  const description = tutorial.description
  const url = getCanonicalUrl(`/tutorials/${id}`)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
  }
}

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

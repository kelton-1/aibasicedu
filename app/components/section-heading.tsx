import { cn } from "@/lib/utils"
import { FadeIn } from "@/app/components/fade-in"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, description, centered = true, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 mb-8", centered && "text-center", className)}>
      <FadeIn direction="up" delay={100}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
      </FadeIn>
      {description && (
        <FadeIn direction="up" delay={200}>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{description}</p>
        </FadeIn>
      )}
    </div>
  )
}


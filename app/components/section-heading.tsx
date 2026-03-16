import { cn } from "@/lib/utils"
import { FadeIn } from "@/app/components/fade-in"

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
  label?: string
}

export function SectionHeading({ title, description, centered = true, className, label }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 mb-16", centered && "text-center", className)}>
      {label && (
        <FadeIn direction="up" delay={50}>
          <p className="label-text">{label}</p>
        </FadeIn>
      )}
      <FadeIn direction="up" delay={100}>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-foreground">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn direction="up" delay={200}>
          <p className="mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}

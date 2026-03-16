import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/app/components/fade-in"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  title: string
  description?: string
  image?: string
  label?: string
  footer?: React.ReactNode
  className?: string
  delay?: number
  children?: React.ReactNode
}

export function ContentCard({
  title,
  description,
  image,
  label,
  footer,
  className,
  delay = 0,
  children,
}: ContentCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Card className={cn("h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-gold/20 group", className)}>
        {image && (
          <div className="relative overflow-hidden h-48">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {label && (
              <div className="absolute top-3 right-3">
                <span className="inline-block text-xs uppercase tracking-[0.2em] font-medium text-gold bg-background/80 border border-gold/20 rounded-full px-3 py-1">
                  {label}
                </span>
              </div>
            )}
          </div>
        )}
        <CardHeader>
          {!image && label && (
            <span className="label-text w-fit">{label}</span>
          )}
          <CardTitle className="text-foreground transition-colors duration-300">{title}</CardTitle>
          {description && <CardDescription className="text-muted-foreground leading-relaxed">{description}</CardDescription>}
        </CardHeader>
        {children && <CardContent>{children}</CardContent>}
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </FadeIn>
  )
}

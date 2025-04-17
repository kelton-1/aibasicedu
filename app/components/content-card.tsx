import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/app/components/fade-in"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  title: string
  description?: string
  image?: string
  badge?: string
  badgeVariant?: "default" | "secondary" | "destructive" | "outline"
  footer?: React.ReactNode
  className?: string
  delay?: number
  children?: React.ReactNode
}

export function ContentCard({
  title,
  description,
  image,
  badge,
  badgeVariant = "outline",
  footer,
  className,
  delay = 0,
  children,
}: ContentCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Card className={cn("h-full overflow-hidden transition-all duration-300 hover:shadow-md group", className)}>
        {image && (
          <div className="relative overflow-hidden h-48">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {badge && (
              <div className="absolute top-3 right-3">
                <Badge variant={badgeVariant}>{badge}</Badge>
              </div>
            )}
          </div>
        )}
        <CardHeader>
          {!image && badge && (
            <Badge variant={badgeVariant} className="w-fit">
              {badge}
            </Badge>
          )}
          <CardTitle className="group-hover:text-purple-700 transition-colors duration-300">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        {children && <CardContent>{children}</CardContent>}
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </FadeIn>
  )
}


import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/app/components/fade-in"
import Link from "next/link"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  linkText: string
  iconColor: string
  delay?: number
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  linkText,
  iconColor,
  delay = 0,
}: FeatureCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-gray-300 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/0 via-gray-50/0 to-gray-50/0 group-hover:via-gray-50/30 transition-all duration-700"></div>
        <CardHeader>
          <div
            className={`h-12 w-12 rounded-lg ${iconColor} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="group-hover:text-purple-700 transition-colors duration-300">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-gray-500">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" asChild className="group-hover:bg-gray-100 transition-colors duration-300">
            <Link href={href}>{linkText}</Link>
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  )
}


import type { LucideIcon } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  linkText: string
  iconColor?: string
  delay?: number
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  linkText,
  delay = 0,
}: FeatureCardProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Link href={href} className="block h-full group">
        <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20 group-hover:bg-accent/50">
          <Icon className="h-6 w-6 text-gold-mid mb-6 transition-colors duration-300 group-hover:text-gold-light" />
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>
          <span className="inline-flex items-center text-sm font-medium text-gold transition-colors duration-300 group-hover:text-gold-light">
            {linkText}
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </FadeIn>
  )
}

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/app/components/fade-in"

interface CompanyLogoProps {
  name: string
  logo: string
  slug: string
  delay?: number
}

export function CompanyLogo({ name, logo, slug, delay = 0 }: CompanyLogoProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <Link href={`/companies/${slug}`} className="block group" aria-label={`Learn more about ${name}`}>
        <div className="flex items-center justify-center h-16 rounded-xl border border-border bg-card px-4 transition-all duration-300 hover:border-gold/20">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            width={100}
            height={32}
            className="max-h-8 w-auto object-contain opacity-40 group-hover:opacity-70 transition-opacity duration-300 dark:invert"
          />
        </div>
      </Link>
    </FadeIn>
  )
}

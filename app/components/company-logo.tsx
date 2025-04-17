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
        <div className="relative bg-white rounded-lg shadow-sm p-4 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${name} logo`}
            width={120}
            height={40}
            className="max-h-12 w-auto object-contain"
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
        </div>
        <p className="mt-2 text-center text-sm font-medium text-gray-700">{name}</p>
      </Link>
    </FadeIn>
  )
}


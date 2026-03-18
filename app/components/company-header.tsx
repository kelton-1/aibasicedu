import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"
import { ROUTE_MAP } from "@/app/lib/route-map"

interface CompanyHeaderProps {
  name: string
  logo: string
  description: string
  founded: string
  headquarters: string
  website: string
  coverImage?: string
}

export function CompanyHeader({
  name,
  logo,
  description,
  founded,
  headquarters,
  website,
  coverImage,
}: CompanyHeaderProps) {
  return (
    <div className="relative mb-16">
      {/* Cover Image */}
      <div className="h-56 md:h-72 bg-background relative overflow-hidden">
        {coverImage && (
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={`${name} cover`}
            fill
            className="object-cover opacity-10"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Company Info Card */}
      <div className="section-container">
        <div className="relative -mt-28">
          <FadeIn direction="up">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex flex-col md:flex-row">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-border bg-card p-6 w-24 h-24 md:w-32 md:h-32 mb-6 md:mb-0 md:mr-8">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`${name} logo`}
                    width={100}
                    height={100}
                    className="max-w-full max-h-full object-contain dark:invert"
                  />
                </div>

                {/* Company Details */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{name}</h1>
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 md:mt-0 bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-5 py-2.5 text-sm transition-colors"
                    >
                      Visit Website <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground gap-4 sm:gap-8">
                    <div>
                      <span className="label-text block mb-1">Founded</span>
                      <span className="text-foreground font-medium">{founded}</span>
                    </div>
                    <div>
                      <span className="label-text block mb-1">Headquarters</span>
                      <span className="text-foreground font-medium">{headquarters}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            href={ROUTE_MAP.companies}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Companies
          </Link>
        </div>
      </div>
    </div>
  )
}

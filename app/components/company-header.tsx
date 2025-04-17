import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"

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
    <div className="relative mb-12">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-purple-500 to-indigo-600 relative overflow-hidden">
        {coverImage && (
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={`${name} cover`}
            fill
            className="object-cover opacity-20"
          />
        )}
      </div>

      {/* Company Info Card */}
      <div className="container px-4 md:px-6">
        <div className="relative -mt-24">
          <FadeIn direction="up">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`${name} logo`}
                    width={100}
                    height={100}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Company Details */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
                    <Button variant="outline" size="sm" asChild className="mt-2 md:mt-0">
                      <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-gray-600 mb-4">{description}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500">
                    <div className="mr-6 mb-2 sm:mb-0">
                      <span className="font-medium">Founded:</span> {founded}
                    </div>
                    <div>
                      <span className="font-medium">Headquarters:</span> {headquarters}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/companies" className="flex items-center">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Companies
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}


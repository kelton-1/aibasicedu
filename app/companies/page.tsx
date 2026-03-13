import type { Metadata } from "next"
import { FadeIn } from "@/app/components/fade-in"
import { SectionHeading } from "@/app/components/section-heading"
import { CompanyLogo } from "@/app/components/company-logo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "AI Companies",
  description:
    "Discover leading AI companies, research labs, and platforms shaping the future of artificial intelligence.",
  openGraph: {
    title: "AI Companies | AI Learning Hub",
    description:
      "Discover leading AI companies, research labs, and platforms shaping the future of artificial intelligence.",
    url: "/companies",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companies | AI Learning Hub",
    description: "Discover top AI companies and research organizations.",
    images: ["/twitter-image"],
  },
}

// Company data
const companies = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    slug: "openai",
    category: "research",
  },
  {
    name: "Google DeepMind",
    logo: "https://storage.googleapis.com/deepmind-media/DeepMind%20for%20Google/Logo%20and%20brand%20guidelines/RGB/DeepMind_for_Google_Logo_RGB_Landscape.svg",
    slug: "google-deepmind",
    category: "research",
  },
  {
    name: "Microsoft AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    slug: "microsoft",
    category: "enterprise",
  },
  {
    name: "Meta AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    slug: "meta",
    category: "research",
  },
  {
    name: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Anthropic_logo.svg",
    slug: "anthropic",
    category: "research",
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    slug: "hugging-face",
    category: "platform",
  },
  {
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    slug: "nvidia",
    category: "hardware",
  },
  {
    name: "IBM Watson",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    slug: "ibm-watson",
    category: "enterprise",
  },
  {
    name: "Stability AI",
    logo: "https://stability.ai/assets/images/stability-ai-logo.svg",
    slug: "stability-ai",
    category: "generative",
  },
  {
    name: "Midjourney",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    slug: "midjourney",
    category: "generative",
  },
  {
    name: "Cohere",
    logo: "https://cohere.com/images/cohere-logo.svg",
    slug: "cohere",
    category: "platform",
  },
  {
    name: "Runway",
    logo: "https://runwayml.com/images/runway-logo-emblem.svg",
    slug: "runway",
    category: "generative",
  },
]

export default function CompaniesPage() {
  // Group companies by category
  const researchCompanies = companies.filter((company) => company.category === "research")
  const enterpriseCompanies = companies.filter((company) => company.category === "enterprise")
  const generativeCompanies = companies.filter((company) => company.category === "generative")
  const platformCompanies = companies.filter((company) => company.category === "platform")
  const hardwareCompanies = companies.filter((company) => company.category === "hardware")

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        title="Leading AI Companies"
        description="Explore the companies at the forefront of artificial intelligence innovation and development."
      />

      <Tabs defaultValue="all" className="w-full mt-8">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-gray-100/80 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              All Companies
            </TabsTrigger>
            <TabsTrigger value="research" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Research Labs
            </TabsTrigger>
            <TabsTrigger value="enterprise" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Enterprise AI
            </TabsTrigger>
            <TabsTrigger value="generative" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Generative AI
            </TabsTrigger>
            <TabsTrigger value="platform" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              AI Platforms
            </TabsTrigger>
            <TabsTrigger value="hardware" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              AI Hardware
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 50}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="research">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {researchCompanies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 50}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="enterprise">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {enterpriseCompanies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 50}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="generative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {generativeCompanies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 50}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="platform">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {platformCompanies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 50}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hardware">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {hardwareCompanies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 50}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <FadeIn direction="up" delay={300}>
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">Interested in AI Industry Insights?</h2>
              <p className="text-gray-600 max-w-md">
                Explore our detailed company profiles to learn about their AI technologies, research focus, and impact
                on the industry.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <a
                href="/news"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white h-10 px-4 py-2"
              >
                Read AI Industry News
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

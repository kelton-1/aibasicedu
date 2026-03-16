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
  },
  twitter: {
    title: "AI Companies | AI Learning Hub",
    description: "Discover top AI companies and research organizations.",
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
    <div className="bg-background">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <FadeIn direction="up" delay={50}>
            <p className="label-text mb-4">Industry Leaders</p>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              <span className="gold-text">AI Companies</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <p className="mt-6 mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
              Explore the companies at the forefront of artificial intelligence innovation and development.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tabs + Grid */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <Tabs defaultValue="all" className="w-full">
            <FadeIn direction="up" delay={250}>
              <div className="flex justify-center mb-12">
                <TabsList className="bg-card border border-border rounded-xl p-1">
                  <TabsTrigger
                    value="all"
                    className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="research"
                    className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
                  >
                    Research
                  </TabsTrigger>
                  <TabsTrigger
                    value="enterprise"
                    className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
                  >
                    Enterprise
                  </TabsTrigger>
                  <TabsTrigger
                    value="generative"
                    className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
                  >
                    Generative
                  </TabsTrigger>
                  <TabsTrigger
                    value="platform"
                    className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
                  >
                    Platforms
                  </TabsTrigger>
                  <TabsTrigger
                    value="hardware"
                    className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
                  >
                    Hardware
                  </TabsTrigger>
                </TabsList>
              </div>
            </FadeIn>

            <TabsContent value="all">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <FadeIn direction="up" delay={300}>
            <div className="rounded-2xl border border-border bg-card p-10 md:p-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
                    AI Industry Insights
                  </h2>
                  <p className="text-muted-foreground max-w-md leading-relaxed">
                    Explore our detailed company profiles to learn about their AI technologies, research focus, and impact
                    on the industry.
                  </p>
                </div>
                <a
                  href="/news"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 text-sm transition-colors whitespace-nowrap"
                >
                  Read AI Industry News
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

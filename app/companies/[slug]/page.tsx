import type React from "react"
import { notFound } from "next/navigation"
import { CompanyHeader } from "@/app/components/company-header"
import { Timeline } from "@/app/components/timeline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/app/components/fade-in"
import { Brain, Code, Lightbulb, Newspaper, Users } from "lucide-react"

import { staticCompanyDetails } from "@/app/lib/data/company-details"

const companies = staticCompanyDetails

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const company = companies[slug as keyof typeof companies]

  if (!company) {
    notFound()
  }

  return (
    <div className="bg-background">
      <CompanyHeader
        name={company.name}
        logo={company.logo}
        description={company.description}
        founded={company.founded}
        headquarters={company.headquarters}
        website={company.website}
        coverImage={company.coverImage}
      />

      <div className="section-container pb-24 md:pb-32">
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="w-full justify-start mb-10 bg-card border border-border rounded-xl p-1">
            <TabsTrigger
              value="timeline"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Clock className="h-4 w-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Zap className="h-4 w-4 mr-2" />
              Products
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Brain className="h-4 w-4 mr-2" />
              Research
            </TabsTrigger>
            <TabsTrigger
              value="impact"
              className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
            >
              <Globe className="h-4 w-4 mr-2" />
              Industry Impact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">History</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  AI Development Timeline
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Track the evolution of {company.name}&apos;s AI technologies and key milestones.
                </p>
              </div>
            </FadeIn>

            <Timeline events={company.timeline} />
          </TabsContent>

          <TabsContent value="products">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">Products</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  AI Products &amp; Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Explore {company.name}&apos;s key AI products, services, and technologies.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.products.map((product, index) => (
                <FadeIn key={product.name} direction="up" delay={index * 100}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gold hover:text-gold-light flex items-center transition-colors"
                    >
                      Learn more <ExternalLink className="h-3 w-3 ml-1.5" />
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">Research</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  Research Focus Areas
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Key research directions and focus areas at {company.name}.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {company.research.map((area, index) => (
                <FadeIn key={area.title} direction="up" delay={index * 100}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                    <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <FadeIn direction="up">
              <div className="mb-8">
                <p className="label-text mb-2">Impact</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
                  Industry Impact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  How {company.name}&apos;s innovations are shaping the AI landscape and impacting various industries.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FadeIn direction="up" delay={100}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Technological Advancements</h3>
                      <p className="text-sm text-muted-foreground mb-3">Pushing the boundaries of what&apos;s possible</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {company.name} has consistently pushed the state-of-the-art in artificial intelligence,
                        establishing new benchmarks and inspiring further research and development across the industry.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Developer Ecosystem</h3>
                      <p className="text-sm text-muted-foreground mb-3">Enabling innovation through tools and platforms</p>
                      <p className="text-muted-foreground leading-relaxed">
                        By providing developers with powerful AI tools and platforms, {company.name} has fostered a
                        vibrant ecosystem of applications and services that leverage their technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={300}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Societal Impact</h3>
                      <p className="text-sm text-muted-foreground mb-3">Changing how we live and work</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {company.name}&apos;s AI technologies have transformed numerous aspects of daily life, from how we
                        search for information to how we create content and interact with digital services.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={400}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Newspaper className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Industry Standards</h3>
                      <p className="text-sm text-muted-foreground mb-3">Setting benchmarks for the field</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Through research publications, open-source contributions, and product releases, {company.name} has
                        helped establish standards and best practices that guide the entire AI industry.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function Zap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function ExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  )
}

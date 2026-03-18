import type { Metadata } from "next"
import Link from "next/link"
import { FadeIn } from "@/app/components/fade-in"
import { CompanyLogo } from "@/app/components/company-logo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { companies, companyCategories } from "@/app/lib/data/companies-data"
import { ROUTE_MAP } from "@/app/lib/route-map"

export const metadata: Metadata = {
  title: "AI Companies",
  description:
    "Discover leading AI companies, research labs, and platforms shaping the future of artificial intelligence.",
  openGraph: {
    title: "AI Companies | AI Learning Hub",
    description:
      "Discover leading AI companies, research labs, and platforms shaping the future of artificial intelligence.",
    url: ROUTE_MAP.companies,
  },
  twitter: {
    title: "AI Companies | AI Learning Hub",
    description: "Discover top AI companies and research organizations.",
  },
}

function CompanyGrid({ category }: { category: string }) {
  const filtered = category === "all" ? companies : companies.filter((c) => c.category === category)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {filtered.map((company, index) => (
        <CompanyLogo
          key={company.slug}
          name={company.name}
          logo={company.logo}
          slug={company.slug}
          delay={index * 50}
        />
      ))}
    </div>
  )
}

export default function CompaniesPage() {
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
                  {companyCategories.map((cat) => (
                    <TabsTrigger
                      key={cat.value}
                      value={cat.value}
                      className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
                    >
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </FadeIn>

            {companyCategories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <CompanyGrid category={cat.value} />
              </TabsContent>
            ))}
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
                <Link
                  href={ROUTE_MAP.news}
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 text-sm transition-colors whitespace-nowrap"
                >
                  Read AI Industry News
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

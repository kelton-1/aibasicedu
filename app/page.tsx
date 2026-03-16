import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Newspaper,
  Lightbulb,
  Compass,
  Brain,
  Code,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/app/components/fade-in"
import { FeatureCard } from "@/app/components/feature-card"
import { NewsletterSubscription } from "@/app/components/newsletter-subscription"
import { CompanyLogo } from "@/app/components/company-logo"
import { ROUTE_MAP } from "@/app/lib/route-map"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Start your AI journey with curated learning paths, interactive resources, and practical guidance for every skill level.",
  openGraph: {
    title: "AI Learning Hub | Home",
    description:
      "Start your AI journey with curated learning paths, interactive resources, and practical guidance for every skill level.",
    url: "/",
  },
  twitter: {
    title: "AI Learning Hub | Home",
    description: "Start your AI journey with curated learning paths and practical AI resources.",
  },
}

const featuredCompanies = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    slug: "openai",
  },
  {
    name: "Google DeepMind",
    logo: "https://storage.googleapis.com/deepmind-media/DeepMind%20for%20Google/Logo%20and%20brand%20guidelines/RGB/DeepMind_for_Google_Logo_RGB_Landscape.svg",
    slug: "google-deepmind",
  },
  {
    name: "Microsoft AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    slug: "microsoft",
  },
  {
    name: "Meta AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    slug: "meta",
  },
  {
    name: "Anthropic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Anthropic_logo.svg",
    slug: "anthropic",
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    slug: "hugging-face",
  },
]

const stats = [
  { label: "Learners", value: "10,000+" },
  { label: "Tutorials", value: "200+" },
  { label: "Companies", value: "50+" },
  { label: "Completion", value: "94%" },
]

const testimonials = [
  {
    name: "Sarah T.",
    role: "Marketing Professional",
    content:
      "I was hesitant about AI, thinking it would replace my job. This platform helped me understand how to use AI as a tool to enhance my work instead of fearing it.",
  },
  {
    name: "Michael R.",
    role: "Small Business Owner",
    content:
      "The personalized learning path helped me understand exactly what I needed to know to implement AI in my business without getting overwhelmed by technical jargon.",
  },
  {
    name: "Dr. Patel",
    role: "AI Researcher",
    content:
      "Even as someone working in the field, I find the curated news and advanced resources invaluable for staying on top of rapid developments.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ============ HERO ============ */}
      <section className="relative w-full py-24 md:py-32 lg:py-40">
        <div className="section-container">
          <div className="flex flex-col items-center text-center">
            {/* Headline */}
            <FadeIn direction="up" delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
                Master
                <br />
                <span className="gold-shimmer">Artificial Intelligence</span>
                <br />
                at Your Own Pace
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn direction="up" delay={250}>
              <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Personalized AI education for everyone — from complete beginners to seasoned experts.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 h-12 text-base transition-all duration-300"
                >
                  <Link href={ROUTE_MAP.getStarted}>
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="border border-border bg-transparent hover:bg-accent text-foreground rounded-xl px-8 h-12 text-base transition-all duration-300"
                >
                  <Link href={ROUTE_MAP.browse}>
                    Browse Resources
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Stat bar */}
            <FadeIn direction="up" delay={550}>
              <div className="flex items-center justify-center mt-16 pt-10 w-full max-w-2xl">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center">
                    <div className="flex flex-col items-center px-6 md:px-10">
                      <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1 uppercase tracking-[0.15em]">
                        {stat.label}
                      </span>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="h-10 w-px bg-border flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ COMPANIES ============ */}
      <section className="w-full py-16 md:py-20 border-t border-b border-border">
        <div className="section-container">
          <FadeIn direction="up" delay={100}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground text-center mb-10">
              Trusted by learners studying
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {featuredCompanies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 60}
              />
            ))}
          </div>

          <FadeIn direction="up" delay={400}>
            <div className="flex justify-center mt-10">
              <Link
                href={ROUTE_MAP.companies}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                View All Companies
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="w-full py-24 md:py-32">
        <div className="section-container">
          <div className="text-center mb-16">
            <FadeIn direction="up" delay={50}>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground mb-4">
                Platform
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={150}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Everything you need
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={BookOpen}
              title="AI Glossary"
              description="Comprehensive dictionary of AI terms and concepts explained in plain language."
              href={ROUTE_MAP.glossary}
              linkText="Explore Glossary"
              iconColor="bg-neutral-900 border border-border"
              delay={100}
            />
            <FeatureCard
              icon={Lightbulb}
              title="Prompt Engineering"
              description="Learn how to craft effective prompts to get the best results from AI systems."
              href={ROUTE_MAP.prompts}
              linkText="Learn Prompting"
              iconColor="bg-neutral-900 border border-border"
              delay={150}
            />
            <FeatureCard
              icon={Newspaper}
              title="AI News"
              description="Stay updated with the latest developments, breakthroughs, and trends in AI."
              href={ROUTE_MAP.news}
              linkText="Read News"
              iconColor="bg-neutral-900 border border-border"
              delay={200}
            />
            <FeatureCard
              icon={Compass}
              title="Personalized Path"
              description="Custom learning journeys based on your interests and experience level."
              href={ROUTE_MAP.personalize}
              linkText="Get Started"
              iconColor="bg-neutral-900 border border-border"
              delay={250}
            />
          </div>
        </div>
      </section>

      {/* ============ LEARN BY DOING ============ */}
      <section className="w-full py-24 md:py-32">
        <div className="section-container">
          <div className="text-center mb-16">
            <FadeIn direction="up" delay={50}>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground mb-4">
                Hands-on
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={150}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Learn by doing
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Interactive Tutorials */}
            <FadeIn direction="up" delay={100}>
              <div className="premium-card h-full flex flex-col">
                <div className="mb-6">
                  <Brain className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Interactive Tutorials
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  Learn through guided, hands-on experiences with practical exercises and real-time feedback.
                </p>
                <Link
                  href={ROUTE_MAP.tutorials}
                  className="inline-flex items-center text-sm font-medium text-gold-light hover:text-gold-highlight transition-colors duration-300"
                >
                  Explore Tutorials
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* Hands-on Projects */}
            <FadeIn direction="up" delay={200}>
              <div className="premium-card h-full flex flex-col">
                <div className="mb-6">
                  <Code className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Hands-on Projects
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  Build practical AI applications with step-by-step guidance, from chatbots to image recognition.
                </p>
                <Link
                  href={ROUTE_MAP.projects}
                  className="inline-flex items-center text-sm font-medium text-gold-light hover:text-gold-highlight transition-colors duration-300"
                >
                  Start Building
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* AI Playgrounds */}
            <FadeIn direction="up" delay={300}>
              <div className="premium-card h-full flex flex-col">
                <div className="mb-6">
                  <Sparkles className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  AI Playgrounds
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  Test different prompts, parameters, and techniques with interactive AI playgrounds.
                </p>
                <Link
                  href={ROUTE_MAP.playgrounds}
                  className="inline-flex items-center text-sm font-medium text-gold-light hover:text-gold-highlight transition-colors duration-300"
                >
                  Try Playgrounds
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="w-full py-24 md:py-32">
        <div className="section-container">
          <div className="text-center mb-16">
            <FadeIn direction="up" delay={50}>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground mb-4">
                Testimonials
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={150}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Trusted by learners worldwide
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={100 + index * 100} direction="up">
                <div className="premium-card h-full flex flex-col">
                  {/* Gold quote mark */}
                  <div className="text-4xl font-serif gold-text leading-none mb-4">&ldquo;</div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                    {testimonial.content}
                  </p>

                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="w-full py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <NewsletterSubscription />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="w-full py-24 md:py-32">
        <div className="section-container">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <FadeIn direction="up" delay={100}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
                Start your AI journey today
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Join thousands of learners discovering the potential of AI. No experience required.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <Button
                size="lg"
                asChild
                className="mt-10 bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 h-12 text-base transition-all duration-300"
              >
                <Link href={ROUTE_MAP.getStarted}>
                  Begin Your Learning Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

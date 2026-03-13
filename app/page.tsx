import Link from "next/link"
import { ArrowRight, BookOpen, Newspaper, Lightbulb, Compass, Brain, Code, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/app/components/fade-in"
import { SectionHeading } from "@/app/components/section-heading"
import { FeatureCard } from "@/app/components/feature-card"
import { NewsletterSubscription } from "@/app/components/newsletter-subscription"
import { CompanyLogo } from "@/app/components/company-logo"
import { getLatestNews } from "@/lib/content/news"
import { getLatestTutorials } from "@/lib/content/tutorials"

// Company data for the landing page
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

export default function Home() {
  const latestNews = getLatestNews(3)
  const latestTutorials = getLatestTutorials(3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-indigo-50/50 to-blue-50/50"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-4 text-center">
            <FadeIn direction="up" delay={100}>
              <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
                Your AI Learning Journey Starts Here
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Master <span className="gradient-text">Artificial Intelligence</span> at Your Own Pace
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Personalized AI education for everyone - from complete beginners to seasoned experts.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <div className="space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Link href="/get-started">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="border-purple-200 hover:bg-purple-50 transition-all duration-300"
                >
                  <Link href="/browse">Browse Resources</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={500}>
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 opacity-30 blur"></div>
                <img
                  src="/assets/media/hero-ai-learning.svg"
                  alt="AI Learning Platform"
                  className="relative rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Latest From AI Basic EDU"
            description="News and tutorials are powered by a shared content module so updates appear automatically."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Latest News</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {latestNews.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-3 border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium leading-snug">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/news">View</Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Latest Tutorials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {latestTutorials.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-3 border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium leading-snug">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/tutorials">View</Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leading AI Companies Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Leading AI Companies"
            description="Explore the companies at the forefront of artificial intelligence innovation."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8">
            {featuredCompanies.map((company, index) => (
              <CompanyLogo
                key={company.slug}
                name={company.name}
                logo={company.logo}
                slug={company.slug}
                delay={index * 50}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="border-purple-200 hover:bg-purple-50">
              <Link href="/companies">
                View All Companies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Everything You Need to Master AI"
            description="Comprehensive resources tailored to your experience level and interests."
          />

          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={BookOpen}
              title="AI Glossary"
              description="Comprehensive dictionary of AI terms and concepts explained in plain language."
              href="/glossary"
              linkText="Explore Glossary"
              iconColor="bg-purple-500"
              delay={100}
            />
            <FeatureCard
              icon={Lightbulb}
              title="Prompt Engineering"
              description="Learn how to craft effective prompts to get the best results from AI systems."
              href="/prompts"
              linkText="Learn Prompting"
              iconColor="bg-yellow-500"
              delay={200}
            />
            <FeatureCard
              icon={Newspaper}
              title="AI News"
              description="Stay updated with the latest developments, breakthroughs, and trends in AI."
              href="/news"
              linkText="Read News"
              iconColor="bg-blue-500"
              delay={300}
            />
            <FeatureCard
              icon={Compass}
              title="Personalized Path"
              description="Custom learning journeys based on your interests and experience level."
              href="/personalize"
              linkText="Get Started"
              iconColor="bg-green-500"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Interactive Learning Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Learn by Doing"
            description="Interactive tutorials and exercises to reinforce your understanding."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeIn direction="up" delay={100}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-6">
                  <Brain className="h-20 w-20 text-white animate-float" />
                </div>
                <CardHeader>
                  <CardTitle>Interactive Tutorials</CardTitle>
                  <CardDescription>Learn through guided, hands-on experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our interactive tutorials guide you through AI concepts with practical exercises and real-time
                    feedback.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    <Link href="/tutorials">
                      Explore Tutorials <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center p-6">
                  <Code className="h-20 w-20 text-white animate-float" />
                </div>
                <CardHeader>
                  <CardTitle>Hands-on Projects</CardTitle>
                  <CardDescription>Apply your knowledge with real projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Build practical AI applications with step-by-step guidance, from simple chatbots to image
                    recognition systems.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    <Link href="/projects">
                      Start Building <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={300}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center p-6">
                  <Sparkles className="h-20 w-20 text-white animate-float" />
                </div>
                <CardHeader>
                  <CardTitle>AI Playgrounds</CardTitle>
                  <CardDescription>Experiment with AI models in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Test different prompts, parameters, and techniques with our interactive AI playgrounds to see
                    immediate results.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    <Link href="/playgrounds">
                      Try Playgrounds <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Success Stories"
            description="See how our platform has helped people at all levels master AI concepts."
          />

          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
            {[
              {
                title: "From Skeptic to Advocate",
                name: "Sarah T.",
                role: "Marketing Professional",
                content:
                  "I was hesitant about AI, thinking it would replace my job. This platform helped me understand how to use AI as a tool to enhance my work instead of fearing it.",
                delay: 100,
              },
              {
                title: "Bridging the Knowledge Gap",
                name: "Michael R.",
                role: "Small Business Owner",
                content:
                  "The personalized learning path helped me understand exactly what I needed to know to implement AI in my business without getting overwhelmed by technical jargon.",
                delay: 200,
              },
              {
                title: "Advancing My Expertise",
                name: "Dr. Patel",
                role: "AI Researcher",
                content:
                  "Even as someone working in the field, I find the curated news and advanced resources invaluable for staying on top of rapid developments.",
                delay: 300,
              },
            ].map((testimonial, index) => (
              <FadeIn key={index} delay={testimonial.delay} direction="up">
                <Card className="h-full hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardHeader>
                    <CardTitle>{testimonial.title}</CardTitle>
                    <CardDescription>
                      {testimonial.name} - {testimonial.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Stay in the Loop"
            description="Subscribe to our newsletter for the latest AI news, tutorials, and resources."
          />

          <div className="max-w-2xl mx-auto mt-8">
            <NewsletterSubscription />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <FadeIn direction="up" delay={100}>
              <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700 mb-4">
                <Zap className="h-4 w-4 mr-1" /> Ready to dive in?
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your AI Journey?
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Join thousands of learners who are discovering the potential of AI.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link href="/get-started">
                  Begin Your Personalized Learning Path <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

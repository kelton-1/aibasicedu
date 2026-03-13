import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Lightbulb, Users, Compass } from "lucide-react"
import { ROUTE_MAP } from "@/app/lib/route-map"

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Begin Your AI Learning Journey</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Choose the path that best fits your goals and experience level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <Compass className="h-10 w-10 text-purple-500 mb-4" />
            <CardTitle className="text-2xl">Personalized Learning Path</CardTitle>
            <CardDescription>
              Get a customized curriculum based on your interests, goals, and experience level.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Take a quick assessment to help us understand your needs and create a tailored learning journey just for
              you. This is the recommended option for most learners.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                <span>Customized to your experience level</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                <span>Focus on topics you're interested in</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                <span>Adaptive learning based on your progress</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href={ROUTE_MAP.personalize}>
                Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <BookOpen className="h-10 w-10 text-blue-500 mb-4" />
            <CardTitle className="text-2xl">Self-Guided Exploration</CardTitle>
            <CardDescription>Browse our comprehensive library of AI resources at your own pace.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Explore our organized collection of articles, tutorials, and guides on various AI topics. Perfect if you
              prefer to chart your own learning journey.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
                <span>Access to all learning materials</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
                <span>Learn at your own pace</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
                <span>Bookmark resources for later</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href={ROUTE_MAP.browse}>
                Browse Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Other Ways to Get Started</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-yellow-500 mb-2" />
              <CardTitle>Quick Start Guides</CardTitle>
              <CardDescription>Bite-sized introductions to key AI concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Perfect for beginners who want to quickly understand the fundamentals of AI.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href={ROUTE_MAP.quickGuides}>View Guides</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Join the Community</CardTitle>
              <CardDescription>Connect with other learners and AI enthusiasts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Share experiences, ask questions, and learn together with our supportive community.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href={ROUTE_MAP.community}>Join Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>AI Glossary</CardTitle>
              <CardDescription>Comprehensive dictionary of AI terms</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Understand the terminology that powers AI, explained in plain language.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href={ROUTE_MAP.glossary}>Explore Glossary</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Not Sure Where to Begin?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          If you're new to AI and feeling overwhelmed, we recommend starting with our personalized assessment. It only
          takes 2 minutes and will help us guide you on the perfect learning path.
        </p>
        <Button size="lg" asChild>
          <Link href={ROUTE_MAP.personalize}>
            Take the 2-Minute Assessment <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}


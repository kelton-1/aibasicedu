"use client"

import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function PersonalizePage() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const [formData, setFormData] = useState({
    experienceLevel: "",
    interests: [] as string[],
    goals: [] as string[],
    learningStyle: "",
  })

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
      setProgress((step + 1) * 25)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      setProgress(step * 25 - 25)
    }
  }

  const handleExperienceLevelChange = (value: string) => {
    setFormData({ ...formData, experienceLevel: value })
  }

  const handleInterestChange = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter((i) => i !== interest)
      : [...formData.interests, interest]

    setFormData({ ...formData, interests: updatedInterests })
  }

  const handleGoalChange = (goal: string) => {
    const updatedGoals = formData.goals.includes(goal)
      ? formData.goals.filter((g) => g !== goal)
      : [...formData.goals, goal]

    setFormData({ ...formData, goals: updatedGoals })
  }

  const handleLearningStyleChange = (value: string) => {
    setFormData({ ...formData, learningStyle: value })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Personalize Your AI Learning Journey
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Answer a few questions to get a customized learning path tailored to your needs.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Start</span>
            <span>Experience</span>
            <span>Interests</span>
            <span>Goals</span>
            <span>Complete</span>
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>What's your experience level with AI?</CardTitle>
              <CardDescription>This helps us tailor content to your knowledge level.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.experienceLevel}
                onValueChange={handleExperienceLevelChange}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="font-medium">
                    Beginner - I'm new to AI and want to learn the basics
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="font-medium">
                    Intermediate - I understand the fundamentals but want to deepen my knowledge
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="font-medium">
                    Advanced - I work with AI and want to stay updated on the latest developments
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expert" id="expert" />
                  <Label htmlFor="expert" className="font-medium">
                    Expert - I'm an AI professional or researcher
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNext} disabled={!formData.experienceLevel}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>What AI topics interest you most?</CardTitle>
              <CardDescription>Select all that apply. This helps us prioritize content for you.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Large Language Models",
                  "Computer Vision",
                  "Generative AI",
                  "Machine Learning Fundamentals",
                  "AI Ethics & Safety",
                  "Prompt Engineering",
                  "AI Applications in Business",
                  "AI for Creativity",
                  "AI Research & Papers",
                  "AI Tools & Software",
                ].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest.toLowerCase().replace(/\s+/g, "-")}
                      checked={formData.interests.includes(interest)}
                      onCheckedChange={() => handleInterestChange(interest)}
                    />
                    <Label htmlFor={interest.toLowerCase().replace(/\s+/g, "-")} className="font-medium">
                      {interest}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext} disabled={formData.interests.length === 0}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>What are your AI learning goals?</CardTitle>
              <CardDescription>Select all that apply. This helps us recommend the right resources.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Understand AI concepts and terminology",
                  "Learn to use AI tools effectively",
                  "Build AI-powered applications",
                  "Stay updated on AI trends",
                  "Evaluate AI solutions for my business",
                  "Improve my productivity with AI",
                  "Prepare for a career in AI",
                  "Understand AI's impact on society",
                  "Learn to prompt AI systems effectively",
                  "Explore creative applications of AI",
                ].map((goal) => (
                  <div key={goal} className="flex items-center space-x-2">
                    <Checkbox
                      id={goal.toLowerCase().replace(/\s+/g, "-")}
                      checked={formData.goals.includes(goal)}
                      onCheckedChange={() => handleGoalChange(goal)}
                    />
                    <Label htmlFor={goal.toLowerCase().replace(/\s+/g, "-")} className="font-medium">
                      {goal}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext} disabled={formData.goals.length === 0}>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>How do you prefer to learn?</CardTitle>
              <CardDescription>This helps us recommend the right format for your learning materials.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.learningStyle}
                onValueChange={handleLearningStyleChange}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="visual" id="visual" />
                  <Label htmlFor="visual" className="font-medium">
                    Visual - I learn best through diagrams, charts, and videos
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reading" id="reading" />
                  <Label htmlFor="reading" className="font-medium">
                    Reading - I prefer detailed articles and documentation
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="interactive" id="interactive" />
                  <Label htmlFor="interactive" className="font-medium">
                    Interactive - I learn by doing and experimenting
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="social" id="social" />
                  <Label htmlFor="social" className="font-medium">
                    Social - I prefer discussions and learning from others
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={() => setStep(5)} disabled={!formData.learningStyle}>
                Complete <CheckCircle2 className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 5 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
                Your Personalized Learning Path is Ready!
              </CardTitle>
              <CardDescription>
                Based on your responses, we've created a customized learning journey for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Your Profile:</h3>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>
                      Experience Level:{" "}
                      {formData.experienceLevel.charAt(0).toUpperCase() + formData.experienceLevel.slice(1)}
                    </li>
                    <li>Primary Interests: {formData.interests.slice(0, 3).join(", ")}</li>
                    <li>
                      Learning Style: {formData.learningStyle.charAt(0).toUpperCase() + formData.learningStyle.slice(1)}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Recommended Learning Path:</h3>
                  <p className="text-gray-600 mt-2">
                    Your personalized dashboard is now ready with curated resources, tutorials, and news based on your
                    preferences.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/dashboard">
                  Go to My Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}


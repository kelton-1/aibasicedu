"use client"

import Link from "next/link"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"

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
    <div className="bg-background">
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <FadeIn direction="up" delay={50}>
            <p className="label-text mb-4">Personalization</p>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Personalize Your <span className="gold-text">Learning</span> Journey
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <p className="mt-6 mx-auto max-w-[560px] text-muted-foreground md:text-lg leading-relaxed">
              Answer a few questions to get a customized learning path tailored to your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          {/* Progress bar + Step indicator */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="label-text">Step {Math.min(step, 4)} of 4</span>
              <span className="text-sm text-muted-foreground font-medium">{progress}%</span>
            </div>
            <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-gold transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Step 1: Experience Level */}
          {step === 1 && (
            <FadeIn direction="up" delay={100}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold text-foreground mb-1">What&apos;s your experience level with AI?</h2>
                <p className="text-sm text-muted-foreground mb-6">This helps us tailor content to your knowledge level.</p>
                <RadioGroup
                  value={formData.experienceLevel}
                  onValueChange={handleExperienceLevelChange}
                  className="space-y-3"
                >
                  {[
                    { value: "beginner", label: "Beginner - I'm new to AI and want to learn the basics" },
                    { value: "intermediate", label: "Intermediate - I understand the fundamentals but want to deepen my knowledge" },
                    { value: "advanced", label: "Advanced - I work with AI and want to stay updated on the latest developments" },
                    { value: "expert", label: "Expert - I'm an AI professional or researcher" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      htmlFor={option.value}
                      className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition-all duration-200 ${
                        formData.experienceLevel === option.value
                          ? "border-gold/40 bg-gold/5"
                          : "border-border hover:border-gold/20"
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="border-border data-[state=checked]:border-gold data-[state=checked]:text-gold" />
                      <Label htmlFor={option.value} className="font-medium text-foreground cursor-pointer">
                        {option.label}
                      </Label>
                    </label>
                  ))}
                </RadioGroup>
                <div className="flex justify-end mt-8">
                  <button
                    onClick={handleNext}
                    disabled={!formData.experienceLevel}
                    className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-6 py-2.5 text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Step 2: Interests */}
          {step === 2 && (
            <FadeIn direction="up" delay={100}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold text-foreground mb-1">What AI topics interest you most?</h2>
                <p className="text-sm text-muted-foreground mb-6">Select all that apply. This helps us prioritize content for you.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                    <label
                      key={interest}
                      htmlFor={interest.toLowerCase().replace(/\s+/g, "-")}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all duration-200 ${
                        formData.interests.includes(interest)
                          ? "border-gold/40 bg-gold/5"
                          : "border-border hover:border-gold/20"
                      }`}
                    >
                      <Checkbox
                        id={interest.toLowerCase().replace(/\s+/g, "-")}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={() => handleInterestChange(interest)}
                        className="border-border data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-black"
                      />
                      <Label htmlFor={interest.toLowerCase().replace(/\s+/g, "-")} className="font-medium text-foreground cursor-pointer text-sm">
                        {interest}
                      </Label>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={formData.interests.length === 0}
                    className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-6 py-2.5 text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Step 3: Goals */}
          {step === 3 && (
            <FadeIn direction="up" delay={100}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold text-foreground mb-1">What are your AI learning goals?</h2>
                <p className="text-sm text-muted-foreground mb-6">Select all that apply. This helps us recommend the right resources.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                    <label
                      key={goal}
                      htmlFor={goal.toLowerCase().replace(/\s+/g, "-")}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 cursor-pointer transition-all duration-200 ${
                        formData.goals.includes(goal)
                          ? "border-gold/40 bg-gold/5"
                          : "border-border hover:border-gold/20"
                      }`}
                    >
                      <Checkbox
                        id={goal.toLowerCase().replace(/\s+/g, "-")}
                        checked={formData.goals.includes(goal)}
                        onCheckedChange={() => handleGoalChange(goal)}
                        className="border-border data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-black"
                      />
                      <Label htmlFor={goal.toLowerCase().replace(/\s+/g, "-")} className="font-medium text-foreground cursor-pointer text-sm">
                        {goal}
                      </Label>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={formData.goals.length === 0}
                    className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-6 py-2.5 text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Step 4: Learning Style */}
          {step === 4 && (
            <FadeIn direction="up" delay={100}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold text-foreground mb-1">How do you prefer to learn?</h2>
                <p className="text-sm text-muted-foreground mb-6">This helps us recommend the right format for your learning materials.</p>
                <RadioGroup
                  value={formData.learningStyle}
                  onValueChange={handleLearningStyleChange}
                  className="space-y-3"
                >
                  {[
                    { value: "visual", label: "Visual - I learn best through diagrams, charts, and videos" },
                    { value: "reading", label: "Reading - I prefer detailed articles and documentation" },
                    { value: "interactive", label: "Interactive - I learn by doing and experimenting" },
                    { value: "social", label: "Social - I prefer discussions and learning from others" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      htmlFor={option.value}
                      className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition-all duration-200 ${
                        formData.learningStyle === option.value
                          ? "border-gold/40 bg-gold/5"
                          : "border-border hover:border-gold/20"
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="border-border data-[state=checked]:border-gold data-[state=checked]:text-gold" />
                      <Label htmlFor={option.value} className="font-medium text-foreground cursor-pointer">
                        {option.label}
                      </Label>
                    </label>
                  ))}
                </RadioGroup>
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </button>
                  <button
                    onClick={() => setStep(5)}
                    disabled={!formData.learningStyle}
                    className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-6 py-2.5 text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Complete <CheckCircle2 className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Step 5: Completion */}
          {step === 5 && (
            <FadeIn direction="up" delay={100}>
              <div className="rounded-2xl border border-gold/20 bg-card p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-gold" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Your Personalized Learning Path is Ready!</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Based on your responses, we&apos;ve created a customized learning journey for you.
                </p>
                <div className="space-y-5">
                  <div className="rounded-xl border border-border p-5">
                    <h3 className="text-sm font-bold text-foreground mb-3">Your Profile</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        Experience Level: {formData.experienceLevel.charAt(0).toUpperCase() + formData.experienceLevel.slice(1)}
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        Primary Interests: {formData.interests.slice(0, 3).join(", ")}
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        Learning Style: {formData.learningStyle.charAt(0).toUpperCase() + formData.learningStyle.slice(1)}
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border p-5">
                    <h3 className="text-sm font-bold text-foreground mb-2">Recommended Learning Path</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Your personalized dashboard is now ready with curated resources, tutorials, and news based on your
                      preferences.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 text-sm transition-colors"
                  >
                    Go to My Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  )
}

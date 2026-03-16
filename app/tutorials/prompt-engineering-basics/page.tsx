"use client"

import { useState } from "react"
import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertCircle,
  Lightbulb,
  BookOpen,
  MessageSquare,
} from "lucide-react"

type ExerciseKey = "exercise1" | "exercise2" | "exercise3"

type ExerciseFeedback = {
  correct: boolean
  message: string
}

type ExerciseAnswers = Record<ExerciseKey, string>
type FeedbackState = Record<ExerciseKey, ExerciseFeedback | null>

export default function PromptEngineeringBasicsTutorial() {
  const [currentModule, setCurrentModule] = useState(1)
  const [progress, setProgress] = useState(20)
  const [exerciseAnswers, setExerciseAnswers] = useState<ExerciseAnswers>({
    exercise1: "",
    exercise2: "",
    exercise3: "",
  })
  const [feedback, setFeedback] = useState<FeedbackState>({
    exercise1: null,
    exercise2: null,
    exercise3: null,
  })

  const totalModules = 5

  const handleNext = () => {
    if (currentModule < totalModules) {
      setCurrentModule(currentModule + 1)
      setProgress(((currentModule + 1) / totalModules) * 100)
    }
  }

  const handlePrevious = () => {
    if (currentModule > 1) {
      setCurrentModule(currentModule - 1)
      setProgress(((currentModule - 1) / totalModules) * 100)
    }
  }

  const handleAnswerChange = (exercise: ExerciseKey, value: string) => {
    setExerciseAnswers({
      ...exerciseAnswers,
      [exercise]: value,
    })
    // Reset feedback when answer changes
    setFeedback({
      ...feedback,
      [exercise]: null,
    })
  }

  const checkAnswer = (exercise: ExerciseKey) => {
    const answer = exerciseAnswers[exercise].toLowerCase().trim()

    // Simple answer checking logic - in a real app, this would be more sophisticated
    if (exercise === "exercise1") {
      if (answer.includes("specific") && answer.includes("clear")) {
        setFeedback({
          ...feedback,
          exercise1: {
            correct: true,
            message: "Correct! Being specific and clear are key principles of effective prompting.",
          },
        })
      } else {
        setFeedback({
          ...feedback,
          exercise1: {
            correct: false,
            message: "Try again. Think about how specificity and clarity impact AI responses.",
          },
        })
      }
    } else if (exercise === "exercise2") {
      if (answer.includes("step by step") || answer.includes("step-by-step")) {
        setFeedback({
          ...feedback,
          exercise2: {
            correct: true,
            message: "Excellent! Asking the AI to think step-by-step improves reasoning for complex problems.",
          },
        })
      } else {
        setFeedback({
          ...feedback,
          exercise2: {
            correct: false,
            message: "Not quite. Consider how breaking down complex problems helps with reasoning.",
          },
        })
      }
    } else if (exercise === "exercise3") {
      if (answer.includes("role") || answer.includes("persona")) {
        setFeedback({
          ...feedback,
          exercise3: {
            correct: true,
            message: "Perfect! Assigning a role or persona helps guide the AI's response style and expertise.",
          },
        })
      } else {
        setFeedback({
          ...feedback,
          exercise3: {
            correct: false,
            message: "Try again. Think about how you can influence the AI's perspective or expertise.",
          },
        })
      }
    }
  }

  return (
    <div className="section-container py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <div className="flex items-center mb-2">
            <Link
              href={ROUTE_MAP.tutorials}
              className="text-muted-foreground hover:text-gold transition-colors mr-3"
            >
              <ArrowLeft className="h-4 w-4 inline" /> Back to Tutorials
            </Link>
            <Badge variant="outline" className="border-border text-muted-foreground">
              Prompt Engineering
            </Badge>
            <Badge variant="outline" className="ml-2 border-gold/20 text-gold">
              Beginner
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Prompt Engineering Basics
          </h1>
          <p className="text-muted-foreground mt-2">
            Learn the fundamentals of crafting effective prompts for AI systems.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="text-sm text-muted-foreground mr-4">Progress: {Math.round(progress)}%</div>
          <Progress value={progress} className="w-[200px] h-2 [&>div]:bg-gold" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-5 border-b border-border">
              <h3 className="font-semibold text-foreground">Tutorial Modules</h3>
            </div>
            <nav className="flex flex-col">
              {[
                "Introduction to Prompting",
                "Clarity & Specificity",
                "Structured Prompting",
                "Role-Based Prompts",
                "Practice & Assessment",
              ].map((module, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentModule(index + 1)
                    setProgress(((index + 1) / totalModules) * 100)
                  }}
                  className={`flex items-center p-3 text-left border-b border-border last:border-b-0 transition-colors ${
                    currentModule === index + 1
                      ? "bg-gold/5 border-l-2 border-l-gold"
                      : "hover:bg-accent/50"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs font-medium ${
                      currentModule > index + 1
                        ? "bg-gold/10 text-gold"
                        : currentModule === index + 1
                          ? "bg-gold text-black"
                          : "bg-accent text-muted-foreground"
                    }`}
                  >
                    {currentModule > index + 1 ? <CheckCircle className="h-3.5 w-3.5" /> : index + 1}
                  </div>
                  <span className={`text-sm ${currentModule === index + 1 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                    {module}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-border bg-card mb-6">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {currentModule === 1 && "Introduction to Prompting"}
                {currentModule === 2 && "Clarity & Specificity"}
                {currentModule === 3 && "Structured Prompting"}
                {currentModule === 4 && "Role-Based Prompts"}
                {currentModule === 5 && "Practice & Assessment"}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {currentModule === 1 && "Understanding the basics of communicating with AI"}
                {currentModule === 2 && "How to write clear and specific prompts"}
                {currentModule === 3 && "Using structure to improve AI responses"}
                {currentModule === 4 && "Assigning roles to guide AI behavior"}
                {currentModule === 5 && "Test your knowledge with practical exercises"}
              </p>
            </div>
            <div className="p-6 space-y-6">
              {/* Module 1: Introduction */}
              {currentModule === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">What is Prompt Engineering?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Prompt engineering is the process of designing effective inputs (prompts) for AI systems to get
                      desired outputs. It's like learning how to ask the right questions to get the best answers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      As AI models like GPT-4 become more powerful, the way you phrase your requests significantly
                      impacts the quality and relevance of the responses you receive.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                    <h3 className="text-lg font-medium flex items-center mb-2 text-foreground">
                      <Lightbulb className="h-5 w-5 text-gold mr-2" />
                      Why Prompt Engineering Matters
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Gets more accurate and relevant responses</li>
                      <li>Reduces misunderstandings and hallucinations</li>
                      <li>Saves time by getting useful answers faster</li>
                      <li>Unlocks capabilities that aren't obvious with basic prompts</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Interactive Example</h3>
                    <div className="rounded-xl border border-border overflow-hidden">
                      <div className="bg-accent/50 p-4 border-b border-border">
                        <p className="font-medium text-foreground">Basic Prompt:</p>
                        <p className="text-muted-foreground">"Tell me about climate change"</p>
                      </div>
                      <div className="p-4 border-b border-border">
                        <p className="font-medium text-foreground">AI Response:</p>
                        <p className="text-muted-foreground">
                          A generic, broad overview of climate change that might not be what you're looking for.
                        </p>
                      </div>
                      <div className="bg-accent/50 p-4 border-b border-border">
                        <p className="font-medium text-foreground">Engineered Prompt:</p>
                        <p className="text-muted-foreground">
                          "Explain the top 3 technological innovations helping to combat climate change, focusing on
                          developments from the past 5 years. Include specific examples and their potential impact."
                        </p>
                      </div>
                      <div className="p-4">
                        <p className="font-medium text-foreground">AI Response:</p>
                        <p className="text-muted-foreground">
                          A focused, detailed response about recent technological innovations addressing climate change,
                          with specific examples and impact assessments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Module 2: Clarity & Specificity */}
              {currentModule === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">The Importance of Clarity</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Clear prompts reduce ambiguity and help the AI understand exactly what you're asking for.
                      Ambiguous prompts often lead to generic or irrelevant responses.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl border border-border p-4 bg-card">
                      <p className="font-medium flex items-center mb-2 text-foreground">
                        <XCircle className="h-5 w-5 text-red-400 mr-2" />
                        Unclear Prompt:
                      </p>
                      <p className="text-muted-foreground">"Tell me about dogs"</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Too vague, could lead to general information about dogs that might not be useful.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gold/20 p-4 bg-gold/5">
                      <p className="font-medium flex items-center mb-2 text-foreground">
                        <CheckCircle className="h-5 w-5 text-gold mr-2" />
                        Clear Prompt:
                      </p>
                      <p className="text-muted-foreground">
                        "Describe the temperament, exercise needs, and common health issues of Labrador Retrievers as
                        family pets"
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Specific and focused, likely to yield relevant information.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Being Specific</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Specificity in prompts helps narrow down the scope and get precisely the information you need.
                      Include details about:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                      <li>
                        <span className="font-medium text-foreground">Format:</span> Specify how you want the information presented
                        (list, essay, table, etc.)
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Scope:</span> Define the boundaries of what you're asking about
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Context:</span> Provide relevant background information
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Audience:</span> Mention who the information is for (experts,
                        beginners, children, etc.)
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                    <h3 className="text-lg font-medium flex items-center mb-2 text-foreground">
                      <AlertCircle className="h-5 w-5 text-gold mr-2" />
                      Common Mistakes to Avoid
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Using vague terms like "good," "best," or "interesting" without context</li>
                      <li>Asking multiple unrelated questions in one prompt</li>
                      <li>Not specifying the depth of information needed</li>
                      <li>Assuming the AI knows your specific context or background</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Interactive Exercise</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Rewrite this vague prompt to make it clearer and more specific:
                    </p>
                    <div className="p-3 rounded-lg border border-border bg-accent/50 mb-4">
                      <p className="font-mono text-sm text-foreground">"Tell me about renewable energy"</p>
                    </div>
                    <Textarea
                      placeholder="Write your improved prompt here..."
                      value={exerciseAnswers.exercise1}
                      onChange={(e) => handleAnswerChange("exercise1", e.target.value)}
                      className="min-h-[100px] mb-4 bg-background border-border"
                    />
                    <Button
                      onClick={() => checkAnswer("exercise1")}
                      disabled={!exerciseAnswers.exercise1.trim()}
                      className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl"
                    >
                      Check Answer
                    </Button>

                    {feedback.exercise1 && (
                      <div className={`mt-4 rounded-xl border p-4 ${feedback.exercise1.correct ? "border-gold/20 bg-gold/5" : "border-border bg-accent/50"}`}>
                        <div className="flex items-start">
                          {feedback.exercise1.correct ? (
                            <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className="font-medium text-foreground">{feedback.exercise1.correct ? "Correct!" : "Not quite right"}</p>
                            <p className="text-sm text-muted-foreground mt-1">{feedback.exercise1.message}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Module 3: Structured Prompting */}
              {currentModule === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">What is Structured Prompting?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Structured prompting involves organizing your requests in a way that guides the AI to provide more
                      thoughtful, organized, and comprehensive responses.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mb-6">
                    <h3 className="text-lg font-medium flex items-center mb-2 text-foreground">
                      <Lightbulb className="h-5 w-5 text-gold mr-2" />
                      Key Structured Prompting Techniques
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        <span className="font-medium text-foreground">Step-by-step reasoning:</span> Ask the AI to solve problems
                        step-by-step
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Chain-of-thought:</span> Guide the AI to show its reasoning
                        process
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Numbered lists:</span> Request information in a numbered format
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Templates:</span> Provide a structure for the AI to follow
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Step-by-Step Reasoning</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When dealing with complex problems, asking the AI to work through the solution step-by-step often
                      produces more accurate results.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="rounded-xl border border-border p-4 bg-card">
                        <p className="font-medium flex items-center mb-2 text-foreground">
                          <XCircle className="h-5 w-5 text-red-400 mr-2" />
                          Basic Prompt:
                        </p>
                        <p className="text-muted-foreground">
                          "Solve this math problem: If a store offers a 25% discount and then applies a 10% coupon, what
                          is the total percentage discount?"
                        </p>
                      </div>
                      <div className="rounded-xl border border-gold/20 p-4 bg-gold/5">
                        <p className="font-medium flex items-center mb-2 text-foreground">
                          <CheckCircle className="h-5 w-5 text-gold mr-2" />
                          Structured Prompt:
                        </p>
                        <p className="text-muted-foreground">
                          "Solve this math problem step by step: If a store offers a 25% discount and then applies a 10%
                          coupon, what is the total percentage discount?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Chain-of-Thought Prompting</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Chain-of-thought prompting encourages the AI to show its reasoning process, which often leads to
                      more accurate answers for complex questions.
                    </p>
                    <div className="p-4 rounded-xl border border-border mb-4">
                      <p className="font-medium text-foreground mb-2">Example Chain-of-Thought Prompt:</p>
                      <p className="text-muted-foreground leading-relaxed">
                        "I need to decide whether to invest in Company A or Company B. Company A has shown steady growth
                        of 5% annually for the past 5 years and pays a 2% dividend. Company B has more volatile growth,
                        averaging 8% annually but with significant fluctuations, and pays no dividend. I'm planning to
                        invest for 10 years and prefer moderate risk. Think through this step by step and recommend
                        which company I should invest in based on my preferences."
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Interactive Exercise</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      What technique would you use to improve this prompt? Explain why.
                    </p>
                    <div className="p-3 rounded-lg border border-border bg-accent/50 mb-4">
                      <p className="font-mono text-sm text-foreground">
                        "Explain why some countries have higher carbon emissions than others."
                      </p>
                    </div>
                    <Textarea
                      placeholder="Write your answer here..."
                      value={exerciseAnswers.exercise2}
                      onChange={(e) => handleAnswerChange("exercise2", e.target.value)}
                      className="min-h-[100px] mb-4 bg-background border-border"
                    />
                    <Button
                      onClick={() => checkAnswer("exercise2")}
                      disabled={!exerciseAnswers.exercise2.trim()}
                      className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl"
                    >
                      Check Answer
                    </Button>

                    {feedback.exercise2 && (
                      <div className={`mt-4 rounded-xl border p-4 ${feedback.exercise2.correct ? "border-gold/20 bg-gold/5" : "border-border bg-accent/50"}`}>
                        <div className="flex items-start">
                          {feedback.exercise2.correct ? (
                            <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className="font-medium text-foreground">{feedback.exercise2.correct ? "Correct!" : "Not quite right"}</p>
                            <p className="text-sm text-muted-foreground mt-1">{feedback.exercise2.message}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Module 4: Role-Based Prompts */}
              {currentModule === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Using Roles in Prompts</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Role-based prompting involves asking the AI to adopt a specific persona or expertise when
                      responding. This technique can dramatically change the style, depth, and perspective of the
                      response.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mb-6">
                    <h3 className="text-lg font-medium flex items-center mb-2 text-foreground">
                      <Lightbulb className="h-5 w-5 text-gold mr-2" />
                      Benefits of Role-Based Prompting
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Gets more specialized or expert-level information</li>
                      <li>Changes the tone and style of the response</li>
                      <li>Helps the AI focus on specific aspects of a topic</li>
                      <li>Can make explanations more appropriate for different audiences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Examples of Role-Based Prompts</h3>
                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-xl border border-border">
                        <p className="font-medium text-foreground mb-2">Expert Role:</p>
                        <p className="text-muted-foreground leading-relaxed">
                          "As an experienced cybersecurity expert, explain the most common vulnerabilities in home
                          networks and how to address them."
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-border">
                        <p className="font-medium text-foreground mb-2">Teacher Role:</p>
                        <p className="text-muted-foreground leading-relaxed">
                          "As a science teacher explaining to 10-year-olds, describe how photosynthesis works. Use
                          simple language and analogies they would understand."
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-border">
                        <p className="font-medium text-foreground mb-2">Devil's Advocate Role:</p>
                        <p className="text-muted-foreground leading-relaxed">
                          "As a devil's advocate, what are the potential downsides of renewable energy that proponents
                          might overlook?"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Comparing Responses with Different Roles</h3>
                    <div className="rounded-xl border border-border overflow-hidden mb-6">
                      <div className="bg-accent/50 p-4 border-b border-border">
                        <p className="font-medium text-foreground">Basic Prompt:</p>
                        <p className="text-muted-foreground">"Explain quantum computing"</p>
                      </div>
                      <div className="p-4 border-b border-border">
                        <p className="font-medium text-foreground">Standard Response:</p>
                        <p className="text-muted-foreground">
                          A general explanation of quantum computing that might be too technical or too simplified.
                        </p>
                      </div>
                      <div className="bg-accent/50 p-4 border-b border-border">
                        <p className="font-medium text-foreground">Role-Based Prompt:</p>
                        <p className="text-muted-foreground">
                          "As a university professor explaining to first-year computer science students, explain the
                          basic principles of quantum computing and how it differs from classical computing."
                        </p>
                      </div>
                      <div className="p-4">
                        <p className="font-medium text-foreground">Role-Based Response:</p>
                        <p className="text-muted-foreground">
                          An explanation tailored to the knowledge level of first-year CS students, with appropriate
                          analogies and focus on fundamental differences from classical computing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Interactive Exercise</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      What technique is being used in this prompt, and why is it effective?
                    </p>
                    <div className="p-3 rounded-lg border border-border bg-accent/50 mb-4">
                      <p className="font-mono text-sm text-foreground">
                        "As a financial advisor with 20 years of experience, explain the pros and cons of index fund
                        investing versus picking individual stocks."
                      </p>
                    </div>
                    <Textarea
                      placeholder="Write your answer here..."
                      value={exerciseAnswers.exercise3}
                      onChange={(e) => handleAnswerChange("exercise3", e.target.value)}
                      className="min-h-[100px] mb-4 bg-background border-border"
                    />
                    <Button
                      onClick={() => checkAnswer("exercise3")}
                      disabled={!exerciseAnswers.exercise3.trim()}
                      className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl"
                    >
                      Check Answer
                    </Button>

                    {feedback.exercise3 && (
                      <div className={`mt-4 rounded-xl border p-4 ${feedback.exercise3.correct ? "border-gold/20 bg-gold/5" : "border-border bg-accent/50"}`}>
                        <div className="flex items-start">
                          {feedback.exercise3.correct ? (
                            <CheckCircle className="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className="font-medium text-foreground">{feedback.exercise3.correct ? "Correct!" : "Not quite right"}</p>
                            <p className="text-sm text-muted-foreground mt-1">{feedback.exercise3.message}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Module 5: Practice & Assessment */}
              {currentModule === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Putting It All Together</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Now that you've learned the key principles of prompt engineering, let's practice combining these
                      techniques to craft highly effective prompts.
                    </p>
                  </div>

                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 mb-6">
                    <h3 className="text-lg font-medium flex items-center mb-2 text-foreground">
                      <CheckCircle className="h-5 w-5 text-gold mr-2" />
                      Prompt Engineering Checklist
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Is my prompt clear and specific?</li>
                      <li>Have I provided necessary context?</li>
                      <li>Would structure improve my prompt?</li>
                      <li>Would assigning a role enhance the response?</li>
                      <li>Have I specified the desired format?</li>
                      <li>Is my prompt focused on a single task or question?</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Practice Scenarios</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For each scenario below, craft an effective prompt using the techniques you've learned.
                    </p>

                    <div className="space-y-6">
                      <div className="rounded-xl border border-border p-5">
                        <p className="font-medium text-foreground mb-2">Scenario 1: Learning About a Complex Topic</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          You want to understand how blockchain technology works, but you have no technical background.
                        </p>
                        <div className="p-3 rounded-lg border border-border bg-accent/50 mb-2">
                          <p className="font-medium text-sm text-foreground">Example Effective Prompt:</p>
                          <p className="text-muted-foreground font-mono text-sm">
                            "As a teacher explaining to someone with no technical background, explain how blockchain
                            technology works. Use simple analogies, avoid jargon, and structure your explanation in a
                            step-by-step manner, starting with the most basic concepts."
                          </p>
                        </div>
                      </div>

                      <div className="rounded-xl border border-border p-5">
                        <p className="font-medium text-foreground mb-2">Scenario 2: Making a Decision</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          You're trying to decide whether to buy an electric vehicle or a hybrid car.
                        </p>
                        <div className="p-3 rounded-lg border border-border bg-accent/50 mb-2">
                          <p className="font-medium text-sm text-foreground">Example Effective Prompt:</p>
                          <p className="text-muted-foreground font-mono text-sm">
                            "As an automotive expert, compare electric vehicles and hybrid cars for a commuter who
                            drives 30 miles daily in a city with cold winters. Consider: 1) Total cost of ownership over
                            5 years, 2) Environmental impact, 3) Practicality in cold weather, 4) Charging/fueling
                            infrastructure requirements. Present your analysis in a structured format with pros and cons
                            for each option, and conclude with a recommendation based on these factors."
                          </p>
                        </div>
                      </div>

                      <div className="rounded-xl border border-border p-5">
                        <p className="font-medium text-foreground mb-2">Scenario 3: Creative Writing</p>
                        <p className="text-muted-foreground leading-relaxed mb-4">You want help writing a short story about time travel.</p>
                        <div className="p-3 rounded-lg border border-border bg-accent/50 mb-2">
                          <p className="font-medium text-sm text-foreground">Example Effective Prompt:</p>
                          <p className="text-muted-foreground font-mono text-sm">
                            "As an award-winning science fiction author, write a 500-word short story about time travel
                            with the following specifications: 1) Set in the year 2150, 2) Include a moral dilemma
                            related to changing the past, 3) Feature a protagonist who is a historian, 4) Use a
                            non-linear narrative structure, 5) End with a twist that makes the reader question the
                            nature of time. Focus on creating vivid imagery and emotional depth rather than technical
                            explanations of how time travel works."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5">
                    <h3 className="text-lg font-medium flex items-center mb-2 text-foreground">
                      <BookOpen className="h-5 w-5 text-gold mr-2" />
                      Next Steps in Your Learning Journey
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Congratulations on completing the Prompt Engineering Basics tutorial! Here are some ways to
                      continue developing your skills:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Practice crafting prompts for different scenarios</li>
                      <li>Experiment with combining different techniques</li>
                      <li>Analyze the responses you get and refine your approach</li>
                      <li>Check out our advanced prompt engineering tutorial for more techniques</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between p-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentModule === 1}
                className="border-border hover:bg-accent/50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              {currentModule < totalModules ? (
                <Button onClick={handleNext} className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button asChild className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl">
                  <Link href={ROUTE_MAP.tutorials}>
                    Complete Tutorial <CheckCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Discussion Section */}
          <div className="rounded-2xl border border-border bg-card">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold text-foreground flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-gold" />
                Discussion
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Ask questions or share your thoughts about this tutorial</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-accent/30">
                  <div className="flex items-start mb-2">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                      <span className="text-gold text-sm font-medium">JD</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">John Doe</p>
                      <p className="text-xs text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I found the role-based prompting technique really useful! I've been struggling to get AI to explain
                    technical concepts in simple terms, but assigning it the role of a teacher explaining to a beginner
                    worked perfectly.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-accent/30">
                  <div className="flex items-start mb-2">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                      <span className="text-gold text-sm font-medium">AS</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Alice Smith</p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Question: Does anyone have examples of using chain-of-thought prompting for solving math problems?
                    I'd love to see how others are implementing this.
                  </p>
                </div>

                <Textarea
                  placeholder="Add your comment or question..."
                  className="min-h-[100px] bg-background border-border"
                />
                <Button className="bg-gold hover:bg-gold-light text-black font-medium rounded-xl">
                  Post Comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

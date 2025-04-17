"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Lightbulb, ArrowRight, BookMarked, Clock, CheckCircle, BarChart } from "lucide-react"

export default function DashboardPage() {
  // This would typically come from a user profile or database
  const [userData] = useState({
    name: "Alex",
    experienceLevel: "Intermediate",
    interests: ["Large Language Models", "Prompt Engineering", "AI Ethics"],
    learningStyle: "Interactive",
    progress: 35,
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter">Welcome to Your AI Learning Dashboard</h1>
          <p className="text-gray-500 mt-2">Personalized resources and learning path based on your preferences.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/personalize">Update Preferences</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Experience Level</CardTitle>
            <Badge variant="outline">{userData.experienceLevel}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.experienceLevel}</div>
            <p className="text-xs text-gray-500">Tailored content for your knowledge level</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
            <Badge variant="outline">{userData.progress}%</Badge>
          </CardHeader>
          <CardContent>
            <Progress value={userData.progress} className="h-2" />
            <p className="text-xs text-gray-500 mt-2">Keep going! You're making great progress.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Learning Style</CardTitle>
            <Badge variant="outline">{userData.learningStyle}</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.learningStyle}</div>
            <p className="text-xs text-gray-500">Resources optimized for your learning style</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommended" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="learning-path">Learning Path</TabsTrigger>
          <TabsTrigger value="saved">Saved Resources</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>Prompt Engineering</Badge>
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <CardTitle className="mt-2">Advanced Prompt Techniques for LLMs</CardTitle>
                <CardDescription>Learn how to craft effective prompts for complex tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>15 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/prompts">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>AI Ethics</Badge>
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <CardTitle className="mt-2">Ethical Considerations in AI Development</CardTitle>
                <CardDescription>Understanding bias, fairness, and transparency in AI systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>20 min read</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>Large Language Models</Badge>
                  <Lightbulb className="h-4 w-4 text-yellow-500" />
                </div>
                <CardTitle className="mt-2">How LLMs Work: An Interactive Guide</CardTitle>
                <CardDescription>Visual exploration of transformer architecture and token prediction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>Interactive tutorial</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Latest News in Your Interest Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>Large Language Models</Badge>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <CardTitle className="mt-2 text-lg">
                    OpenAI Announces GPT-5 with Enhanced Reasoning Capabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    The latest model shows significant improvements in logical reasoning and problem-solving abilities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="ml-auto">
                    <Link href="/news">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>AI Ethics</Badge>
                    <span className="text-xs text-gray-500">4 days ago</span>
                  </div>
                  <CardTitle className="mt-2 text-lg">EU Passes Comprehensive AI Regulation Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    New legislation sets standards for transparency, accountability, and safety in artificial
                    intelligence systems.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="ml-auto">
                    <Link href="/news">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="learning-path">
          <div className="space-y-8 mt-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Your Personalized Learning Path</h2>
              <p className="text-gray-500 mb-6">
                Based on your interests and experience level, we've created a structured learning journey for you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Foundations of AI and Machine Learning</h3>
                  <p className="text-gray-500 mt-1">Completed</p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      AI Basics
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Machine Learning
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Neural Networks
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Introduction to Large Language Models</h3>
                  <p className="text-gray-500 mt-1">Completed</p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      Transformers
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Attention Mechanisms
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      GPT Architecture
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Prompt Engineering Fundamentals</h3>
                  <p className="text-gray-500 mt-1">In Progress - 60% Complete</p>
                  <Progress value={60} className="h-2 mt-2 mb-2" />
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      Prompt Basics
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Zero-shot Learning
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Few-shot Learning
                    </Badge>
                  </div>
                  <Button size="sm" className="mt-4">
                    Continue Learning <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs text-white">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Advanced Prompt Engineering</h3>
                  <p className="text-gray-500 mt-1">Not Started</p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      Chain-of-Thought
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      ReAct Prompting
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Prompt Optimization
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-gray-200">
                <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-xs text-white">5</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">AI Ethics and Responsible Use</h3>
                  <p className="text-gray-500 mt-1">Not Started</p>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      Bias in AI
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Fairness Metrics
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Responsible Deployment
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Your Saved Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>Article</Badge>
                    <BookMarked className="h-4 w-4 text-blue-500" />
                  </div>
                  <CardTitle className="mt-2">The Evolution of Large Language Models</CardTitle>
                  <CardDescription>From GPT-1 to modern architectures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Saved 3 days ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>Tutorial</Badge>
                    <BookMarked className="h-4 w-4 text-blue-500" />
                  </div>
                  <CardTitle className="mt-2">Crafting Effective Prompts for Creative Writing</CardTitle>
                  <CardDescription>Techniques for storytelling with AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Saved 1 week ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge>News</Badge>
                    <BookMarked className="h-4 w-4 text-blue-500" />
                  </div>
                  <CardTitle className="mt-2">EU Passes Comprehensive AI Regulation Framework</CardTitle>
                  <CardDescription>New legislation for AI transparency and safety</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Saved 4 days ago</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Read News <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <div className="space-y-8 mt-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Your Learning Progress</h2>
              <p className="text-gray-500 mb-6">Track your journey through AI concepts and skills.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Overall Progress</CardTitle>
                  <CardDescription>Your journey through the curriculum</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Total Progress</span>
                        <span>{userData.progress}%</span>
                      </div>
                      <Progress value={userData.progress} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Modules Completed</span>
                        <span>2/5</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Quizzes Passed</span>
                        <span>3/8</span>
                      </div>
                      <Progress value={37.5} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills Development</CardTitle>
                  <CardDescription>Your proficiency in key AI skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI Fundamentals</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Prompt Engineering</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>LLM Concepts</span>
                        <span>70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>AI Ethics</span>
                        <span>30%</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning activities in the past 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">Completed Module: Prompt Engineering Basics</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Passed Quiz: Understanding Transformer Models</p>
                      <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <BarChart className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-medium">Started Module: Advanced Prompt Engineering</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


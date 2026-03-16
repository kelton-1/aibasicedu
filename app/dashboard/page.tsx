"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
    <div className="bg-background">
      {/* User Profile Header */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="label-text mb-3">Dashboard</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Welcome, <span className="gold-text">{userData.name}</span>
              </h1>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Personalized resources and learning path based on your preferences.
              </p>
            </div>
            <Link
              href="/personalize"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors"
            >
              Update Preferences
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="label-text">Experience Level</span>
                <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                  {userData.experienceLevel}
                </Badge>
              </div>
              <div className="text-2xl font-bold text-foreground">{userData.experienceLevel}</div>
              <p className="text-xs text-muted-foreground mt-1">Tailored content for your knowledge level</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="label-text">Learning Progress</span>
                <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                  {userData.progress}%
                </Badge>
              </div>
              <div className="relative h-2 rounded-full bg-border overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-gold transition-all duration-500"
                  style={{ width: `${userData.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3">Keep going! You&apos;re making great progress.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="label-text">Learning Style</span>
                <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                  {userData.learningStyle}
                </Badge>
              </div>
              <div className="text-2xl font-bold text-foreground">{userData.learningStyle}</div>
              <p className="text-xs text-muted-foreground mt-1">Resources optimized for your learning style</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="pb-24 md:pb-32">
        <div className="section-container">
          <Tabs defaultValue="recommended" className="w-full">
            <TabsList className="w-full justify-start bg-card border border-border rounded-xl p-1 mb-10">
              <TabsTrigger
                value="recommended"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
              >
                Recommended
              </TabsTrigger>
              <TabsTrigger
                value="learning-path"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
              >
                Learning Path
              </TabsTrigger>
              <TabsTrigger
                value="saved"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
              >
                Saved Resources
              </TabsTrigger>
              <TabsTrigger
                value="progress"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground text-sm"
              >
                My Progress
              </TabsTrigger>
            </TabsList>

            {/* Recommended Tab */}
            <TabsContent value="recommended" className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-gold/20 text-gold text-xs">Prompt Engineering</Badge>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Advanced Prompt Techniques for LLMs</h3>
                  <p className="text-sm text-muted-foreground mb-4">Learn how to craft effective prompts for complex tasks</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <BookOpen className="h-4 w-4 mr-1.5" />
                    <span>15 min read</span>
                  </div>
                  <Link
                    href="/prompts"
                    className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors"
                  >
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-gold/20 text-gold text-xs">AI Ethics</Badge>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Ethical Considerations in AI Development</h3>
                  <p className="text-sm text-muted-foreground mb-4">Understanding bias, fairness, and transparency in AI systems</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <BookOpen className="h-4 w-4 mr-1.5" />
                    <span>20 min read</span>
                  </div>
                  <button className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-gold/20 text-gold text-xs">Large Language Models</Badge>
                    <Lightbulb className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">How LLMs Work: An Interactive Guide</h3>
                  <p className="text-sm text-muted-foreground mb-4">Visual exploration of transformer architecture and token prediction</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <BookOpen className="h-4 w-4 mr-1.5" />
                    <span>Interactive tutorial</span>
                  </div>
                  <button className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Latest News in Your Interest Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Large Language Models</Badge>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      OpenAI Announces GPT-5 with Enhanced Reasoning Capabilities
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      The latest model shows significant improvements in logical reasoning and problem-solving abilities.
                    </p>
                    <Link
                      href="/news"
                      className="text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">AI Ethics</Badge>
                      <span className="text-xs text-muted-foreground">4 days ago</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">EU Passes Comprehensive AI Regulation Framework</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      New legislation sets standards for transparency, accountability, and safety in artificial
                      intelligence systems.
                    </p>
                    <Link
                      href="/news"
                      className="text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Learning Path Tab */}
            <TabsContent value="learning-path">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-2">Your Personalized Learning Path</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Based on your interests and experience level, we&apos;ve created a structured learning journey for you.
                </p>
              </div>

              <div className="space-y-0 relative">
                {/* Gold vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-border" />

                {/* Step 1 - Completed */}
                <div className="relative pl-12 pb-10">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center z-10 shadow-[0_0_12px_rgba(179,135,40,0.25)]">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-bold text-foreground">Foundations of AI and Machine Learning</h3>
                    <p className="text-sm text-gold mt-1">Completed</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">AI Basics</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Machine Learning</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Neural Networks</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 2 - Completed */}
                <div className="relative pl-12 pb-10">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center z-10 shadow-[0_0_12px_rgba(179,135,40,0.25)]">
                    <CheckCircle className="h-4 w-4 text-black" />
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-bold text-foreground">Introduction to Large Language Models</h3>
                    <p className="text-sm text-gold mt-1">Completed</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Transformers</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Attention Mechanisms</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">GPT Architecture</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 3 - In Progress */}
                <div className="relative pl-12 pb-10">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center z-10">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-bold text-foreground">Prompt Engineering Fundamentals</h3>
                    <p className="text-sm text-muted-foreground mt-1">In Progress - 60% Complete</p>
                    <div className="relative h-1.5 rounded-full bg-border overflow-hidden mt-3 max-w-xs">
                      <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: "60%" }} />
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Prompt Basics</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Zero-shot Learning</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Few-shot Learning</Badge>
                    </div>
                    <button className="mt-5 inline-flex items-center bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-5 py-2 text-sm transition-colors">
                      Continue Learning <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Step 4 - Not Started */}
                <div className="relative pl-12 pb-10">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center z-10">
                    <span className="text-xs text-muted-foreground font-bold">4</span>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-bold text-foreground">Advanced Prompt Engineering</h3>
                    <p className="text-sm text-muted-foreground mt-1">Not Started</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Chain-of-Thought</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">ReAct Prompting</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Prompt Optimization</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 5 - Not Started */}
                <div className="relative pl-12 pb-4">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center z-10">
                    <span className="text-xs text-muted-foreground font-bold">5</span>
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-bold text-foreground">AI Ethics and Responsible Use</h3>
                    <p className="text-sm text-muted-foreground mt-1">Not Started</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Bias in AI</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Fairness Metrics</Badge>
                      <Badge variant="outline" className="border-border text-muted-foreground text-xs">Responsible Deployment</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Saved Tab */}
            <TabsContent value="saved">
              <h2 className="text-xl font-bold text-foreground mb-6">Your Saved Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-border text-muted-foreground text-xs">Article</Badge>
                    <BookMarked className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">The Evolution of Large Language Models</h3>
                  <p className="text-sm text-muted-foreground mb-4">From GPT-1 to modern architectures</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>Saved 3 days ago</span>
                  </div>
                  <button className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-border text-muted-foreground text-xs">Tutorial</Badge>
                    <BookMarked className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Crafting Effective Prompts for Creative Writing</h3>
                  <p className="text-sm text-muted-foreground mb-4">Techniques for storytelling with AI</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>Saved 1 week ago</span>
                  </div>
                  <button className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors">
                    View Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-border text-muted-foreground text-xs">News</Badge>
                    <BookMarked className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">EU Passes Comprehensive AI Regulation Framework</h3>
                  <p className="text-sm text-muted-foreground mb-4">New legislation for AI transparency and safety</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>Saved 4 days ago</span>
                  </div>
                  <button className="inline-flex items-center justify-center w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-gold/20 transition-colors">
                    Read News <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-2">Your Learning Progress</h2>
                <p className="text-muted-foreground leading-relaxed">Track your journey through AI concepts and skills.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-lg font-bold text-foreground mb-1">Overall Progress</h3>
                  <p className="text-sm text-muted-foreground mb-6">Your journey through the curriculum</p>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Total Progress</span>
                        <span className="text-foreground font-medium">{userData.progress}%</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: `${userData.progress}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Modules Completed</span>
                        <span className="text-foreground font-medium">2/5</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: "40%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Quizzes Passed</span>
                        <span className="text-foreground font-medium">3/8</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: "37.5%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="text-lg font-bold text-foreground mb-1">Skills Development</h3>
                  <p className="text-sm text-muted-foreground mb-6">Your proficiency in key AI skills</p>
                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">AI Fundamentals</span>
                        <span className="text-foreground font-medium">85%</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Prompt Engineering</span>
                        <span className="text-foreground font-medium">60%</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: "60%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">LLM Concepts</span>
                        <span className="text-foreground font-medium">70%</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: "70%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">AI Ethics</span>
                        <span className="text-foreground font-medium">30%</span>
                      </div>
                      <div className="relative h-1.5 rounded-full bg-border overflow-hidden">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-gold" style={{ width: "30%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-lg font-bold text-foreground mb-1">Recent Activity</h3>
                <p className="text-sm text-muted-foreground mb-6">Your learning activities in the past 30 days</p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Completed Module: Prompt Engineering Basics</p>
                      <p className="text-sm text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Passed Quiz: Understanding Transformer Models</p>
                      <p className="text-sm text-muted-foreground">5 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                      <BarChart className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Started Module: Advanced Prompt Engineering</p>
                      <p className="text-sm text-muted-foreground">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

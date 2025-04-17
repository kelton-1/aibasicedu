"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, ArrowRight, Sparkles } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
    }, 1500)
  }

  return (
    <Card className="w-full overflow-hidden border-0 shadow-lg bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50">
      <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 -mb-8 -ml-8 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>

      <CardHeader className="relative">
        <FadeIn direction="up" delay={100}>
          <div className="flex items-center mb-2">
            <div className="mr-2 bg-purple-100 p-2 rounded-full">
              <Mail className="h-5 w-5 text-purple-600" />
            </div>
            <CardTitle>Stay Updated</CardTitle>
          </div>
        </FadeIn>
        <FadeIn direction="up" delay={200}>
          <CardDescription className="text-base">
            Get the latest AI news, tutorials, and resources delivered to your inbox.
          </CardDescription>
        </FadeIn>
      </CardHeader>
      <CardContent className="relative">
        {!subscribed ? (
          <FadeIn direction="up" delay={300}>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/80 border-0 focus-visible:ring-purple-500"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </FadeIn>
        ) : (
          <FadeIn direction="up">
            <div className="bg-white/80 p-4 rounded-lg flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-green-700">
                Thank you for subscribing! Check your email to confirm your subscription.
              </p>
            </div>
          </FadeIn>
        )}
      </CardContent>
      <CardFooter className="relative border-t border-gray-100 bg-white/50">
        <FadeIn direction="up" delay={400}>
          <div className="flex items-center text-sm text-gray-500">
            <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
            <span>Join 10,000+ AI enthusiasts receiving weekly updates</span>
          </div>
        </FadeIn>
      </CardFooter>
    </Card>
  )
}


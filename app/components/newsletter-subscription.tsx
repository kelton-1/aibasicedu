"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight } from "lucide-react"
import { FadeIn } from "@/app/components/fade-in"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
    }, 1500)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
      <FadeIn direction="up" delay={100}>
        <p className="label-text mb-3">Newsletter</p>
        <h3 className="text-xl font-semibold text-foreground mb-2">Stay ahead of the curve</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Get curated AI insights, tutorials, and industry news delivered weekly.
        </p>
      </FadeIn>

      {!subscribed ? (
        <FadeIn direction="up" delay={200}>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-10 bg-background border-border rounded-lg text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button
              type="submit"
              className="h-10 bg-gold hover:bg-gold-light text-black font-medium rounded-lg px-6"
              disabled={loading}
            >
              {loading ? "Subscribing..." : (
                <span className="flex items-center">Subscribe <ArrowRight className="ml-2 h-4 w-4" /></span>
              )}
            </Button>
          </form>
        </FadeIn>
      ) : (
        <FadeIn direction="up">
          <div className="flex items-center p-4 rounded-lg border border-gold/20 bg-gold/5">
            <CheckCircle className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
            <p className="text-sm text-foreground">You're subscribed. Check your email to confirm.</p>
          </div>
        </FadeIn>
      )}

      <FadeIn direction="up" delay={300}>
        <p className="text-xs text-muted-foreground mt-4">
          Join 10,000+ AI practitioners. Unsubscribe anytime.
        </p>
      </FadeIn>
    </div>
  )
}

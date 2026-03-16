"use client"

import { useState } from "react"
import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !message) return
    setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="section-container text-center">
          <SectionHeading
            label="Contact"
            title="Get in touch"
            description="Have a question, suggestion, or partnership inquiry? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-2xl mx-auto">
          <FadeIn direction="up" delay={100}>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="label-text block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full h-10 px-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label-text block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full h-10 px-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="label-text block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-black font-medium rounded-xl px-8 py-3 transition-colors duration-300"
                  >
                    Send message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message sent</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Link
                    href={ROUTE_MAP.home}
                    className="inline-flex items-center text-sm font-medium text-gold hover:text-gold-light transition-colors"
                  >
                    Back to home
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

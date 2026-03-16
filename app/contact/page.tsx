"use client"

import { useState } from "react"
import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"
import { SectionHeading } from "@/app/components/section-heading"
import { FadeIn } from "@/app/components/fade-in"
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is the platform free?",
    answer:
      "Yes. AI Learning Hub is completely free to use. All tutorials, glossary entries, news, and learning paths are available at no cost. We believe AI education should be accessible to everyone, regardless of budget.",
  },
  {
    question: "How do I get started?",
    answer:
      "Head to our Get Started page and take the 2-minute assessment. It will recommend a personalized learning path based on your experience level and goals. Alternatively, you can browse our full resource library and dive into any topic that interests you.",
  },
  {
    question: "Can I use this for my team?",
    answer:
      "Absolutely. Many teams use AI Learning Hub as a shared learning resource. You can share specific tutorials, learning paths, or glossary entries with your colleagues. If you need a custom solution for your organization, reach out to us through the contact form above.",
  },
  {
    question: "How often is content updated?",
    answer:
      "We update our content continuously. New tutorials, glossary terms, and news articles are added weekly. Existing content is reviewed and refreshed regularly to ensure accuracy as the AI landscape evolves.",
  },
  {
    question: "How can I contribute?",
    answer:
      "We welcome contributions from the AI community. Whether you want to write a tutorial, suggest a glossary term, or share feedback on existing content, use the contact form above or reach out directly. We are always looking for practitioners who want to help make AI education more accessible.",
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-gold"
      >
        <span className="text-base font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-gold" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

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

      {/* FAQ Section */}
      <section className="pb-24 md:pb-32">
        <div className="section-container max-w-2xl mx-auto">
          <FadeIn direction="up" delay={100}>
            <div className="text-center mb-12">
              <p className="label-text mb-4">FAQ</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
                Common questions
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={200}>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

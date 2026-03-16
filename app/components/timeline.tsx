"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/app/components/fade-in"
import { cn } from "@/lib/utils"

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  category?: string
  icon?: React.ReactNode
  highlight?: boolean
}

interface TimelineProps {
  events: TimelineEvent[]
  title?: string
}

export function Timeline({ events, title }: TimelineProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const sortedEvents = [...events].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const toggleEvent = (id: string) => {
    if (expandedEvent === id) {
      setExpandedEvent(null)
    } else {
      setExpandedEvent(id)
    }
  }

  return (
    <div className="relative">
      {title && <h3 className="text-xl font-bold mb-8 text-foreground">{title}</h3>}

      {/* Gold vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/40 to-border" />

      <div className="space-y-6 relative">
        {sortedEvents.map((event, index) => (
          <FadeIn key={event.id} delay={index * 100} direction="right">
            <div
              className={cn("relative pl-12 cursor-pointer", expandedEvent === event.id ? "mb-4" : "")}
              onClick={() => toggleEvent(event.id)}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                  event.highlight
                    ? "bg-gold shadow-[0_0_16px_rgba(179,135,40,0.3)]"
                    : "bg-card border-2 border-border hover:border-gold/40",
                )}
              >
                {event.icon || (
                  <span
                    className={cn(
                      "text-xs font-bold",
                      event.highlight ? "text-black" : "text-muted-foreground",
                    )}
                  >
                    {new Date(event.date).getFullYear().toString().slice(2)}
                  </span>
                )}
              </div>

              {/* Event card */}
              <div
                className={cn(
                  "rounded-2xl border bg-card p-5 transition-all duration-300",
                  expandedEvent === event.id
                    ? "border-gold/30 shadow-[0_0_24px_rgba(179,135,40,0.08)]"
                    : "border-border hover:border-gold/20",
                  event.highlight ? "border-gold/20" : "",
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="font-bold text-lg text-foreground">{event.title}</h4>
                  <div className="flex items-center mt-1 sm:mt-0 gap-2">
                    <time className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    {event.category && (
                      <Badge
                        variant="outline"
                        className="border-border text-muted-foreground text-xs"
                      >
                        {event.category}
                      </Badge>
                    )}
                  </div>
                </div>

                <p
                  className={cn(
                    "text-muted-foreground transition-all duration-300 leading-relaxed",
                    expandedEvent === event.id ? "line-clamp-none" : "line-clamp-2",
                  )}
                >
                  {event.description}
                </p>

                <div className="mt-3 text-xs text-gold font-medium">
                  {expandedEvent === event.id ? "Click to collapse" : "Click to expand"}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

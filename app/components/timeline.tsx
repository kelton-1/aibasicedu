"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
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
      {title && <h3 className="text-xl font-bold mb-6">{title}</h3>}

      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500"></div>

      <div className="space-y-8 relative">
        {sortedEvents.map((event, index) => (
          <FadeIn key={event.id} delay={index * 100} direction="right">
            <div
              className={cn("relative pl-10 cursor-pointer", expandedEvent === event.id ? "mb-8" : "")}
              onClick={() => toggleEvent(event.id)}
            >
              <div
                className={cn(
                  "absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10",
                  event.highlight
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                    : "bg-white border-2 border-indigo-500",
                )}
              >
                {event.icon || (
                  <span className={cn("text-xs font-bold", event.highlight ? "text-white" : "text-indigo-500")}>
                    {new Date(event.date).getFullYear().toString().slice(2)}
                  </span>
                )}
              </div>

              <Card
                className={cn(
                  "transition-all duration-300",
                  expandedEvent === event.id
                    ? "border-indigo-200 shadow-md"
                    : "hover:border-indigo-200 hover:shadow-sm",
                  event.highlight ? "bg-gradient-to-r from-purple-50 to-indigo-50" : "",
                )}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="font-bold text-lg">{event.title}</h4>
                    <div className="flex items-center mt-1 sm:mt-0">
                      <time className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      {event.category && (
                        <Badge variant="outline" className="ml-2">
                          {event.category}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p
                    className={cn(
                      "text-gray-600 transition-all duration-300",
                      expandedEvent === event.id ? "line-clamp-none" : "line-clamp-2",
                    )}
                  >
                    {event.description}
                  </p>

                  <div className="mt-2 text-xs text-indigo-600 font-medium">
                    {expandedEvent === event.id ? "Click to collapse" : "Click to expand"}
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}


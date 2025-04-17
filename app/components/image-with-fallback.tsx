"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  fallbackSrc?: string
  className?: string
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/placeholder.svg",
  className,
  ...rest
}: ImageWithFallbackProps & Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height">) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => {
        if (!hasError) {
          setImgSrc(`${fallbackSrc}?width=${width}&height=${height}`)
          setHasError(true)
        }
      }}
      {...rest}
    />
  )
}


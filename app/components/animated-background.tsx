"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const canvasElement: HTMLCanvasElement = canvas
    const context: CanvasRenderingContext2D = ctx

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvasElement.width = window.innerWidth
      canvasElement.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(50, Math.floor(window.innerWidth / 30))

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvasElement.width
        this.y = Math.random() * canvasElement.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = `rgba(100, 100, 255, ${Math.random() * 0.2 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvasElement.width) this.x = 0
        else if (this.x < 0) this.x = canvasElement.width
        if (this.y > canvasElement.height) this.y = 0
        else if (this.y < 0) this.y = canvasElement.height
      }

      draw() {
        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    function connectParticles() {
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            context.strokeStyle = `rgba(100, 100, 255, ${opacity * 0.2})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(particlesArray[a].x, particlesArray[a].y)
            context.lineTo(particlesArray[b].x, particlesArray[b].y)
            context.stroke()
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      context.clearRect(0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      connectParticles()
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-30" aria-hidden="true" />
}

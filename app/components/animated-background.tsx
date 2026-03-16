"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* Faint warm radial from center — barely visible, adds depth */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse,rgba(191,149,63,0.03)_0%,transparent_70%)]" />
    </div>
  )
}

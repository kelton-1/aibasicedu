interface EditorialDisclosureProps {
  className?: string
  variant?: "comparison" | "tools"
}

const disclosureCopy = {
  comparison: {
    title: "How we make these picks",
    body:
      "Rankings and quick picks are editorially selected based on our evaluation criteria, including features, pricing, ease of use, and fit for common workflows. Some outbound links may earn us a commission at no extra cost to you, but placements here are not sponsored.",
  },
  tools: {
    title: "Disclosure",
    body:
      "Some links in this directory may be affiliate links, which means we may earn a commission at no extra cost to you. Tool placements are editorially selected rather than sponsored, using our evaluation criteria such as features, pricing, usability, and best-fit use cases.",
  },
} as const

export function EditorialDisclosure({ className = "", variant = "tools" }: EditorialDisclosureProps) {
  const copy = disclosureCopy[variant]

  return (
    <div className={`rounded-2xl border border-gold/20 bg-gold/5 p-4 md:p-5 ${className}`.trim()}>
      <p className="text-sm font-semibold text-foreground">{copy.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.body}</p>
    </div>
  )
}

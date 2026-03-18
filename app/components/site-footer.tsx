import Link from "next/link"
import { ROUTE_MAP } from "@/app/lib/route-map"

const footerLinks = {
  learn: [
    { label: "Tutorials", href: ROUTE_MAP.tutorials },
    { label: "Glossary", href: ROUTE_MAP.glossary },
    { label: "Prompt Library", href: ROUTE_MAP.prompts },
    { label: "Quick Guides", href: ROUTE_MAP.quickGuides },
  ],
  explore: [
    { label: "AI Companies", href: ROUTE_MAP.companies },
    { label: "AI News", href: ROUTE_MAP.news },
    { label: "AI Tools", href: ROUTE_MAP.tools },
    { label: "Compare AI", href: ROUTE_MAP.compare },
    { label: "Projects", href: ROUTE_MAP.projects },
    { label: "Playgrounds", href: ROUTE_MAP.playgrounds },
  ],
  company: [
    { label: "About", href: ROUTE_MAP.about },
    { label: "Contact", href: ROUTE_MAP.contact },
    { label: "Privacy", href: ROUTE_MAP.privacy },
    { label: "Terms", href: ROUTE_MAP.terms },
  ],
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      {/* Gold line accent at top */}
      <div className="gold-line" />

      <div className="section-container">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-semibold tracking-tight gold-text">
                AI Learning Hub
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
              Personalized AI education for everyone. Master the fundamentals. Build the future.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="label-text mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Learning Hub
          </p>
          <p className="text-xs text-muted-foreground">
            Built for the AI generation
          </p>
        </div>
      </div>
    </footer>
  )
}

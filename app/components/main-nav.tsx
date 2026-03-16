import Link from "next/link"

const navItems = [
  { href: "/glossary", label: "Glossary" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/prompts", label: "Prompts" },
  { href: "/news", label: "News" },
  { href: "/companies", label: "Companies" },
  { href: "/dashboard", label: "Dashboard" },
]

export function MainNav() {
  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground rounded-md"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

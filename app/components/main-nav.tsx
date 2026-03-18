import Link from "next/link"
import { NAV_ITEMS } from "@/app/lib/route-map"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-1">
      {NAV_ITEMS.map((item) => (
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

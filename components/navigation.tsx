"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "home" },
  { href: "/writing", label: "writing" },
  { href: "/about", label: "about" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="mb-12">
      <nav className="flex items-center gap-5">
        <Link href="/" className="mr-auto">
          <span className="text-lg font-serif font-medium tracking-tight text-foreground">
            anya
          </span>
        </Link>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-sans transition-colors",
              pathname === link.href
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

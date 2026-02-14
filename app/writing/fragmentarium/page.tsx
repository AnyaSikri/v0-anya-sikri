import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "the fragmentarium | Anya",
  description: "an everlasting collection of powerful aphorisms.",
}

const fragments = [
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote: "He who has a why to live for can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    quote: "I think, therefore I am.",
    author: "Rene Descartes",
  },
  {
    quote: "One cannot step twice in the same river.",
    author: "Heraclitus",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
]

export default function FragmentariumPage() {
  return (
    <article>
      <Link
        href="/writing"
        className="mb-6 inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        back
      </Link>

      <h1 className="text-2xl font-medium tracking-tight">
        the fragmentarium
      </h1>
      <p className="mt-1 font-sans text-sm text-muted-foreground">
        an everlasting collection of powerful aphorisms.
      </p>

      <div className="mt-8 space-y-6">
        {fragments.map((fragment, index) => (
          <blockquote
            key={index}
            className="border-l-2 border-foreground/20 pl-4"
          >
            <p className="text-base italic text-foreground/85 leading-relaxed">
              {`"${fragment.quote}"`}
            </p>
            <footer className="mt-1 font-sans text-sm text-muted-foreground">
              {"— "}{fragment.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </article>
  )
}

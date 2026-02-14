import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "x's developer platform",
    year: "'25",
    href: "#",
  },
  {
    title: "lexi",
    year: "'25",
    href: "#",
  },
  {
    title: "cirrus",
    year: "'25",
    href: "#",
  },
  {
    title: "multi-concept steering in llms",
    year: "'25",
    href: "#",
  },
  {
    title: "princeton purity test",
    year: "'25",
    href: "#",
  },
  {
    title: "transparify",
    year: "'24",
    href: "#",
  },
  {
    title: "dialexicon",
    year: "'21",
    href: "#",
  },
]

export default function HomePage() {
  return (
    <article className="space-y-6">
      <h1 className="text-2xl font-medium tracking-tight">
        {"hey, i'm saurish"}
      </h1>

      <div className="space-y-4 text-base leading-relaxed text-foreground/80">
        <p>
          {"i'm a research engineer @ "}
          <InlineLink href="https://x.ai">xAI</InlineLink>
          {", where i work on ai safety and post-training rl. these days, i'm mostly exploring ai research, philosophy of mind, & continental philosophy."}
        </p>

        <p>
          {"previously: i helped scale "}
          <InlineLink href="https://developer.x.com">
            {"X's developer platform"}
          </InlineLink>
          {", spent two years studying cs & philosophy @ princeton, helped invest @ "}
          <InlineLink href="#">hummingbird</InlineLink>
          {", trained foundational models for the brain @ "}
          <InlineLink href="#">mindco</InlineLink>
          {", & built conversational ai @ "}
          <InlineLink href="#">assort health</InlineLink>
          {"."}
        </p>

        <p>
          {"feel free to reach out "}
          <InlineLink href="https://twitter.com/saurishhh">
            @saurishhh
          </InlineLink>
          {" or saurish [at] princeton.edu."}
        </p>
      </div>

      <section className="pt-2">
        <h2 className="mb-4 text-sm font-sans font-medium text-muted-foreground">
          projects/publications:
        </h2>
        <div className="space-y-1">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex items-center justify-between rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-foreground/5"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{project.title}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
              <span className="font-sans text-sm text-muted-foreground">
                {project.year}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  )
}

function InlineLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-link underline underline-offset-2 decoration-link/30 hover:decoration-link transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}

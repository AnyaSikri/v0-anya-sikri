import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Anya",
  description: "About Anya Sikri",
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

export default function AboutPage() {
  return (
    <article>
      <h1 className="text-2xl font-serif font-medium tracking-tight">about</h1>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
        <p>
          {"i'm an undergraduate at "}
          <InlineLink href="https://berkeley.edu">UC Berkeley</InlineLink>
          {" studying data science, bioengineering, and public health. my interests span the intersection of AI, healthcare, and data\u2014from building intelligent systems for clinical research to analyzing biotech markets."}
        </p>

        <p>
          {"i've worked across pharma, consulting, and startups\u2014from developing AI-powered patient safety systems at "}
          <InlineLink href="https://www.rigel.com">Rigel Pharmaceuticals</InlineLink>
          {" to building LLM evaluation frameworks at "}
          <InlineLink href="https://www.pwc.com">PwC</InlineLink>
          {". i'm also a researcher at the "}
          <InlineLink href="https://innovativegenomics.org">Innovative Genomics Institute</InlineLink>
          {" and an analyst at "}
          <InlineLink href="https://www.healthengineberkeley.com">Health Engine</InlineLink>
          {", berkeley's health-tech startup accelerator."}
        </p>

        <p>
          {"feel free to "}
          <InlineLink href="mailto:anya.sikri@berkeley.edu">reach out</InlineLink>
          {" if your interests align with mine \u2014 always happy to connect!"}
        </p>
      </div>

      <div className="mt-8">
        <Image
          src="/images/profile.jpg"
          alt="A photo of Anya"
          width={600}
          height={400}
          className="rounded-lg"
          priority
        />
      </div>
    </article>
  )
}

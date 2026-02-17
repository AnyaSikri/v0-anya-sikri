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
      <h1 className="text-2xl font-serif font-medium tracking-tight">About</h1>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
        <p>
          {"I'm an undergraduate at "}
          <InlineLink href="https://berkeley.edu">UC Berkeley</InlineLink>
          {" studying Data Science, Bioengineering, and Public Health. I build at the intersection of venture capital, startups, and healthtech, from intelligent clinical research systems to biotech market analysis tools."}
        </p>

        <p>
          {"I've worked across pharma, consulting, and startups, from developing AI-powered patient safety systems at "}
          <InlineLink href="https://www.rigel.com">Rigel Pharmaceuticals</InlineLink>
          {" to building LLM evaluation frameworks at "}
          <InlineLink href="https://www.pwc.com">PwC</InlineLink>
          {". I'm also a researcher at the "}
          <InlineLink href="https://innovativegenomics.org">Innovative Genomics Institute</InlineLink>
          {" and an analyst at "}
          <InlineLink href="https://readysethealth.io">Health Engine</InlineLink>
          {", Berkeley's health-tech startup accelerator."}
        </p>

        <p>
          {"Feel free to "}
          <InlineLink href="mailto:anya.sikri@berkeley.edu">reach out</InlineLink>
          {" or connect on "}
          <InlineLink href="https://www.linkedin.com/in/anyasikri/">LinkedIn</InlineLink>
          {" if your interests align with mine, always happy to connect!"}
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

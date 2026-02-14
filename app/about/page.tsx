import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Saurish",
  description: "About Saurish Srivastava",
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
      <h1 className="text-2xl font-medium tracking-tight">about</h1>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
        <p>
          {"i'm an undergraduate at princeton concentrating in computer science, mathematics, and philosophy. i have many interests, but my main focuses lie in probability theory and developing ethical ai. i'm currently conducting research on neural networks in astrophysics at the "}
          <InlineLink href="#">Princeton Astro Data Lab</InlineLink>
          {"."}
        </p>

        <p>
          {"on a different front, i run a nonprofit organization called "}
          <InlineLink href="#">Project enVision U.S.</InlineLink>
          {", where i help incubate grassroots movements for the youth. i also lead a philosophy journal called "}
          <InlineLink href="#">Dialexicon</InlineLink>
          {" that's in its third year of publishing. previously, i was the host of "}
          <InlineLink href="#">its podcast</InlineLink>
          {", where i got to chat with the top minds in philosophy from across the globe."}
        </p>

        <p>
          {"feel free to "}
          <InlineLink href="mailto:saurish@princeton.edu">reach out</InlineLink>
          {" if your interests align with mine \u2014 always happy to connect!"}
        </p>
      </div>

      <div className="mt-8">
        <Image
          src="/images/profile.jpg"
          alt="A photo of Saurish"
          width={600}
          height={400}
          className="rounded-lg"
          priority
        />
      </div>
    </article>
  )
}

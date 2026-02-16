import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Berkeley + Research | Anya",
  description: "Anya Sikri's research and organizations at UC Berkeley",
}

const berkeleyExperience = [
  {
    title: "Innovative Genomics Institute",
    href: "https://innovativegenomics.org",
    role: "Researcher, Braverman Lab",
    location: "Berkeley, CA",
    period: "2025 - Present",
    description:
      "Conducting high-throughput drug screening on patient-derived colorectal cancer organoids. Built XML-to-CSV data transformation pipeline to batch-process FlowJo workspace templates and extract classifications, reducing manual intervention time by 90% from sample acquisition to statistical analysis for time-sensitive therapeutic screening.",
  },
  {
    title: "UCSF",
    href: "https://www.medrxiv.org/content/10.1101/2025.02.14.25322163v1.full",
    role: "Research Contributor",
    location: "San Francisco, CA",
    period: "2025",
    description:
      "Co-authored research published on medRxiv investigating clinical and genomic data analysis. Contributing to interdisciplinary work at the intersection of data science, public health, and biomedical research.",
  },
  {
    title: "Health Engine",
    href: "https://www.healthengineberkeley.com",
    role: "Analyst",
    location: "Berkeley, CA",
    period: "2024 - Present",
    description:
      "UC Berkeley student-run startup accelerator facilitating health-tech innovation with over 60 present and past cohort startups. Managing accelerator experience for cohort startup VitVio. Developing a semantic search and recommendation engine using MongoDB, SentenceTransformer embeddings, and FAISS indexing to improve mentor-startup matching and due diligence workflows.",
  },
  {
    title: "Big Data at Berkeley",
    href: "https://bd.studentorg.berkeley.edu",
    role: "Consultant, Online Course Department",
    location: "Berkeley, CA",
    period: "2023 - Present",
    description:
      "Developed the Data Science Demystified online course curriculum, reaching 500+ learners across 15+ countries. Designed module content covering data wrangling, visualization, and machine learning fundamentals for non-technical audiences.",
  },
  {
    title: "Phoenix Consulting",
    href: "https://phoenix.berkeley.edu",
    role: "Project Manager",
    location: "Berkeley, CA",
    period: "2023 - Present",
    description:
      "Led a team of 4-6 analysts on health sector consulting engagements for biotech and life sciences clients. Managed project timelines, client deliverables, and cross-functional coordination across drug pipeline analysis and market strategy projects.",
  },
]

export default function BerkeleyPage() {
  return (
    <article className="space-y-6">
      <h1 className="text-2xl font-serif font-medium tracking-tight">
        Berkeley + Research
      </h1>

      <p className="text-base leading-relaxed text-foreground/80">
        {"I'm studying Data Science, Bioengineering, and Public Health at "}
        <Link
          href="https://berkeley.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link underline underline-offset-2 decoration-link/30 hover:decoration-link transition-colors"
        >
          UC Berkeley
        </Link>
        {". Here's what I'm involved in on campus and in research."}
      </p>

      <section className="pt-2">
        <div className="space-y-2">
          {berkeleyExperience.map((exp) => {
            const faviconDomain =
              exp.title === "UCSF" ? "ucsf.edu" : new URL(exp.href).hostname

            return (
              <Link
                key={exp.title}
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-md px-3 py-4 -mx-3 transition-colors hover:bg-foreground/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="flex items-center gap-2">
                      <Image
                        src={`https://www.google.com/s2/favicons?domain=${faviconDomain}&sz=32`}
                        alt=""
                        width={18}
                        height={18}
                        className="rounded-sm shrink-0"
                        unoptimized
                      />
                      <span className="text-lg font-medium">{exp.title}</span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 shrink-0" />
                    </span>
                    <span className="block text-sm text-muted-foreground mt-0.5 pl-7">
                      {exp.role} &middot; {exp.location}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-1">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-foreground/70 pl-7">
                  {exp.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </article>
  )
}

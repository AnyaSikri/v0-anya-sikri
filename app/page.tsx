import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const workExperience = [
  {
    title: "Rigel Pharmaceuticals",
    role: "Software Development Engineer",
    location: "San Francisco, CA",
    period: "Aug 2025 - Present",
    description:
      "Developed AI-powered Patient Safety Narrative System reducing medical writer workload from 2-4 hours to 15-30 minutes. Designed AWS cloud architecture (RDS, Lambda, S3) with SQLite database and JSON configuration system.",
  },
  {
    title: "Ishara Investments",
    role: "Tech Research Analyst Intern",
    location: "San Francisco, CA",
    period: "Aug 2025 - Present",
    description:
      "Developed Python-based prescription trend detection system processing weekly Symphony Health data across 20+ biotech drugs with 90%+ confidence scoring, reducing false positive rate by 60%.",
  },
  {
    title: "PwC",
    role: "Cloud Engineering and Data Intern",
    location: "San Francisco, CA",
    period: "Jun 2025 - Aug 2025",
    description:
      "Built adaptive LLM Evaluation Framework using AWS Bedrock and Sagemaker. Designed centralized LLM vendor intelligence system with automated ETL pipelines (Airflow, dbt), reducing vendor selection time by 60%.",
  },
  {
    title: "Abbott",
    role: "Data Science and Strategy Intern",
    location: "Berkeley, CA",
    period: "Aug 2024 - Dec 2024",
    description:
      "Conducted research and 15+ interviews to map the patient journey for spinal cord implants. Developed an internal RAG-assisted AI agent for clinical trial data from ClinicalTrials.gov, FDA.gov, and financial records.",
  },
  {
    title: "Ayla Networks",
    role: "Software Engineering Intern",
    location: "San Jose, CA",
    period: "May 2024 - Aug 2024",
    description:
      "Used AWS Redshift to extract data from Amazon S3 and examine device health patterns from 3.5 TB of customer device data across 60+ manufacturers.",
  },
  {
    title: "Stanford Center Clinical Research",
    role: "Data Science and Strategy Intern",
    location: "Palo Alto, CA",
    period: "May 2023 - Aug 2023",
    description:
      "Utilized advanced SQL techniques for analysis of patent data for 200+ drugs. Developed Python program to filter and sort clinical trial patient data, increasing visit tracking efficiency by 40%.",
  },
]

const berkeleyExperience = [
  {
    title: "Innovative Genomics Institute",
    role: "Researcher, Braverman Lab",
    location: "Berkeley, CA",
    period: "Jun 2025 - Present",
    description:
      "Conducting high-throughput drug screening on patient-derived colorectal cancer organoids. Built XML-to-CSV data transformation pipeline to batch-process FlowJo workspace templates, reducing manual intervention time by 90%.",
  },
  {
    title: "Health Engine",
    role: "Analyst",
    location: "Berkeley, CA",
    period: "Dec 2024 - Present",
    description:
      "UC Berkeley student-run startup accelerator facilitating health-tech innovation with over 60 cohort startups. Developing a semantic search and recommendation engine using MongoDB, SentenceTransformer embeddings, and FAISS indexing.",
  },
]

export default function HomePage() {
  return (
    <article className="space-y-6">
      <h1 className="text-2xl font-medium tracking-tight">
        {"hey, i'm anya"}
      </h1>

      <div className="space-y-4 text-base leading-relaxed text-foreground/80">
        <p>
          {"i'm studying data science, bioengineering, and public health @ "}
          <InlineLink href="https://berkeley.edu">UC Berkeley</InlineLink>
          {". i'm interested in the intersection of AI, healthcare, and data\u2014building intelligent systems for clinical research and analyzing biotech markets."}
        </p>

        <p>
          {"previously: built AI-powered patient safety systems @ "}
          <InlineLink href="#">rigel pharmaceuticals</InlineLink>
          {", LLM evaluation frameworks @ "}
          <InlineLink href="#">pwc</InlineLink>
          {", biotech trend detection @ "}
          <InlineLink href="#">ishara investments</InlineLink>
          {", & research @ "}
          <InlineLink href="#">innovative genomics institute</InlineLink>
          {"."}
        </p>

        <p>
          {"feel free to reach out at "}
          <InlineLink href="mailto:anya.sikri@berkeley.edu">
            anya.sikri@berkeley.edu
          </InlineLink>
          {"."}
        </p>
      </div>

      <section className="pt-2">
        <h2 className="mb-4 text-sm font-sans font-medium text-muted-foreground">
          work experience:
        </h2>
        <div className="space-y-1">
          {workExperience.map((exp) => (
            <ExperienceItem key={exp.title} {...exp} />
          ))}
        </div>
      </section>

      <section className="pt-2">
        <h2 className="mb-4 text-sm font-sans font-medium text-muted-foreground">
          berkeley:
        </h2>
        <div className="space-y-1">
          {berkeleyExperience.map((exp) => (
            <ExperienceItem key={exp.title} {...exp} />
          ))}
        </div>
      </section>
    </article>
  )
}

function ExperienceItem({
  title,
  role,
  period,
  description,
}: {
  title: string
  role: string
  location: string
  period: string
  description: string
}) {
  return (
    <div className="group rounded-md px-2 py-2.5 -mx-2 transition-colors hover:bg-foreground/5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="flex items-center gap-2">
            <span className="text-base font-medium">{title}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 shrink-0" />
          </span>
          <span className="block font-sans text-sm text-muted-foreground">
            {role}
          </span>
        </div>
        <span className="font-sans text-sm text-muted-foreground whitespace-nowrap shrink-0">
          {period}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
        {description}
      </p>
    </div>
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

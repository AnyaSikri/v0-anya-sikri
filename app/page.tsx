import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const workExperience = [
  {
    title: "Rigel Pharmaceuticals",
    href: "https://www.rigel.com",
    role: "Software Development Engineer",
    location: "San Francisco, CA",
    period: "2025 - Present",
    description:
      "Developed AI-powered Patient Safety Narrative System reducing medical writer workload from 2-4 hours to 15-30 minutes. Designed AWS cloud architecture (RDS, Lambda, S3) with SQLite database and JSON configuration system.",
  },
  {
    title: "Ishara Investments",
    href: "https://www.ishara.co",
    role: "Tech Research Analyst Intern",
    location: "San Francisco, CA",
    period: "2025 - Present",
    description:
      "Developed Python-based prescription trend detection system processing weekly Symphony Health data across 20+ biotech drugs with 90%+ confidence scoring, reducing false positive rate by 60%.",
  },
  {
    title: "PwC",
    href: "https://www.pwc.com",
    role: "Cloud Engineering and Data Intern",
    location: "San Francisco, CA",
    period: "2025",
    description:
      "Built adaptive LLM Evaluation Framework using AWS Bedrock and Sagemaker. Designed centralized LLM vendor intelligence system with automated ETL pipelines (Airflow, dbt), reducing vendor selection time by 60%.",
  },
  {
    title: "Abbott",
    href: "https://www.abbott.com",
    role: "Data Science and Strategy Intern",
    location: "Berkeley, CA",
    period: "2024",
    description:
      "Conducted research and 15+ interviews to map the patient journey for spinal cord implants. Developed an internal RAG-assisted AI agent for clinical trial data from ClinicalTrials.gov, FDA.gov, and financial records.",
  },
  {
    title: "Ayla Networks",
    href: "https://www.aylanetworks.com",
    role: "Software Engineering Intern",
    location: "San Jose, CA",
    period: "2024",
    description:
      "Used AWS Redshift to extract data from Amazon S3 and examine device health patterns from 3.5 TB of customer device data across 60+ manufacturers.",
  },
  {
    title: "Stanford Center Clinical Research",
    href: "https://med.stanford.edu/sccr.html",
    role: "Data Science and Strategy Intern",
    location: "Palo Alto, CA",
    period: "2023",
    description:
      "Utilized advanced SQL techniques for analysis of patent data for 200+ drugs. Developed Python program to filter and sort clinical trial patient data, increasing visit tracking efficiency by 40%.",
  },
]

const berkeleyExperience = [
  {
    title: "Innovative Genomics Institute",
    href: "https://innovativegenomics.org",
    role: "Researcher, Braverman Lab",
    location: "Berkeley, CA",
    period: "2025 - Present",
    description:
      "Conducting high-throughput drug screening on patient-derived colorectal cancer organoids. Built XML-to-CSV data transformation pipeline to batch-process FlowJo workspace templates, reducing manual intervention time by 90%.",
  },
  {
    title: "UCSF",
    href: "https://www.medrxiv.org/content/10.1101/2025.02.14.25322163v1.full",
    role: "Research Contributor",
    location: "San Francisco, CA",
    period: "2025",
    description:
      "Co-authored research published on medRxiv investigating clinical and genomic data analysis. Contributing to interdisciplinary work bridging data science and biomedical research.",
  },
  {
    title: "Health Engine",
    href: "https://www.healthengineberkeley.com",
    role: "Analyst",
    location: "Berkeley, CA",
    period: "2024 - Present",
    description:
      "UC Berkeley student-run startup accelerator facilitating health-tech innovation with over 60 cohort startups. Developing a semantic search and recommendation engine using MongoDB, SentenceTransformer embeddings, and FAISS indexing.",
  },
  {
    title: "Big Data at Berkeley",
    href: "https://bd.studentorg.berkeley.edu/",
    role: "Consultant, Online Course Department",
    location: "Berkeley, CA",
    period: "2023 - Present",
    description:
      "Developed the Data Science Demystified online course curriculum, reaching 500+ learners across 15+ countries. Designed module content covering data wrangling, visualization, and machine learning fundamentals for non-technical audiences.",
  },
  {
    title: "Phoenix Consulting",
    href: "https://phoenix.berkeley.edu/",
    role: "Project Manager",
    location: "Berkeley, CA",
    period: "2023 - Present",
    description:
      "Led a team of 4-6 analysts on health sector consulting engagements for biotech and life sciences clients. Managed project timelines, client deliverables, and cross-functional coordination across drug pipeline analysis and market strategy projects.",
  },
]

export default function HomePage() {
  return (
    <article className="space-y-8">
      <h1 className="text-2xl font-serif font-medium tracking-tight">
        Anya Sikri
      </h1>

      <div className="space-y-4 text-base leading-relaxed text-foreground/80">
        <p>
          {"I'm studying Data Science, Bioengineering, and Public Health at "}
          <InlineLink href="https://berkeley.edu">UC Berkeley</InlineLink>
          {". I build at the intersection of startups, venture capital, and healthtech, from intelligent systems for clinical research to tools for biotech market analysis."}
        </p>

        <p>
          {"I've built AI-powered patient safety systems at "}
          <InlineLink href="https://www.rigel.com">Rigel Pharmaceuticals</InlineLink>
          {", LLM evaluation frameworks at "}
          <InlineLink href="https://www.pwc.com">PwC</InlineLink>
          {", biotech trend detection at "}
          <InlineLink href="https://www.ishara.co">Ishara Investments</InlineLink>
          {", and research tools at the "}
          <InlineLink href="https://innovativegenomics.org">Innovative Genomics Institute</InlineLink>
          {"."}
        </p>

        <p>
          {"Feel free to reach out at "}
          <InlineLink href="mailto:anya.sikri@berkeley.edu">
            anya.sikri@berkeley.edu
          </InlineLink>
          {"."}
        </p>
      </div>

      <section>
        <h2 className="mb-4 text-lg font-serif font-medium text-foreground">
          Work Experience
        </h2>
        <div className="space-y-1">
          {workExperience.map((exp) => (
            <ExperienceItem key={exp.title} {...exp} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-serif font-medium text-foreground">
            Berkeley + Research
          </h2>
          <Link
            href="/berkeley"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {"View all \u2192"}
          </Link>
        </div>
        <div className="space-y-1">
          {berkeleyExperience.map((exp) => (
            <ExperienceItem key={exp.title} {...exp} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-serif font-medium text-foreground">
          Projects
        </h2>
        <div className="space-y-1">
          <div className="block rounded-md px-2 py-2.5 -mx-2">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className="text-base font-medium">Due Diligence Tool</span>
                  <span className="text-xs text-muted-foreground bg-foreground/5 px-2 py-0.5 rounded-full">Coming Soon</span>
                </span>
              </div>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
              An AI-powered due diligence and market analysis tool for venture capital workflows.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}

function ExperienceItem({
  title,
  href,
  role,
  period,
  description,
}: {
  title: string
  href: string
  role: string
  location: string
  period: string
  description: string
}) {
  const faviconDomain =
    title === "Ishara Investments"
      ? "bloomberg.com"
      : title === "UCSF"
        ? "ucsf.edu"
        : new URL(href).hostname

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-md px-2 py-2.5 -mx-2 transition-colors hover:bg-foreground/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="flex items-center gap-2">
            <Image
              src={`https://www.google.com/s2/favicons?domain=${faviconDomain}&sz=32`}
              alt=""
              width={16}
              height={16}
              className="rounded-sm shrink-0"
              unoptimized
            />
            <span className="text-base font-medium">{title}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 shrink-0" />
          </span>
          <span className="block text-sm text-muted-foreground mt-0.5 pl-6">
            {role}
          </span>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0">
          {period}
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/70 pl-6">
        {description}
      </p>
    </Link>
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

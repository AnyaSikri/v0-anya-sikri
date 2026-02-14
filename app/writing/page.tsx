import Link from "next/link"

const posts = [
  {
    title: "the fragmentarium",
    description: "an everlasting collection of powerful aphorisms.",
    date: null,
    slug: "fragmentarium",
  },
  {
    title: "on intuition",
    description:
      "interrogating intuition & unpacking how we can train it.",
    date: "Sep 2025",
    slug: "on-intuition",
  },
]

export default function WritingPage() {
  return (
    <article>
      <h1 className="text-2xl font-medium tracking-tight">writing</h1>
      <p className="mt-2 text-base text-muted-foreground">
        {"brief thoughts & opinions \u2014 longer takes on "}
        <Link
          href="https://substack.com"
          className="text-link underline underline-offset-2 decoration-link/30 hover:decoration-link transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          substack
        </Link>
      </p>

      <div className="mt-8 space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group block rounded-md px-3 py-3 -mx-3 transition-colors hover:bg-foreground/5"
          >
            <h3 className="text-lg font-medium">{post.title}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {post.description}
            </p>
            {post.date && (
              <p className="mt-1 font-sans text-xs text-muted-foreground/70">
                {post.date}
              </p>
            )}
          </Link>
        ))}
      </div>
    </article>
  )
}

# Content Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh portfolio site content with startup-oriented language, add Berkeley entries, add Projects section, and prepare for new headshot.

**Architecture:** Targeted edits to three existing page files. No new pages, routes, or components. All changes are content and data array modifications.

**Tech Stack:** Next.js 16 / React 19 / TypeScript / Tailwind CSS

---

### Task 1: Rewrite Home Page Intro

**Files:**
- Modify: `app/page.tsx:99-124`

**Step 1: Replace the intro paragraphs**

In `app/page.tsx`, replace the three `<p>` blocks inside the intro `<div>` (lines 99-124) with:

```tsx
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
```

**Step 2: Verify the dev server compiles**

Run: `cd /Users/anyasikri/v0-anya-sikri && npx next build --no-lint 2>&1 | tail -5`
Expected: Compiles without errors.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "content: rewrite home page intro with startup-oriented language"
```

---

### Task 2: Add Berkeley Entries to Home Page

**Files:**
- Modify: `app/page.tsx:62-89` (berkeleyExperience array)

**Step 1: Add two new entries to the berkeleyExperience array**

In `app/page.tsx`, add these two objects to the end of the `berkeleyExperience` array (after the Health Engine entry, before the closing `]`):

```typescript
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
```

**Step 2: Update favicon domain mapping**

In the `ExperienceItem` component's `faviconDomain` logic (around line 174), the new entries use standard domains so no special mapping is needed. Verify `new URL(href).hostname` resolves correctly for both:
- `bd.studentorg.berkeley.edu`
- `phoenix.berkeley.edu`

These should work with the Google favicon API as-is.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "content: add Big Data at Berkeley and Phoenix Consulting to home page"
```

---

### Task 3: Add Projects Section to Home Page

**Files:**
- Modify: `app/page.tsx` (after the Berkeley + Research `</section>`, before closing `</article>`)

**Step 1: Add the Projects section**

In `app/page.tsx`, add this new `<section>` after the Berkeley + Research section (after line 155, before the closing `</article>`):

```tsx
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
```

**Step 2: Verify the dev server compiles**

Run: `cd /Users/anyasikri/v0-anya-sikri && npx next build --no-lint 2>&1 | tail -5`
Expected: Compiles without errors.

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "content: add Projects section with Due Diligence Tool placeholder"
```

---

### Task 4: Rewrite About Page Bio

**Files:**
- Modify: `app/about/page.tsx:34-57`

**Step 1: Replace the bio paragraphs**

In `app/about/page.tsx`, replace the three `<p>` blocks inside the bio `<div>` (lines 34-57) with:

```tsx
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
          <InlineLink href="https://www.healthengineberkeley.com">Health Engine</InlineLink>
          {", Berkeley's health-tech startup accelerator."}
        </p>

        <p>
          {"Feel free to "}
          <InlineLink href="mailto:anya.sikri@berkeley.edu">reach out</InlineLink>
          {" if your interests align with mine, always happy to connect!"}
        </p>
      </div>
```

**Step 2: Commit**

```bash
git add app/about/page.tsx
git commit -m "content: rewrite about page bio, remove dashes and previously"
```

---

### Task 5: Add Berkeley Entries to Berkeley Page

**Files:**
- Modify: `app/berkeley/page.tsx:11-39` (berkeleyExperience array)

**Step 1: Add two new entries to the berkeleyExperience array**

In `app/berkeley/page.tsx`, add these two objects to the end of the `berkeleyExperience` array (after the Health Engine entry, before the closing `]`):

```typescript
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
```

**Step 2: Verify the dev server compiles**

Run: `cd /Users/anyasikri/v0-anya-sikri && npx next build --no-lint 2>&1 | tail -5`
Expected: Compiles without errors.

**Step 3: Commit**

```bash
git add app/berkeley/page.tsx
git commit -m "content: add Big Data at Berkeley and Phoenix Consulting to berkeley page"
```

---

### Task 6: Headshot Swap (User Action)

**Files:**
- Replace: `public/images/profile.jpg`

**Step 1: User provides new headshot**

The user will drop their new headshot file into `public/images/profile.jpg` (replacing the existing file). The About page already references `/images/profile.jpg` so no code change is needed.

**Step 2: Commit**

```bash
git add public/images/profile.jpg
git commit -m "content: update headshot photo"
```

---

### Task 7: Final Verification

**Step 1: Build the full site**

Run: `cd /Users/anyasikri/v0-anya-sikri && npx next build --no-lint`
Expected: All pages compile successfully.

**Step 2: Spot-check pages**

Run the dev server and visually verify:
- Home page: new intro text, Berkeley entries include Big Data + Phoenix, Projects section visible
- Berkeley page: Big Data + Phoenix entries present
- About page: updated bio without dashes, headshot displays

Run: `cd /Users/anyasikri/v0-anya-sikri && npx next dev --turbo`

**Step 3: Push to remote**

```bash
git push origin main
```

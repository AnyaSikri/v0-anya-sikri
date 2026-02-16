# Content Refresh Design

**Date**: 2026-02-15
**Approach**: Minimal Content Refresh (targeted edits, no structural redesign)

## Changes

### 1. Home Page Intro Rewrite (`app/page.tsx`)

Remove em dashes and "Previously:" phrasing. Reframe with active, startup-oriented voice.

**New intro:**
> I'm studying Data Science, Bioengineering, and Public Health at UC Berkeley. I build at the intersection of startups, venture capital, and healthtech, from intelligent systems for clinical research to tools for biotech market analysis.
>
> I've built AI-powered patient safety systems at Rigel Pharmaceuticals, LLM evaluation frameworks at PwC, biotech trend detection at Ishara Investments, and research tools at the Innovative Genomics Institute.

### 2. About Page Rewrite (`app/about/page.tsx`)

Same tone changes: remove em dashes, remove "previously" framing, startup-first language. Update headshot image reference to new photo (user will provide file).

**New bio:**
> I'm an undergraduate at UC Berkeley studying Data Science, Bioengineering, and Public Health. I build at the intersection of venture capital, startups, and healthtech, from intelligent clinical research systems to biotech market analysis tools.
>
> I've worked across pharma, consulting, and startups, from developing AI-powered patient safety systems at Rigel Pharmaceuticals to building LLM evaluation frameworks at PwC. I'm also a researcher at the Innovative Genomics Institute and an analyst at Health Engine, Berkeley's health-tech startup accelerator.
>
> Feel free to reach out if your interests align with mine, always happy to connect!

### 3. Projects Section on Home Page (`app/page.tsx`)

Add a new "Projects" section after "Berkeley + Research" on the home page with a placeholder entry:

- **Due Diligence Tool** - Coming Soon
  - "An AI-powered due diligence and market analysis tool for venture capital workflows."

### 4. New Berkeley Entries (`app/page.tsx` and `app/berkeley/page.tsx`)

Add two new entries to both the home page Berkeley section and the dedicated Berkeley page:

**Big Data at Berkeley**
- Link: https://bd.studentorg.berkeley.edu/
- Role: Consultant, Online Course Department
- Location: Berkeley, CA
- Period: 2023 - Present
- Description: "Developed the Data Science Demystified online course curriculum, reaching 500+ learners across 15+ countries. Designed module content covering data wrangling, visualization, and machine learning fundamentals for non-technical audiences."

**Phoenix Consulting**
- Link: https://phoenix.berkeley.edu/
- Role: Project Manager
- Location: Berkeley, CA
- Period: 2023 - Present
- Description: "Led a team of 4-6 analysts on health sector consulting engagements for biotech and life sciences clients. Managed project timelines, client deliverables, and cross-functional coordination across drug pipeline analysis and market strategy projects."

### 5. Headshot

User will provide a new headshot photo to replace `public/images/profile.jpg`. The About page already references this path so no code change needed beyond swapping the file.

## Files Modified

- `app/page.tsx` - Intro rewrite, new Berkeley entries, new Projects section
- `app/about/page.tsx` - Bio rewrite, remove dashes/"previously"
- `app/berkeley/page.tsx` - Add Big Data at Berkeley and Phoenix Consulting entries
- `public/images/` - New headshot (user-provided)

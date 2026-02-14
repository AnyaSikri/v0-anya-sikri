import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "on intuition | Saurish",
  description: "interrogating intuition & unpacking how we can train it.",
}

export default function OnIntuitionPage() {
  return (
    <article>
      <Link
        href="/writing"
        className="mb-6 inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        back
      </Link>

      <h1 className="text-2xl font-medium tracking-tight">on intuition</h1>
      <p className="mt-1 font-sans text-sm text-muted-foreground">
        Sep 2025
      </p>

      <div className="prose-blog mt-8 text-foreground/85">
        <h3>context</h3>
        <p>
          {"i've been dedicating time to learn the systems i'm working with at a far deeper layer than just \"cursor-ing\" my edits. yet, in doing so, i have begun to appreciate how these systems were designed in the first place & the history/thought that goes behind architecting them."}
        </p>
        <p>
          {"when i ask for help from people smarter than me, i'm continuously amazed by how vast their repertoire and knowledge is: something i might be struggling with for hours could be solved with just 5 seconds of their time. & it's not because they've faced that problem before, but rather they can just intuit a possible solution\u2014and that too, quickly."}
        </p>
        <p>
          {"so naturally, i started wondering how one reaches that level of depth where answers are seemingly sent down from god. & in doing so, i was sent down a rabbithole chasing an understanding of the concept of "}
          <em>intuition</em>
          {" in the first place."}
        </p>

        <h3>what is intuition?</h3>
        <p>
          {"my initial thought was that intuition would operate quite similarly to bayesian reasoning, just on a sub-conscious level: our brains are continuously processing data/patterns from past experiences & implicitly calculating the likelihood of outcomes without us even realizing it. for instance, when top chess players mention that certain moves just \"feel right\" or that they \"just know\" the right move, their minds draw on thousands of their past games in similar situations to weigh probabilities intuitively. simply put: fine-tuned pattern recognition."}
        </p>
        <p>
          {"yet, this analogy falls short because cognitive psychology research has shown intuition often deviates from strict bayesian norms, relying instead on fast heuristics that lead to systematic biases (i.e. think about the base-rate fallacy where we ignore our priors in favor of recency)."}
        </p>
        <p>
          {"if we look towards philosophy, the question of intuition has been discussed by many of the greats: kant viewed it as a form of a priori knowledge, innate structures of the mind that allow us to perceive space, time, and causality without empirical evidence; descartes emphasized clear and distinct ideas as intuitive truths (i.e., i think, therefore i am). & now, in modern philosophy, intuitions are often treated as \"seemings\"\u2014mental states where a proposition just appears true, serving as "}
          <em>prima facie</em>
          {" evidence in arguments. & as such, the intuitions are often played around with\u2014i.e., there are numerous variations of the trolley problem that challenge our own intuitions and show the infallibility of them."}
        </p>
        <p>
          {"so: intuition is more of an approximation of probabilistic reasoning enhanced by some innate philosophical \"seeming\" & other variables (i.e. experiential patterns, fallible heuristics, etc.) that make it incredibly powerful (but also imperfect)."}
        </p>
        <p>{"& then the question becomes: how do we train our intuition?"}</p>

        <h3>{"kodaira's notes"}</h3>
        <p>
          {"kunihiko kodaira\u2014one of the greatest mathematicians from japan and the first japanese fields medal winner\u2014thinks of (mathematical) intuition as an \"instinctive grasp of the mathematical truth\" behind a theorem, comparable to knowing that 2 + 2 = 4 without needing a proof."}
        </p>
        <p>
          {"in his essay \"while working on my notes,\" he deplores the tedium of reading dense books front-to-back & instead advocates to attempt problems/proofs yourself. rather than just reading, one must copy down the proofs, rework them, critique them & even rewrite the chapters of the book for it to make sense. he claims that the writing of the proof is not for sheer memorization, but to understand the mathematical ideas that build up the theorem in the first place. only then, does one's \"intuitive grasp for mathematical truth develop.\""}
        </p>
        <p>
          {"& this is not something that is a fast process. even kodaira, a genius in his field, would take up to a month just to study just "}
          <em>one</em>
          {" chapter. but, with this rigor came absolute understanding & immense intuition surrounding the subject."}
        </p>
        <p>
          {"while much of his writing was in the context of pure mathematics, it's still comforting to know: intuition can indeed be trained. like all things difficult, it just takes time & effort."}
        </p>

        <h3>some nascent extra thoughts</h3>
        <p>
          {"i haven't really thought this through too much, but part of me thinks that this is why models hallucinate in the first place. our way of rl'ing models to perform better was actually a way to codify the innate \"seeming\" (although we interpret this as the model \"guessing\") humans have when it comes to new topics / questions they've never encountered."}
        </p>
      </div>
    </article>
  )
}

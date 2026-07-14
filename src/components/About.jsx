import { RevealGroup, RevealScrub } from './motion/Reveal'

const FACTS = [
  ['Founded', 'MMXXIII, New Delhi'],
  ['Practice', 'Design, code, motion'],
  ['A typical build', 'Six weeks, brief to launch'],
  ['Currently', 'Taking work for autumn'],
]

export default function About() {
  return (
    <section id="studio" className="px-5 py-32 md:px-10 md:py-48">
      <RevealGroup className="grid grid-cols-1 gap-16 md:grid-cols-12">
        {/* Statement, offset left — most of this spread is deliberately empty */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-4" data-reveal>
            <span className="ordinal text-lg">N° 01</span>
            <span className="h-px w-16 bg-ink/15" aria-hidden="true" />
            <span className="micro-label text-stone">The studio</span>
          </div>

          <RevealScrub className="font-display mt-10 text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.25] text-ink">
            We are a small studio that designs and builds websites for people in a hurry
            who refuse to look it. One art direction, argued for properly. Design and code
            in the same room. <em>Weeks, not quarters.</em>
          </RevealScrub>

          <p className="mt-8 max-w-md text-base leading-[1.7] text-ink-soft" data-reveal>
            Most agencies sell you speed or craft and quietly mean neither. We keep the
            team small enough that nothing is lost in handoff. The person who sets the
            type is the person who ships it.
          </p>
        </div>

        {/* Factual aside, set like a caption column */}
        <dl className="self-end md:col-span-4 md:col-start-9" data-reveal>
          {FACTS.map(([term, detail]) => (
            <div
              key={term}
              className="flex items-baseline justify-between gap-6 border-t border-ink/15 py-4"
            >
              <dt className="micro-label text-stone">{term}</dt>
              <dd className="text-right text-sm text-ink-soft">{detail}</dd>
            </div>
          ))}
        </dl>
      </RevealGroup>
    </section>
  )
}

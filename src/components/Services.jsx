import { Reveal } from './motion/Reveal'
import SectionHead from './SectionHead'

const SERVICES = [
  {
    name: 'Web design',
    note: 'Art direction, layout systems, typography that has been argued over.',
    detail: 'Landing pages, portfolios, marketing sites',
  },
  {
    name: 'Development',
    note: 'The design, shipped by the hands that drew it. React, fast by default.',
    detail: 'React · Vite · Next.js · CMS',
  },
  {
    name: 'Brand identity',
    note: 'Wordmarks and systems that survive contact with a real website.',
    detail: 'Marks, type, usage rules',
  },
  {
    name: 'Motion & interaction',
    note: 'Restraint first. One orchestrated moment per viewport, never five.',
    detail: 'GSAP · scroll choreography · micro-interaction',
  },
  {
    name: 'AI & search visibility',
    note: 'A site that reads as clearly to a machine as it does to a person.',
    detail: 'Structured data · metadata · llms.txt',
  },
  {
    name: 'Care & iteration',
    note: 'New work built inside the system, so a year of edits does not bend it out of shape.',
    detail: 'Retainer · performance · accessibility',
  },
]

export default function Services() {
  return (
    <section id="services" className="px-5 py-32 md:px-10 md:py-48">
      <SectionHead
        number="03"
        label="Services"
        title={
          <>
            What we <em>set</em> in place
          </>
        }
        aside="Engagements are fixed-scope and fixed-price, agreed before a single pixel moves."
      />

      <ul className="mt-20 border-t border-ink/15">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.name} className="border-b border-ink/15">
            <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10">
              <span className="ordinal text-lg text-stone md:col-span-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none text-ink md:col-span-4">
                {s.name}
              </h3>
              <p className="text-base leading-[1.7] text-ink-soft md:col-span-4">{s.note}</p>
              <p className="micro-label text-stone md:col-span-3 md:text-right">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

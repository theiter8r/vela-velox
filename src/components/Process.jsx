import { Reveal } from './motion/Reveal'
import SectionHead from './SectionHead'

const STEPS = [
  {
    title: 'The brief',
    time: 'Week one',
    text: 'A week of questions before any answers. What the site must do, who it must convince, and what it may leave out, written down and signed.',
  },
  {
    title: 'The direction',
    time: 'Weeks two & three',
    text: 'One deliberate art direction, argued for properly, not three safe options fanned out like playing cards. Palette, type, layout thesis, motion budget.',
  },
  {
    title: 'The build',
    time: 'Weeks three to five',
    text: 'Design and code proceed together, so nothing is designed that cannot be built and nothing is built that was never designed.',
  },
  {
    title: 'The handover',
    time: 'Week six',
    text: 'Launch, documentation, and an hour of teaching. You leave able to change your own words without calling us, though you may.',
  },
]

export default function Process() {
  return (
    <section id="method" className="px-5 py-32 md:px-10 md:py-48">
      <SectionHead
        number="04"
        label="The method"
        title={
          <>
            Six weeks, <em>in order</em>
          </>
        }
        aside="The running order of a typical engagement. Larger builds stretch the middle, never the ends."
      />

      <ol className="mt-20 border-t border-ink/15">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.title} className="border-b border-ink/15">
            <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <span className="ordinal text-lg text-stone md:col-span-1">0{i + 1}</span>
              <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] leading-none text-ink md:col-span-3">
                {step.title}
              </h3>
              <p className="micro-label text-stone md:col-span-2 md:pt-2">{step.time}</p>
              <p className="max-w-xl text-base leading-[1.7] text-ink-soft md:col-span-6">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

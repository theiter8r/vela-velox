import { RevealGroup } from './motion/Reveal'

/**
 * Recurring section apparatus: eyebrow (italic ordinal + hairline + label)
 * with the title left and a factual aside right, like a magazine spread head.
 */
export default function SectionHead({ number, label, title, aside, dark = false }) {
  const ruleColor = dark ? 'bg-paper/20' : 'bg-ink/15'
  const asideColor = dark ? 'text-paper/50' : 'text-stone'

  return (
    <RevealGroup>
      <div className="flex items-center gap-4" data-reveal>
        <span className="ordinal text-lg">N° {number}</span>
        <span className={`h-px w-16 ${ruleColor}`} aria-hidden="true" />
        <span className={`micro-label ${asideColor}`}>{label}</span>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <h2
          className="font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.02] tracking-[-0.01em]"
          data-reveal
        >
          {title}
        </h2>
        {aside && (
          <p className={`max-w-[16rem] text-sm leading-relaxed ${asideColor}`} data-reveal>
            {aside}
          </p>
        )}
      </div>
    </RevealGroup>
  )
}

import { Reveal, RevealGroup } from './motion/Reveal'

export default function Footer() {
  return (
    <footer id="contact" className="px-5 pb-10 pt-24 md:px-10 md:pt-32">
      <RevealGroup>
        <div className="flex items-center gap-4" data-reveal>
          <span className="ordinal text-lg">N° 05</span>
          <span className="h-px w-16 bg-ink/15" aria-hidden="true" />
          <span className="micro-label text-stone">Correspondence</span>
        </div>

        <p className="font-display mt-10 max-w-3xl text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.25] text-ink" data-reveal>
          If you have six weeks and a website worth arguing over, <em>write to us.</em>
        </p>

        <a
          href="mailto:hello@veloxindia.com"
          className="font-display mt-8 inline-block text-[clamp(2rem,5.5vw,4.5rem)] leading-none text-ink underline decoration-ink/25 decoration-1 underline-offset-8 transition-colors duration-500 hover:decoration-ink"
          data-reveal
        >
          hello@veloxindia.com
        </a>
      </RevealGroup>

      <Reveal className="mt-24 border-t border-ink/15 pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/velox-mark-ink.png" alt="Velox mark" className="h-4 w-auto" />
            <span className="micro-label text-stone">© MMXXVI Velox India</span>
          </div>

          <p className="micro-label max-w-md text-stone">
            Colophon. Set in Fraunces & Space Grotesk. Photographs are placeholders,
            awaiting our clients’ work.
          </p>

          <a href="#top" className="micro-label text-stone transition-opacity duration-300 hover:opacity-60">
            Back to the cover ↑
          </a>
        </div>
      </Reveal>
    </footer>
  )
}

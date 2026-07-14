import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Magazine flag, fixed. True white over the hero film; swaps to ink
 * once the hero scrolls out so it stays legible on paper sections.
 */
export default function Masthead() {
  const [open, setOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const io = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px' }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  const tone = overHero ? 'text-white' : 'text-ink'
  const toneSoft = overHero ? 'text-white/70' : 'text-stone'

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div
          className={`flex items-center justify-between px-5 py-5 transition-colors duration-500 md:px-10 md:py-7 ${tone}`}
        >
          <a href="#top" className="pointer-events-auto flex items-center gap-3">
            <img
              src="/assets/velox-mark-paper.png"
              alt=""
              className={`h-5 w-auto brightness-0 transition-[filter] duration-500 ${overHero ? 'invert' : ''}`}
            />
            <span className="micro-label">Velox India</span>
          </a>

          <p className={`micro-label hidden transition-colors duration-500 lg:block ${toneSoft}`}>
            A journal of work · Est. MMXXIII
          </p>

          <nav className="pointer-events-auto hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="micro-label transition-opacity duration-300 hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="micro-label pointer-events-auto md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Mobile overlay — a plain full-ink page, per the direction's stillness */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-6 transition-opacity duration-500 md:hidden"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display border-b py-5 text-4xl text-paper"
              style={{ borderColor: 'var(--rule-paper)' }}
            >
              <span className="ordinal mr-4 text-lg text-paper/50">0{i + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="micro-label mt-12 text-paper/50">Velox India · Est. MMXXIII</p>
      </div>
    </>
  )
}

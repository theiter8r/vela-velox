import { useCallback, useEffect, useRef, useState } from 'react'

/* Katakana + digits — the glyph pool the word churns through mid-swap. */
const GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789'

const pick = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

/**
 * Hover a word and it corrupts, churning through katakana before resolving
 * into its Japanese equivalent — then decodes back on leave.
 *
 * Both readings are rendered as hidden ghosts so the box is always sized to
 * the wider of the two; the animated text is absolutely positioned on top and
 * never moves the line.
 */
export default function GlitchText({ en, ja, className = '' }) {
  const [out, setOut] = useState(en)
  const [glitching, setGlitching] = useState(false)

  const raf = useRef(0)
  const frame = useRef(0)
  const queue = useRef([])
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return () => cancelAnimationFrame(raf.current)
  }, [])

  const run = useCallback((from, to) => {
    if (reduced.current) {
      setOut(to)
      return
    }

    cancelAnimationFrame(raf.current)

    const len = Math.max(from.length, to.length)
    queue.current = Array.from({ length: len }, (_, i) => {
      const start = Math.floor(i * 1.4)
      return {
        from: from[i] || '',
        to: to[i] || '',
        start,
        end: start + 6 + Math.floor(Math.random() * 9),
        char: '',
      }
    })

    frame.current = 0
    setGlitching(true)

    const tick = () => {
      let settled = 0
      let text = ''

      for (const it of queue.current) {
        if (frame.current >= it.end) {
          settled += 1
          text += it.to
        } else if (frame.current >= it.start) {
          if (!it.char || Math.random() < 0.32) it.char = pick()
          text += it.char
        } else {
          text += it.from
        }
      }

      setOut(text)

      if (settled === queue.current.length) {
        setGlitching(false)
        return
      }

      frame.current += 1
      raf.current = requestAnimationFrame(tick)
    }

    tick()
  }, [])

  return (
    <span
      className={`glitch-swap ${className}`}
      data-glitching={glitching}
      onMouseEnter={() => run(en, ja)}
      onMouseLeave={() => run(ja, en)}
      onFocus={() => run(en, ja)}
      onBlur={() => run(ja, en)}
    >
      <span className="gs-ghost" aria-hidden="true">
        {en}
      </span>
      <span className="gs-ghost" aria-hidden="true">
        {ja}
      </span>
      <span className="gs-live" aria-hidden="true" data-text={out}>
        {out}
      </span>
      <span className="sr-only">{en}</span>
    </span>
  )
}

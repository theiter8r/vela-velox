import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Single-element entrance: fade + rise, fired once on scroll-in.
 * The entire motion budget of this direction lives here and in RevealGroup.
 */
export function Reveal({ as: Tag = 'div', children, className = '', delay = 0, y = 24, ...rest }) {
  const el = useRef(null)

  useGSAP(
    () => {
      if (prefersReduced()) return
      gsap.from(el.current, {
        y,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay,
        scrollTrigger: { trigger: el.current, start: 'top 88%', once: true },
      })
    },
    { scope: el }
  )

  return (
    <Tag ref={el} className={className} {...rest}>
      {children}
    </Tag>
  )
}

/**
 * Scroll-scrubbed statement reveal: words sweep from faint to full ink as
 * the paragraph moves up the viewport, reversing when the reader scrolls
 * back. Scrubbed, so the tween is linear — the scroll itself is the ease.
 * Reserve for statement copy — one per section at most.
 */
export function RevealScrub({ as: Tag = 'p', children, className = '', ...rest }) {
  const el = useRef(null)

  useGSAP(
    () => {
      if (prefersReduced()) return
      const split = SplitText.create(el.current, {
        type: 'words',
        autoSplit: true, // re-splits on resize and after fonts load
        onSplit: (self) =>
          gsap.fromTo(
            self.words,
            { opacity: 0.15 },
            {
              opacity: 1,
              duration: 0.6,
              ease: 'none',
              stagger: 0.06,
              scrollTrigger: {
                trigger: el.current,
                start: 'top 82%',
                end: 'top 32%',
                scrub: true,
              },
            }
          ),
      })
      return () => split.revert()
    },
    { scope: el }
  )

  return (
    <Tag ref={el} className={className} {...rest}>
      {children}
    </Tag>
  )
}

/**
 * Staggers all descendants marked [data-reveal] when the group scrolls in.
 */
export function RevealGroup({ as: Tag = 'div', children, className = '', stagger = 0.12, ...rest }) {
  const el = useRef(null)

  useGSAP(
    () => {
      if (prefersReduced()) return
      gsap.from('[data-reveal]', {
        y: 24,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger,
        scrollTrigger: { trigger: el.current, start: 'top 82%', once: true },
      })
    },
    { scope: el }
  )

  return (
    <Tag ref={el} className={className} {...rest}>
      {children}
    </Tag>
  )
}

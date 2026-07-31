import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isTouch = () => window.matchMedia('(hover: none), (pointer: coarse)').matches

/**
 * Fixed white dot that trails the pointer and squashes into an ellipse
 * along the direction of travel — on fast pointer moves and on scroll.
 * Skipped entirely on touch devices and prefers-reduced-motion.
 */
export default function Cursor() {
  const dot = useRef(null)

  useGSAP(() => {
    if (prefersReduced() || isTouch()) return

    document.documentElement.classList.add('cursor-none')

    gsap.set(dot.current, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })

    const xTo = gsap.quickTo(dot.current, 'x', { duration: 0.35, ease: 'power3.out' })
    const yTo = gsap.quickTo(dot.current, 'y', { duration: 0.35, ease: 'power3.out' })
    const sxTo = gsap.quickTo(dot.current, 'scaleX', { duration: 0.4, ease: 'power3.out' })
    const syTo = gsap.quickTo(dot.current, 'scaleY', { duration: 0.4, ease: 'power3.out' })
    const rTo = gsap.quickTo(dot.current, 'rotate', { duration: 0.4, ease: 'power3.out' })

    let lastX = window.innerWidth / 2
    let lastY = window.innerHeight / 2
    let lastMoveT = performance.now()
    let lastScrollY = window.scrollY
    let lastScrollT = performance.now()
    let settleTimer

    const settle = () => {
      sxTo(1)
      syTo(1)
    }

    const deform = (vx, vy) => {
      const speed = Math.min(Math.hypot(vx, vy), 70)
      if (speed < 2) return
      const stretch = 1 + (speed / 70) * 0.9
      const squeeze = 1 - (speed / 70) * 0.35
      rTo(Math.atan2(vy, vx) * (180 / Math.PI))
      sxTo(stretch)
      syTo(squeeze)
      clearTimeout(settleTimer)
      settleTimer = setTimeout(settle, 140)
    }

    const onMove = (e) => {
      const now = performance.now()
      const dt = Math.max(now - lastMoveT, 1)
      const vx = ((e.clientX - lastX) / dt) * 16
      const vy = ((e.clientY - lastY) / dt) * 16
      xTo(e.clientX)
      yTo(e.clientY)
      deform(vx, vy)
      lastX = e.clientX
      lastY = e.clientY
      lastMoveT = now
    }

    const onScroll = () => {
      const now = performance.now()
      const dt = Math.max(now - lastScrollT, 1)
      const vy = ((window.scrollY - lastScrollY) / dt) * 16
      deform(0, vy)
      lastScrollY = window.scrollY
      lastScrollT = now
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      clearTimeout(settleTimer)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [])

  if (prefersReduced() || isTouch()) return null

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] h-4 w-4 rounded-full bg-white will-change-transform"
      style={{ mixBlendMode: 'difference' }}
    />
  )
}

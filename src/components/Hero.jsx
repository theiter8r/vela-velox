import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const HERO_VIDEO =
  './public/assets/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4'

export default function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to('.mask-line > span', {
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.12,
      }).from(
        '.hero-meta',
        { y: 20, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12 },
        '-=0.7'
      )
    },
    { scope: container }
  )

  return (
    <section ref={container} id="top" className="relative h-[100svh] overflow-hidden bg-ink">
      {/* Full-bleed film — the one ambient loop of the page */}
      <video
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Veils only where text sits */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{ background: 'linear-gradient(to top, rgba(22,21,19,0.82), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-28"
        style={{ background: 'linear-gradient(to bottom, rgba(22,21,19,0.45), transparent)' }}
        aria-hidden="true"
      />

      {/* Vertical side rail */}
      <p
        className="micro-label absolute right-5 top-1/2 hidden origin-right -translate-y-1/2 rotate-90 whitespace-nowrap text-white/60 lg:block"
      >
        Issue N° 01 · MMXXVI · Velox India
      </p>

      {/* Headline, bottom-left like a cover line */}
      <div className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-10 md:pb-14">
        <h1 className="font-display max-w-[12ch] text-[clamp(3rem,10vw,8.5rem)] leading-[0.98] tracking-[-0.015em] text-white">
          <span className="mask-line">
            <span>Considered websites,</span>
          </span>
          <span className="mask-line">
            <span>
              built <em>swiftly.</em>
            </span>
          </span>
        </h1>

        <div className="mt-8 flex text-white/80">
          <a href="#work" className="hero-meta micro-label transition-opacity duration-300 hover:opacity-60">
            Begin reading ↓
          </a>
        </div>
      </div>
    </section>
  )
}

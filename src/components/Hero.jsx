import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import GlitchText from './motion/GlitchText'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const HERO_VIDEO = '/silent-temple-rain.3840x2160.mp4'

export default function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (!reduceMotion) {
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

        gsap.to('.hero-parallax', {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: container.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
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
        className="hero-parallax absolute inset-0 h-[130%] w-full object-cover"
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
      

      {/* Headline, bottom-left like a cover line */}
      <div className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-10 md:pb-14">
        <h1 className="font-display max-w-[12ch] text-[clamp(1.5rem,5vw,5rem)] leading-[0.98] tracking-[-0.015em] text-white">
          <span className="mask-line">
            <span>
              <GlitchText en="Considered" ja="考察" />{' '}
              <GlitchText en="websites" ja="ウェブ" />,
            </span>
          </span>
          <span className="mask-line">
            <span>
              <GlitchText en="built" ja="構築" />{' '}
              <em>
                <GlitchText en="swiftly" ja="迅速" />
              </em>
              .
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

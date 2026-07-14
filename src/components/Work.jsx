import { Reveal } from './motion/Reveal'
import SectionHead from './SectionHead'

const PLATES = [
  {
    plate: 'Plate I',
    name: 'Meridian Hotels',
    line: 'A stay that begins on the screen.',
    meta: ['Hospitality', 'MMXXVI', 'Design & build'],
    img: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80',
    alt: 'White arched architecture in strong light',
    span: 'md:col-span-7',
    ratio: 'aspect-[4/3]',
  },
  {
    plate: 'Plate II',
    name: 'Kagaz Press',
    line: 'A publisher’s catalogue, set like one of its books.',
    meta: ['Publishing', 'MMXXV', 'Identity & site'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'A building facade in repeating grids',
    span: 'md:col-span-4 md:col-start-9 md:mt-40',
    ratio: 'aspect-[3/4]',
  },
  {
    plate: 'Plate III',
    name: 'Bombay Greens',
    line: 'Farm produce, sold without a single stock vegetable photo.',
    meta: ['Food & agriculture', 'MMXXV', 'Design & build'],
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Light falling through a green forest canopy',
    span: 'md:col-span-5 md:-mt-16',
    ratio: 'aspect-[3/4]',
  },
  {
    plate: 'Plate IV',
    name: 'Studio Talla',
    line: 'An architect’s portfolio that gets out of the way.',
    meta: ['Architecture', 'MMXXIV', 'Design & build'],
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80',
    alt: 'White concrete building photographed from below',
    span: 'md:col-span-6 md:col-start-7 md:mt-24',
    ratio: 'aspect-[4/3]',
  },
]

function Plate({ plate, name, line, meta, img, alt, span, ratio }) {
  return (
    <Reveal as="figure" className={`col-span-1 ${span}`}>
      <a href="#contact" className="group block">
        <div className={`plate-frame ${ratio} bg-ink/5`}>
          <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover" />
        </div>

        <figcaption className="mt-4">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display text-2xl text-ink">
              <em className="mr-3 text-lg text-stone">{plate}</em>
              {name}
            </p>
            <span
              className="font-display text-xl text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            >
              →
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-soft">{line}</p>
          <p className="micro-label mt-3 border-t border-ink/15 pt-3 text-stone">
            {meta.join('  ·  ')}
          </p>
        </figcaption>
      </a>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-5 py-32 md:px-10 md:py-48">
      <SectionHead
        number="02"
        label="Selected work"
        title={
          <>
            Four plates from <em>recent</em> issues
          </>
        }
        aside="Placeholder photographs stand in for client work while this journal is assembled."
      />

      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-x-8">
        {PLATES.map((p) => (
          <Plate key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}

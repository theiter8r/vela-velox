import { Reveal } from './motion/Reveal'

const QUOTES = [
  {
    text: 'They returned in five weeks with the site we had expected in five months, and it was the better of the two.',
    name: 'A. Mehra',
    role: 'Meridian Hotels',
    span: 'md:col-span-7',
  },
  {
    text: 'Velox argued with us about typography. We are glad they won.',
    name: 'R. Iyer',
    role: 'Kagaz Press',
    span: 'md:col-span-4 md:col-start-9 md:mt-32',
  },
]

export default function ClientWords() {
  return (
    <section className="px-5 py-32 md:px-10 md:py-48">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-12">
        {QUOTES.map((q) => (
          <Reveal as="blockquote" key={q.name} className={`col-span-1 ${q.span}`}>
            <p className="font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.25] text-ink">
              “<em>{q.text}</em>”
            </p>
            <footer className="micro-label mt-6 flex items-center gap-4 text-stone">
              <span className="h-px w-10 bg-ink/15" aria-hidden="true" />
              {q.name} · {q.role}
            </footer>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

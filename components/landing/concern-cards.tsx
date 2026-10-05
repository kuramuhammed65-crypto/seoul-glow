import Image from 'next/image'
import { SectionHeading } from './section-heading'

const concerns = [
  {
    number: '01',
    title: 'Dark Spots & Uneven-Looking Complexion',
    description: 'Traditional-inspired rituals focused on a brighter, more even-looking complexion.',
    image: '/images/concern-dark-spots.png',
    alt: 'Cloudy rice water in a glass bowl beside rice grains',
  },
  {
    number: '02',
    title: 'Dull, Tired-Looking Skin',
    description: 'Simple rituals for when your complexion looks lifeless or exhausted.',
    image: '/images/concern-dull.png',
    alt: 'Matcha green tea powder with a bamboo whisk and fresh leaves',
  },
  {
    number: '03',
    title: 'Dry & Rough-Looking Skin',
    description: 'Comforting rituals focused on softness and hydration.',
    image: '/images/concern-dry.png',
    alt: 'Rolled oats in a ceramic bowl next to a jar of honey',
  },
  {
    number: '04',
    title: 'Your 7-Day Seoul Glow Routine',
    description: 'A simple routine showing you what to use and when.',
    image: '/images/concern-routine.png',
    alt: 'Seven small dishes of natural ingredients arranged in a row',
  },
]

export function ConcernCards() {
  return (
    <section aria-labelledby="concerns-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        id="concerns-title"
        eyebrow="What's inside"
        title="ONE BOOK. FOUR SKIN CONCERNS."
        subtitle="Find the section that matches what you're actually trying to improve."
        className="reveal"
      />

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14">
        {concerns.map((concern) => (
          <li key={concern.number} className="reveal">
            <article className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
                <Image
                  src={concern.image}
                  alt={concern.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline gap-4 border-t border-foreground/80 pt-4">
                <span className="font-serif text-3xl font-medium text-rose">{concern.number}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold uppercase leading-snug tracking-[0.14em]">{concern.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{concern.description}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

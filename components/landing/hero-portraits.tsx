import Image from 'next/image'

const portraits = [
  {
    src: '/images/portrait-grandmother.png',
    alt: 'Portrait of the grandmother, a warm and elegant Korean woman in a cream cardigan',
    label: 'Grandmother',
    position: 'object-[50%_30%]',
  },
  {
    src: '/images/portrait-daughter.png',
    alt: 'Portrait of the daughter, a modern Korean woman in a cream sweater',
    label: 'Daughter',
    position: 'object-[50%_36%]',
  },
]

export function HeroPortraits() {
  return (
    <ul className="flex items-start gap-5 sm:gap-6" aria-label="The grandmother and daughter behind the guide">
      {portraits.map((portrait) => (
        <li key={portrait.label} className="flex flex-col items-center gap-2">
          <div className="rounded-full border border-foreground/80 p-[3px]">
            <div className="relative size-[4.5rem] overflow-hidden rounded-full sm:size-20 lg:size-[5.5rem]">
              <Image
                src={portrait.src || '/placeholder.svg'}
                alt={portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 88px, (min-width: 640px) 80px, 72px"
                className={`object-cover ${portrait.position}`}
              />
            </div>
          </div>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {portrait.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

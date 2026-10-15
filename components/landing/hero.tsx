import { CtaButton } from './cta-button'
import { EbookMockup } from './ebook-mockup'
import { HeroPortraits } from './hero-portraits'

export type HeroVariant = 'general' | 'dull' | 'dark-spots' | 'dry-skin'

const heroCopy: Record<HeroVariant, { headline: string; subheadline: string }> = {
  general: {
    headline: 'Skin that looks tired, dull, or uneven?',
    subheadline:
      '24 Korean-inspired skin rituals sorted by your skin problem. Exact amounts, simple steps, and a 7-day routine so you know what to do each morning.',
  },
  dull: {
    headline: 'Dull, tired skin that no cream fixes?',
    subheadline:
      '24 Korean-inspired skin rituals sorted by your skin problem, with a section just for dull, tired-looking skin. Exact amounts, simple steps, and a 7-day routine.',
  },
  'dark-spots': {
    headline: 'Tired of covering dark spots with makeup?',
    subheadline:
      '24 Korean-inspired skin rituals sorted by your skin problem, with a section just for dark spots and uneven-looking skin. Exact amounts, simple steps, and a 7-day routine.',
  },
  'dry-skin': {
    headline: 'Dry, rough skin that moisturizer never fixes?',
    subheadline:
      '24 Korean-inspired skin rituals sorted by your skin problem, with a section just for dry, rough-looking skin. Exact amounts, simple steps, and a 7-day routine.',
  },
}

export function Hero({ variant = 'general' }: { variant?: HeroVariant }) {
  const copy = heroCopy[variant]

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-blush/70 blur-3xl lg:right-10 lg:top-10 lg:size-[28rem]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="flex flex-col">
          <HeroPortraits />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-rose">
            The $9 Korean-inspired beauty guide
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-serif text-[3.1rem] font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-[5.25rem]"
          >
            {copy.headline}
          </h1>
          <p className="mt-5 max-w-xl font-serif text-[1.45rem] font-medium leading-snug text-foreground/90 text-pretty sm:text-3xl">
            {copy.subheadline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:items-start">
            <CtaButton />
            <p className="text-center text-sm text-muted-foreground sm:text-left">
              Instant digital access <span aria-hidden="true">•</span> 24 rituals <span aria-hidden="true">•</span>{' '}
              7-day routine
            </p>
          </div>
        </div>

          <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[18rem] lg:max-w-[21rem]">
            <EbookMockup priority sizes="(min-width: 1024px) 336px, (min-width: 640px) 288px, 240px" />
          </div>
      </div>
    </section>
  )
}

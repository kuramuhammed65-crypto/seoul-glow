import { CtaButton } from './cta-button'
import { EbookMockup } from './ebook-mockup'

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-blush/70 blur-3xl lg:right-10 lg:top-10 lg:size-[28rem]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-8 sm:px-8 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose">
            The $9 Korean-inspired beauty guide
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-serif text-[3.1rem] font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-[5.25rem]"
          >
            STUBBORN DARK SPOTS?
          </h1>
          <p className="mt-5 font-serif text-[1.45rem] font-medium leading-snug text-foreground/90 text-pretty sm:text-3xl">
            Tired of seeing those dark marks every time you look in the mirror?
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Discover 24 Korean-inspired beauty rituals organized around the skin concerns women struggle with most —
            dark spots, uneven-looking complexion, dullness and dryness.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:items-start">
            <CtaButton />
            <p className="text-center text-sm text-muted-foreground sm:text-left">
              Instant digital access <span aria-hidden="true">•</span> 24 rituals <span aria-hidden="true">•</span>{' '}
              7-day routine
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-[25rem]">
          <EbookMockup priority sizes="(min-width: 1024px) 400px, 300px" />
          <div className="absolute -bottom-5 -right-3 flex size-20 rotate-6 flex-col items-center justify-center rounded-full bg-rose text-primary-foreground shadow-lg sm:-right-6 sm:size-24">
            <span className="font-serif text-3xl font-semibold leading-none sm:text-4xl">$9</span>
            <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em]">Ebook</span>
          </div>
        </div>
      </div>
    </section>
  )
}

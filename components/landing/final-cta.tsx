import { CtaButton } from './cta-button'

export function FinalCta() {
  return (
    <section id="final-cta" data-hide-sticky aria-labelledby="final-cta-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2
          id="final-cta-title"
          className="reveal font-serif text-[2.2rem] font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl"
        >
          READY TO START YOUR SEOUL GLOW ROUTINE?
        </h2>
        <p className="reveal mt-5 text-base text-primary-foreground/75 sm:text-lg">
          24 Korean-inspired rituals. One simple guide. $9.
        </p>
        <div className="reveal mt-9 w-full sm:w-auto">
          <CtaButton tone="light" />
        </div>
        <p className="mt-4 text-sm text-primary-foreground/65">
          Instant digital access <span aria-hidden="true">•</span> Mobile friendly{' '}
          <span aria-hidden="true">•</span> One-time payment
        </p>
      </div>
    </section>
  )
}

import { EbookMockup } from '@/components/landing/ebook-mockup'

export function ProductSummary() {
  return (
    <section
      aria-label="Your order"
      className="flex items-center gap-5 rounded-xl border border-border bg-card p-4 min-[360px]:gap-6 min-[360px]:p-5 lg:flex-col lg:items-stretch lg:gap-10 lg:border-0 lg:bg-transparent lg:p-0"
    >
      <div className="w-24 shrink-0 min-[360px]:w-28 min-[400px]:w-32 lg:mx-auto lg:w-60">
        <EbookMockup priority badgeSize="sm" sizes="(min-width: 1024px) 240px, 128px" />
      </div>

      <div className="min-w-0 lg:text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose">Digital Ebook</p>
        <p className="mt-1.5 font-serif text-lg font-semibold leading-tight tracking-[0.03em] min-[360px]:text-xl min-[400px]:text-2xl lg:text-3xl">
          THE SEOUL GLOW CODE
        </p>
        <p className="mt-1 text-sm leading-snug text-muted-foreground lg:text-base">
          24 Korean-Inspired Beauty Rituals
        </p>
        <p className="mt-3 font-serif text-3xl font-semibold leading-none lg:text-4xl">$9</p>
        <p className="mt-2 text-xs leading-snug text-muted-foreground lg:text-sm">
          Instant digital access after payment.
        </p>
      </div>
    </section>
  )
}

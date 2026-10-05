import { Smartphone, Zap } from 'lucide-react'
import { CtaButton } from './cta-button'
import { EbookMockup } from './ebook-mockup'

export function PurchaseSection() {
  return (
    <section id="purchase" data-hide-sticky aria-labelledby="purchase-title" className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-xl bg-blush/60 ring-1 ring-rose/15">
        <div className="grid gap-10 px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="reveal flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2
              id="purchase-title"
              className="font-serif text-[2rem] font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl"
            >
              YOUR SEOUL GLOW ROUTINE STARTS HERE.
            </h2>
          </div>

          <div className="reveal mx-auto w-full max-w-[16rem] sm:max-w-xs lg:row-span-2 lg:max-w-sm">
            <EbookMockup sizes="(min-width: 1024px) 384px, 256px" />
          </div>

          <div className="reveal flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="font-serif text-2xl font-semibold">The Seoul Glow Code</p>
            <p className="mt-1 text-sm uppercase tracking-[0.16em] text-muted-foreground">
              24 Korean-Inspired Beauty Rituals
            </p>
            <p className="mt-5 flex items-baseline gap-2">
              <span className="font-serif text-6xl font-semibold leading-none">$9</span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </p>
            <div className="mt-7 w-full sm:w-auto">
              <CtaButton />
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <Zap aria-hidden="true" className="size-4 text-rose" />
                <span>
                  <span className="font-semibold text-foreground">Instant digital access</span>
                </span>
              </li>
              <li className="flex items-center justify-center gap-2 lg:justify-start">
                <Smartphone aria-hidden="true" className="size-4 text-rose" />
                Read it on your phone, tablet or computer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { PRODUCT_PRICE } from '@/lib/checkout'
import { CheckoutCTA } from './checkout-cta'
import { TrustIndicators } from './trust-indicators'

export function PurchaseSection() {
  return (
    <section
      aria-labelledby="purchase-title"
      className="rounded-xl border border-border bg-card p-6 shadow-[0_24px_50px_-30px_oklch(0.25_0.022_262/0.35)] sm:p-8"
    >
      <h1
        id="purchase-title"
        className="font-serif text-[1.65rem] font-semibold leading-tight tracking-[0.04em] min-[400px]:text-3xl"
      >
        COMPLETE YOUR PURCHASE
      </h1>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        Get instant access to The Seoul Glow Code.
      </p>

      <div className="mt-6 flex items-baseline justify-between border-y border-border py-4 text-sm">
        <span>The Seoul Glow Code — Digital Ebook</span>
        <span className="font-serif text-2xl font-semibold leading-none">{PRODUCT_PRICE}</span>
      </div>

      <CheckoutCTA className="mt-6" />

      <div className="mt-6">
        <TrustIndicators />
      </div>
    </section>
  )
}

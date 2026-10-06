import type { Metadata } from 'next'
import { CheckoutCTA } from '@/components/checkout/checkout-cta'
import { CheckoutHeader } from '@/components/checkout/checkout-header'
import { Footer } from '@/components/checkout/footer'
import { MiniFAQ } from '@/components/checkout/mini-faq'
import { ProductSummary } from '@/components/checkout/product-summary'
import { PurchaseSection } from '@/components/checkout/purchase-section'

export const metadata: Metadata = {
  title: 'Secure Checkout — The Seoul Glow Code | $9 Ebook',
  description: 'Complete your purchase of The Seoul Glow Code. One-time $9 payment with instant digital access.',
  robots: { index: false },
}

export default function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-6 sm:px-8 lg:pt-14">
        <div className="mx-auto flex max-w-lg flex-col gap-6 lg:grid lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-16">
          <ProductSummary />
          <PurchaseSection />
        </div>

        <section aria-labelledby="reminder-title" className="mx-auto mt-14 max-w-lg text-center lg:mt-20">
          <h2
            id="reminder-title"
            className="text-balance font-serif text-2xl font-semibold leading-tight tracking-[0.04em]"
          >
            READY TO START YOUR SEOUL GLOW ROUTINE?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {'24 Korean-inspired rituals • 4 skin concerns • 1 simple guide'}
          </p>
          <CheckoutCTA className="mt-6" />
        </section>

        <div className="mx-auto mt-14 max-w-lg">
          <MiniFAQ />
        </div>
      </main>
      <Footer />
    </>
  )
}

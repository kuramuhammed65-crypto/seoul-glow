import { Plus } from 'lucide-react'
import { PRODUCT_PRICE } from '@/lib/checkout'

const faqs = [
  {
    q: 'Is this a physical book?',
    a: 'No. The Seoul Glow Code is a digital ebook delivered electronically after purchase.',
  },
  {
    q: 'Can I read it on my phone?',
    a: 'Yes. The ebook is designed to be easy to read on phones, tablets and computers.',
  },
  { q: 'How much does it cost?', a: `The ebook is a one-time ${PRODUCT_PRICE} purchase.` },
  {
    q: 'When will I receive it?',
    a: "You'll receive access after your payment is successfully completed.",
  },
  {
    q: 'Are these medical treatments?',
    a: 'No. The guide contains traditional-inspired cosmetic beauty rituals and is not intended to diagnose, treat or cure medical conditions.',
  },
]

export function MiniFAQ() {
  return (
    <section aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-center font-serif text-2xl font-semibold tracking-[0.04em]">
        Quick questions
      </h2>
      <div className="mt-5 divide-y divide-border border-y border-border">
        {faqs.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                aria-hidden="true"
                className="size-4 shrink-0 text-rose transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

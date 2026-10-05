import { Plus } from 'lucide-react'

const faqs = [
  { q: 'Is this a physical book?', a: 'No. The Seoul Glow Code is a digital ebook.' },
  { q: 'How much does it cost?', a: '$9 one-time payment.' },
  { q: 'Can I read it on my phone?', a: 'Yes. It is designed to be easy to read on mobile.' },
  {
    q: 'What skin concerns does it cover?',
    a: 'Dark spots and uneven-looking complexion, dull/tired-looking skin, and dry/rough-looking skin.',
  },
  {
    q: 'Are these medical treatments?',
    a: 'No. These are traditional-inspired cosmetic beauty rituals. They are not intended to diagnose, treat or cure medical skin conditions.',
  },
  { q: 'How quickly do I receive it?', a: 'Immediately after successful payment.' },
]

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-secondary/70">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
        <h2
          id="faq-title"
          className="reveal text-center font-serif text-[2rem] font-medium leading-[1.08] tracking-tight sm:text-5xl"
        >
          QUESTIONS
        </h2>
        <div className="reveal mt-10 border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-border">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-medium sm:text-lg [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 text-rose transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 pr-8 text-base leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

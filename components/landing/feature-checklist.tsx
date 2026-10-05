import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type ChecklistProps = {
  items: string[]
  className?: string
  columns?: boolean
}

export function Checklist({ items, className, columns = false }: ChecklistProps) {
  return (
    <ul className={cn('flex flex-col', columns && 'sm:grid sm:grid-cols-2 sm:gap-x-10', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 border-b border-border py-4">
          <span
            aria-hidden="true"
            className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blush text-rose"
          >
            <Check className="size-3.5" strokeWidth={2.5} />
          </span>
          <span className="text-base leading-snug sm:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  )
}

const features = [
  '24 Korean-inspired beauty rituals',
  'Dedicated dark-spot & uneven-complexion section',
  'Dull-skin rituals',
  'Dry-skin rituals',
  'Exact ingredient measurements',
  'Step-by-step preparation',
  'How to apply each ritual',
  '7-day Seoul Glow routine',
  'Ingredient guide',
  'Safety & patch-testing guidance',
]

export function FeatureChecklist() {
  return (
    <section aria-labelledby="features-title" className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="reveal flex flex-col items-center gap-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose">A complete system</p>
        <h2
          id="features-title"
          className="font-serif text-[2rem] font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl"
        >
          INSIDE THE SEOUL GLOW CODE
        </h2>
      </div>
      <Checklist items={features} columns className="reveal mt-10 border-t border-border" />
    </section>
  )
}

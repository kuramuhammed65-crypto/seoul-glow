import { Checklist } from './feature-checklist'

const audience = [
  "You're frustrated by dark marks and uneven-looking complexion.",
  'Your skin often looks dull or tired.',
  'Your skin feels dry or rough.',
  'You enjoy simple ingredient-based beauty rituals.',
  'You love Korean skincare and traditional beauty practices.',
  'You want a simple routine instead of an overwhelming 12-step system.',
]

export function WhoItsFor() {
  return (
    <section aria-labelledby="for-you-title" className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <h2
        id="for-you-title"
        className="reveal text-center font-serif text-[2rem] font-medium leading-[1.08] tracking-tight sm:text-5xl"
      >
        THIS IS FOR YOU IF...
      </h2>
      <Checklist items={audience} className="reveal mt-10 border-t border-border" />
    </section>
  )
}

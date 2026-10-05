import { EbookMockup } from './ebook-mockup'
import { SectionHeading } from './section-heading'

type RecipePage = {
  section: string
  page: string
  title: string
  focus: string
  ingredients: string[]
  preparation: string[]
  application: string
  safety: string
}

const pages: RecipePage[] = [
  {
    section: 'Section 01 · Dark Spots & Uneven Tone',
    page: 'p. 14',
    title: 'Rice + Honey Glow Mask',
    focus: 'For a brighter, more even-looking complexion',
    ingredients: ['1 tbsp finely ground rice flour', '1 tsp raw honey', '1–2 tsp cooled rice water'],
    preparation: [
      'Add rice flour to a clean bowl.',
      'Stir in the honey.',
      'Add rice water slowly until a smooth paste forms.',
    ],
    application: 'Apply a thin layer to clean skin, avoiding the eyes. Leave on 10 minutes, rinse with lukewarm water.',
    safety: 'Patch test on your inner arm 24 hours before first use.',
  },
  {
    section: 'Section 02 · Dull, Tired-Looking Skin',
    page: 'p. 31',
    title: 'Green Tea Refresh',
    focus: 'For a fresher, more radiant-looking glow',
    ingredients: ['1 green tea bag', '120 ml freshly boiled water', 'Clean cotton pads'],
    preparation: [
      'Steep the tea bag for 4 minutes.',
      'Remove the bag and let cool completely.',
      'Chill in the fridge for 20 minutes.',
    ],
    application: 'Soak a cotton pad and press gently over the face. Let it absorb, then follow with moisturizer.',
    safety: 'Use within 24 hours. Stop if you notice any irritation.',
  },
  {
    section: 'Section 03 · Dry & Rough-Looking Skin',
    page: 'p. 46',
    title: 'Oat Comfort Ritual',
    focus: 'For softer, more hydrated-looking skin',
    ingredients: ['2 tbsp finely ground oats', '1 tbsp plain yogurt', '1 tsp raw honey'],
    preparation: [
      'Blend oats into a fine powder.',
      'Mix with yogurt and honey.',
      'Rest for 2 minutes to soften.',
    ],
    application: 'Smooth over the face with fingertips. Leave on 10 minutes, then rinse with cool water.',
    safety: 'Avoid if sensitive to dairy or oats. Always patch test first.',
  },
]

function RecipePageCard({ recipe }: { recipe: RecipePage }) {
  return (
    <article className="flex h-full flex-col rounded-sm bg-card p-6 shadow-[0_20px_40px_-24px_oklch(0.25_0.022_262/0.35)] ring-1 ring-border sm:p-7">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-rose">
        <span>{recipe.section}</span>
        <span className="shrink-0 text-muted-foreground">{recipe.page}</span>
      </div>

      <h3 className="mt-5 font-serif text-[1.75rem] font-semibold leading-tight">{recipe.title}</h3>
      <p className="mt-1 text-sm italic text-muted-foreground">{recipe.focus}</p>

      <div className="mt-5">
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">Ingredients</h4>
        <ul className="mt-2 flex flex-col gap-1 text-sm leading-relaxed text-foreground/85">
          {recipe.ingredients.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-rose">
                ·
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">Preparation</h4>
        <ol className="mt-2 flex flex-col gap-1 text-sm leading-relaxed text-foreground/85">
          {recipe.preparation.map((step, index) => (
            <li key={step} className="flex gap-2">
              <span className="font-serif font-semibold text-rose">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-5">
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em]">How to apply</h4>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85">{recipe.application}</p>
      </div>

      <div className="mt-auto pt-5">
        <p className="rounded-sm bg-blush/60 px-3 py-2.5 text-xs leading-relaxed text-foreground/85">
          <span className="font-semibold uppercase tracking-[0.12em]">Safety note · </span>
          {recipe.safety}
        </p>
      </div>
    </article>
  )
}

export function EbookPreview() {
  return (
    <section aria-labelledby="preview-title" className="bg-secondary/70">
      <div className="mx-auto max-w-6xl py-20 sm:py-28">
        <div className="px-5 sm:px-8">
          <SectionHeading id="preview-title" eyebrow="Inside the ebook" title="TAKE A CLOSER LOOK INSIDE" className="reveal" />
          <div className="reveal mx-auto mt-12 w-full max-w-[20rem] sm:max-w-sm">
            <EbookMockup sizes="(min-width: 640px) 384px, 320px" />
          </div>
        </div>

        <div
          role="region"
          aria-label="Sample interior pages"
          tabIndex={0}
          className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 focus-visible:outline-2 sm:scroll-px-8 sm:px-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible"
        >
          {pages.map((recipe) => (
            <div key={recipe.title} className="w-[85%] max-w-sm shrink-0 snap-start lg:w-auto lg:max-w-none">
              <RecipePageCard recipe={recipe} />
            </div>
          ))}
        </div>
        <p className="mt-3 px-5 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground lg:hidden">
          Swipe to see more pages
        </p>

        <p className="reveal mx-auto mt-10 max-w-md px-5 text-center font-serif text-2xl font-medium leading-snug text-balance sm:text-3xl">
          Beautifully designed. Easy to follow. Made to use—not just read.
        </p>
      </div>
    </section>
  )
}

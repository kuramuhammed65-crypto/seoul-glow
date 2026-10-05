import { ArrowDown } from 'lucide-react'
import { Fragment } from 'react'

const steps = ['Find your concern', 'Choose your ritual', 'Follow the recipe', 'Build your routine']

export function ProcessSteps() {
  return (
    <section aria-labelledby="different-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2
          id="different-title"
          className="reveal font-serif text-[2rem] font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl"
        >
          {"YOU DON'T NEED ANOTHER RANDOM SKINCARE HACK."}
        </h2>
        <div className="reveal mx-auto mt-6 flex max-w-md flex-col gap-4 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
          <p>
            Most DIY skincare content gives you one recipe, tells you to try it, and leaves you wondering what to do
            next.
          </p>
          <p className="text-primary-foreground">
            {"The Seoul Glow Code is organized around the problem you're actually trying to solve."}
          </p>
        </div>

        <ol className="mx-auto mt-12 flex max-w-xs flex-col items-center">
          {steps.map((step, index) => (
            <Fragment key={step}>
              <li className="reveal flex w-full items-center gap-4 rounded-md border border-primary-foreground/15 bg-primary-foreground/[0.04] px-5 py-4 text-left">
                <span className="font-serif text-2xl font-medium text-blush">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.16em]">{step}</span>
              </li>
              {index < steps.length - 1 && (
                <li aria-hidden="true" className="py-2 text-blush/70">
                  <ArrowDown className="size-4" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  )
}

import Image from 'next/image'

export function GrandmotherStory() {
  return (
    <section aria-labelledby="story-title" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-md bg-muted">
          <Image
            src="/images/grandmother-daughter.png"
            alt="A Korean grandmother mixing rice powder and honey in a ceramic bowl as her adult daughter watches"
            fill
            sizes="(min-width: 1024px) 50vw, 92vw"
            className="object-cover"
          />
        </div>
        <div className="reveal flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose">Our story</p>
          <h2
            id="story-title"
            className="font-serif text-[1.85rem] font-medium leading-[1.12] tracking-tight text-balance sm:text-[2.6rem]"
          >
            INSPIRED BY THE BEAUTY RITUALS GRANDMA NEVER NEEDED A 12-STEP ROUTINE FOR.
          </h2>
          <span aria-hidden="true" className="h-px w-12 bg-rose" />
          <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            The Seoul Glow Code brings together traditional-inspired Korean beauty rituals built around simple
            ingredients and generations of beauty wisdom—reimagined in a simple guide you can actually follow at home.
          </p>
        </div>
      </div>
    </section>
  )
}

import { SectionHeading } from './section-heading'

const days = [
  'Rice + Honey Glow',
  'Oat Comfort Ritual',
  'Green Tea Refresh',
  'Cucumber + Honey',
  'Mung Bean Ritual',
  'Rice + Green Tea',
  'Your chosen glow ritual',
]

export function SevenDayRoutine() {
  return (
    <section aria-labelledby="routine-title" className="bg-secondary/70">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          id="routine-title"
          eyebrow="Start here"
          title="DON'T KNOW WHERE TO START?"
          subtitle="Start with the 7-Day Seoul Glow Routine."
          className="reveal"
        />

        <ol className="relative mx-auto mt-12 max-w-sm">
          <span aria-hidden="true" className="absolute bottom-6 left-[1.6rem] top-6 w-px bg-rose/30" />
          {days.map((ritual, index) => {
            const isLast = index === days.length - 1
            return (
              <li key={ritual} className="reveal relative flex items-center gap-5 py-3">
                <span
                  className={
                    isLast
                      ? 'relative z-10 flex size-[3.25rem] shrink-0 flex-col items-center justify-center rounded-full bg-rose text-primary-foreground'
                      : 'relative z-10 flex size-[3.25rem] shrink-0 flex-col items-center justify-center rounded-full border border-rose/40 bg-background text-foreground'
                  }
                >
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] opacity-80">Day</span>
                  <span className="font-serif text-xl font-semibold leading-none">{index + 1}</span>
                </span>
                <span className={isLast ? 'font-serif text-xl font-medium italic' : 'font-serif text-xl font-medium'}>
                  {ritual}
                </span>
              </li>
            )
          })}
        </ol>

        <p className="reveal mx-auto mt-10 max-w-sm text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          No complicated 12-step routine. <span className="text-foreground">Just a simple place to start.</span>
        </p>
      </div>
    </section>
  )
}

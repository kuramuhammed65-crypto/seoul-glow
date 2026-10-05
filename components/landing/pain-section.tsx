const painPoints = [
  'Dark marks that seem to linger',
  'A complexion that looks patchy or uneven',
  'Skin that looks dull even after your skincare routine',
  'Dry, rough-looking skin that never seems to feel comfortable',
]

export function PainSection() {
  return (
    <section aria-labelledby="pain-title" className="bg-secondary/70">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
        <h2
          id="pain-title"
          className="reveal text-center font-serif text-[2rem] font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl"
        >
          {"WHEN YOUR SKIN JUST DOESN'T LOOK EVEN"}
        </h2>

        <ul className="mt-10 flex flex-col divide-y divide-border border-y border-border">
          {painPoints.map((point) => (
            <li key={point} className="reveal flex items-start gap-4 py-5">
              <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-rose" />
              <span className="text-lg leading-snug text-foreground sm:text-xl">{point}</span>
            </li>
          ))}
        </ul>

        <p className="reveal mt-10 text-center font-serif text-2xl font-medium italic leading-snug text-rose text-balance sm:text-3xl">
          {"You don't need another random skincare hack."}
        </p>
      </div>
    </section>
  )
}

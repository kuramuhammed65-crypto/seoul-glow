import Image from 'next/image'
import { cn } from '@/lib/utils'

type EbookMockupProps = {
  priority?: boolean
  className?: string
  sizes?: string
}

export function EbookMockup({ priority = false, className, sizes = '(min-width: 1024px) 420px, 80vw' }: EbookMockupProps) {
  return (
    <figure className={cn('@container relative aspect-[3/4] w-full', className)}>
      <div className="absolute inset-0 overflow-hidden rounded-l-sm rounded-r-lg bg-card shadow-[0_30px_60px_-25px_oklch(0.25_0.022_262/0.5),0_12px_24px_-12px_oklch(0.25_0.022_262/0.25)]">
        <Image
          src="/images/cover-art.png"
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />

        {/* the cover art's photo starts ~39cqw down; keep all type above that line */}
        <div className="absolute inset-x-0 top-0 flex flex-col items-center px-[8%] pt-[6cqw] text-center">
          <p className="text-[2.5cqw] font-semibold uppercase tracking-[0.28em] text-rose">
            From grandmother to daughter
          </p>
          <p className="mt-[2cqw] font-serif text-[10.5cqw] font-semibold leading-[0.92] tracking-tight text-foreground">
            THE SEOUL
            <br />
            GLOW CODE
          </p>
          <p className="mt-[2.5cqw] text-[2.8cqw] font-medium uppercase tracking-[0.2em] text-foreground/80">
            24 Korean-Inspired Beauty Rituals
          </p>
        </div>

        {/* spine shading + inner edge so the cover reads as a physical book */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black/15 via-white/20 to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-0 rounded-r-lg ring-1 ring-inset ring-black/5" />
      </div>
      <figcaption className="sr-only">
        The Seoul Glow Code ebook cover: 24 Korean-Inspired Beauty Rituals, featuring rice, honey, green tea and camellia
        blossoms.
      </figcaption>
    </figure>
  )
}

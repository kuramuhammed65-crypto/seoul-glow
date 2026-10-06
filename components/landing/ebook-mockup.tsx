import Image from 'next/image'
import { cn } from '@/lib/utils'

type EbookMockupProps = {
  priority?: boolean
  className?: string
  sizes?: string
  showPriceBadge?: boolean
  badgeSize?: 'md' | 'sm'
}

export function EbookMockup({
  priority = false,
  className,
  sizes = '(min-width: 1024px) 340px, 70vw',
  showPriceBadge = true,
  badgeSize = 'md',
}: EbookMockupProps) {
  return (
    <figure className={cn('relative aspect-[937/1678] w-full', className)}>
      <div className="absolute inset-0 overflow-hidden rounded-l-sm rounded-r-lg bg-card shadow-[0_30px_60px_-25px_oklch(0.25_0.022_262/0.5),0_12px_24px_-12px_oklch(0.25_0.022_262/0.25)]">
        <Image
          src="/images/book-cover.png"
          alt=""
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />

        {/* spine shading + inner edge so the cover reads as a physical book */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black/20 via-white/25 to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-0 rounded-r-lg ring-1 ring-inset ring-black/5" />
      </div>

      {showPriceBadge && (
        <div
          aria-hidden="true"
          className={cn(
            'absolute flex rotate-6 flex-col items-center justify-center rounded-full bg-rose text-primary-foreground shadow-lg',
            badgeSize === 'md' && '-bottom-5 -right-3 size-20 sm:-right-6 sm:size-24',
            badgeSize === 'sm' && '-bottom-3 -right-3 size-14 lg:-bottom-5 lg:-right-6 lg:size-24',
          )}
        >
          <span
            className={cn(
              'font-serif font-semibold leading-none',
              badgeSize === 'md' && 'text-3xl sm:text-4xl',
              badgeSize === 'sm' && 'text-2xl lg:text-4xl',
            )}
          >
            $9
          </span>
          <span
            className={cn(
              'font-semibold uppercase',
              badgeSize === 'md' && 'mt-0.5 text-[0.6rem] tracking-[0.15em]',
              badgeSize === 'sm' && 'text-[0.5rem] tracking-[0.12em] lg:mt-0.5 lg:text-[0.6rem] lg:tracking-[0.15em]',
            )}
          >
            Ebook
          </span>
        </div>
      )}

      <figcaption className="sr-only">
        The Seoul Glow Code ebook cover: Korean-inspired beauty rituals for dark spots, uneven tone, dull skin and dry
        skin. $9 ebook.
      </figcaption>
    </figure>
  )
}

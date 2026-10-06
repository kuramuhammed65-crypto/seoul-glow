import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const CHECKOUT_PAGE_PATH = '/checkout'
export const PRIMARY_CTA_LABEL = 'GET THE SEOUL GLOW CODE — $9'

type CtaButtonProps = {
  size?: 'lg' | 'sm'
  tone?: 'dark' | 'light'
  label?: string
  className?: string
  showArrow?: boolean
}

export function CtaButton({
  size = 'lg',
  tone = 'dark',
  label = PRIMARY_CTA_LABEL,
  className,
  showArrow = size === 'lg',
}: CtaButtonProps) {
  return (
    <Link
      href={CHECKOUT_PAGE_PATH}
      className={cn(
        'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose active:scale-[0.98]',
        size === 'lg' &&
          'min-h-15 w-full px-5 py-4 text-sm tracking-[0.04em] shadow-[0_10px_30px_-12px_oklch(0.25_0.022_262/0.55)] min-[400px]:text-[15px] sm:w-auto sm:px-10 sm:tracking-[0.08em]',
        size === 'sm' && 'tracking-[0.08em]',
        size === 'sm' && 'min-h-10 px-4 py-2 text-xs',
        tone === 'dark' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        tone === 'light' && 'bg-background text-foreground hover:bg-card',
        className,
      )}
    >
      <span>{label}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  )
}

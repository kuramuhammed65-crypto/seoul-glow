import { ArrowRight } from 'lucide-react'
import { CHECKOUT_CTA_LABEL, CHECKOUT_URL } from '@/lib/checkout'
import { cn } from '@/lib/utils'

export function CheckoutCTA({ className }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      rel="noopener"
      className={cn(
        'group flex min-h-15 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-rose px-4 py-4 font-sans text-[13px] font-semibold tracking-[0.03em] text-primary-foreground shadow-[0_12px_28px_-14px_oklch(0.56_0.08_18/0.8)] transition-all duration-200 hover:bg-rose/90 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-rose active:scale-[0.98] min-[360px]:text-sm min-[400px]:px-6 min-[400px]:text-[15px] min-[400px]:tracking-[0.06em]',
        className,
      )}
    >
      <span>{CHECKOUT_CTA_LABEL}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  )
}

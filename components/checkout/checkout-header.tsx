import Link from 'next/link'
import { Lock } from 'lucide-react'

export function CheckoutHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 py-4 text-center">
        <Link href="/" className="font-serif text-lg font-semibold tracking-[0.08em] sm:text-xl">
          THE SEOUL GLOW CODE
        </Link>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          <Lock aria-hidden="true" className="size-3" />
          Secure checkout
        </p>
      </div>
    </header>
  )
}

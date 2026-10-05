import Link from 'next/link'
import { CtaButton } from './cta-button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <Link href="/" className="font-serif text-base font-semibold tracking-[0.08em] min-[380px]:text-lg sm:text-xl">
          THE SEOUL GLOW CODE
        </Link>
        <CtaButton size="sm" label="GET IT — $9" />
      </div>
    </header>
  )
}

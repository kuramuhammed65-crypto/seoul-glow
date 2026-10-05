import Link from 'next/link'

const links = [
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
]

export function SiteFooter() {
  return (
    <footer data-hide-sticky className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center sm:px-8">
        <div>
          <p className="font-serif text-lg font-semibold tracking-[0.08em]">THE SEOUL GLOW CODE</p>
          <p className="mt-1 text-sm text-muted-foreground">Korean-inspired beauty rituals for modern routines.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-1 hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          These are cosmetic beauty rituals and are not intended to diagnose, treat or cure any medical skin condition.
          Always patch test before use.
        </p>
      </div>
    </footer>
  )
}

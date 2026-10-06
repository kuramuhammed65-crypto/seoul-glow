import Link from 'next/link'

const links = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-10 text-center">
        <div>
          <p className="font-serif text-base font-semibold tracking-[0.08em]">THE SEOUL GLOW CODE</p>
          <p className="mt-1 text-sm text-muted-foreground">Korean-inspired beauty rituals for modern routines.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-1 hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

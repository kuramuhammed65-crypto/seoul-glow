'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { CtaButton } from './cta-button'

export function StickyMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    const hideZones = Array.from(document.querySelectorAll('[data-hide-sticky]'))
    if (!hero) return

    let heroVisible = true
    const visibleZones = new Set<Element>()
    const update = () => setVisible(!heroVisible && visibleZones.size === 0)

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) {
          heroVisible = entry.isIntersecting
        } else if (entry.isIntersecting) {
          visibleZones.add(entry.target)
        } else {
          visibleZones.delete(entry.target)
        }
      }
      update()
    })

    observer.observe(hero)
    hideZones.forEach((zone) => observer.observe(zone))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_oklch(0.25_0.022_262/0.25)] backdrop-blur-md transition-transform duration-300 md:hidden',
        visible ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <div className="flex items-center justify-between gap-3 px-5 py-3">
        <p className="text-sm leading-tight">
          <span className="font-serif text-base font-semibold">The Seoul Glow Code</span>
          <span className="text-muted-foreground"> — </span>
          <span className="font-semibold">$9</span>
        </p>
        <CtaButton size="sm" label="GET IT" className="min-h-11 px-6 text-sm" />
      </div>
    </div>
  )
}

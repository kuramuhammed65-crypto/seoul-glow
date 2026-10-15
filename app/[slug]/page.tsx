import { notFound } from 'next/navigation'
import { LandingPage } from '@/app/page'
import type { HeroVariant } from '@/components/landing/hero'

const variants = new Set<HeroVariant>(['dull', 'dark-spots', 'dry-skin'])

export default async function ConcernPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!variants.has(slug as HeroVariant)) {
    notFound()
  }

  return <LandingPage heroVariant={slug as HeroVariant} />
}

export function generateStaticParams() {
  return Array.from(variants, (slug) => ({ slug }))
}

export const dynamicParams = false

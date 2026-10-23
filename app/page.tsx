import { ConcernCards } from '@/components/landing/concern-cards'
import { EbookPreview } from '@/components/landing/ebook-preview'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'
import { GrandmotherStory } from '@/components/landing/grandmother-story'
import { Hero, type HeroVariant } from '@/components/landing/hero'
import { PainSection } from '@/components/landing/pain-section'
import { PurchaseSection } from '@/components/landing/purchase-section'
import { SevenDayRoutine } from '@/components/landing/seven-day-routine'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'
import { StickyMobileCta } from '@/components/landing/sticky-mobile-cta'

export function LandingPage({ heroVariant = 'general' }: { heroVariant?: HeroVariant }) {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero variant={heroVariant} />
        <PainSection />
        <ConcernCards />
        <EbookPreview />
        <GrandmotherStory />
        <SevenDayRoutine />
        <PurchaseSection />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  )
}

export default function Page() {
  return <LandingPage />
}


import { ConcernCards } from '@/components/landing/concern-cards'
import { EbookPreview } from '@/components/landing/ebook-preview'
import { Faq } from '@/components/landing/faq'
import { FeatureChecklist } from '@/components/landing/feature-checklist'
import { FinalCta } from '@/components/landing/final-cta'
import { GrandmotherStory } from '@/components/landing/grandmother-story'
import { Hero } from '@/components/landing/hero'
import { PainSection } from '@/components/landing/pain-section'
import { ProcessSteps } from '@/components/landing/process-steps'
import { PurchaseSection } from '@/components/landing/purchase-section'
import { SevenDayRoutine } from '@/components/landing/seven-day-routine'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'
import { StickyMobileCta } from '@/components/landing/sticky-mobile-cta'
import { WhoItsFor } from '@/components/landing/who-its-for'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PainSection />
        <ConcernCards />
        <EbookPreview />
        <FeatureChecklist />
        <ProcessSteps />
        <GrandmotherStory />
        <SevenDayRoutine />
        <WhoItsFor />
        <PurchaseSection />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  )
}

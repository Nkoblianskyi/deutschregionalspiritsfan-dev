import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutContent } from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'Ueber uns - Deutsch Regional Spirits Fan',
  description: 'Erfahren Sie mehr ueber den Deutsch Regional Spirits Fan Blog und unser Engagement fuer regionale deutsche Destillate und Brenntraditionen.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  )
}

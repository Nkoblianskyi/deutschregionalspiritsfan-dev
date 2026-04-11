import type { Metadata } from 'next'
import { BrauereiHero } from '@/components/brauereien/BrauereiHero'
import { BrauereiContent } from '@/components/brauereien/BrauereiContent'

export const metadata: Metadata = {
  title: 'Brauereien und Pubs - Deutsch Regional Spirits Fan',
  description: 'Entdecken Sie die Welt der deutschen Brauereien, traditionellen Pubs und regionalen Biere. Kultige Braustaetten von Bayern bis Nordsee.',
}

export default function BrauereiPage() {
  return (
    <>
      <BrauereiHero />
      <BrauereiContent />
    </>
  )
}

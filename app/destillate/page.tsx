import type { Metadata } from 'next'
import { DestillateHero } from '@/components/destillate/DestillateHero'
import { DestillateArticle } from '@/components/destillate/DestillateArticle'

export const metadata: Metadata = {
  title: 'Destillate - Deutsch Regional Spirits Fan',
  description: 'Regionale deutsche Destillate im Ueberblick. Frucht- und Getreidebrennte bis 50 % Vol., von der Schwarzwaelder Kirsche bis zum norddeutschen Korn.',
}

export default function DestilatePage() {
  return (
    <>
      <DestillateHero />
      <DestillateArticle />
    </>
  )
}

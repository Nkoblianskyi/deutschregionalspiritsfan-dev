import { HomeHero } from '@/components/home/HomeHero'
import { FeaturedSpirit } from '@/components/home/FeaturedSpirit'
import { DestillateInfo } from '@/components/home/DestillateInfo'
import { BreweryTeaser } from '@/components/home/BreweryTeaser'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedSpirit />
      <DestillateInfo />
      <BreweryTeaser />
    </>
  )
}

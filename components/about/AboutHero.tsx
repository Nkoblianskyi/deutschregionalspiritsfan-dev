import Image from 'next/image'
import { AgeDisclaimer } from '@/components/shared/AgeDisclaimer'

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-16">
      <Image
        src="/images/about-blog.jpg"
        alt="Ueber den Deutsch Regional Spirits Fan Blog"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Ueber uns
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-foreground mb-6 text-balance leading-tight max-w-3xl">
          Unser Blog ueber deutsche Destillate
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed mb-6">
          Wir sind Liebhaber regionaler deutscher Spirituosen und teilen unser Wissen
          uber Terroir, Tradition und Geschmack der deutschen Destillationskultur.
        </p>
        <AgeDisclaimer />
      </div>
    </section>
  )
}

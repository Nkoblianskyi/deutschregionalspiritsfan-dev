import Image from 'next/image'
import { AgeDisclaimer } from '@/components/shared/AgeDisclaimer'

export function BrauereiHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-16">
      <Image
        src="/images/brauerei-hero.jpg"
        alt="Traditionelle deutsche Brauerei und Pub-Atmosphaere"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
          Brauereien und Lokale
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-foreground mb-6 text-balance leading-tight max-w-4xl">
          Pubs und Brauereien Deutschlands
        </h1>
        <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed mb-6">
          Regionale Pubs, Gasthaeuser und Brauereien sind die lebendige Buhne der deutschen
          Trinkkultur. Hier beschreiben wir <strong className="text-foreground font-semibold">Stile und
          Traditionen</strong>, nicht einzelne Marken oder Logos. Diese Website{' '}
          <strong className="text-foreground font-semibold">verkauft keinen Alkohol</strong>.
        </p>
        <AgeDisclaimer />
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { BeerCultureIntro } from '@/components/home/BeerCultureIntro'

/** Generische Beispiele ohne Markennamen — nur Region, Stil und Spirituosen-Kontext. */
const regionalHighlights = [
  {
    title: 'Obstbrand & Gaststuben',
    region: 'Baden-Wuerttemberg',
    detail: 'Kirschwasser und Obstbraende neben lokalen Biersorten in Wirtshaeusern',
    note: 'Spirituosen bis 50 % Vol. · Bier deutlich darunter',
  },
  {
    title: 'Getreidebrand & Braukultur',
    region: 'Bayern',
    detail: 'Weizen- und Hellesbier-Stile; dazu traditionelle Getreide- und Steinobstbraende',
    note: 'typ. Bier 4,5–6 % Vol.',
  },
  {
    title: 'Rheinische Stuben',
    region: 'Nordrhein-Westfalen',
    detail: 'Altbier-Stil und koelschaehnliche obergaerige Biere; lokale Spirituosen im Ausschank',
    note: 'Bier typ. unter 5,5 % Vol.',
  },
]

export function BreweryTeaser() {
  return (
    <section className="py-24 bg-[oklch(0.08_0.006_45)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Brauereien und Pubs
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-balance leading-snug">
              Die Staetten der deutschen Brau- und Brennkultur
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
              Regionale Pubs und Brauereien sind das lebendige Herz der deutschen
              Trinkkultur. Hier trifft Handwerk auf Gesellschaft; klassische{' '}
              <strong className="text-foreground font-semibold">Bierstile</strong> (ohne Schwerpunkt auf
              Markenlogos) leben neben lokalen Spirituosen. Kein hier typisches Bier erreicht den Alkoholgehalt
              hochprozentiger Braende; unsere Destillat-Themen bleiben bis 50 % Vol.
            </p>
            <Link
              href="/brauereien"
              className="self-start font-mono text-xs tracking-widest uppercase px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>

        <BeerCultureIntro />

        <div className="relative aspect-video overflow-hidden mb-12">
          <Image
            src="/images/brauerei-hero.jpg"
            alt="Traditionelle deutsche Brauerei und Pub-Kultur"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        <div className="border-t border-border/40">
          {regionalHighlights.map((row, index) => (
            <div
              key={row.title}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-b border-border/40 hover:bg-secondary/20 transition-colors duration-200 px-4"
            >
              <div className="flex items-center gap-4">
                <span className="font-serif text-3xl font-light text-border">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground">{row.title}</h3>
              </div>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest flex items-center">
                {row.region}
              </p>
              <p className="font-mono text-xs text-muted-foreground flex items-center leading-relaxed">
                {row.detail}
              </p>
              <p className="font-mono text-xs text-primary font-semibold flex items-center justify-end text-right">
                {row.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

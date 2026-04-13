import Image from 'next/image'
import Link from 'next/link'
import { AgeDisclaimer } from '@/components/shared/AgeDisclaimer'

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-spirits.jpg"
        alt="Regionale deutsche Destillate und Brennereien"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[oklch(0.08_0.006_45)]/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40 text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
          Deutsch Regional Spirits Fan
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 text-balance leading-tight">
          Regionale Destillate
          <span className="block font-semibold text-primary">aus deutschen Landen</span>
        </h1>
        <p className="font-mono text-sm md:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8">
          Wie das Terroir der deutschen Regionen den Geschmack von Frucht- und Getreidebrennatem formt — und wie
          klassische <strong className="text-foreground/90 font-semibold">Bierstile</strong> ohne Markenlogos zur
          Kultur von Stuben und Brauhandwerk gehoeren. Heimische Destillate bis 50 % Vol., dazu reines
          Lese- und Kulturwissen; kein Alkoholverkauf.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            href="/destillate"
            className="font-mono text-xs tracking-widest uppercase px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            Destillate entdecken
          </Link>
          <Link
            href="/brauereien"
            className="font-mono text-xs tracking-widest uppercase px-8 py-3.5 border border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Brauereien und Pubs
          </Link>
        </div>

        <AgeDisclaimer />
      </div>
    </section>
  )
}

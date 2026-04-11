import Image from 'next/image'
import Link from 'next/link'

export function FeaturedSpirit() {
  return (
    <section className="py-24 bg-[oklch(0.08_0.006_45)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/schwarzwald-schnapps.jpg"
              alt="Schwarzwaelder Kirschwasser, das staerkste Destillat auf dieser Website"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6">
              <div className="bg-primary px-4 py-2">
                <span className="font-mono text-xs tracking-widest uppercase text-primary-foreground font-semibold">
                  Staerkstes Destillat
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Empfehlung der Redaktion
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance leading-snug">
              Schwarzwaelder Kirschwasser
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <div className="border border-primary/60 px-4 py-2">
                <span className="font-serif text-3xl font-bold text-primary">50 % Vol.</span>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Alkoholgehalt</p>
                <p className="font-mono text-xs text-primary font-semibold tracking-wide">Maximale Staerke auf dieser Website</p>
              </div>
            </div>

            <div className="border-l-2 border-primary/40 pl-6 mb-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Staerkstes Destillat auf unserem Blog</p>
              <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                Kein Destillat auf dieser Website uberschreitet die 50 % Vol. des
                Schwarzwaelder Kirschwassers. Dieser klassische Obstbrand aus reifen Schwarzwaelder
                Kirschen vereint jahrhundertealte Brenntradition mit dem einzigartigen
                Terroir des Schwarzwaldes.
              </p>
            </div>

            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
              Hergestellt aus naturbelassenen Suesskirschen aus Hochlagen des Schwarzwaldes,
              vergoren und doppelt gebrannt in kleinen Kupferblasen. Das Ergebnis ist ein
              klarer, aromatisch komplexer Brand mit feinen Mandel- und Kirschnoten,
              zartem Bittermandel-Finish und einer Praesenz, die von der bergigen
              Herkunft seiner Fruechte erzaehlt. Alle Informationen auf diesem Blog
              dienen ausschliesslich der Wissensvermittlung.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border border-border/60 p-4 text-center">
                <p className="font-serif text-xl font-semibold text-primary">50 %</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mt-1">Vol.</p>
              </div>
              <div className="border border-border/60 p-4 text-center">
                <p className="font-serif text-xl font-semibold text-foreground">Schwarzwald</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mt-1">Herkunft</p>
              </div>
              <div className="border border-border/60 p-4 text-center">
                <p className="font-serif text-xl font-semibold text-foreground">Frucht</p>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mt-1">Kategorie</p>
              </div>
            </div>

            <Link
              href="/destillate"
              className="self-start font-mono text-xs tracking-widest uppercase px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              Zum Artikel uber Destillate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

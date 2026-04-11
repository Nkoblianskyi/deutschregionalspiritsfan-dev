import Link from 'next/link'
import Image from 'next/image'

const facts = [
  {
    title: 'Obstbrennerei',
    text: 'Die deutschen Obstbrennereien verarbeiten Kirschen, Zwetschgen, Mirabellen, Aepfel und Birnen zu feinen Geistbrennatem. Das Klima und der Boden der jeweiligen Region pragen das unverwechselbare Aromaprofil.',
  },
  {
    title: 'Getreidedestillat',
    text: 'Aus Roggen, Gerste und Weizen entstehen in deutschen Brennereien charakterstarke Kornbraende und Whisky-ahnliche Destillate, die die mineralischen Eigenschaften der Boeden widerspiegeln.',
  },
  {
    title: 'Terroir und Herkunft',
    text: 'Wie beim Wein entscheiden Hoehenlage, Boden, Klima und Sorte ueber den Charakter eines Destillats. Schwarzwaelder Kirschen schmecken anders als Frankenkirschen und dieser Unterschied spiegelt sich im Brand.',
  },
  {
    title: 'Tradition und Handwerk',
    text: 'Viele deutsche Brennereien fuehren ihre Tradition uber mehrere Generationen fort. Kleine Kupferbrennanlagen, sorgfaeltige Auswahl der Rohstoffe und geduldige Reifung sind die Grundlage hochwertiger Destillate.',
  },
]

export function DestillateInfo() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Wissenswertes</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance leading-snug">
              Die Welt der deutschen Destillate
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
              Deutschland besitzt eine der reichsten Brenntraditionen Europas. Von den
              Obstgaerten des Schwarzwaldes bis zu den Getreidefeldern Norddeutschlands
              entstehen Destillate von unglaublicher Vielfalt und Qualitaet.
            </p>
            <Link
              href="/destillate"
              className="inline-block font-mono text-xs tracking-widest uppercase px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              Alle Artikel lesen
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/40">
            {facts.map((fact) => (
              <div
                key={fact.title}
                className="bg-card p-8 flex flex-col gap-4 hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="w-8 h-0.5 bg-primary" />
                <h3 className="font-serif text-xl font-semibold text-foreground">{fact.title}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative overflow-hidden">
          <div className="relative aspect-[21/7] overflow-hidden">
            <Image
              src="/images/terroir-map.jpg"
              alt="Deutsche Destillat-Regionen und ihr Terroir"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/50" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Terroir</p>
                <h3 className="font-serif text-3xl md:text-5xl font-light text-foreground text-balance">
                  Jede Region hat ihren eigenen Charakter
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

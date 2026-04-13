import { ContactForm } from './ContactForm'

const values = [
  {
    title: 'Leidenschaft fur Terroir',
    text: 'Wir glauben, dass das Beste in einer Flasche aus der Erde, dem Klima und der Pflege des Brenners entsteht. Regionale Herkunft ist unser Ausgangspunkt.',
  },
  {
    title: 'Unabhaengige Stimme',
    text: 'Unser Blog ist unabhaengig. Keine kommerziellen Kooperationen beeinflussen unsere Berichte. Wir schreiben, was wir wirklich denken und schmecken.',
  },
  {
    title: 'Respekt vor der Tradition',
    text: 'Deutsche Brenntraditionen reichen Jahrhunderte zurueck. Wir ehren dieses Erbe und machen es fuer ein modernes Publikum verstandlich und zugaenglich.',
  },
  {
    title: 'Verantwortungsvoller Genuss',
    text: 'Alkohol gehort zum Genuss mit Mass. Wir berichten uber Geschmack und Herkunft und betonen stets den verantwortungsvollen Umgang mit Hochprozentigem.',
  },
]

export function AboutContent() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Unsere Geschichte</p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance leading-snug">
              Was ist Deutsch Regional Spirits Fan?
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
              Deutsch Regional Spirits Fan ist ein unabhaengiges Editorial-Blog, das sich der
              Welt der regionalen deutschen Destillate und — ergaenzend — der{' '}
              <strong className="text-foreground font-semibold">Bierkultur als Stil- und Regionalthema</strong>{' '}
              widmet, stets <strong className="text-foreground font-semibold">ohne kommerzielle Marken oder Logos</strong>{' '}
              bei Bier. Entstanden aus einer tiefen Faszination fuer Brennerei- und Brauhandwerk sowie die
              geografische Vielfalt Deutschlands, beleuchten wir, wie Terroir und Tradition den Charakter von
              Destillaten und typischen Bierstilen formen.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground font-semibold">Wir betreiben keinen Verkauf von Alkohol:</strong>{' '}
              Es gibt weder Shop noch Bestellabwicklung; wir versenden und vermitteln keine alkoholischen
              Getraenke. Der Blog dient ausschliesslich der Information und dem kulturellen Austausch.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
              Unser Fokus liegt auf Frucht- und Getreidedestillaten bis maximal 50 % Vol.
              Wir beschreiben keine Destillate, die uber diesen Wert hinausgehen, denn wir
              glauben, dass sich in diesem Bereich die spannendsten und authentischsten
              Charaktere der deutschen Brennkunst verbergen. Dieser Blog verfolgt
              ausschliesslich informativen Charakter.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Von den Schwarzwaelder Kirschen bis zu den Weizenbrennatem der Norddeutschen
              Tiefebene kartieren wir eine geschmackliche Landschaft, die viele noch nicht
              vollstandig erkundet haben.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/40">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-8 flex flex-col gap-4">
                <div className="w-8 h-0.5 bg-primary" />
                <h3 className="font-serif text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/40 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Kontakt</p>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance leading-snug">
                Schreiben Sie uns
              </h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                Haben Sie Fragen zu unseren Artikeln, Anregungen fuer neue Themen
                oder Erfahrungen mit regionalen Destillaten, die Sie teilen mochten?
                Wir freuen uns auf Ihre Nachricht.
              </p>
              <div className="border border-border/40 p-6 bg-card">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">E-Mail</p>
                <a
                  href="mailto:info@deutschregionalspiritsfan.com"
                  className="font-serif text-lg text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  info@deutschregionalspiritsfan.com
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

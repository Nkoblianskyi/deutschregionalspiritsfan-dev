import Image from 'next/image'

const spirits = [
  {
    name: 'Schwarzwaelder Kirschwasser',
    region: 'Schwarzwald, Baden-Wuerttemberg',
    category: 'Obstbrand',
    abv: '50 % Vol.',
    highlight: true,
    description:
      'Das Flaggschiff der deutschen Obstbrennerei. Aus reifen Schwarzwaelder Kirschen vergoren und doppelt gebrannt, entsteht ein klarer, intensiv duftender Brand mit Mandel- und Kirscharomen. Die hohe Lage der Obstgaerten und das feuchte Bergklima verleihen den Fruechten eine besondere Tiefe. Mit 50 % Vol. ist er das staerkste Destillat auf diesem Blog.',
  },
  {
    name: 'Bayerischer Zwetschgenbrand',
    region: 'Bayern',
    category: 'Obstbrand',
    abv: '43 % Vol.',
    highlight: false,
    description:
      'Die suddeutschen Zwetschgenbrenner nutzen die aromenreichen spaeten Zwetschgensorten aus dem Altmuhltal und dem Frankenland. Das Ergebnis ist ein vollmundiger, leicht suesslicher Brand mit pflaumenartigen Nuancen, der das warme Klima der Region widerspiegelt.',
  },
  {
    name: 'Frankenfeuer Williamsbirne',
    region: 'Franken, Bayern',
    category: 'Obstbrand',
    abv: '40 % Vol.',
    highlight: false,
    description:
      'Der Birnenbrand aus dem Frankenland gilt als Referenzprodukt dieser Kategorie. Williams-Christ-Birnen, geerntet in optimaler Reife aus den Streuobstwiesen Frankens, ergeben einen eleganten, blumigen Destillat mit feinen Birnenaromen und einer langen Frische.',
  },
  {
    name: 'Norddeutscher Kornbrand',
    region: 'Norddeutschland',
    category: 'Getreidebrand',
    abv: '38 % Vol.',
    highlight: false,
    description:
      'Der traditionelle Kornbrand aus norddeutschem Weizen oder Roggen ist eines der aeltesten deutschen Destillate. Mild und klar, spiegelt er die weiten Getreidelandschaften des Nordens wider. Ein Getreidegeschmack von subtiler Eleganz, haufig ungelagert und naturrein.',
  },
  {
    name: 'Schwarzwaelder Mirabellenbrand',
    region: 'Schwarzwald, Baden-Wuerttemberg',
    category: 'Obstbrand',
    abv: '42 % Vol.',
    highlight: false,
    description:
      'Mirabellen aus den Hochlagen des noerdlichen Schwarzwaldes liefern ein aussergewoehnlich aromatisches Destillat. Der feine Goldgelbton der Fruechte ubertraegt sich in zarte Honig- und Blumentone, die von einem seidigen Abgang begleitet werden.',
  },
  {
    name: 'Rheinlaender Traubentresterbrand',
    region: 'Rheinland-Pfalz',
    category: 'Trester',
    abv: '40 % Vol.',
    highlight: false,
    description:
      'Aus den Trestern der Rheinland-Pfalz-Weinlese werden kraftige Traubenbrennate gewonnen. Erdig, warm und mit einem Hauch Weincharakter verbinden diese Destillate die Brennkunst mit der Winzerkultur des Rheinlandes.',
  },
]

export function DestillateArticle() {
  return (
    <article className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Was macht ein deutsches Destillat besonders?
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
            Die deutsche Brenntradition ist eng mit der Landschaft verwurzelt. Ob Schwarzwaelder
            Kirschen, Frankische Zwetschgen oder norddeutscher Roggen: Jede Region bringt
            Rohstoffe mit ganz eigenem Charakter hervor. Die Kombination aus Boden, Klima,
            Sorte und Handwerk ergibt eine geschmackliche Vielfalt, die weltweit ihresgleichen sucht.
          </p>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
            Deutsche Brenner arbeiten uberwiegend mit kleinen Kupferbrennanlagen, einer
            doppelten Destillation und einem sorgfaltigen Schnitt von Vorlauf, Mittellauf
            und Nachlauf. Dieser aufwandige Prozess sorgt fur Reinheit und Aroma-Tiefe.
            Die Alkoholstarken bewegen sich meist zwischen 38 % und 50 % Vol.
          </p>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Im folgenden stellen wir Ihnen eine Auswahl regionaler Destillate vor, beginnend
            mit dem staerksten und charakterstarken auf dieser Website: dem
            Schwarzwaelder Kirschwasser mit 50 % Vol.
          </p>
        </div>

        <div className="border border-border/40 mb-12 p-6 flex items-start gap-4 bg-card">
          <div className="w-1 self-stretch bg-primary shrink-0" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Hinweis zur Alkoholstarke</p>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Das staerkste Destillat auf dieser Website ist der Schwarzwaelder Kirschwasser
              mit 50 % Vol. Kein anderes auf diesen Seiten vorgestelltes Getraenk uberschreitet
              diesen Wert. Alle Informationen dienen ausschliesslich der Wissensvermittlung
              und stellen weder ein Kauf- noch ein Verkaufsangebot dar.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-border/30">
          {spirits.map((spirit) => (
            <div
              key={spirit.name}
              className={`bg-card p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 ${spirit.highlight ? 'ring-1 ring-primary/50' : ''}`}
            >
              <div className="md:col-span-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {spirit.highlight && (
                    <span className="bg-primary text-primary-foreground font-mono text-xs px-3 py-1 uppercase tracking-widest">
                      Staerkstes
                    </span>
                  )}
                  <span className="border border-border font-mono text-xs px-3 py-1 text-muted-foreground uppercase tracking-widest">
                    {spirit.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {spirit.name}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mb-4">{spirit.region}</p>
                <div className="inline-block border border-primary/50 px-4 py-2">
                  <span className="font-serif text-2xl font-bold text-primary">{spirit.abv}</span>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center">
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {spirit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
              Der Einfluss des Terroirs
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
              Terroir bezeichnet die Gesamtheit der naturlichen Bedingungen, unter denen
              Rohstoffe wachsen: Boden, Klima, Exposition, Hoehenlage. Im Kontext der
              Brennerei bedeutet Terroir, dass die gleiche Fruchtsorte in zwei
              verschiedenen Regionen ganz unterschiedliche Destillate ergibt.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Schwarzwaelder Kirschen aus Hohenlagen uber 600 Metern entwickeln mehr
              Saure und Aroma als Kirschen aus dem Flachland. Diese Komplexitat
              ubertraegt sich direkt in den Brand und macht regionale
              Spezialitaeten unverwechselbar.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
              Frucht- versus Getreidebrand
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
              Obstbrennate entstehen durch Gaerung und Destillation frischer Fruchte.
              Sie sind aromaintensiv, fruchtig und spiegeln die Eigenarten der Sorte
              und ihrer Herkunft direkt wider. Ihre Alkoholstarke liegt typischerweise
              zwischen 38 % und 50 % Vol.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Getreidedestillate hingegen beziehen ihre Aromen aus der Starke von
              Roggen, Weizen oder Gerste. Sie sind oft milder, klarer und eignen sich
              besser fur eine langere Reifung in Holzfassern, die ihnen runde,
              warme Noten verleihen.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

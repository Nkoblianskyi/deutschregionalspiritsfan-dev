const breweryTypes = [
  {
    type: 'Klosterbrauerei',
    region: 'Bayern, Baden-Wuerttemberg',
    founded: 'seit dem Mittelalter',
    specialty: 'Starkbier, Weissbier, Dunkles',
    description:
      'Klosterbrauereien zaehlen zu den aeltesten Braustaetten Deutschlands. Benediktinische und franziskanische Gemeinschaften entwickelten im Mittelalter die Kunst der Bierherstellung zur Ernaehrung waehrend der Fastenzeit. Ihre Biere sind von grosser Tiefe und Ausgewogenheit, oft mit einem malzigen, fast meditativem Charakter.',
    beers: [
      { style: 'Doppelbock', abv: '7,0 % Vol.', note: 'Dunkel, malzreich, lang gereift' },
      { style: 'Weissbier Hell', abv: '5,1 % Vol.', note: 'Hefeweizen, fruchtig und wuerzig' },
      { style: 'Klosterhelles', abv: '4,8 % Vol.', note: 'Gold, weich und ausgewogen' },
    ],
  },
  {
    type: 'Rauchmailzbrauerei',
    region: 'Franken, Bayern',
    founded: 'seit dem 14. Jahrhundert',
    specialty: 'Rauchbier',
    description:
      'In einigen Regionen Frankens wird das Malz noch ueber offenem Buchenholzfeuer getrocknet. Dieses Verfahren, das andernorts laengst aufgegeben wurde, verleiht dem Bier ein charakteristisches Raucharoma. Die erste Begegnung mit einem Rauchbier ist unvergesslich und polarisiert: Wer es liebt, kehrt immer wieder.',
    beers: [
      { style: 'Maerzen Rauchbier', abv: '5,1 % Vol.', note: 'Amber, klar rauchig, malzig' },
      { style: 'Rauchbock', abv: '6,5 % Vol.', note: 'Dunkel, intensiv, vollmundig' },
      { style: 'Rauchweizen', abv: '5,2 % Vol.', note: 'Hefe trifft Rauchnote, selten' },
    ],
  },
  {
    type: 'Altbierhaus',
    region: 'Nordrhein-Westfalen',
    founded: 'seit dem 19. Jahrhundert',
    specialty: 'Altbier',
    description:
      'Das Altbier ist das Ergebnis einer obergaerigen Gaerung bei kuehlen Temperaturen, kombiniert mit einer langen Kaltlagerung. Es ist kupferfarben bis dunkelbraun, herb-trocken und von einer schlichten, ehrlichen Qualitaet. Altbierhaeuser in der Rheinregion sind Institutionen des Stadtlebens.',
    beers: [
      { style: 'Altbier', abv: '4,7 % Vol.', note: 'Kupferfarben, herb, trocken' },
      { style: 'Sticke Alt', abv: '7,0 % Vol.', note: 'Saisonales Starkbier, intensiver' },
      { style: 'Doppelsticke', abv: '8,5 % Vol.', note: 'Seltenheit, kraftig und rund' },
    ],
  },
  {
    type: 'Schwarzbierbrauerei',
    region: 'Thueringen, Sachsen',
    founded: 'seit dem 16. Jahrhundert',
    specialty: 'Schwarzbier',
    description:
      'Das mitteldeutsche Schwarzbier ist eine der aeltesten deutschen Bierstile. Dunkel wie die Nacht, aber leicht und weich am Gaumen, widerlegt es die Vorstellung, dunkle Biere seien zwingend schwer. Es ist ein Ausdruck der thueringischen Braukunst, die auf reduzierte Eleganz setzt.',
    beers: [
      { style: 'Schwarzbier', abv: '4,8 % Vol.', note: 'Tiefschwarz, roestig, trocken' },
      { style: 'Kellerbier Dunkel', abv: '5,0 % Vol.', note: 'Ungefiltert, frisch, wuerzig' },
      { style: 'Bockbier Dunkel', abv: '6,5 % Vol.', note: 'Winter-Saisonbier, vollmundig' },
    ],
  },
  {
    type: 'Bayerisches Wirtshaus',
    region: 'Bayern',
    founded: 'traditionsreiche Gaststaetten',
    specialty: 'Helles, Dunkel, Weissbier',
    description:
      'Das bayerische Wirtshaus ist mehr als ein Ort, um Bier zu trinken. Es ist ein kulturelles Zentrum, in dem Generationen sich begegnen, Traditionen weitergegeben und Gemeinschaft gepflegt wird. Die angebotenen Biere folgen dem Reinheitsgebot und spiegeln das regionale Terroir der Braugerstenanbaugebiete wider.',
    beers: [
      { style: 'Helles', abv: '4,9 % Vol.', note: 'Goldgelb, mild, harmonisch' },
      { style: 'Dunkel', abv: '5,3 % Vol.', note: 'Malzaroma, weich, leicht suesslich' },
      { style: 'Hefeweizen', abv: '5,4 % Vol.', note: 'Hefetrub, Banane und Nelke' },
    ],
  },
]

const localDrinks = [
  { name: 'Berliner Weisse', region: 'Berlin', type: 'Sauerbier', abv: '3,0 % Vol.', note: 'Leicht sauer, traditionell mit Himbeer- oder Waldmeistersirup serviert' },
  { name: 'Kolsch', region: 'Koeln', type: 'Obergaeriges Bier', abv: '4,8 % Vol.', note: 'Geografisch geschuetzt, ausschliesslich im Koelner Raum gebraut' },
  { name: 'Radler', region: 'Bayern', type: 'Biermischgetrank', abv: '2,5 % Vol.', note: 'Halb Bier, halb Zitronenlimonade, ein Sommerklassiker' },
  { name: 'Hefeweizen', region: 'Bayern', type: 'Weizenbier', abv: '5,4 % Vol.', note: 'Mit Hefe vergoren, fruchtig und wuerzig, ein Aushangschild Bayerns' },
  { name: 'Bockbier', region: 'bundesweit', type: 'Starkbier', abv: '6,5 % Vol.', note: 'Malzreich und alkoholstaerker, seit dem Mittelalter bekannt' },
  { name: 'Altbier', region: 'Dusseldorf', type: 'Obergaeriges Bier', abv: '4,7 % Vol.', note: 'Kupferfarben, herb und trocken, typisch rheinisch' },
  { name: 'Gose', region: 'Leipzig', type: 'Sauerbier', abv: '4,8 % Vol.', note: 'Gesalzen und mit Koriander gebraut, eine Leipziger Wiedergeburt' },
  { name: 'Maibock', region: 'Bayern', type: 'Fruehlingsbier', abv: '7,2 % Vol.', note: 'Hell, stark, wird im Fruehjahr angestochen' },
]

export function BrauereiContent() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <div className="border border-border/40 p-6 mb-16 flex items-start gap-4 bg-card">
          <div className="w-1 self-stretch bg-primary shrink-0" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Hinweis zur Alkoholstaerke</p>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Kein auf dieser Seite beschriebenes Bier oder lokales Getraenk uberschreitet
              den Alkoholgehalt unseres Schwarzwaelder Kirschwassers mit 50 % Vol.
              Der staerkste hier aufgefuhrte Lokalbrand bleibt stets unterhalb dieser Grenze.
              Alle Inhalte auf diesem Blog dienen der Information und dem Wissensaustausch.
            </p>
          </div>
        </div>

        <div className="border border-border/40 p-6 mb-16 flex items-start gap-4 bg-card">
          <div className="w-1 self-stretch bg-border shrink-0" />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Kein Alkoholverkauf</p>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Wir fuehren <strong className="text-foreground font-semibold">keinen Verkauf, keinen Versand und keine
              Vermittlung</strong> von Bier, Spirituosen oder anderen alkoholischen Getraenken. Namen von
              Bierstilen und Regionen sind allgemein beschreibend gemeint, nicht als Werbung fuer einzelne Marken.
            </p>
          </div>
        </div>

        <section className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Braustaetten und Pubs</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Typen deutscher Brauereien und ihre Biere
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-3xl leading-relaxed mb-12">
            Deutschland zaehlt ueber 1.500 Braustaetten, deren Stile und Traditionen
            sich von Region zu Region stark unterscheiden. Diese Uebersicht stellt
            die wichtigsten Brauereiformen und ihre charakteristischen Bierstile vor,
            von der Klosterbrauerei bis zum Altbierhaus.
          </p>

          <div className="space-y-px bg-border/30">
            {breweryTypes.map((brewery) => (
              <div key={brewery.type} className="bg-card p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="border border-border font-mono text-xs px-3 py-1 text-muted-foreground uppercase tracking-widest">
                        {brewery.founded}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                      {brewery.type}
                    </h3>
                    <p className="font-mono text-xs text-primary uppercase tracking-widest">
                      {brewery.region}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {brewery.specialty}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                      {brewery.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    Typische Bierstile
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {brewery.beers.map((beer) => (
                      <div key={beer.style} className="border border-border/50 p-4">
                        <p className="font-serif text-base font-semibold text-foreground mb-1">{beer.style}</p>
                        <p className="font-mono text-xs text-muted-foreground mb-2">{beer.note}</p>
                        <p className="font-mono text-xs text-primary font-semibold">{beer.abv}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Lokale Spezialitaeten</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Regionale Biere und Getraenke im Uberblick
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-3xl leading-relaxed mb-12">
            Deutschland beherbergt eine erstaunliche Stilvielfalt an Bieren. Von der
            leichten Berliner Weisse bis zum dunklen Doppelbock kennt jede Region
            ihren eigenen Charakter. Alle diese Spezialitaeten liegen deutlich unter
            dem Alkoholgehalt unseres Schnapses.
          </p>

          <div className="border-t border-border/40">
            {localDrinks.map((drink) => (
              <div
                key={drink.name}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 py-5 border-b border-border/40 hover:bg-secondary/20 transition-colors duration-200 px-2"
              >
                <div>
                  <p className="font-serif text-lg font-semibold text-foreground">{drink.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{drink.region}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest flex items-center">
                  {drink.type}
                </p>
                <p className="font-mono text-xs text-muted-foreground flex items-center leading-relaxed">
                  {drink.note}
                </p>
                <p className="font-mono text-sm text-primary font-semibold flex items-center justify-start md:justify-end">
                  {drink.abv}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

const beerStyles = [
  {
    style: 'Helles',
    fermentation: 'untergaerig',
    abv: 'ca. 4,7–5,4 % Vol.',
    note: 'Mild, malzig, hell; Standard in vielen Wirtshaeusern',
  },
  {
    style: 'Pils / Pilsener',
    fermentation: 'untergaerig',
    abv: 'ca. 4,5–5,5 % Vol.',
    note: 'Feinherb, hopfig, klar und trocken',
  },
  {
    style: 'Export / Dortmunder Export',
    fermentation: 'untergaerig',
    abv: 'ca. 4,8–5,6 % Vol.',
    note: 'Etwas kraeftiger als Helles, vollmundiger Malzkern',
  },
  {
    style: 'Maerzen / Festbier',
    fermentation: 'untergaerig',
    abv: 'ca. 5,2–6,0 % Vol.',
    note: 'Malzbetonung, saisonal oft staerker als Alltagsbier',
  },
  {
    style: 'Bock / Doppelbock',
    fermentation: 'untergaerig',
    abv: 'ca. 6,3–7,5 % Vol. · Doppelbock oft 7–12 % Vol.',
    note: 'Starkbier, malzreich; Doppelbock dichter und alkoholhaltiger',
  },
  {
    style: 'Eisbock (Seltenheit)',
    fermentation: 'untergaerig',
    abv: 'ca. 9–14 % Vol.',
    note: 'Durch Eisfractionierung konzentriert — aussergewoehnlich fuer Bier',
  },
  {
    style: 'Weissbier / Hefeweizen',
    fermentation: 'obergaerig',
    abv: 'ca. 5,0–5,6 % Vol.',
    note: 'Hefetrueb, Banane, Nelke, wuerzig',
  },
  {
    style: 'Weissbier dunkel',
    fermentation: 'obergaerig',
    abv: 'ca. 4,8–5,5 % Vol.',
    note: 'Dunkles Malz mit Weizenhefe-Aromen',
  },
  {
    style: 'Koelsch',
    fermentation: 'obergaerig',
    abv: 'ca. 4,4–5,0 % Vol.',
    note: 'Hell, feinfruchtig, leicht herb; regional geschuetzter Stil',
  },
  {
    style: 'Altbier',
    fermentation: 'obergaerig',
    abv: 'ca. 4,5–5,2 % Vol.',
    note: 'Kupferfarben, herb-trocken, Kaltreifung',
  },
  {
    style: 'Berliner Weisse',
    fermentation: 'gemischt / sauer',
    abv: 'ca. 2,8–3,8 % Vol.',
    note: 'Leicht, sauer, oft mit Sirup — niedrige Masse, hohe Erfrischung',
  },
  {
    style: 'Gose',
    fermentation: 'obergaerig / sauer',
    abv: 'ca. 4,2–5,0 % Vol.',
    note: 'Salz und Koriander, leicht sauer',
  },
  {
    style: 'Rauchbier',
    fermentation: 'untergaerig',
    abv: 'ca. 4,8–5,5 % Vol.',
    note: 'Rauchmalz, charakterstarke Nische Frankens',
  },
  {
    style: 'Schwarzbier',
    fermentation: 'untergaerig',
    abv: 'ca. 4,5–5,2 % Vol.',
    note: 'Dunkel, roestig, oft leichter Koerper als Optik vermuten laesst',
  },
  {
    style: 'Dunkel / Muenchner Dunkel',
    fermentation: 'untergaerig',
    abv: 'ca. 4,8–5,5 % Vol.',
    note: 'Malzaroma, Karamell, weiche Textur',
  },
  {
    style: 'Kellerbier / Zwickel',
    fermentation: 'meist untergaerig',
    abv: 'ca. 4,7–5,4 % Vol.',
    note: 'Unfiltriert oder naturtrueb, frischer Hopfen- oder Malzkern',
  },
  {
    style: 'Radler / Russ / Biermisch',
    fermentation: '—',
    abv: 'ca. 2,0–3,0 % Vol.',
    note: 'Bier mit Limonade oder Limette — niedrigster Alkohol im Alltag',
  },
]

export function BeerCultureIntro() {
  return (
    <div className="mb-12 border border-border/40 bg-card/50 p-6 md:p-8">
      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
        Deutsches Bier — Stile und Tradition
      </p>
      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
        Auf dieser Seite geht es um <strong className="text-foreground font-semibold">Bier als Kultur und Handwerk</strong>:
        Gaerungsarten, regionale Brauformen und typische Geschmacksprofile. Wir nennen bewusst{' '}
        <strong className="text-foreground font-semibold">keine kommerziellen Marken oder Logos</strong> — nur
        allgemein uebliche Stilbezeichnungen (z. B. Helles, Pils, Weissbier), damit der Fokus auf Geschichte,
        Terroir und Brautechnik bleibt.
      </p>
      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
        Das deutsche Reinheitsgebot (seit dem 16. Jahrhundert weiterentwickelt) begrenzt klassischerweise die
        Zutaten auf Wasser, Malz, Hopfen und Hefe — ein Rahmen, unter dem unzaehlige regionale Auspraegungen
        entstehen: obergaerige Weizenbiere im Sueden, kupferfarbenes Altbier am Rhein, Rauchmalz in Franken oder
        helle, untergaerige Biere in vielen Braustuben. Biere liegen alkoholmaessig weit unter hochprozentigen
        Destillaten; wir ordnen sie dennoch in unsere Kultur der genussvollen, massvollen Begleitung ein.
      </p>
      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
        <strong className="text-foreground font-semibold">Alkoholgehalt (% Vol.):</strong> Auf Etiketten und
        Speisekarten steht der Volumenanteil Ethanol im fertigen Bier. Er haengt von Stammwuerze, Hefe und
        Gaerungsverlauf ab — selbst innerhalb eines Stils schwanken reale Werte. Die Tabelle fasst{' '}
        <strong className="text-foreground font-semibold">uebliche Richtbereiche</strong> zusammen (ca.), keine
        Garantie fuer einzelne Schanken oder Rezepturen.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-muted-foreground mb-10">
        <li className="flex gap-2">
          <span className="text-primary shrink-0">—</span>
          <span>
            <strong className="text-foreground">Untergaerig:</strong> Helles, Pils, Export, Bock — kuehle Gaerung,
            oft klar und malzig bis herb.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary shrink-0">—</span>
          <span>
            <strong className="text-foreground">Obergaerig:</strong> Weissbier, Koelsch, Altbier — warme Gaerung,
            fruchtige oder wuerzige Profile.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary shrink-0">—</span>
          <span>
            <strong className="text-foreground">Regionalgeschuetzt:</strong> z. B. Koelsch, Altbier — geografisch
            definierte Stile, nicht als Werbung fuer einzelne Betriebe gemeint.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary shrink-0">—</span>
          <span>
            <strong className="text-foreground">Spezialitaeten:</strong> Rauchbier, Berliner Weisse, Gose —
            handwerkliche Vielfalt ohne Markenbezug.
          </span>
        </li>
      </ul>

      <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
        Bierstile und typische Alkoholstaerke
      </p>
      <div className="overflow-x-auto border border-border/40 -mx-px">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border/40 bg-secondary/30">
              <th className="font-mono text-xs uppercase tracking-widest text-muted-foreground px-4 py-3 font-normal">
                Stil (allgemein)
              </th>
              <th className="font-mono text-xs uppercase tracking-widest text-muted-foreground px-4 py-3 font-normal">
                Gaerung
              </th>
              <th className="font-mono text-xs uppercase tracking-widest text-primary px-4 py-3 font-normal">
                typ. % Vol.
              </th>
              <th className="font-mono text-xs uppercase tracking-widest text-muted-foreground px-4 py-3 font-normal">
                Kurzcharakter
              </th>
            </tr>
          </thead>
          <tbody>
            {beerStyles.map((row) => (
              <tr key={row.style} className="border-b border-border/40 last:border-b-0 hover:bg-secondary/15">
                <td className="font-serif text-sm font-semibold text-foreground px-4 py-3 align-top whitespace-nowrap">
                  {row.style}
                </td>
                <td className="font-mono text-xs text-muted-foreground px-4 py-3 align-top capitalize">
                  {row.fermentation}
                </td>
                <td className="font-mono text-xs text-primary font-semibold px-4 py-3 align-top whitespace-nowrap">
                  {row.abv}
                </td>
                <td className="font-mono text-xs text-muted-foreground px-4 py-3 align-top leading-relaxed">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-mono text-[0.65rem] text-muted-foreground/80 mt-4 leading-relaxed">
        Vergleich: die meisten Biere liegen zwischen etwa 2 % Vol. (Radler) und rund 12 % Vol. (staerkere
        Doppelboecke); darueber nur Ausnahmen wie Eisbock. Hochprozentige deutsche Obst- und Getreidebraende aus
        unserem Destillat-Fokus erreichen dagegen typischerweise 38–50 % Vol. — ein anderer Getraenktyp.
      </p>
    </div>
  )
}

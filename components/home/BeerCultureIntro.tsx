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
      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
        Das deutsche Reinheitsgebot (seit dem 16. Jahrhundert weiterentwickelt) begrenzt klassischerweise die
        Zutaten auf Wasser, Malz, Hopfen und Hefe — ein Rahmen, unter dem unzaehlige regionale Auspraegungen
        entstehen: obergaerige Weizenbiere im Sueden, kupferfarbenes Altbier am Rhein, Rauchmalz in Franken oder
        helle, untergaerige Biere in vielen Braustuben. Biere liegen alkoholmaessig weit unter hochprozentigen
        Destillaten; wir ordnen sie dennoch in unsere Kultur der genussvollen, massvollen Begleitung ein.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-muted-foreground">
        <li className="flex gap-2">
          <span className="text-primary shrink-0">—</span>
          <span>
            <strong className="text-foreground">Untergaerig:</strong> Helles, Pils, Export — klar, malzig bis
            feinherb, oft 4,5–5,5 % Vol.
          </span>
        </li>
        <li className="flex gap-2">
          <span className="text-primary shrink-0">—</span>
          <span>
            <strong className="text-foreground">Obergaerig:</strong> Weissbier, Kellerbier — Hefearomen, wuerzig,
            typisch sueddeutsch.
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
    </div>
  )
}

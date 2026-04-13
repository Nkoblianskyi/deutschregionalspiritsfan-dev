export function AgeDisclaimer() {
  return (
    <div className="relative z-10 mt-6">
      <div className="inline-flex flex-col sm:flex-row sm:items-start gap-3 border border-primary/40 bg-background/30 backdrop-blur-sm px-5 py-3 max-w-2xl text-left">
        <span className="font-serif text-base font-bold text-primary shrink-0">18+</span>
        <div className="font-mono text-xs text-foreground/80 tracking-wide space-y-2 leading-relaxed">
          <p>
            Diese Seite richtet sich ausschliesslich an Erwachsene ab 18 Jahren. Bitte geniessen Sie Alkohol in
            Mass und Verantwortung.
          </p>
          <p>
            <strong className="text-foreground font-semibold">Kein Verkauf von Alkohol:</strong> Wir fuehren
            keinen Verkauf, Versand oder Vermittlung von alkoholischen Getraenken durch; alle Inhalte sind rein
            informativ.
          </p>
        </div>
      </div>
    </div>
  )
}

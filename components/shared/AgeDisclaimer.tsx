export function AgeDisclaimer() {
  return (
    <div className="relative z-10 mt-6">
      <div className="inline-flex items-center gap-3 border border-primary/40 bg-background/30 backdrop-blur-sm px-5 py-3">
        <span className="font-serif text-base font-bold text-primary">18+</span>
        <span className="font-mono text-xs text-foreground/80 tracking-wide">
          Diese Seite richtet sich ausschliesslich an Erwachsene ab 18 Jahren.
          Bitte geniessen Sie Alkohol in Mass und Verantwortung.
        </span>
      </div>
    </div>
  )
}

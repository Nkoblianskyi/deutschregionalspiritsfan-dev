interface Section {
  title: string
  content: string | string[]
}

interface LegalPageProps {
  title: string
  subtitle: string
  lastUpdated: string
  sections: Section[]
}

export function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 pb-8 border-b border-border/40">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">Rechtliches</p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            {title}
          </h1>
          <p className="font-mono text-sm text-muted-foreground">{subtitle}</p>
          <p className="font-mono text-xs text-muted-foreground/60 mt-2">
            Zuletzt aktualisiert: {lastUpdated}
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1 shrink-0">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="font-mono text-xs text-muted-foreground">
            Bei Fragen wenden Sie sich bitte an:{' '}
            <a
              href="mailto:info@deutschregionalspiritsfan.com"
              className="text-primary hover:text-primary/80 transition-colors duration-200"
            >
              info@deutschregionalspiritsfan.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

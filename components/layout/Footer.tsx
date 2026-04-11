import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[oklch(0.08_0.006_45)] border-t border-border/40 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <p className="font-serif text-xl font-semibold tracking-wide text-primary">Deutsch Regional Spirits Fan</p>
            </Link>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-xs">
              Ein unabhaengiges Blog ueber regionale deutsche Destillate, Terroir und die Kultur der Brennereien.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Navigation</p>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Startseite' },
                { href: '/destillate', label: 'Destillate' },
                { href: '/brauereien', label: 'Brauereien' },
                { href: '/ueber-uns', label: 'Ueber uns' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">Rechtliches</p>
            <ul className="space-y-2">
              {[
                { href: '/datenschutz', label: 'Datenschutzerklaerung' },
                { href: '/cookie-richtlinie', label: 'Cookie-Richtlinie' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="font-mono text-xs text-muted-foreground">
                Kontakt:{' '}
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

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Deutsch Regional Spirits Fan. Alle Rechte vorbehalten.
          </p>
          <p className="font-mono text-xs text-muted-foreground max-w-md text-right">
            Nur fuer Erwachsene ab 18 Jahren. Bitte trinken Sie verantwortungsvoll.
          </p>
        </div>
      </div>
    </footer>
  )
}

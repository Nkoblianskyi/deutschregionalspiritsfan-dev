'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[oklch(0.13_0.010_45)] border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <p className="font-serif text-base font-semibold text-foreground mb-1">
            Diese Website verwendet Cookies
          </p>
          <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-2xl">
            Wir verwenden Cookies, um Ihnen die bestmoegliche Erfahrung auf unserer Website zu bieten. 
            Indem Sie auf &quot;Akzeptieren&quot; klicken, stimmen Sie der Verwendung aller Cookies zu. 
            Weitere Informationen finden Sie in unserer{' '}
            <Link href="/cookie-richtlinie" className="text-primary underline underline-offset-2 hover:no-underline">
              Cookie-Richtlinie
            </Link>
            {' '}und{' '}
            <Link href="/datenschutz" className="text-primary underline underline-offset-2 hover:no-underline">
              Datenschutzerklaerung
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors duration-200"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}

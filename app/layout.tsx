import type { Metadata } from 'next'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source',
})

export const metadata: Metadata = {
  title: 'Deutsch Regional Spirits Fan',
  description: 'Regionale deutsche Destillate entdecken. Terroir, Tradition und Geschmack aus den deutschen Landschaften. Frucht- und Getreidebrennte bis 50% Vol.',
  keywords: 'Deutsche Destillate, Schnapps, Kirschwasser, Obstbrand, Getreidebrand, Schwarzwald, Bayern, regionale Spirituosen',
  authors: [{ name: 'Deutsch Regional Spirits Fan' }],
  openGraph: {
    title: 'Deutsch Regional Spirits Fan',
    description: 'Regionale deutsche Destillate und ihr Terroir entdecken.',
    locale: 'de_DE',
    type: 'website',
    siteName: 'Deutsch Regional Spirits Fan',
  },
  alternates: {
    canonical: 'https://deutschregionalspiritsfan.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${sourceSans.variable}`}>
        <body className="font-sans antialiased bg-background text-foreground">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { LegalPage } from '@/components/shared/LegalPage'

export const metadata: Metadata = {
  title: 'Datenschutzerklaerung - Deutsch Regional Spirits Fan',
  description: 'Datenschutzerklaerung von Deutsch Regional Spirits Fan gemaess DSGVO. Informationen uber die Verarbeitung personenbezogener Daten.',
}

const sections = [
  {
    title: '1. Verantwortlicher',
    content:
      'Verantwortlicher fuer die Datenverarbeitung auf dieser Website ist Deutsch Regional Spirits Fan. Kontakt: info@deutschregionalspiritsfan.com. Diese Website wird unter der Domain deutschregionalspiritsfan.com betrieben.',
  },
  {
    title: '2. Erhobene Daten',
    content: [
      'Beim Besuch dieser Website werden automatisch technische Daten wie IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeit in Serverprotokollen gespeichert.',
      'Bei Verwendung unseres Kontaktformulars erheben wir Name, E-Mail-Adresse, Betreff und den Inhalt Ihrer Nachricht.',
      'Beim Akzeptieren von Cookies werden Ihre Cookie-Praferenzen in einem Cookie auf Ihrem Gerat gespeichert.',
    ],
  },
  {
    title: '3. Zweck der Datenverarbeitung',
    content: [
      'Technische Betriebssicherheit und Optimierung der Website.',
      'Beantwortung von Anfragen, die uber das Kontaktformular eingehen.',
      'Analyse des Nutzerverhaltens zur Verbesserung des Angebots (nur mit Ihrer Einwilligung).',
      'Einhaltung gesetzlicher Verpflichtungen.',
    ],
  },
  {
    title: '4. Rechtsgrundlage',
    content:
      'Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertragserfullung), Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).',
  },
  {
    title: '5. Speicherdauer',
    content:
      'Personenbezogene Daten werden nur so lange gespeichert, wie es fuer den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Kontaktanfragen werden nach Abschluss der Kommunikation geloscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.',
  },
  {
    title: '6. Ihre Rechte',
    content: [
      'Recht auf Auskunft (Art. 15 DSGVO): Sie koennen jederzeit Auskunft uber die von uns gespeicherten Daten verlangen.',
      'Recht auf Berichtigung (Art. 16 DSGVO): Sie koennen die Berichtigung unrichtiger Daten verlangen.',
      'Recht auf Loschung (Art. 17 DSGVO): Sie koennen die Loschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
      'Recht auf Einschraenkung der Verarbeitung (Art. 18 DSGVO).',
      'Recht auf Datenuebertragbarkeit (Art. 20 DSGVO).',
      'Recht auf Widerspruch (Art. 21 DSGVO).',
      'Beschwerderecht bei der zustandigen Datenschutzaufsichtsbehoerde.',
    ],
  },
  {
    title: '7. Weitergabe von Daten',
    content:
      'Ihre personenbezogenen Daten werden nicht an Dritte verkauft oder vermietet. Eine Weitergabe erfolgt nur, wenn dies gesetzlich vorgeschrieben ist oder wenn externe Dienstleister im Auftrag von uns tatig werden und ihrerseits zur Einhaltung der DSGVO verpflichtet sind.',
  },
  {
    title: '8. Externe Links',
    content:
      'Unsere Website kann Links zu externen Websites enthalten. Wir haben keinen Einfluss auf den Inhalt und die Datenschutzpraktiken dieser externen Seiten und ubernehmen daher keine Haftung fur diese fremden Inhalte.',
  },
  {
    title: '9. Aenderungen dieser Erklaerung',
    content:
      'Wir behalten uns vor, diese Datenschutzerklaerung bei Bedarf zu aktualisieren, um sie an geanderte Rechtslagen oder Aenderungen unserer Dienste anzupassen. Die jeweils aktuelle Version ist jederzeit auf dieser Seite abrufbar.',
  },
  {
    title: '10. Kontakt fuer Datenschutzanfragen',
    content:
      'Fur Anfragen zum Datenschutz und zur Ausubung Ihrer Rechte wenden Sie sich bitte an: info@deutschregionalspiritsfan.com',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Datenschutzerklaerung"
      subtitle="Informationen uber die Verarbeitung personenbezogener Daten gemaess DSGVO"
      lastUpdated="2026"
      sections={sections}
    />
  )
}

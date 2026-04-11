import type { Metadata } from 'next'
import { LegalPage } from '@/components/shared/LegalPage'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie - Deutsch Regional Spirits Fan',
  description: 'Cookie-Richtlinie von Deutsch Regional Spirits Fan. Informationen ueber die Verwendung von Cookies auf unserer Website.',
}

const sections = [
  {
    title: 'Was sind Cookies?',
    content:
      'Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerat gespeichert werden. Sie ermoeglichen es, bestimmte Informationen zu speichern und bei einem spateren Besuch wieder auszulesen. Cookies richten keinen Schaden auf Ihrem Gerat an und enthalten keine Viren oder andere Schadsoftware.',
  },
  {
    title: 'Welche Cookies verwenden wir?',
    content: [
      'Technisch notwendige Cookies: Diese Cookies sind fur den Betrieb der Website unbedingt erforderlich und koennen nicht deaktiviert werden. Sie speichern keine personlich identifizierbaren Informationen.',
      'Funktionale Cookies: Diese Cookies ermoglichen es der Website, erweiterte Funktionalitaet und Personalisierung bereitzustellen, zum Beispiel das Speichern Ihrer Cookie-Einstellungen.',
      'Analyse-Cookies: Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym gesammelt und gemeldet werden.',
    ],
  },
  {
    title: 'Cookie-Einwilligung',
    content:
      'Beim ersten Besuch unserer Website wird Ihnen ein Cookie-Banner angezeigt, in dem Sie Ihre Einwilligung zur Verwendung von Cookies geben oder ablehnen koennen. Ihre Einwilligung wird in einem Cookie gespeichert und gilt fuer 12 Monate. Sie koennen Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookies in Ihrem Browser loschen.',
  },
  {
    title: 'Wie konnen Sie Cookies kontrollieren?',
    content:
      'Sie koennen Cookies in den Einstellungen Ihres Browsers deaktivieren oder loschen. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalitaet unserer Website beeintrachtigen kann. Anleitungen zur Verwaltung von Cookies finden Sie in der Hilfefunktion Ihres Browsers.',
  },
  {
    title: 'Cookies von Drittanbietern',
    content:
      'Auf unserer Website koennen Cookies von Drittanbietern gesetzt werden, zum Beispiel fur die Analyse des Nutzerverhaltens durch Analysedienste. Diese Anbieter haben eigene Datenschutzrichtlinien. Wir empfehlen Ihnen, sich auch mit den Datenschutzrichtlinien dieser Drittanbieter vertraut zu machen.',
  },
  {
    title: 'Aenderungen dieser Richtlinie',
    content:
      'Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu andern. Aenderungen werden auf dieser Seite veroffentlicht. Wir empfehlen Ihnen, diese Seite regelmassig zu besuchen, um uber Aenderungen informiert zu bleiben.',
  },
  {
    title: 'Kontakt',
    content:
      'Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, koennen Sie uns jederzeit unter info@deutschregionalspiritsfan.com kontaktieren.',
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie-Richtlinie"
      subtitle="Informationen uber die Verwendung von Cookies auf deutschregionalspiritsfan.com"
      lastUpdated="2026"
      sections={sections}
    />
  )
}

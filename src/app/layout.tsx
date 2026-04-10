import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Digital Energy | Gruppo di Innovazione Digitale',
    template: '%s | Digital Energy',
  },
  description: 'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri. ORYX, Ibiza Amigo, Scanix, CalcoloPro+, Hub DE — dal concept al mercato internazionale. Mobilita\' di lusso, AI concierge, gestione fatture AI, fintech e software development.',
  keywords: 'digital energy, innovazione digitale, prodotti digitali, SaaS, ORYX, ORYX app, luxury mobility, Ibiza Amigo, AI concierge, WhatsApp concierge Ibiza, Scanix, AI invoice, gestione fatture, CalcoloPro, Hub DE, sviluppo software, fintech, app iOS, yacht charter, Ibiza, startup europea, digital transformation',
  authors: [{ name: 'Digital Energy Ltd.' }],
  creator: 'Digital Energy Ltd.',
  metadataBase: new URL('https://digitalenergy.solutions'),
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US', 'bg_BG', 'es_ES'],
    siteName: 'Digital Energy',
    title: 'Digital Energy | Gruppo di Innovazione Digitale',
    description: 'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri. ORYX, Ibiza Amigo, Scanix, CalcoloPro+ — dal concept al mercato internazionale.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Energy | Gruppo di Innovazione Digitale',
    description: 'ORYX mobilita\' premium, Ibiza Amigo AI concierge, Scanix AI invoice management, CalcoloPro+ fintech — prodotti digitali dal concept al mercato.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://digitalenergy.solutions/it',
    languages: {
      'it': 'https://digitalenergy.solutions/it',
      'en': 'https://digitalenergy.solutions/en',
      'bg': 'https://digitalenergy.solutions/bg',
      'es': 'https://digitalenergy.solutions/es',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'google-site-verification': '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

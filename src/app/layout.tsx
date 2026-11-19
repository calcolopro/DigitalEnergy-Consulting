import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Digital Energy | Gruppo di Innovazione Digitale',
    template: '%s | Digital Energy',
  },
  description: 'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri. ORYX, Ibiza Amigo, Wood Design Ibiza — dal concept al mercato. Mobilita\' privata, assistenti AI su WhatsApp, gestionali su misura per le aziende.',
  keywords: 'digital energy, innovazione digitale, prodotti digitali, SaaS, ORYX, ORYX app, luxury mobility, Ibiza Amigo, assistente AI WhatsApp, Wood Design Ibiza, gestionale falegnameria, gestionale su misura, agenti AI, sviluppo software, app iOS, Ibiza, digital transformation',
  authors: [{ name: 'Digital Energy Ltd.' }],
  creator: 'Digital Energy Ltd.',
  metadataBase: new URL('https://digitalenergy.solutions'),
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US', 'bg_BG', 'es_ES'],
    siteName: 'Digital Energy',
    title: 'Digital Energy | Gruppo di Innovazione Digitale',
    description: 'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri. ORYX, Ibiza Amigo, Wood Design Ibiza — dal concept al mercato.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Energy | Gruppo di Innovazione Digitale',
    description: 'ORYX mobilita\' privata, Ibiza Amigo assistente AI su WhatsApp, gestionale Wood Design Ibiza — prodotti digitali dal concept al mercato.',
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

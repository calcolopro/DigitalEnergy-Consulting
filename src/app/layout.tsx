import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Digital Energy | Gruppo di Innovazione Digitale',
    template: '%s | Digital Energy',
  },
  description: 'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri. ORYX, CalcoloPro+, Hub DE — dal concept al mercato internazionale.',
  keywords: 'digital energy, innovazione digitale, prodotti digitali, SaaS, ORYX, CalcoloPro, Hub DE, sviluppo software, fintech, luxury mobility',
  authors: [{ name: 'Digital Energy Ltd.' }],
  creator: 'Digital Energy Ltd.',
  metadataBase: new URL('https://digitalenergy.solutions'),
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US', 'bg_BG', 'es_ES'],
    siteName: 'Digital Energy',
    title: 'Digital Energy | Gruppo di Innovazione Digitale',
    description: 'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri — dal concept al mercato internazionale.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Energy | Gruppo di Innovazione Digitale',
    description: 'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

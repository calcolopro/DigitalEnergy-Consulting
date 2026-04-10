import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Digital Energy',
    url: 'https://digitalenergy.solutions',
    logo: 'https://digitalenergy.solutions/logo-de-colored.png',
    description: 'European digital innovation group. We design, develop and launch our own technology platforms.',
    foundingDate: '2023',
    email: 'info@digitalenergy.solutions',
    sameAs: [],
    knowsAbout: ['SaaS', 'Luxury Mobility', 'AI Concierge', 'AI Invoice Management', 'Fintech', 'Software Development'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'ORYX',
          applicationCategory: 'TravelApplication',
          operatingSystem: 'iOS',
          description: 'Premium private mobility platform for luxury shuttle, chauffeur, security and yacht charter.',
          url: 'https://ory-x.com',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Ibiza Amigo',
          applicationCategory: 'TravelApplication',
          description: 'AI-powered WhatsApp concierge for Ibiza — restaurants, clubs, boats, transfers and VIP services.',
          url: 'https://ibizamigo.com',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Scanix',
          applicationCategory: 'BusinessApplication',
          description: 'AI-powered invoice scanning and management platform with OCR, automatic categorization and accountant sharing.',
          url: 'https://scanix.pro',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'CalcoloPro+',
          applicationCategory: 'FinanceApplication',
          description: 'Professional portfolio management platform with OCR and real-time analytics.',
          url: 'https://calcolo-pro.com',
        },
      },
    ],
  }

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

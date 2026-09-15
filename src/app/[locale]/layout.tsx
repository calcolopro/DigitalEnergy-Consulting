import type { Metadata } from 'next'

/**
 * Per-language metadata. Until now every locale served the Italian title, so
 * a Spanish visitor's browser tab — and anything that shares the link — read
 * "Gruppo di Innovazione Digitale". Visible the moment the URL is sent to
 * someone, which is exactly what it is for.
 */
const META: Record<string, { title: string; description: string; ogLocale: string }> = {
  it: {
    title: 'Digital Energy | Gruppo di innovazione digitale',
    description:
      'Progettiamo, sviluppiamo e lanciamo prodotti digitali propri: ORYX, Ibiza Amigo, Scanix, CalcoloPro+, Hub DE. E costruiamo agenti AI che lavorano dentro le aziende.',
    ogLocale: 'it_IT',
  },
  en: {
    title: 'Digital Energy | Digital innovation group',
    description:
      'We design, build and launch our own digital products: ORYX, Ibiza Amigo, Scanix, CalcoloPro+, Hub DE. And we build AI agents that do real work inside a business.',
    ogLocale: 'en_US',
  },
  es: {
    title: 'Digital Energy | Grupo de innovación digital',
    description:
      'Diseñamos, desarrollamos y lanzamos nuestros propios productos digitales: ORYX, Ibiza Amigo, Scanix, CalcoloPro+, Hub DE. Y creamos agentes de IA que trabajan dentro de una empresa.',
    ogLocale: 'es_ES',
  },
  bg: {
    title: 'Digital Energy | Група за дигитални продукти',
    description:
      'Проектираме, строим и пускаме собствени дигитални продукти: ORYX, Ibiza Amigo, Scanix, CalcoloPro+, Hub DE. И правим AI агенти, които вършат истинска работа във фирмата.',
    ogLocale: 'bg_BG',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale] ?? META.it
  const url = `https://digitalenergy.solutions/${locale}`
  return {
    // `absolute` because the root layout appends "| Digital Energy" to every
    // title, and the name is already in these — otherwise Spanish reads
    // "Digital Energy | Grupo de innovación digital | Digital Energy".
    title: { absolute: m.title },
    description: m.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        Object.keys(META).map((l) => [l, `https://digitalenergy.solutions/${l}`]),
      ),
    },
    openGraph: {
      type: 'website',
      siteName: 'Digital Energy',
      locale: m.ogLocale,
      url,
      title: m.title,
      description: m.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  }
}

import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { themeInitScript } from '@/lib/theme'

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
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0B0E0D" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CookieBanner />
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Digital Energy | Strategic Consulting',
  description: 'Boutique consulting firm. Strategy. Intelligence. Growth.',
  keywords: 'consulting, strategy, business, marketing, digital transformation',
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
  return (
    <html lang="en">
      <body className="bg-de-black min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

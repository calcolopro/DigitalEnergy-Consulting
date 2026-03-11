'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const GA_ID = 'G-1WN4XXKQE1'

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (stored === 'accepted') setConsent(true)

    const handleStorage = () => {
      const val = localStorage.getItem('cookie-consent')
      setConsent(val === 'accepted')
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  // Re-check on every render (for same-tab cookie accept)
  useEffect(() => {
    const interval = setInterval(() => {
      const val = localStorage.getItem('cookie-consent')
      if (val === 'accepted' && !consent) setConsent(true)
    }, 1000)
    return () => clearInterval(interval)
  }, [consent])

  if (!consent) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}

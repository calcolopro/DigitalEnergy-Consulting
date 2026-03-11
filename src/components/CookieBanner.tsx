'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function CookieBanner() {
  const t = useTranslations('cookies')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-nero/95 backdrop-blur-md border-t border-white/10">
      <div className="wrap py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-offwhite/70 text-[13px] leading-relaxed">
          {t('message')}{' '}
          <Link href="/cookie-policy" className="text-sabbia hover:text-sabbia-dark underline underline-offset-2 transition-colors">
            {t('learnMore')}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="btn btn-outline text-[10px] py-2 px-4">
            {t('decline')}
          </button>
          <button onClick={accept} className="btn btn-sand text-[10px] py-2 px-4">
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  )
}

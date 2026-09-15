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
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-hair bg-paper/95 backdrop-blur-md">
      <div className="wrap py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="body-sm max-w-[70ch]">
          {t('message')}{' '}
          <Link href="/cookie-policy" className="text-brand-ink underline underline-offset-2 hover:text-ink transition-colors">
            {t('learnMore')}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="btn btn-outline btn-sm">
            {t('decline')}
          </button>
          <button onClick={accept} className="btn btn-brand btn-sm">
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  )
}

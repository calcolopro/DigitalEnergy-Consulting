'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')

  return (
    <footer className="sec-dark">
      <div className="wrap pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <Image src="/logo-de-colored.png" alt="Digital Energy" width={300} height={300} className="h-14 w-auto mb-8 brightness-0 invert opacity-80" />
            <p className="body-sm max-w-xs">{t('desc')}</p>
          </div>
          <div className="pt-6">
            <p className="label mb-4">{t('nav')}</p>
            <ul className="space-y-2">
              <li><Link href="/" className="body-sm hover:text-sabbia transition-colors">{nav('home')}</Link></li>
              <li><Link href="/portfolio" className="body-sm hover:text-sabbia transition-colors">{nav('portfolio')}</Link></li>
              <li><Link href="/about" className="body-sm hover:text-sabbia transition-colors">{nav('about')}</Link></li>
              <li><Link href="/contatti" className="body-sm hover:text-sabbia transition-colors">{nav('contact')}</Link></li>
            </ul>
          </div>
          <div className="pt-6">
            <p className="label mb-4">{t('connect')}</p>
            <ul className="space-y-2">
              <li><a href="mailto:info@digitalenergy.solutions" className="body-sm hover:text-sabbia transition-colors">{t('email')}</a></li>
            </ul>
          </div>
        </div>
        <div className="divider-dark mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pb-4">
          <p className="body-sm text-[11px] opacity-40">&copy; 2023 Digital Energy Ltd. {t('rights')}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="body-sm text-[11px] opacity-40 hover:opacity-70 transition-opacity">{t('privacy')}</Link>
            <Link href="/cookie-policy" className="body-sm text-[11px] opacity-40 hover:opacity-70 transition-opacity">Cookie</Link>
            <Link href="/termini" className="body-sm text-[11px] opacity-40 hover:opacity-70 transition-opacity">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

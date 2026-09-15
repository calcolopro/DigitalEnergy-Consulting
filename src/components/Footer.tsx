'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { PROJECTS } from './ProjectLogos'

export default function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')

  return (
    <footer className="border-t border-hair bg-surface">
      <div className="wrap py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-5 flex items-center gap-2.5">
              <Image src="/logo-de-colored.png" alt="" width={200} height={200} className="h-8 w-8 object-contain" />
              <span className="font-display text-[15px] font-semibold tracking-[-0.03em] text-ink">
                Digital Energy
              </span>
            </div>
            <p className="body-sm max-w-xs">{t('desc')}</p>
            <div className="rule-brand mt-6" />
          </div>

          <div className="md:col-span-2">
            <p className="label mb-4">{t('nav')}</p>
            <ul className="space-y-2.5">
              {([['/', 'home'], ['/portfolio', 'portfolio'], ['/about', 'about'], ['/contatti', 'contact']] as const).map(([href, key]) => (
                <li key={href}>
                  <Link href={href} className="link-nav">{nav(key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">{nav('portfolio')}</p>
            <ul className="space-y-2.5">
              {PROJECTS.map(p => (
                <li key={p.name}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="link-nav">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4">{t('connect')}</p>
            <a href="mailto:info@digitalenergy.solutions" className="link-nav block text-[13px] [overflow-wrap:anywhere]">
              info@digitalenergy.solutions
            </a>
          </div>
        </div>

        <hr className="hair my-10" />

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="body-xs">&copy; {new Date().getFullYear()} Digital Energy Ltd. {t('rights')}</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="body-xs hover:text-ink">{t('privacy')}</Link>
            <Link href="/cookie-policy" className="body-xs hover:text-ink">Cookie</Link>
            <Link href="/termini" className="body-xs hover:text-ink">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

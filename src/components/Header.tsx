'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setDark(window.scrollY < window.innerHeight - 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-offwhite/92 backdrop-blur-lg' : ''
    }`}>
      <nav className="wrap flex items-center justify-between h-24">
        <Link href="/">
          <Image
            src={dark && !scrolled ? '/logo-de-white.png' : '/logo-de-dark.png'}
            alt="DE" width={300} height={100} className="h-20 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {([
            ['/', t('home')],
            ['/portfolio', t('portfolio')],
            ['/about', t('about')],
          ] as const).map(([href, label]) => (
            <Link key={href} href={href}
              className={`link-nav transition-colors ${dark && !scrolled ? 'text-white hover:text-sabbia' : 'text-nero/60 hover:text-nero'}`}>
              {label}
            </Link>
          ))}
          <LanguageSelector dark={dark && !scrolled} />
          <Link href="/contatti" className="btn btn-sand text-[11px] py-2 px-5">
            {t('contact')}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSelector dark={dark && !scrolled} />
          <button onClick={() => setOpen(!open)} className="w-8 h-8 flex flex-col items-center justify-center gap-[4px]" aria-label="Menu">
            {[0,1,2].map(i => (
              <span key={i} className={`w-4 h-px transition-all duration-300 ${dark && !scrolled ? 'bg-offwhite' : 'bg-nero'} ${
                open && i===0 ? 'rotate-45 translate-y-[5px]' : open && i===1 ? 'opacity-0' : open && i===2 ? '-rotate-45 -translate-y-[5px]' : ''
              }`}/>
            ))}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 top-24 bg-offwhite z-40">
          <div className="wrap py-10 flex flex-col gap-5">
            {([
              ['/', t('home')],
              ['/portfolio', t('portfolio')],
              ['/about', t('about')],
              ['/contatti', t('contact')],
            ] as const).map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="h2 hover:text-sabbia-dark transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

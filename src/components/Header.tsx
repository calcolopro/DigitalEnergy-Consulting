'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'
import Image from 'next/image'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'

const NAV = [
  ['/', 'home'],
  ['/portfolio', 'portfolio'],
  ['/about', 'about'],
] as const

export default function Header() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-hair bg-paper/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="wrap flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Digital Energy">
          <Image
            src="/logo-de-colored.png"
            alt=""
            width={200}
            height={200}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="hidden font-display text-[15px] font-semibold tracking-[-0.03em] text-ink sm:block">
            Digital Energy
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map(([href, key]) => (
            <Link
              key={href}
              href={href}
              className="link-nav"
              aria-current={pathname === href ? 'page' : undefined}
            >
              {t(key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
          <ThemeToggle />
          <Link href="/contatti" className="btn btn-primary btn-sm hidden md:inline-flex">
            {t('contact')}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md border border-hair text-ink md:hidden"
          >
            <span className="flex w-4 flex-col items-center gap-[4px]">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className={`h-px w-4 bg-current transition-all duration-300 ${
                    open && i === 0 ? 'translate-y-[5px] rotate-45'
                    : open && i === 1 ? 'opacity-0'
                    : open && i === 2 ? '-translate-y-[5px] -rotate-45'
                    : ''
                  }`}
                />
              ))}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-hair bg-paper md:hidden">
          <div className="wrap flex flex-col gap-1 py-8">
            {[...NAV, ['/contatti', 'contact'] as const].map(([href, key]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-hair py-4 font-display text-2xl font-semibold tracking-[-0.03em] text-ink"
              >
                {t(key)}
              </Link>
            ))}
            <div className="pt-6 sm:hidden">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'

const locales = [
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'bg', label: 'BG', name: 'Български' },
  { code: 'es', label: 'ES', name: 'Español' },
] as const

export default function LanguageSelector({ dark = false }: { dark?: boolean }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-[11px] font-ui tracking-wider transition-colors ${
          dark ? 'text-offwhite/40 hover:text-offwhite' : 'text-nero/40 hover:text-nero'
        }`}>
        {locales.find(l => l.code === locale)?.label}
        <svg className={`w-2 h-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-3 bg-white border border-border overflow-hidden min-w-[130px] shadow-lg z-50">
          {locales.map(l => (
            <button key={l.code}
              onClick={() => { router.replace(pathname, { locale: l.code as any }); setOpen(false) }}
              className={`w-full px-3 py-2 text-left text-[12px] flex items-center gap-2 transition-colors ${
                locale === l.code ? 'text-sabbia-dark bg-sand-bg' : 'text-grigio hover:bg-sand-bg/50'
              }`}>
              <span className="font-ui text-[10px]">{l.label}</span>
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

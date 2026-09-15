'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'

const locales = [
  { code: 'it', label: 'IT', name: 'Italiano' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'bg', label: 'BG', name: 'Български' },
] as const

export default function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="flex h-9 items-center gap-1.5 rounded-md border border-hair px-2.5 font-mono text-[11px] tracking-[0.08em] text-ink-2 transition-colors hover:border-hair-strong hover:text-ink"
      >
        {locales.find(l => l.code === locale)?.label ?? 'IT'}
        <svg className={`h-2.5 w-2.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[148px] overflow-hidden rounded-lg border border-hair bg-raised py-1 shadow-[var(--shadow)]"
        >
          {locales.map(l => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={locale === l.code}
                onClick={() => { router.replace(pathname, { locale: l.code as any }); setOpen(false) }}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-[13px] transition-colors ${
                  locale === l.code
                    ? 'bg-[var(--brand-soft)] text-brand-ink'
                    : 'text-ink-2 hover:bg-surface hover:text-ink'
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.1em] opacity-70">{l.label}</span>
                <span>{l.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

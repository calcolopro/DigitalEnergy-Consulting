'use client'

import { useEffect, useState } from 'react'
import { THEME_KEY as KEY } from '@/lib/theme'

function apply(dark: boolean) {
  const el = document.documentElement
  el.classList.toggle('dark', dark)
  el.style.colorScheme = dark ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
    setReady(true)

    // Follow the OS while the visitor has not made an explicit choice.
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystem = (e: MediaQueryListEvent) => {
      let stored: string | null = null
      try { stored = localStorage.getItem(KEY) } catch {}
      if (stored) return
      apply(e.matches)
      setDark(e.matches)
    }
    mq.addEventListener('change', onSystem)
    return () => mq.removeEventListener('change', onSystem)
  }, [])

  const toggle = () => {
    const next = !dark
    apply(next)
    setDark(next)
    try { localStorage.setItem(KEY, next ? 'dark' : 'light') } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={dark}
      title={dark ? 'Light' : 'Dark'}
      className="grid h-9 w-9 place-items-center rounded-md border border-hair text-ink-2 transition-colors hover:border-hair-strong hover:text-ink"
    >
      <span className={ready ? '' : 'opacity-0'}>
        {dark ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        )}
      </span>
    </button>
  )
}

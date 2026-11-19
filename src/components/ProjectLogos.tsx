'use client'

import { Link } from '@/i18n/routing'

type Project = {
  name: string
  href: string
  /** Page on this site (locale-aware link) instead of an external site. */
  internal?: boolean
  /** Artwork logo: separate file per theme (ink = for light bg, paper = for dark bg). */
  art?: { ink: string; paper: string; height: string }
  /** Fallback typographic wordmark. `mark` is rendered in the brand colour. */
  type?: { lead: string; mark?: string; tail?: string }
}

export const PROJECTS: Project[] = [
  {
    name: 'ORYX',
    href: 'https://www.ory-x.com',
    art: { ink: '/logos/oryx-ink.svg', paper: '/logos/oryx-paper.svg', height: 'h-[26px] md:h-[30px]' },
  },
  {
    name: 'Ibiza Amigo',
    href: 'https://ibizamigo.com',
    art: { ink: '/logos/ibizamigo-ink.png', paper: '/logos/ibizamigo-paper.png', height: 'h-[24px] md:h-[27px]' },
  },
  { name: 'Wood Design Ibiza', href: '/portfolio/wood-design', internal: true, type: { lead: 'Wood Design ', mark: 'Ibiza' } },
]

export default function ProjectLogos({ items = PROJECTS }: { items?: Project[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map(p => (
        <li key={p.name}>
          <LogoLink p={p}>
            {p.art ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.art.ink} alt={p.name} className={`logo-img dark:hidden ${p.art.height}`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.art.paper} alt="" aria-hidden="true" className={`logo-img hidden dark:block ${p.art.height}`} />
              </>
            ) : (
              <span className="logo-type">
                {p.type?.lead}
                {p.type?.mark && <em>{p.type.mark}</em>}
                {p.type?.tail}
              </span>
            )}
          </LogoLink>
        </li>
      ))}
    </ul>
  )
}

function LogoLink({ p, children }: { p: Project; children: React.ReactNode }) {
  const common = { 'aria-label': p.name, title: p.name, className: 'logo-cell group h-full' }
  if (p.internal) return <Link href={p.href} {...common}>{children}</Link>
  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer" {...common}>
      {children}
    </a>
  )
}

'use client'

type Project = {
  name: string
  href: string
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
  { name: 'Scanix', href: 'https://scanix.pro', type: { lead: 'Scan', mark: 'i', tail: 'x' } },
  { name: 'CalcoloPro+', href: 'https://calcolo-pro.com', type: { lead: 'CalcoloPro', mark: '+' } },
  { name: 'Hub DE', href: 'https://hub-de.com', type: { lead: 'Hub ', mark: 'DE' } },
]

export default function ProjectLogos({ items = PROJECTS }: { items?: Project[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {items.map(p => (
        <li key={p.name}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.name}
            title={p.name}
            className="logo-cell group h-full"
          >
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
          </a>
        </li>
      ))}
    </ul>
  )
}

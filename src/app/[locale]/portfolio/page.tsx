'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import AnimatedSection from '@/components/AnimatedSection'

const projectKeys = ['oryx', 'ibizaamigo', 'scanix', 'calcolopro', 'hubde'] as const
const projectLinks: Record<string, string> = {
  oryx: 'https://ory-x.com',
  ibizaamigo: 'https://www.ibizamigo.com',
  scanix: 'https://scanix.pro',
  calcolopro: 'https://calcolo-pro.com',
  hubde: 'https://hub-de.com',
}

export default function PortfolioPage() {
  const t = useTranslations()

  return (
    <>
      <section className="hero-sub">
        <div className="wrap relative z-10">
          <AnimatedSection>
            <p className="label mb-3">{t('projects.label')}</p>
            <h1 className="text-offwhite">{t('projects.title')}</h1>
            <p className="body text-offwhite/50 mt-4 max-w-lg">{t('projects.desc')}</p>
          </AnimatedSection>
        </div>
      </section>

      {projectKeys.map((key, i) => (
        <section key={key} className={`sec ${i % 2 === 0 ? '' : 'sec-sand'}`}>
          <div className="wrap">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <p className="label">{t(`projects.${key}.label`)}</p>
                  <span className={`text-[10px] font-ui font-semibold tracking-wider uppercase px-2 py-0.5 ${
                    key === 'ibizaamigo'
                      ? 'text-white bg-nero'
                      : 'text-sabbia-dark bg-sand-bg'
                  }`}>
                    {t(`projects.${key}.status`)}
                  </span>
                </div>
                <h2 className="mb-4">{t(`projects.${key}.title`)}</h2>
                <p className="body mb-6">{t(`projects.${key}.desc`)}</p>
                {key === 'oryx' ? (
                  <div className="flex flex-wrap gap-3">
                    <a href={projectLinks[key]} target="_blank" rel="noopener noreferrer"
                      className="link">Visita il sito &#8599;</a>
                    <a href="https://apps.apple.com/app/oryx/id6504382482" target="_blank" rel="noopener noreferrer"
                      className="link">App Store &#8599;</a>
                  </div>
                ) : (
                  <a href={projectLinks[key]} target="_blank" rel="noopener noreferrer"
                    className="link">Visita il sito &#8599;</a>
                )}
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {(t.raw(`projects.${key}.tags`) as string[]).map((tag: string, j: number) => (
                    <span key={j} className="project-tag">{tag}</span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <section className="sec sec-dark">
        <div className="wrap text-center">
          <AnimatedSection>
            <h2 className="mb-4">{t('cta.title')}</h2>
            <p className="body max-w-md mx-auto mb-8">{t('cta.desc')}</p>
            <Link href="/contatti" className="btn btn-sand">{t('cta.button')} &rarr;</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

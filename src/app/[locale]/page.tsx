'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import AnimatedSection from '@/components/AnimatedSection'

const whatKeys = ['ideation', 'development', 'launch', 'investment'] as const
const projectKeys = ['oryx', 'ibizaamigo', 'scanix', 'calcolopro', 'hubde'] as const

export default function HomePage() {
  const t = useTranslations()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <AnimatedSection>
            <p className="label mb-6">{t('hero.label')}</p>
            <div className="line mx-auto mb-8" />
            <h1>{t('hero.title')}</h1>
            <p className="body">{t('hero.desc')}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/portfolio" className="btn btn-sand">{t('hero.cta1')}</Link>
              <Link href="/contatti" className="btn btn-outline">{t('hero.cta2')}</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ORYX BANNER */}
      <section className="oryx-banner">
        <div className="wrap">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-1">
              <div className="flex items-center gap-4">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="label mb-1">{t('oryx_cta.label')}</p>
                  <p className="text-offwhite font-serif text-lg md:text-xl">{t('oryx_cta.title')}</p>
                </div>
              </div>
              <a
                href="https://apps.apple.com/app/oryx/id6504382482"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sand text-[11px] py-2.5 px-6 whitespace-nowrap"
              >
                {t('oryx_cta.button')} &#8599;
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NEWS — IBIZA AMIGO LAUNCH */}
      <section className="sec sec-sand">
        <div className="wrap">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <p className="label">{t('news.label')}</p>
                  <span className="text-[10px] font-ui font-semibold tracking-wider uppercase text-white bg-nero px-2.5 py-1">
                    {t('news.badge')}
                  </span>
                </div>
                <h2 className="mb-4">{t('news.title')}</h2>
                <p className="body mb-6">{t('news.desc')}</p>
                <Link href="/portfolio" className="link">{t('news.cta')} &rarr;</Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="stat-num mb-2">1<span>.</span>05</p>
                  <p className="label">2026</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sec">
        <div className="wrap">
          <div className="text-center mb-14">
            <AnimatedSection>
              <p className="label mb-3">{t('what.label')}</p>
              <h2 className="mb-4">{t('what.title')}</h2>
              <p className="body max-w-xl mx-auto">{t('what.desc')}</p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {whatKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.08}>
                <div className="card group h-full">
                  <div className="card-accent" />
                  <h3 className="mb-2 group-hover:text-sabbia-dark transition-colors">{t(`what.items.${key}.title`)}</h3>
                  <p className="body-sm">{t(`what.items.${key}.desc`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider wrap" />

      {/* PROJECTS */}
      <section className="sec">
        <div className="wrap">
          <div className="text-center mb-14">
            <AnimatedSection>
              <p className="label mb-3">{t('projects.label')}</p>
              <h2 className="mb-4">{t('projects.title')}</h2>
              <p className="body max-w-lg mx-auto">{t('projects.desc')}</p>
            </AnimatedSection>
          </div>

          {/* Top row: 3 featured projects */}
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {projectKeys.slice(0, 3).map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.08}>
                <div className="project group h-full">
                  <div className="flex items-center justify-between mb-4">
                    <p className="label">{t(`projects.${key}.label`)}</p>
                    <span className={`text-[10px] font-ui font-semibold tracking-wider uppercase px-2 py-0.5 ${
                      key === 'ibizaamigo'
                        ? 'text-white bg-nero'
                        : 'text-sabbia-dark bg-sand-bg'
                    }`}>
                      {t(`projects.${key}.status`)}
                    </span>
                  </div>
                  <h3 className="mb-2 group-hover:text-sabbia-dark transition-colors">
                    {t(`projects.${key}.title`)}
                  </h3>
                  <p className="body-sm">{t(`projects.${key}.desc`)}</p>
                  <div className="mt-4 flex flex-wrap">
                    {(t.raw(`projects.${key}.tags`) as string[]).map((tag: string, j: number) => (
                      <span key={j} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom row: 2 projects */}
          <div className="grid md:grid-cols-2 gap-4">
            {projectKeys.slice(3).map((key, i) => (
              <AnimatedSection key={key} delay={(i + 3) * 0.08}>
                <div className="project group h-full">
                  <div className="flex items-center justify-between mb-4">
                    <p className="label">{t(`projects.${key}.label`)}</p>
                    <span className="text-[10px] font-ui font-semibold tracking-wider uppercase text-sabbia-dark bg-sand-bg px-2 py-0.5">
                      {t(`projects.${key}.status`)}
                    </span>
                  </div>
                  <h3 className="mb-2 group-hover:text-sabbia-dark transition-colors">
                    {t(`projects.${key}.title`)}
                  </h3>
                  <p className="body-sm">{t(`projects.${key}.desc`)}</p>
                  <div className="mt-4 flex flex-wrap">
                    {(t.raw(`projects.${key}.tags`) as string[]).map((tag: string, j: number) => (
                      <span key={j} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn btn-ghost">{t('about.more')} &rarr;</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS */}
      <section className="sec sec-dark">
        <div className="wrap">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { v: '8', s: '', l: t('stats.products') },
                { v: '8', s: '+', l: t('stats.countries') },
                { v: '99.9', s: '%', l: t('stats.uptime') },
                { v: '2023', s: '', l: t('stats.year') },
              ].map((st, i) => (
                <div key={i}>
                  <p className="stat-num">{st.v}<span>{st.s}</span></p>
                  <p className="body-sm mt-2">{st.l}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="sec sec-sand">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="label mb-3">{t('about.label')}</p>
              <h2 className="mb-4">{t('about.title')}</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="body mb-4">{t('about.desc1')}</p>
              <p className="body-sm mb-6">{t('about.desc2')}</p>
              <Link href="/about" className="link">{t('about.more')} &rarr;</Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec">
        <div className="wrap text-center">
          <AnimatedSection>
            <h2 className="mb-4">{t('cta.title')}</h2>
            <p className="body max-w-md mx-auto mb-8">{t('cta.desc')}</p>
            <Link href="/contatti" className="btn btn-dark">{t('cta.button')} &rarr;</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

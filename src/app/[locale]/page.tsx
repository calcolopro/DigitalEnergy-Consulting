'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectLogos from '@/components/ProjectLogos'

const whatKeys = ['ideation', 'development', 'launch', 'investment'] as const

export default function HomePage() {
  const t = useTranslations()

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px]"
          style={{ background: 'radial-gradient(circle at 35% 50%, var(--gold), transparent 60%), radial-gradient(circle at 70% 50%, var(--brand), transparent 62%)' }}
        />
        <div className="wrap relative">
          <AnimatedSection>
            <p className="label mb-5">{t('hero.label')}</p>
            <h1 className="display max-w-[16ch]">{t('hero.title')}</h1>
            <div className="rule-brand mt-7" />
            <p className="lead mt-7 max-w-[54ch]">{t('hero.desc')}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/portfolio" className="btn btn-primary">{t('hero.cta1')}</Link>
              <Link href="/contatti" className="btn btn-outline">{t('hero.cta2')}</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PROJECTS — logo wall ===== */}
      <section className="sec-tight border-y border-hair bg-surface">
        <div className="wrap">
          <AnimatedSection>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label mb-2">{t('projects.label')}</p>
                <h2>{t('projects.title')}</h2>
              </div>
              <Link href="/portfolio" className="link">{t('about.more')} &rarr;</Link>
            </div>
            <ProjectLogos />
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ORYX — live on the App Store ===== */}
      <section className="sec-tight">
        <div className="wrap">
          <AnimatedSection>
            <div className="card flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <span className="mt-2 inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand" />
                <div>
                  <p className="label label-brand mb-1.5">{t('oryx_cta.label')}</p>
                  <p className="font-display text-lg font-semibold tracking-[-0.03em] text-ink md:text-xl">
                    {t('oryx_cta.title')}
                  </p>
                  <p className="body-sm mt-1">{t('oryx_cta.desc')}</p>
                </div>
              </div>
              <a
                href="https://apps.apple.com/app/oryx-partner/id6758917274"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand shrink-0"
              >
                {t('oryx_cta.button')} &#8599;
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="sec pt-4">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <AnimatedSection>
                <p className="label mb-3">{t('what.label')}</p>
                <h2 className="mb-4">{t('what.title')}</h2>
                <p className="body max-w-sm">{t('what.desc')}</p>
              </AnimatedSection>
            </div>

            <div className="md:col-span-8">
              <ul className="border-t border-hair">
                {whatKeys.map((key, i) => (
                  <li key={key}>
                    <AnimatedSection delay={i * 0.06}>
                      <div className="group grid gap-2 border-b border-hair py-6 sm:grid-cols-[auto_1fr] sm:gap-8">
                        <span className="step-num pt-1">{String(i + 1).padStart(2, '0')}</span>
                        <div>
                          <h3 className="mb-1.5 transition-colors group-hover:text-brand-ink">
                            {t(`what.items.${key}.title`)}
                          </h3>
                          <p className="body-sm max-w-[62ch]">{t(`what.items.${key}.desc`)}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AI AGENTS ===== */}
      <section className="sec border-t border-hair bg-surface">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <AnimatedSection>
                <p className="label mb-3">{t('agents.label')}</p>
                <h2 className="mb-5">{t('agents.title')}</h2>
                <div className="rule-brand mb-6" />
                <p className="body max-w-[46ch]">{t('agents.desc')}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="mt-8 rounded-lg border border-hair bg-raised p-5">
                  <p className="label label-brand mb-2 flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-brand" />
                    {t('agents.proofLabel')}
                  </p>
                  <p className="body-sm text-ink">{t('agents.proof')}</p>
                  <a
                    href="https://ibizamigo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link mt-3"
                  >
                    ibizamigo.com &#8599;
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <Link href="/contatti" className="btn btn-brand mt-7">
                  {t('agents.cta')} &rarr;
                </Link>
              </AnimatedSection>
            </div>

            <div className="md:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {(['a1', 'a2', 'a3', 'a4'] as const).map((key, i) => (
                  <li key={key} className="h-full">
                    <AnimatedSection delay={i * 0.06} className="h-full">
                      <div className="card h-full">
                        <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="mb-2 mt-3">{t(`agents.items.${key}.title`)}</h3>
                        <p className="body-sm">{t(`agents.items.${key}.desc`)}</p>
                      </div>
                    </AnimatedSection>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="sec-tight border-y border-hair">
        <div className="wrap">
          <AnimatedSection>
            <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { v: '8', s: '', l: t('stats.products') },
                { v: '8', s: '+', l: t('stats.countries') },
                { v: '99.9', s: '%', l: t('stats.uptime') },
                { v: '2023', s: '', l: t('stats.year') },
              ].map(st => (
                <div key={st.l}>
                  <dt className="stat-num">{st.v}<span>{st.s}</span></dt>
                  <dd className="label mt-2.5">{st.l}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <AnimatedSection>
                <p className="label mb-3">{t('about.label')}</p>
                <h2>{t('about.title')}</h2>
              </AnimatedSection>
            </div>
            <div className="md:col-span-7">
              <AnimatedSection delay={0.08}>
                <p className="lead mb-5">{t('about.desc1')}</p>
                <p className="body mb-7 max-w-[64ch]">{t('about.desc2')}</p>
                <Link href="/about" className="link">{t('about.more')} &rarr;</Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <AnimatedSection>
            <div className="rounded-xl border border-hair bg-surface px-6 py-12 text-center md:px-12 md:py-16">
              <h2 className="mx-auto max-w-[20ch]">{t('cta.title')}</h2>
              <p className="body mx-auto mt-4 max-w-[52ch]">{t('cta.desc')}</p>
              <Link href="/contatti" className="btn btn-brand mt-8">{t('cta.button')} &rarr;</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

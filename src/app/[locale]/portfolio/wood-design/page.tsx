'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import AnimatedSection from '@/components/AnimatedSection'

const DEMO_URL = 'https://wood-design-demo.wood-design-ibiza.workers.dev'

const featureKeys = ['obra', 'docs', 'pay', 'hours', 'ai', 'close'] as const

export default function WoodDesignPage() {
  const t = useTranslations()
  const facts = t.raw('woodDesign.facts') as string[]
  const buildTypes = t.raw('woodDesign.buildTypes') as string[]

  return (
    <>
      {/* ===== HEAD + LIVE DEMO ===== */}
      <section className="page-head">
        <div className="wrap">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <AnimatedSection>
                <p className="label mb-3">{t('woodDesign.label')}</p>
                <h1>{t('woodDesign.title')}</h1>
                <div className="rule-brand mt-6" />
                <p className="lead mt-6 max-w-[52ch]">{t('woodDesign.lead')}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {facts.map(f => (
                    <li key={f} className="rounded-full border border-hair px-3 py-1.5 text-[0.8rem] text-ink-2">
                      {f}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            <div className="md:col-span-6">
              <AnimatedSection delay={0.1}>
                <figure className="mx-auto w-full max-w-[340px]">
                  <p className="label label-brand mb-3 flex items-center gap-2">
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand" />
                    {t('woodDesign.demoLabel')}
                  </p>
                  {/* Phone frame with the real demo running inside */}
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.6rem] border-[10px] border-[#1b1d1c] bg-[#1b1d1c] shadow-2xl ring-1 ring-black/10 dark:ring-white/20">
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-2 z-10 h-[22px] w-[34%] -translate-x-1/2 rounded-full bg-[#1b1d1c]"
                    />
                    <iframe
                      src={DEMO_URL}
                      title={t('woodDesign.demoLabel')}
                      loading="lazy"
                      className="h-full w-full rounded-[1.9rem] bg-white"
                    />
                  </div>
                  <figcaption className="body-xs mt-4 text-center">
                    {t('woodDesign.demoNote')}{' '}
                    <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="link">
                      {t('woodDesign.openDemo')} &#8599;
                    </a>
                  </figcaption>
                </figure>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="sec border-t border-hair bg-surface">
        <div className="wrap">
          <AnimatedSection>
            <p className="label mb-3">{t('woodDesign.featuresLabel')}</p>
            <h2 className="mb-10">{t('woodDesign.featuresTitle')}</h2>
          </AnimatedSection>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureKeys.map((key, i) => (
              <li key={key}>
                <AnimatedSection delay={i * 0.05}>
                  <div className="card h-full">
                    <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mb-2 mt-3">{t(`woodDesign.items.${key}.title`)}</h3>
                    <p className="body-sm">{t(`woodDesign.items.${key}.desc`)}</p>
                  </div>
                </AnimatedSection>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SIGNED ON EVERY DOCUMENT ===== */}
      <section className="sec-tight">
        <div className="wrap">
          <AnimatedSection>
            <div className="grid gap-6 border-y border-hair py-10 md:grid-cols-12">
              <h2 className="md:col-span-5">{t('woodDesign.signTitle')}</h2>
              <p className="body md:col-span-7">{t('woodDesign.signDesc')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <AnimatedSection>
            <div className="rounded-xl border border-hair bg-surface px-6 py-12 text-center md:px-12 md:py-16">
              <h2 className="mx-auto max-w-[22ch]">{t('woodDesign.ctaTitle')}</h2>
              <p className="body mx-auto mt-4 max-w-[52ch]">{t('woodDesign.ctaDesc')}</p>
              <ul className="mx-auto mt-8 flex max-w-[60ch] flex-wrap justify-center gap-2">
                {buildTypes.map(b => (
                  <li key={b} className="rounded-full border border-hair bg-paper px-3.5 py-1.5 text-[0.85rem] text-ink">
                    {b}
                  </li>
                ))}
              </ul>
              <p className="label mt-8">{t('woodDesign.pricing')}</p>
              <Link href="/contatti" className="btn btn-brand mt-8">{t('cta.button')} &rarr;</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

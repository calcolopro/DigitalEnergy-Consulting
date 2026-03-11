'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import AnimatedSection from '@/components/AnimatedSection'

const valueKeys = ['ownership', 'excellence', 'speed', 'global'] as const
const stepKeys = ['s1', 's2', 's3', 's4'] as const

export default function AboutPage() {
  const t = useTranslations()

  return (
    <>
      <section className="hero-sub">
        <div className="wrap relative z-10">
          <AnimatedSection>
            <p className="label mb-3">{t('about.label')}</p>
            <h1 className="text-offwhite">{t('about.pageTitle')}</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="sec">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2>{t('about.title')}</h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="body mb-4">{t('about.desc1')}</p>
              <p className="body-sm mb-4">{t('about.desc2')}</p>
              <p className="body-sm">{t('about.desc3')}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider wrap" />

      {/* Values */}
      <section className="sec sec-sand">
        <div className="wrap">
          <div className="text-center mb-12">
            <AnimatedSection>
              <p className="label mb-3">{t('about.values.label')}</p>
              <h2>{t('about.values.title')}</h2>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {valueKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.08}>
                <div className="card h-full">
                  <div className="card-accent" />
                  <h3 className="text-sabbia-dark mb-2">{t(`about.values.${key}.title`)}</h3>
                  <p className="body-sm">{t(`about.values.${key}.desc`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec sec-dark">
        <div className="wrap">
          <div className="text-center mb-12">
            <AnimatedSection>
              <p className="label mb-3">{t('about.process.label')}</p>
              <h2>{t('about.process.title')}</h2>
            </AnimatedSection>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {stepKeys.map((key, i) => (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className="text-center">
                  <p className="label text-sabbia mb-3">{t(`about.process.steps.${key}.num`)}</p>
                  <h3 className="text-offwhite mb-2">{t(`about.process.steps.${key}.title`)}</h3>
                  <p className="body-sm">{t(`about.process.steps.${key}.desc`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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

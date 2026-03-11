'use client'

import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/AnimatedSection'

const sectionKeys = ['general', 'ip', 'liability', 'contact'] as const

export default function TermsPage() {
  const t = useTranslations('terms')
  return (
    <>
      <section className="hero-sub">
        <div className="wrap relative z-10">
          <AnimatedSection>
            <p className="label mb-3">LEGAL</p>
            <h1 className="text-offwhite">{t('title')}</h1>
            <p className="body-sm text-offwhite/40 mt-3">{t('lastUpdate')}: 2025-01-01</p>
          </AnimatedSection>
        </div>
      </section>
      <section className="sec">
        <div className="wrap-sm space-y-10">
          {sectionKeys.map((key, i) => (
            <AnimatedSection key={key} delay={i * 0.04}>
              <h2 className="mb-3">{t(`sections.${key}.title`)}</h2>
              <p className="body-sm">{t(`sections.${key}.content`)}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  )
}

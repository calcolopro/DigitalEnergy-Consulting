'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import AnimatedSection from '@/components/AnimatedSection'
import ProjectLogos from '@/components/ProjectLogos'

export default function PortfolioPage() {
  const t = useTranslations()

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <AnimatedSection>
            <p className="label mb-3">{t('projects.label')}</p>
            <h1>{t('projects.title')}</h1>
            <div className="rule-brand mt-6" />
            <p className="lead mt-6 max-w-[56ch]">{t('projects.desc')}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <AnimatedSection>
            <ProjectLogos />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-hair pt-10">
              <p className="body max-w-[46ch]">{t('cta.desc')}</p>
              <Link href="/contatti" className="btn btn-brand">{t('cta.button')} &rarr;</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

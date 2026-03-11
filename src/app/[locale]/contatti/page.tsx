'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/AnimatedSection'

const interestKeys = ['partnership', 'investment', 'tech', 'other'] as const

export default function ContactPage() {
  const t = useTranslations()
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const subject = `[DE] ${form.name} — ${form.interest || 'General'}`
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0ACompany: ${form.company || 'N/A'}%0D%0AInterest: ${form.interest || 'N/A'}%0D%0A%0D%0A${form.message}`
    window.open(`mailto:info@digitalenergy.solutions?subject=${encodeURIComponent(subject)}&body=${body}`, '_self')
    await new Promise(r => setTimeout(r, 800))
    setSending(false)
    setSent(true)
  }

  return (
    <>
      <section className="hero-sub">
        <div className="wrap relative z-10">
          <AnimatedSection>
            <p className="label mb-3">{t('contact.label')}</p>
            <h1 className="text-offwhite">{t('contact.pageTitle')}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="body mb-10">{t('contact.desc')}</p>
              <div className="space-y-6">
                <div>
                  <p className="label mb-2">{t('contact.email')}</p>
                  <a href="mailto:info@digitalenergy.solutions" className="link">info@digitalenergy.solutions</a>
                </div>
                <div>
                  <p className="label mb-2">{t('contact.response')}</p>
                  <p className="body-sm" style={{ color: '#232323' }}>{t('contact.responseVal')}</p>
                </div>
                <div>
                  <p className="label mb-2">{t('contact.location')}</p>
                  <p className="body-sm" style={{ color: '#232323' }}>{t('contact.locationVal')}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              {sent ? (
                <div className="card text-center py-14">
                  <p className="label text-sabbia-dark mb-3">&check;</p>
                  <h3 className="mb-2">{t('contact.form.sent')}</h3>
                  <p className="body-sm mb-6">{t('contact.form.sentDesc')}</p>
                  <button onClick={() => { setSent(false); setForm({name:'',email:'',company:'',interest:'',message:''}) }}
                    className="btn btn-ghost text-[11px]">{t('contact.form.another')}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="label block mb-2">{t('contact.form.name')} *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="form-input" placeholder={t('contact.form.namePh')} />
                  </div>
                  <div>
                    <label className="label block mb-2">{t('contact.form.email')} *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="form-input" placeholder={t('contact.form.emailPh')} />
                  </div>
                  <div>
                    <label className="label block mb-2">{t('contact.form.company')}</label>
                    <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                      className="form-input" placeholder={t('contact.form.companyPh')} />
                  </div>
                  <div>
                    <label className="label block mb-2">{t('contact.form.interest')}</label>
                    <select value={form.interest} onChange={e => setForm({...form, interest: e.target.value})}
                      className="form-input cursor-pointer appearance-none">
                      <option value="">{t('contact.form.interestPh')}</option>
                      {interestKeys.map(k => (
                        <option key={k} value={t(`contact.form.interests.${k}`)}>{t(`contact.form.interests.${k}`)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label block mb-2">{t('contact.form.message')} *</label>
                    <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="form-input resize-none" placeholder={t('contact.form.messagePh')} />
                  </div>
                  <button type="submit" disabled={sending} className="btn btn-dark w-full justify-center disabled:opacity-50">
                    {sending ? t('contact.form.sending') : t('contact.form.send')}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

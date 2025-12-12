'use client'

import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'STRATEGY & INNOVATION',
    desc: 'We help businesses navigate complex markets with clarity. Actionable roadmaps for sustainable growth.',
    features: ['Business model innovation', 'Market entry strategy', 'Competitive positioning', 'Digital transformation'],
  },
  {
    num: '02',
    title: 'DIGITAL MARKETING',
    desc: 'Data-driven marketing that delivers results. Campaigns that connect and convert.',
    features: ['Marketing strategy', 'Performance marketing', 'Content strategy', 'Analytics & optimization'],
  },
  {
    num: '03',
    title: 'BRAND CONSULTING',
    desc: 'Building distinctive identities that resonate. Stand out in the marketplace.',
    features: ['Brand strategy', 'Visual identity', 'Brand positioning', 'Messaging & voice'],
  },
  {
    num: '04',
    title: 'MARKET RESEARCH',
    desc: 'Deep insights to inform decisions. Uncover opportunities through rigorous analysis.',
    features: ['Market analysis', 'Competitor research', 'Consumer insights', 'Trend forecasting'],
  },
  {
    num: '05',
    title: 'REAL ESTATE ADVISORY',
    desc: 'Strategic guidance for property investments and portfolio optimization.',
    features: ['Investment analysis', 'Market assessment', 'Development consulting', 'Deal structuring'],
  },
  {
    num: '06',
    title: 'PROJECT FUNDING',
    desc: 'Connecting visionary projects with the right investors.',
    features: ['Investor matching', 'Pitch preparation', 'Financial modeling', 'Deal negotiation'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-de-gray">
        <div className="container-brutal">
          <span className="number-brutal">OUR SERVICES</span>
          <h1 className="text-massive text-white mt-4">
            WHAT<br />
            WE <span className="text-gold">DO</span><span className="text-green">.</span>
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section>
        {services.map((service, index) => (
          <div key={index} className="section-brutal">
            <div className="container-brutal">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <span className="text-de-gold font-mono text-sm">{service.num}</span>
                  <h2 className="text-huge text-white mt-4 mb-6">
                    {service.title.split(' ')[0]}<br />
                    <span className="text-gold">{service.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-de-light text-xl leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-de-muted">
                        <span className="w-2 h-2 bg-de-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-brutal border-b-0">
        <div className="container-brutal text-center">
          <h2 className="text-huge text-white mb-8">
            LET&apos;S <span className="text-green">WORK</span><br />
            TOGETHER<span className="text-gold">.</span>
          </h2>
          <Link href="/contact" className="btn-brutal">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

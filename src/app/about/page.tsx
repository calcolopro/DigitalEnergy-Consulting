'use client'

import Link from 'next/link'
import Image from 'next/image'

const values = [
  { title: 'STRATEGIC', desc: 'We look beyond the obvious to create lasting advantages.' },
  { title: 'PARTNERSHIP', desc: 'We work as an extension of your team.' },
  { title: 'RESULTS', desc: 'Every recommendation delivers measurable impact.' },
  { title: 'GLOBAL', desc: 'International experience, local expertise.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-de-gray">
        <div className="container-brutal">
          <span className="number-brutal">ABOUT US</span>
          <h1 className="text-massive text-white mt-4">
            BOUTIQUE<br />
            <span className="text-gold">CONSULTING</span><span className="text-green">.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-brutal">
        <div className="container-brutal">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Image 
                src="/logo-de-white.png" 
                alt="Digital Energy" 
                width={200} 
                height={80}
                className="h-16 w-auto mb-12 opacity-80"
              />
              <h2 className="text-huge text-white mb-8">
                NOT JUST<br />
                ADVICE<span className="text-gold">.</span><br />
                <span className="text-green">TRANSFORMATION</span><span className="text-gold">.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-de-light text-xl leading-relaxed mb-6">
                Digital Energy was born from the need for a deeper, 
                more strategic approach in today&apos;s business world.
              </p>
              <p className="text-de-muted leading-relaxed mb-6">
                We combine international experience, market intuition, 
                and cross-industry expertise to deliver solutions that 
                truly make an impact.
              </p>
              <p className="text-de-muted leading-relaxed">
                We work as an internal partner to our clients — with 
                long-term vision, a personal approach, and a relentless 
                drive for innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-brutal">
        <div className="container-brutal">
          <span className="number-brutal">OUR VALUES</span>
          <h2 className="text-huge text-white mt-4 mb-16">
            WHAT <span className="text-green">GUIDES</span> US<span className="text-gold">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-0">
            {values.map((value, index) => (
              <div key={index} className="card-brutal">
                <h3 className="text-large text-gold mb-4">{value.title}</h3>
                <p className="text-de-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-brutal">
        <div className="container-brutal">
          <span className="number-brutal">HOW WE WORK</span>
          <h2 className="text-huge text-white mt-4 mb-16">
            OUR <span className="text-gold">APPROACH</span><span className="text-green">.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-massive text-gold mb-4">01</p>
              <h3 className="text-large text-white mb-4">UNDERSTAND</h3>
              <p className="text-de-muted">Deep dive into your business, market, and goals.</p>
            </div>
            <div className="text-center">
              <p className="text-massive text-green mb-4">02</p>
              <h3 className="text-large text-white mb-4">STRATEGIZE</h3>
              <p className="text-de-muted">Develop tailored solutions based on data and insight.</p>
            </div>
            <div className="text-center">
              <p className="text-massive text-gold mb-4">03</p>
              <h3 className="text-large text-white mb-4">EXECUTE</h3>
              <p className="text-de-muted">Support implementation and measure results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-brutal border-b-0">
        <div className="container-brutal text-center">
          <h2 className="text-huge text-white mb-8">
            LET&apos;S <span className="text-gold">TALK</span><span className="text-green">.</span>
          </h2>
          <Link href="/contact" className="btn-brutal">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

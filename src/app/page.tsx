'use client'

import Link from 'next/link'

const services = [
  { num: '01', title: 'Strategy', desc: 'Business model innovation & growth roadmaps' },
  { num: '02', title: 'Marketing', desc: 'Data-driven campaigns that convert' },
  { num: '03', title: 'Brand', desc: 'Distinctive identities that resonate' },
  { num: '04', title: 'Research', desc: 'Deep market insights for smart decisions' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 border-b border-de-gray">
        <div className="container-brutal py-20">
          <div className="mb-8">
            <span className="number-brutal">STRATEGIC CONSULTING</span>
          </div>
          
          <h1 className="text-massive text-white mb-8">
            WE HELP<br />
            <span className="text-gold">BUSINESSES</span><br />
            GROW<span className="text-green">.</span>
          </h1>
          
          <div className="max-w-xl mb-12">
            <p className="text-de-light text-xl leading-relaxed">
              Boutique consulting firm specializing in strategic planning, 
              market intelligence, and business transformation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-brutal">
              Start a Project
            </Link>
            <Link href="/services" className="btn-brutal-outline">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-6 border-b border-de-gray overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mr-8">
              <span className="text-de-muted text-sm uppercase tracking-widest">Strategy</span>
              <span className="text-gold">◆</span>
              <span className="text-de-muted text-sm uppercase tracking-widest">Innovation</span>
              <span className="text-green">◆</span>
              <span className="text-de-muted text-sm uppercase tracking-widest">Growth</span>
              <span className="text-gold">◆</span>
              <span className="text-de-muted text-sm uppercase tracking-widest">Marketing</span>
              <span className="text-green">◆</span>
              <span className="text-de-muted text-sm uppercase tracking-widest">Brand</span>
              <span className="text-gold">◆</span>
              <span className="text-de-muted text-sm uppercase tracking-widest">Research</span>
              <span className="text-green">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section-brutal">
        <div className="container-brutal">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="mb-8 md:mb-0">
              <span className="number-brutal">ABOUT US</span>
              <h2 className="text-huge text-white mt-4">
                NOT JUST<br />
                MARKETING<span className="text-gold">.</span><br />
                <span className="text-green">TRANSFORMATION</span><span className="text-gold">.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-start pt-4">
              <p className="text-de-light text-lg leading-relaxed mb-6">
                Digital Energy was born from the need for a deeper, more strategic 
                approach. We combine international experience with market intuition 
                to deliver solutions that truly make an impact.
              </p>
              <p className="text-de-muted leading-relaxed mb-8">
                We work as an internal partner to our clients — with long-term 
                vision, a personal approach, and a drive for innovation.
              </p>
              <Link href="/about" className="link-brutal inline-block w-fit">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-brutal">
        <div className="container-brutal">
          <div className="mb-16">
            <span className="number-brutal">WHAT WE DO</span>
            <h2 className="text-huge text-white mt-4">
              SERVICES<span className="text-gold">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card-brutal group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-de-gold font-mono text-sm">{service.num}</span>
                </div>
                <h3 className="text-large text-white mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-de-muted">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="btn-brutal-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-brutal">
        <div className="container-brutal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-massive text-gold">10<span className="text-green">+</span></p>
              <p className="text-de-muted text-sm uppercase tracking-widest mt-2">Years</p>
            </div>
            <div className="text-center">
              <p className="text-massive text-white">50<span className="text-gold">+</span></p>
              <p className="text-de-muted text-sm uppercase tracking-widest mt-2">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-massive text-green">98<span className="text-gold">%</span></p>
              <p className="text-de-muted text-sm uppercase tracking-widest mt-2">Success</p>
            </div>
            <div className="text-center">
              <p className="text-massive text-white">24<span className="text-green">h</span></p>
              <p className="text-de-muted text-sm uppercase tracking-widest mt-2">Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="section-brutal">
        <div className="container-brutal">
          <div className="card-brutal p-12 md:p-20">
            <span className="number-brutal">TECH PARTNER</span>
            <h2 className="text-huge text-white mt-4 mb-6">
              NEED <span className="text-green">SOFTWARE</span><span className="text-gold">?</span>
            </h2>
            <p className="text-de-light text-lg max-w-2xl mb-8">
              For technical implementation, we partner with Hub Digital Energy — 
              our dedicated technology arm for SaaS, automation, and custom development.
            </p>
            <a 
              href="https://hub-de.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal-outline inline-flex items-center gap-2"
            >
              Visit Hub DE
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-brutal border-b-0">
        <div className="container-brutal text-center">
          <h2 className="text-massive text-white mb-8">
            READY<span className="text-gold">?</span>
          </h2>
          <p className="text-de-light text-xl max-w-xl mx-auto mb-12">
            Let&apos;s discuss how we can help you achieve your strategic goals.
          </p>
          <Link href="/contact" className="btn-brutal">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-de-gray">
        <div className="container-brutal">
          <span className="number-brutal">GET IN TOUCH</span>
          <h1 className="text-massive text-white mt-4">
            LET&apos;S<br />
            <span className="text-gold">TALK</span><span className="text-green">.</span>
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-brutal border-b-0">
        <div className="container-brutal">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <p className="text-de-light text-xl leading-relaxed mb-12">
                Ready to explore how we can help your business? 
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-de-muted text-sm uppercase tracking-widest mb-2">Email</p>
                  <a href="mailto:info@digitalenergy.solutions" className="text-gold text-xl link-brutal">
                    info@digitalenergy.solutions
                  </a>
                </div>
                <div>
                  <p className="text-de-muted text-sm uppercase tracking-widest mb-2">Response Time</p>
                  <p className="text-white text-xl">&lt; 24 hours</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="card-brutal p-12 text-center">
                  <p className="text-massive text-green mb-4">✓</p>
                  <h3 className="text-large text-white mb-4">MESSAGE SENT</h3>
                  <p className="text-de-muted mb-8">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', company: '', message: '' })
                    }}
                    className="btn-brutal-outline"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-de-muted text-sm uppercase tracking-widest mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-de-gray text-white text-lg placeholder-de-muted focus:outline-none focus:border-de-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-de-muted text-sm uppercase tracking-widest mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-de-gray text-white text-lg placeholder-de-muted focus:outline-none focus:border-de-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-de-muted text-sm uppercase tracking-widest mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-de-gray text-white text-lg placeholder-de-muted focus:outline-none focus:border-de-gold transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-de-muted text-sm uppercase tracking-widest mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-de-gray text-white text-lg placeholder-de-muted focus:outline-none focus:border-de-gold transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-brutal w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

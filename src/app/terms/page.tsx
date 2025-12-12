export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-de-gray">
        <div className="container-brutal">
          <span className="number-brutal">LEGAL</span>
          <h1 className="text-massive text-white mt-4">
            TERMS OF<br />
            <span className="text-gold">SERVICE</span><span className="text-green">.</span>
          </h1>
          <p className="text-de-muted mt-6">Last updated: November 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-brutal border-b-0">
        <div className="container-brutal max-w-4xl">
          <div className="space-y-12">
            
            <div>
              <h2 className="text-large text-white mb-4">1. GENERAL INFORMATION</h2>
              <p className="text-de-light leading-relaxed">
                This website is owned by <strong className="text-white">Digital Energy Ltd</strong>, 
                a company headquartered in Bulgaria. Use of this website implies acceptance 
                of these Terms of Service.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">2. SERVICES OFFERED</h2>
              <p className="text-de-light leading-relaxed mb-4">
                Digital Energy Ltd offers strategic consulting services including:
              </p>
              <ul className="text-de-light space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Business strategy and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Marketing and brand consulting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Market research and intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Digital transformation advisory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>E-commerce and real estate consulting</span>
                </li>
              </ul>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">3. QUOTE REQUESTS</h2>
              <p className="text-de-light leading-relaxed">
                Information provided through the contact form is used exclusively to prepare 
                a customized proposal. Submitting a request does not constitute a contractual 
                commitment from either party. Quotes are valid for 30 days from the date of 
                issue, unless otherwise indicated.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">4. INTELLECTUAL PROPERTY</h2>
              <p className="text-de-light leading-relaxed">
                All content on this website (text, graphics, logos, images, code) is the property 
                of Digital Energy Ltd or their respective owners and is protected by copyright laws. 
                Reproduction, distribution, or use without written authorization is prohibited.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">5. LIMITATION OF LIABILITY</h2>
              <p className="text-de-light leading-relaxed">
                Digital Energy Ltd strives to keep website information accurate and up-to-date, 
                but does not guarantee the completeness or accuracy of the content. We are not 
                responsible for any direct or indirect damages arising from the use of the website 
                or the inability to access it.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">6. EXTERNAL LINKS</h2>
              <p className="text-de-light leading-relaxed">
                The website may contain links to external websites. We are not responsible 
                for the content, privacy policies, or practices of such websites. 
                Access to external sites is at your own risk.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">7. CHANGES TO TERMS</h2>
              <p className="text-de-light leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. 
                Changes will be effective from the date of publication on the website. 
                Continued use of the website after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">8. APPLICABLE LAW</h2>
              <p className="text-de-light leading-relaxed">
                These Terms of Service are governed by Bulgarian law. For any disputes, 
                the courts of Sofia, Bulgaria shall have jurisdiction.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">9. CONTACT</h2>
              <p className="text-de-light leading-relaxed">
                For any questions regarding these Terms of Service, contact us at: 
                <a href="mailto:info@digitalenergy.solutions" className="text-gold link-brutal ml-1">info@digitalenergy.solutions</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

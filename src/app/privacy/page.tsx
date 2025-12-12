export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-de-gray">
        <div className="container-brutal">
          <span className="number-brutal">LEGAL</span>
          <h1 className="text-massive text-white mt-4">
            PRIVACY<br />
            <span className="text-gold">POLICY</span><span className="text-green">.</span>
          </h1>
          <p className="text-de-muted mt-6">Last updated: November 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-brutal border-b-0">
        <div className="container-brutal max-w-4xl">
          <div className="space-y-12">
            
            <div>
              <h2 className="text-large text-white mb-4">1. DATA CONTROLLER</h2>
              <p className="text-de-light leading-relaxed">
                The data controller is <strong className="text-white">Digital Energy Ltd</strong>, 
                headquartered in Bulgaria. For any privacy-related inquiries, 
                contact us at: <a href="mailto:info@digitalenergy.solutions" className="text-gold link-brutal">info@digitalenergy.solutions</a>
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">2. DATA COLLECTED</h2>
              <p className="text-de-light leading-relaxed mb-4">
                Through our contact form, we collect the following information:
              </p>
              <ul className="text-de-light space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Name</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Email address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Company name (optional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Project description</span>
                </li>
              </ul>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">3. PURPOSE OF PROCESSING</h2>
              <p className="text-de-light leading-relaxed">
                The collected data is used exclusively to:
              </p>
              <ul className="text-de-light space-y-2 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-green">—</span>
                  <span>Respond to your inquiry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green">—</span>
                  <span>Prepare and send a customized proposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green">—</span>
                  <span>Communications related to the requested project</span>
                </li>
              </ul>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">4. DATA PROCESSING</h2>
              <p className="text-de-light leading-relaxed">
                Data is received exclusively via email. We do not use databases, 
                CRMs, or automated storage systems. Data is processed using computer 
                and telematic tools with logic related to the purposes indicated above.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">5. DATA RETENTION</h2>
              <p className="text-de-light leading-relaxed">
                Personal data is retained for a maximum period of <strong className="text-white">1 year</strong> from 
                receipt, after which it is deleted, unless legal obligations require 
                longer retention.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">6. DATA SHARING</h2>
              <p className="text-de-light leading-relaxed">
                Your data is <strong className="text-white">not shared with third parties</strong>, 
                sold, or transferred for commercial or marketing purposes.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">7. COOKIES AND TRACKING</h2>
              <p className="text-de-light leading-relaxed">
                This website <strong className="text-white">does not use profiling cookies</strong> or 
                tracking tools like Google Analytics. Only essential technical cookies 
                may be used for website functionality.
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">8. YOUR RIGHTS</h2>
              <p className="text-de-light leading-relaxed mb-4">
                In accordance with GDPR, you have the right to:
              </p>
              <ul className="text-de-light space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Access your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Request rectification or deletion of data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Object to processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Request data portability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">—</span>
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
              <p className="text-de-light leading-relaxed mt-4">
                To exercise these rights, contact us at: <a href="mailto:info@digitalenergy.solutions" className="text-gold link-brutal">info@digitalenergy.solutions</a>
              </p>
            </div>

            <div className="divider-brutal" />

            <div>
              <h2 className="text-large text-white mb-4">9. POLICY CHANGES</h2>
              <p className="text-de-light leading-relaxed">
                We reserve the right to modify this Privacy Policy at any time. 
                Changes will be published on this page with the update date.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

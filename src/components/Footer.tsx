import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-de-black border-t border-de-gray">
      <div className="container-brutal py-20">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Left - Brand */}
          <div>
            <Image 
              src="/logo-de-colored.png" 
              alt="Digital Energy" 
              width={150} 
              height={50}
              className="h-10 w-auto mb-8"
            />
            <p className="text-de-muted max-w-md leading-relaxed">
              Strategic consulting for businesses that want to grow. 
              We deliver transformation, not just advice.
            </p>
          </div>

          {/* Right - Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-de-gold text-sm uppercase tracking-widest mb-6">Navigate</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="link-brutal">Home</Link></li>
                <li><Link href="/services" className="link-brutal">Services</Link></li>
                <li><Link href="/about" className="link-brutal">About</Link></li>
                <li><Link href="/contact" className="link-brutal">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-de-green text-sm uppercase tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@digitalenergy.solutions" className="link-brutal">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-brutal">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="divider-brutal mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-de-muted text-sm">
            © {new Date().getFullYear()} Digital Energy Ltd.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-de-muted text-sm hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-de-muted text-sm hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

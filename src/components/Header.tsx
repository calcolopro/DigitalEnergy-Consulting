'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-de-black/90 backdrop-blur-sm border-b border-de-gray">
      <nav className="container-brutal flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-de-colored.png" 
            alt="Digital Energy" 
            width={120} 
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/" className="link-brutal text-sm uppercase tracking-widest">
            Home
          </Link>
          <Link href="/services" className="link-brutal text-sm uppercase tracking-widest">
            Services
          </Link>
          <Link href="/about" className="link-brutal text-sm uppercase tracking-widest">
            About
          </Link>
          <Link href="/contact" className="btn-brutal">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-de-gold transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-de-gold transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-de-gold transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-de-black z-40">
          <div className="container-brutal py-12 flex flex-col gap-8">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-huge text-gold">
              Home
            </Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-huge text-white hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-huge text-white hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-huge text-white hover:text-gold transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

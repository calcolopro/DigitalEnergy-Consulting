'use client'

import { Link } from '@/i18n/routing'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-display text-de-gold/20 mb-4">404</p>
        <h1 className="text-heading text-white mb-8">Page Not Found</h1>
        <Link href="/" className="btn-primary">
          Go Home <span>&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

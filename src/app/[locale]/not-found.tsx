'use client'

import { Link } from '@/i18n/routing'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-32">
      <div className="wrap text-center">
        <p className="label mb-4">404</p>
        <h1 className="mx-auto max-w-[18ch]">Page not found</h1>
        <div className="rule-brand mx-auto mt-6" />
        <p className="body mx-auto mt-6 max-w-[44ch]">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href="/" className="btn btn-primary mt-8">Go home &rarr;</Link>
      </div>
    </section>
  )
}

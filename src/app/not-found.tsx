export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '6rem', color: 'rgba(201,168,76,0.2)', margin: 0 }}>404</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page Not Found</p>
          <a href="/" style={{ color: '#c9a84c', textDecoration: 'none' }}>Go Home &rarr;</a>
        </div>
      </body>
    </html>
  )
}

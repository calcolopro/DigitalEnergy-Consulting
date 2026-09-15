export default function RootNotFound() {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light dark" />
        <style>{`
          :root { color-scheme: light dark; --bg:#FFFFFF; --ink:#0E1311; --mut:#515C56; --brand:#147A41; }
          @media (prefers-color-scheme: dark) {
            :root { --bg:#0B0E0D; --ink:#E9EEEB; --mut:#A3AEA8; --brand:#4FD98A; }
          }
          html,body { margin:0; height:100%; }
          body {
            background:var(--bg); color:var(--ink);
            font-family: Inter, system-ui, -apple-system, sans-serif;
            display:flex; align-items:center; justify-content:center; text-align:center;
          }
          .n  { font-family: ui-monospace, monospace; font-size:.75rem; letter-spacing:.16em; color:var(--mut); }
          h1  { font-size:clamp(1.75rem,4vw,2.5rem); letter-spacing:-.03em; margin:.75rem 0 1rem; }
          a   { color:var(--brand); text-decoration:none; font-weight:600; }
        `}</style>
      </head>
      <body>
        <div>
          <p className="n">404</p>
          <h1>Page not found</h1>
          <a href="/it">Go home &rarr;</a>
        </div>
      </body>
    </html>
  )
}

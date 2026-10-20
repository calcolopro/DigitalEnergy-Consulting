# Hosting — Cloudflare Pages

Status: **ACTIVE** from the move off Vercel (decided 20.10.2026).

The site is a plain static export (`output: 'export'` in `next.config.mjs`).
No server, no middleware, no API routes, no environment variables. Anything
that serves the `out/` folder serves the site.

## Cloudflare Pages project

Workers & Pages → Create → Pages → Connect to Git → `calcolopro/DigitalEnergy-Consulting`.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | None (Next.js static export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | (empty) |
| Environment variable | `NODE_VERSION` = `20` |

No other variables are needed.

## How URLs resolve

- `/` is `out/index.html`, a meta refresh to `/it` (`src/app/page.tsx`).
- `/it`, `/en`, `/bg`, `/es` are `out/it.html` etc. Pages serves `x.html` for `/x`.
- `/it/about` is `out/it/about.html`, the same way.
- Redirects live in `public/_redirects`, which the build copies to `out/_redirects`.
  This file replaced `vercel.json`.

## Custom domains

In the Pages project → Custom domains, add `digitalenergy.solutions` and
`www.digitalenergy.solutions`. The zone is already in Cloudflare, so Pages
writes the DNS records itself. Before adding them, delete the old records
that point to Vercel:

- apex `A 216.150.1.1`
- `www CNAME fc6b263d97333272.vercel-dns-016.com`

The canonical host is the apex, as the sitemap and canonical links show. Send
`www` to the apex with a Redirect Rule:
- Rules → Redirect Rules
- hostname equals `www.digitalenergy.solutions`
- 301 to `https://digitalenergy.solutions${path}`

Do not touch the MX, SPF, DKIM or DMARC records (Proton mail), or the
`app` record.

## Check after the switch

```
curl -sI https://digitalenergy.solutions/ | head -1
curl -sI https://digitalenergy.solutions/it | head -1
curl -sI https://digitalenergy.solutions/de/about | grep -i location
curl -sI https://www.digitalenergy.solutions/ | grep -i location
```

Expected results, in order:
1. `200`
2. `200`
3. a `location` header pointing to `/en/about`
4. a `location` header pointing to the apex

# Portfolio launch audit and setup

This is a checklist, not a claim of measured Lighthouse scores or verified WCAG conformance.

## Production pages to audit

- Homepage: https://mariela-escalante.vercel.app/
- CV: https://mariela-escalante.vercel.app/cv
- Case studies: `/projects/telecom-open-api`, `/projects/phreeli`, `/projects/connector-studio`, `/projects/vocal-transformation`, `/projects/mapper-bpm-rework`.

## Lighthouse baseline

Open the production URL in Chrome, press F12, choose **Lighthouse**, enable Performance, Accessibility, Best Practices, and SEO; run **Navigation** twice, once Mobile and once Desktop. Export both reports as HTML or JSON. Repeat for at least one case study.

Suggested quality targets (not measured): Performance >=90, Accessibility >=95, Best Practices >=95, SEO >=95, with no critical WCAG 2.2 AA failures. Interpret lab scores alongside real-user web vital data; a 100 accessibility score does not establish WCAG conformance.

If using CLI instead of DevTools (Node.js 22+):
```bash
npx lighthouse https://mariela-escalante.vercel.app/ --preset=desktop --output=html --output-path=./lighthouse-desktop.html
npx lighthouse https://mariela-escalante.vercel.app/ --output=html --output-path=./lighthouse-mobile.html
```

## WCAG 2.2 AA manual checks

- Keyboard Tab and Shift+Tab through Navbar, dropdown, carousels, flip cards, contact form; check clear focus and no keyboard trap.
- Flip cards: visible face contains focusable controls; hidden face does not. Return focus logically after flipping.
- Review color contrast across gradient headings, pastel tags, muted text and hover/focus states (normal text >=4.5:1, large text >=3:1).
- Test 200% and 400% zoom, ~320 CSS px viewport, and browser font scaling: no content loss or two-dimensional scrolling.
- Reduced motion: page animations, 3D flip and background visuals must stop or avoid motion.
- Form: labels, HTML validation, success/error announcements, keyboard dismissal of toasts and preserved field values on failures.
- Verify that large touch controls have >=24x24 CSS px target size or adequate spacing; prefer >=44x44.
- Check semantic headings, project image alternatives, carousel accessible names and link purpose.

## Cloudflare Web Analytics

The code already conditionally loads Cloudflare's beacon if `PUBLIC_CF_WEB_ANALYTICS_TOKEN` is set.

1. Sign in to https://dash.cloudflare.com/ and choose **Web Analytics -> Add site**.
2. Enter exactly `mariela-escalante.vercel.app`; this site is hosted on Vercel, so use the **not proxied through Cloudflare** path and do not change DNS.
3. Copy the site token (not the whole JavaScript snippet).
4. Set `PUBLIC_CF_WEB_ANALYTICS_TOKEN` in Vercel > Project > Settings > Environment Variables for Production, then redeploy.
5. Visit the production site from a browser without ad blocking; check Web Analytics for page views.

Note: Cloudflare Web Analytics does not report custom contact-form conversion events by default.

## Google Search Console

1. Open https://search.google.com/search-console/welcome and select **URL prefix** (not Domain) because the site uses `vercel.app`.
2. Enter `https://mariela-escalante.vercel.app/`.
3. Choose **HTML tag** verification, and copy only the `content` token from `<meta name="google-site-verification" content="TOKEN" />`.
4. Set `PUBLIC_GOOGLE_SITE_VERIFICATION=TOKEN` in Vercel Environment Variables for Production and redeploy this branch after merge.
5. View the homepage source and confirm the meta tag exists; return to Search Console and press Verify.
6. Open **Sitemaps** and submit `sitemap.xml` (the site already has a dynamic sitemap route and robots.txt reference).
7. Use URL Inspection on the homepage and priority case studies; request indexing when available. Indexing and ranking are not guaranteed.

## Verification before declaring completion

- `pnpm check` and `pnpm build` pass.
- Both Lighthouse HTML reports collected and critical findings reviewed.
- Keyboard and screen-reader manual passes recorded.
- Search Console property verified and sitemap accepted.
- Cloudflare reports at least one real page view.
- Production contact form successfully sends a message and shows success toast.

# Portfolio launch: SEO, analytics, contact

## 1. Validate the site before deploying
From `andre-cv` run:

```bash
pnpm check
pnpm build
pnpm dev
```

Inspect the homepage and each project URL, then run Lighthouse mobile and desktop. Validate the homepage JSON-LD using Google's Rich Results Test. The robots.txt and sitemap.xml routes already exist.

## 2. Cloudflare Web Analytics (free)
1. Create or sign in at https://dash.cloudflare.com/ and open **Web Analytics**.
2. Add `mariela-escalante.vercel.app` as a site **without changing DNS**.
3. Copy the 32-character site token from the JavaScript snippet (not the whole script).
4. In **Vercel > Project > Settings > Environment Variables**, add `PUBLIC_CF_WEB_ANALYTICS_TOKEN` with that value for Production (and Preview if desired).
5. Redeploy; then browse the site and verify page views in Cloudflare Web Analytics.

The beacon is loaded only when this variable is set. It tracks page views and web performance, including SvelteKit client-side navigation. Cloudflare Web Analytics does not currently support custom events, so it cannot report contact-form submissions as conversions.

## 3. Web3Forms contact form (no owned domain required)
The frontend GETs the public Web3Forms access key from `/api/contact`, then POSTs directly to Web3Forms from the visitor's browser. Server-side submissions require a paid Web3Forms plan and are not supported on the free tier.

1. Visit https://web3forms.com/ and enter your destination Gmail address to request an access key.
2. Verify that address through the email they send you, and copy the access key.
3. In **Vercel > Project > Settings > Environment Variables** add `WEB3FORMS_ACCESS_KEY` for Production (and Preview if needed).
4. Redeploy and submit a real test message on the published site; check your inbox and spam folder and confirm Reply-To goes to the visitor.
5. No custom domain or DNS changes are required.

The access key is not a Resend-style secret, but keeping it server-side lets us retain existing validation and avoid exposing the recipient mapping in browser code. Do not put it in source files. For local testing, set it in `.env.local`; do not commit that file.

Browser-side form fields use native HTML validation and a honeypot, and Web3Forms provides built-in spam controls. For stronger abuse protection add rate limiting or hCaptcha and verify the mobile UX.

## 4. Search presence
- Verify the property in Google Search Console.
- Submit `https://mariela-escalante.vercel.app/sitemap.xml`.
- Use URL Inspection to request indexing for the homepage and important case studies.
- Review the queries and page indexing reports over time; meta tags do not guarantee rankings.

## 5. QA checklist
- Correct unique page titles and meta descriptions
- Exactly one primary H1 per page, meaningful heading hierarchy
- No missing images or broken internal links
- Mobile, keyboard, screen-reader and WCAG 2.2 AA checks
- Contact form states: success, invalid fields, service failure
- No secret keys in client code, browser requests, or commits

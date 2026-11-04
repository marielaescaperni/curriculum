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

## 3. Resend contact form
The form already POSTs to `/api/contact` and the server sends email via Resend. Before production:
1. Create an account at https://resend.com/ and create an API key with sending privileges.
2. Verify a domain that you **own** in Resend by adding the DNS records requested by Resend. The shared `vercel.app` domain is not a domain you can verify.
3. In Vercel set the following environment variables (private):
    - `RESEND_API_KEY`: your secret API key
    - `CONTACT_FROM_EMAIL`: e.g. `Mariela Portfolio <hello@your-domain.com>` on the verified domain
    - `CONTACT_TO_EMAIL`: the Gmail mailbox where you want to receive inquiries
4. Redeploy and send a real test message from the production site; verify it arrives and Reply goes to the visitor's email.

Never paste the secret key into source control or a chat. Local testing: copy `.env.example` to `.env.local` and fill in local values. Do not commit `.env.local`.

The endpoint has validation, a honeypot and error states. For production-grade spam resistance, add an edge-backed rate limit and optionally Cloudflare Turnstile. This is not yet implemented.

If you do not own a custom domain, decide whether to purchase one or switch the contact form to a provider with a verified hosted form endpoint. Resend cannot deliver unrestricted mail from a shared `vercel.app` address.

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

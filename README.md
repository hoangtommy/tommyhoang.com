# tommyhoang.com

Minimal one-page portfolio ready for GitHub Pages + custom domain + free email forwarding.

## Quick Start

1. Open `index.html`, `styles.css`, and `content-seed.md`.
2. Replace placeholders:
   - `your-username` in footer GitHub link
   - `your-profile` in footer LinkedIn link
   - `REPLACE_WITH_FORM_ID` in the form `action`
3. Add your headshot and screenshots in `assets/` (optional for v1).

## Form Setup (Formspree)

1. Create a free form at [Formspree](https://formspree.io/).
2. Copy form endpoint like `https://formspree.io/f/xxxxabcd`.
3. Replace the form `action` in `index.html`.
4. Submit one test message from the live site.

## Deploy to GitHub Pages

1. Create a GitHub repo named `tommyhoang.com` (or any repo name you prefer).
2. Push this folder to GitHub.
3. In GitHub repo settings:
   - Open **Pages**
   - Set source to **Deploy from branch**
   - Select `main` and `/ (root)`
   - Set custom domain to `tommyhoang.com`
4. Keep `CNAME` file in repo root.

## DNS + Email Routing

Use the runbook at `docs/dns-email-runbook.md`.

## Launch Verification

Use the checklist at `docs/launch-checklist.md`.

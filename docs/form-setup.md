# Contact Form Setup (Formspree)

## 1) Create Formspree form

1. Sign in at [Formspree](https://formspree.io/).
2. Create a new form (free tier).
3. Copy endpoint, e.g. `https://formspree.io/f/xxxxabcd`.

## 2) Update site

In `index.html`, replace:

- `https://formspree.io/f/REPLACE_WITH_FORM_ID`

with your real endpoint.

## 3) Delivery validation

1. Publish site to GitHub Pages.
2. Submit a test message from live domain.
3. Confirm message arrives in inbox.
4. If not delivered:
   - check Formspree dashboard for blocked/pending
   - confirm form endpoint is exact
   - confirm browser console has no request errors

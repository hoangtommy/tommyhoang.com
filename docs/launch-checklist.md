# Launch Checklist

## Website

- [ ] `index.html` has final bio, links, and project content.
- [ ] Footer GitHub and LinkedIn links are updated.
- [ ] Contact form `action` uses your real Formspree endpoint.
- [ ] Mobile layout looks good at 375px width.
- [ ] Desktop layout looks good at 1280px width.

## Hosting

- [ ] Repo is pushed to GitHub.
- [ ] GitHub Pages is enabled from `main` root.
- [ ] `CNAME` file exists and includes `tommyhoang.com`.
- [ ] HTTPS is enabled in GitHub Pages settings.

## DNS

- [ ] Apex `A` records point to GitHub Pages IPs.
- [ ] `www` CNAME points to `<your-github-username>.github.io`.
- [ ] DNS records are set to DNS only in Cloudflare for site records.

## Email Forwarding

- [ ] Cloudflare Email Routing enabled.
- [ ] Gmail destination verified in Cloudflare.
- [ ] Route `hi@tommyhoang.com -> yourgmail@gmail.com` created.
- [ ] MX records are present for Cloudflare Email Routing.
- [ ] SPF TXT record is configured.

## End-to-End Tests

- [ ] Site loads at `https://tommyhoang.com`.
- [ ] Site loads at `https://www.tommyhoang.com`.
- [ ] Contact form delivers to your inbox.
- [ ] Sending test email to `hi@tommyhoang.com` arrives in Gmail.

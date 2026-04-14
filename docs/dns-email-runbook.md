# DNS + Email Runbook (Cloudflare + GitHub Pages)

This config supports:

- `tommyhoang.com` website on GitHub Pages
- `www.tommyhoang.com` website alias
- `hi@tommyhoang.com` forwarding to Gmail via Cloudflare Email Routing

## 1) Cloudflare DNS for GitHub Pages

Create these DNS records in Cloudflare:

- `A` record: `@` -> `185.199.108.153`
- `A` record: `@` -> `185.199.109.153`
- `A` record: `@` -> `185.199.110.153`
- `A` record: `@` -> `185.199.111.153`
- `CNAME` record: `www` -> `<your-github-username>.github.io`

Set proxy status to **DNS only** for GitHub Pages records.

## 2) GitHub Pages Domain Settings

In GitHub repo -> Settings -> Pages:

- Custom domain: `tommyhoang.com`
- Enable HTTPS

If you want canonical `www`, set that in GitHub/Cloudflare redirects. For fastest setup, keep apex canonical.

## 3) Cloudflare Email Routing (Forward hi@ to Gmail)

In Cloudflare -> Email -> Email Routing:

1. Enable Email Routing for domain.
2. Add destination address: your Gmail.
3. Verify destination with the email Cloudflare sends.
4. Create custom address:
   - Custom address: `hi`
   - Action: send to verified Gmail

Cloudflare will auto-create required MX/TXT records if allowed.

## 4) SPF Recommendation

Add TXT record:

- Host: `@`
- Value: `v=spf1 include:_spf.mx.cloudflare.net ~all`

This is useful for routing hygiene. If you later send mail from another provider, update SPF accordingly.

## 5) Test Commands

After DNS changes propagate:

```bash
dig +short tommyhoang.com A
dig +short www.tommyhoang.com CNAME
dig +short tommyhoang.com MX
```

Expected:

- Apex resolves to GitHub Pages IPs.
- `www` resolves to your GitHub Pages host.
- MX includes Cloudflare mail routing targets.

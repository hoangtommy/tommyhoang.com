# GitHub Pages Publish Steps

## 1) Initialize and push

Run from the repo root:

```bash
git init
git add .
git commit -m "Initial portfolio site for tommyhoang.com"
git branch -M main
git remote add origin git@github.com:<your-github-username>/tommyhoang.com.git
git push -u origin main
```

If your repo already exists locally, skip the `git init` and remote add steps.

## 2) Enable GitHub Pages

1. GitHub repo -> Settings -> Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `(root)`
4. Save
5. Set custom domain: `tommyhoang.com`
6. Confirm HTTPS is enabled once certificate is issued.

## 3) Validate deployment

- Open `https://tommyhoang.com`
- Open `https://www.tommyhoang.com`
- Confirm both resolve to live site.

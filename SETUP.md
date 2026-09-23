# Portfolio site — setup

Astro, deployed to GitHub Pages at `https://alokday007.github.io`.

## 1. Add the screenshots

Drop the five PNGs into `public/images/` with exactly these names:

| File | What it shows |
|---|---|
| `zencrest.png` | Zencrest Realty homepage hero |
| `calorie-tracker.png` | Photo lookup — roti, sabzi, lentils |
| `food-price-intel.png` | FAO chart zoomed to show the forecast |
| `cric-metrics.png` | Powerplay dashboard, RCB selected |
| `namma-metro.png` | Whitefield → Bommasandra fare |

Filenames are referenced in `src/data/site.json`. Rename one, change it there too.

## 2. Run it locally

```powershell
npm install
npm run dev
```

Open `http://localhost:4321`. Everything you'd want to edit is in
`src/data/site.json` — copy, figures, links, stack lists. You shouldn't need to
touch `index.astro` unless you're changing structure.

## 3. Create the repo

Create a **public** GitHub repo named exactly `alokday007.github.io`. Don't
initialise it with anything.

```powershell
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/alokday007/alokday007.github.io.git
git push -u origin main
```

## 4. Turn on Pages

In the new repo: **Settings → Pages → Build and deployment → Source**, choose
**GitHub Actions**. Not "Deploy from a branch" — the workflow in
`.github/workflows/deploy.yml` handles the build.

The first push triggers it. Watch progress under the **Actions** tab; it takes
a couple of minutes. After that, every push to `main` redeploys.

## 5. Check it

Visit `https://alokday007.github.io`. Confirm all five images load — a missing
file shows as a broken image and won't fail the build.

## Notes

- The build ships **no JavaScript**. Keep it that way unless something genuinely
  needs it.
- The repo name sets the URL. If you rename it, add `base: '/new-name'` to
  `astro.config.mjs` or every asset 404s.
- Add your LinkedIn to the footer in `index.astro` if you want it there.

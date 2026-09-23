import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alokday007.github.io',
  // No `base` is set on purpose: the repo is named alokday007.github.io,
  // so the site is served from the domain root. If you ever rename the
  // repo, add `base: '/repo-name'` here or every asset path will 404.
});

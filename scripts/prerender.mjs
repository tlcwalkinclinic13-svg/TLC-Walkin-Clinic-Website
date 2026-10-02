import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';

const temporaryDirectory = new URL('../.prerender/', import.meta.url);
try {
  await build({
    publicDir: false,
    build: {
      ssr: 'scripts/render-home.tsx',
      outDir: '.prerender',
      rollupOptions: { output: { entryFileNames: 'render-home.mjs' } },
    },
  });
  const { renderHome } = await import('../.prerender/render-home.mjs');
  const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error('Homepage root marker was not found');
  // Keep the empty SPA shell for other routes, so they never serve homepage copy.
  await writeFile(new URL('../dist/app.html', import.meta.url), template);
  await writeFile(new URL('../dist/index.html', import.meta.url),
    template.replace(marker, () => `<div id="root">${renderHome()}</div>`));
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}

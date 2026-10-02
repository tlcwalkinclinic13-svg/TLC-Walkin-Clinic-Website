import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';

const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[character]));

function withMetadata(template, pathname, metadata) {
  const canonical = `https://www.tlcwalkinclinic.com${pathname}`;
  return template
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, (_, before, after) => `${before}${escapeHtml(metadata.description)}${after}`)
    .replace(/(<meta name="robots" content=")[^"]*(")/, (_, before, after) => `${before}${metadata.index === false ? 'noindex, follow' : 'index, follow'}${after}`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, before, after) => `${before}${canonical}${after}`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, (_, before, after) => `${before}${canonical}${after}`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, (_, before, after) => `${before}${escapeHtml(metadata.title)}${after}`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, (_, before, after) => `${before}${escapeHtml(metadata.description)}${after}`);
}

const temporaryDirectory = new URL('../.prerender/', import.meta.url);
try {
  await build({
    publicDir: false,
    build: {
      ssr: 'scripts/render-pages.tsx',
      outDir: '.prerender',
      rollupOptions: { output: { entryFileNames: 'render-pages.mjs' } },
    },
  });
  const { renderPages } = await import('../.prerender/render-pages.mjs');
  const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error('Homepage root marker was not found');
  // Preserve the existing SPA fallback for unknown routes.
  await writeFile(new URL('../dist/app.html', import.meta.url), template);
  for (const { pathname, metadata, html } of renderPages()) {
    const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`;
    await writeFile(new URL(`../dist/${filename}`, import.meta.url),
      withMetadata(template, pathname, metadata).replace(marker, () => `<div id="root">${html}</div>`));
  }
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}

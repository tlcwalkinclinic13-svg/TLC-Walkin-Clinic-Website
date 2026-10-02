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
  const { renderPages, renderNotFound } = await import('../.prerender/render-pages.mjs');
  const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error('Homepage root marker was not found');
  for (const { pathname, metadata, html } of renderPages()) {
    const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`;
    await writeFile(new URL(`../dist/${filename}`, import.meta.url),
      withMetadata(template, pathname, metadata).replace(marker, () => `<div id="root">${html}</div>`));
  }
  // Vercel serves this document with HTTP 404 for unmatched URLs.
  const notFound = withMetadata(template, '/404', {
    title: 'Page not found | TLC Walk-in Clinic',
    description: 'The requested page could not be found.',
    index: false,
  })
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace(/\s*<meta property="og:url"[^>]*>/, '')
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
    .replace(marker, () => `<div id="root" data-server-not-found="true">${renderNotFound()}</div>`);
  await writeFile(new URL('../dist/404.html', import.meta.url), notFound);
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}

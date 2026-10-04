// Renders each route to static HTML so pages work without JavaScript
// (Play reviewers, crawlers) and then hydrate on the client.
import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = `${root}dist`
const { render, routes } = await import(`${root}dist-ssr/entry-server.js`)
const template = await readFile(`${dist}/index.html`, 'utf8')

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const pages = [
  [routes.home, 'index.html'],
  [routes.privacy, 'privacy-policy.html'],
  [routes.terms, 'terms-of-service.html'],
  [routes.notFound, '404.html'],
]

for (const [meta, file] of pages) {
  const canonical = `https://donespaghetti.com${meta.path === '/' ? '/' : meta.path}`
  const head = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:image" content="https://donespaghetti.com/og-image.png" />`,
    meta === routes.notFound
      ? '<meta name="robots" content="noindex" />'
      : `<link rel="canonical" href="${canonical}" /><meta property="og:url" content="${canonical}" />`,
  ].join('\n    ')

  const html = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', render(meta.path))
  await writeFile(`${dist}/${file}`, html)
  console.log(`prerendered ${meta.path} -> dist/${file}`)
}

await rm(`${root}dist-ssr`, { recursive: true, force: true })

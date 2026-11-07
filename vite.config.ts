import react from '@vitejs/plugin-react'
import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'

function siteSeoPlugin(siteOrigin: string, mode: string): Plugin {
  const origin = siteOrigin.replace(/\/$/, '')

  return {
    name: 'site-seo',
    transformIndexHtml(html) {
      if (!origin && mode === 'production') {
        console.warn(
          '[site-seo] Defina VITE_SITE_URL antes do build (veja .env.example) para preview no WhatsApp e SEO.',
        )
      }
      return html.replaceAll('%SITE_ORIGIN%', origin)
    },
    closeBundle() {
      if (!origin) return

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`
      writeFileSync(resolve('dist', 'sitemap.xml'), sitemap, 'utf8')

      const robots = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`
      writeFileSync(resolve('dist', 'robots.txt'), robots, 'utf8')
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteOrigin = env.VITE_SITE_URL ?? ''

  return {
    plugins: [react(), tailwindcss(), siteSeoPlugin(siteOrigin, mode)],
  }
})

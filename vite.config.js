import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

const hostname = 'https://myancode-docs.vercel.app'

const dynamicRoutes = [
  '/learn',
  '/learn/installation',
  '/learn/hello-world',
  '/learn/running',
  '/learn/variables',
  '/learn/print-input',
  '/learn/comments',
  '/learn/if-else',
  '/learn/while-loop',
  '/learn/for-loop',
  '/learn/foreach-loop',
  '/learn/defining-functions',
  '/learn/calling-functions',
  '/learn/return-values',
  '/learn/functions-as-values',
  '/learn/arrays',
  '/learn/array-push',
  '/learn/objects',
  '/learn/property-access',
  '/about',
  '/download',
  '/docs',
  '/contribute',
]

export default defineConfig({
  plugins: [
    react(),
    // `exclude` drops the Google Search Console verification HTML, which the
    // plugin would otherwise auto-discover from public/ and add as a route.
    sitemap({ hostname, dynamicRoutes, exclude: ['/googledd8a32e6725c822a'] }),
  ],
  assetsInclude: ['**/*.md'],
})

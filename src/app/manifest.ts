import { siteConfig } from '@/lib/site-config'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    categories: ['productivity', 'utilities', 'video'],
    lang: 'en',
    scope: '/',
    icons: [
      {
        src: '/128-mac.png',
        sizes: '128x128',
        type: 'image/png'
      }
    ],
  }
}
export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  name: 'CutClip',
  title: 'CutClip - YouTube Video Clipper for macOS',
  description: 'The native macOS app that turns any YouTube video into perfect clips in seconds. No more wrestling with complex video editors. Download free with 3 uses, upgrade to Pro for unlimited clips.',
  keywords: [
    'YouTube clipper',
    'video editor',
    'macOS app',
    'video clips',
    'YouTube downloader',
    'video trimmer',
    'content creation',
    'video editing',
    'native macOS',
    'video processing'
  ],
  author: 'Moinul Moin',
  twitter: '@imoinulmoin',
} as const;
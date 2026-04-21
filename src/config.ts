import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'dev Nuovotaka',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Nuovotaka',
    twitter: '@nuovotaka',
    url: 'https://nuovotaka.com',
    email: '',
    summary: ''
  },
  org: {
    name: 'Nuovotaka',
    twitter: '@nuovotaka',
    url: 'https://nuovotaka.com',
    email: '',
    summary: ''
  },
  location: 'Tokyo, Japan',
  latlng: [35.681236, 139.767125] as [number, number],
  repository: 'https://github.com/nuovotaka',
  buildTime: new Date()
}

export { default as Logo } from './assets/svg/astro/devnuovotaka-logo.svg'
export { default as LogoImage } from './assets/astro/devnuovotaka-logo.png'
export { default as FeaturedSVG } from './assets/svg/undraw/undraw_design_inspiration.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_blog_post.svg'
export { default as DefaultImage } from './assets/undraw/undraw_blog_post.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' }
  // { name: 'Docs', href: 'doc/introduction' }
]

export const PAGE_SIZE = 15

export const GITHUB_EDIT_URL = `https://github.com/nuovotaka/`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' }
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }]
}

export const PUBLIC_GA_TRACKING_ID = import.meta.env.PUBLIC_GA_TRACKING_ID
export const PUBLIC_ADS_ID = import.meta.env.PUBLIC_ADS_ID

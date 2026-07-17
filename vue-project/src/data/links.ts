export interface LinkItem {
  label: string
  href: string
  icon: string
}

export const profile = {
  name: 'Amanda Spence',
  tagline: 'Designer, developer & lifelong learner',
  photoAlt: 'Profile photo',
}

export const links: LinkItem[] = [
  { label: 'Portfolio', href: 'https://example.com', icon: 'mdi-web' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'mdi-linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'mdi-instagram' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: 'mdi-email' },
]

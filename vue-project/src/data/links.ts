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
  { label: 'Portfolio', href: 'https://example.com', icon: '🌐' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: '💼' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: '📸' },
  { label: 'Email', href: 'mailto:hello@example.com', icon: '✉️' },
]

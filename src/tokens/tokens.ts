/**
 * Design tokens — TypeScript source of truth.
 * Use for programmatic values (inline styles, dynamic calculations).
 * Static Tailwind classes use the extended config in tailwind.config.ts.
 */
export const tokens = {
  color: {
    bg:           '#ffffff',
    surface:      '#f5f5f5',
    fg:           '#111111',
    fgMuted:      '#6b7280',
    primary:      '#e53935',
    primaryHover: '#c62828',
    border:       '#e5e7eb',
    footerBg:     '#111111',
  },
  category: {
    earphone: { bg: '#1a1a1a', text: '#ffffff' },
    wearable: { bg: '#c8830a', text: '#ffffff' },
    devices:  { bg: '#c0392b', text: '#ffffff' },
    gaming:   { bg: '#3a3a3a', text: '#ffffff' },
    oculus:   { bg: '#1e6b1e', text: '#ffffff' },
    speaker:  { bg: '#1a4d8f', text: '#ffffff' },
  },
  banner: {
    summer: { bg: '#b71c1c' },
    happy:  { bg: '#1b5e20' },
  },
  motion: {
    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;
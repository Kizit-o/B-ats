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
  earphone: { bg: '#a5f3fc', text: '#0f172a' }, // Light Blue (Cyan-100) with dark text for readability
  wearable: { bg: '#111827', text: '#ffffff' }, // Smartwatch: Same light blue color with dark text
  devices:  { bg: '#a5f3fc', text: '#0f172a' }, // Laptop: Rich Purple (Violet-500)
  gaming:   { bg: '#111827', text: '#ffffff' }, // Console: Sleek Dark Grey (Gray-700)
  oculus:   { bg: '#a5f3fc', text: '#0f172a' }, // VR: Solid Matte Black (Gray-900)
  speaker:  { bg: '#111827', text: '#ffffff' }, // JBL: Vibrant Neon Coral/Orange 
},
  banner: {
    summer: { bg: '#b71c1c' },
    happy:  { bg: '#1b5e20' },
  },
  motion: {
    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;
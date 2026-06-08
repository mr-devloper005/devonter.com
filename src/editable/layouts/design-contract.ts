import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f3ead4',
  '--slot4-page-text': '#241109',
  '--slot4-panel-bg': '#622B14',
  '--slot4-surface-bg': '#fff8e8',
  '--slot4-muted-text': '#6f553f',
  '--slot4-soft-muted-text': '#846f55',
  '--slot4-accent': '#995F2F',
  '--slot4-accent-fill': '#622B14',
  '--slot4-accent-soft': '#E4D6A9',
  '--slot4-dark-bg': '#2a1209',
  '--slot4-dark-text': '#fff4dc',
  '--slot4-media-bg': '#d8c79c',
  '--slot4-cream': '#E4D6A9',
  '--slot4-warm': '#f7efd9',
  '--slot4-lavender': '#978F66',
  '--slot4-gray': '#efe2bd',
  '--slot4-body-gradient': 'radial-gradient(circle at 12% 0%, rgba(153,95,47,0.18), transparent 30%), linear-gradient(180deg, #f5ebd0 0%, #ead8aa 46%, #f8f1de 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-[#622B14]/[0.16]',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_18px_50px_rgba(98,43,20,0.12)]',
  shadowStrong: 'shadow-[0_26px_80px_rgba(44,18,9,0.28)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(36,17,9,0.06),rgba(36,17,9,0.72))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[140px] shrink-0 snap-start sm:w-[160px]',
  },
  type: {
    eyebrow: 'text-xs font-bold uppercase tracking-[0.28em]',
    heroTitle: 'font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-[5.9rem]',
    sectionTitle: 'font-serif text-4xl font-semibold tracking-[-0.045em] sm:text-5xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-[1.75rem] border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-[1.75rem] border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-[2rem] ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center rounded-full ${editablePalette.darkBg} px-8 py-3.5 text-sm font-bold text-[var(--slot4-dark-text)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(98,43,20,0.24)]`,
    secondary: `inline-flex items-center justify-center rounded-full border ${editablePalette.border} ${editablePalette.surfaceBg} px-8 py-3.5 text-sm font-bold ${editablePalette.surfaceText} transition hover:bg-[#E4D6A9]/60`,
    accent: `inline-flex items-center justify-center rounded-full ${editablePalette.accentBg} px-8 py-3.5 text-sm font-bold text-[var(--slot4-dark-text)] transition hover:-translate-y-0.5`,
  },
  media: {
    frame: `relative overflow-hidden rounded-xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[2/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(98,43,20,0.18)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; all homepage sections consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so AI can redesign the whole home experience in one file.',
  'Use wide readable grids; never create skinny columns for paragraphs or cards.',
  'Use horizontal rails for dense post browsing, like the MysteryCoder reference layout.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const

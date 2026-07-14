import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Premium PDF reading library',
      description: 'Explore downloadable PDF resources through a polished editorial reading experience.',
      openGraphTitle: 'Premium PDF reading library',
      openGraphDescription: 'Discover PDF resources, notes, and useful posts through a warmer reader-first experience.',
      keywords: ['PDF reader', 'document library', 'reading resources', 'PDF archive'],
    },
    hero: {
      badge: 'Discover what is nearby',
      title: ['Find trusted businesses', 'for every need.'],
      description: 'Explore local services, standout places, and useful opportunities—all organized to help you choose with confidence.',
      primaryCta: { label: 'Browse listings', href: '/listings' },
      secondaryCta: { label: 'Search directory', href: '/search' },
      searchPlaceholder: 'Search businesses, services, or locations',
      focusLabel: 'Discover',
      featureCardBadge: 'Featured listing',
      featureCardTitle: 'Great local businesses deserve to be discovered.',
      featureCardDescription: 'Browse selected places and services worth knowing about in your area.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for careful reading, quick browsing, and document discovery.',
      paragraphs: [
        'This site brings together PDF resources, article-style notes, visual browsing, and structured discovery so visitors can move naturally between useful content types.',
        'Instead of hiding documents behind generic lists, the interface treats each resource like part of a readable collection.',
        'Whether someone starts with a PDF, a story, an image-led post, or a listing, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on PDF resources and supporting context.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse PDFs', href: '/pdf' },
      secondaryLink: { label: 'Search archive', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore PDF resources through one connected reading experience.',
      description: 'Move between documents, notes, visuals, listings, and supporting resources through one clearer visual system.',
      primaryCta: { label: 'Browse PDFs', href: '/pdf' },
      secondaryCta: { label: 'Contact us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A calmer, clearer way to explore content.',
    description: `${slot4BrandConfig.siteName} is built to make long-form reading, visual discovery, and supporting resources feel like one unified experience.`,
    paragraphs: [
      'Instead of splitting everything into disconnected pages, the platform keeps related content easy to move through and easy to understand.',
      'Whether someone starts with an article, listing, image post, or resource page, they can continue exploring without losing context.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize clarity, pacing, and structure so people can read, browse, and discover without noise.',
      },
      {
        title: 'Connected content surfaces',
        description: 'Articles, visual posts, listings, resources, and profiles stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We focus on clean navigation and clear page structure to help visitors find useful content faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'A support page that matches the product, not a generic contact form.',
    description: 'Tell us what you are trying to publish, fix, or launch. We will route it through the right lane instead of forcing every request into the same support bucket.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find stories, listings, visuals, and resources faster.',
      description: 'Use keywords, categories, and content types to discover posts from every active section of the site.',
      placeholder: 'Search by keyword, topic, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and create posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create content for every active section.',
      description: 'Choose the content type, add details, and prepare a clean post with images, links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating new content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to access the publishing workspace, save details, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const

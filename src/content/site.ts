export const company = {
  name: 'Done Spaghetti',
  legalName: 'Done Spaghetti LLC',
  state: 'Delaware',
  email: 'support@donespaghetti.com',
  url: 'https://donespaghetti.com',
  tagline: 'Useful apps that make everyday tasks easier.',
} as const

export interface App {
  name: string
  summary: string
  playUrl: string
  /** Data-related features, listed in the Privacy Policy's "Apps covered" section. */
  dataNotes: string[]
}

export const apps: App[] = [
  {
    name: 'ChannelScan – WiFi Analyzer',
    summary:
      'Find dead zones, pick the least crowded WiFi channel, and run speed tests that track your connection over time.',
    playUrl:
      'https://play.google.com/store/apps/details?id=com.donespaghetti.wifi_analyzer',
    dataNotes: [
      'Scans nearby WiFi networks on your device. Android requires location permission for WiFi scanning; ChannelScan does not send your location to us.',
      'Speed tests use Measurement Lab (M-Lab). Speed test history is stored only on your device.',
      'IP & DNS tools can look up your public IP address using ipinfo.io.',
      'Shows ads through Google AdMob and offers optional Pro features through Google Play Billing.',
    ],
  },
]

export interface RouteMeta {
  path: string
  title: string
  description: string
}

export const routes = {
  home: {
    path: '/',
    title: 'Done Spaghetti LLC',
    description:
      'Done Spaghetti builds useful mobile apps that make everyday tasks easier.',
  },
  privacy: {
    path: '/privacy-policy',
    title: 'Privacy Policy · Done Spaghetti LLC',
    description:
      'How Done Spaghetti LLC apps and website collect, use, and protect your information.',
  },
  terms: {
    path: '/terms-of-service',
    title: 'Terms of Service · Done Spaghetti LLC',
    description: 'The terms that apply to every Done Spaghetti LLC app and service.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found · Done Spaghetti LLC',
    description: 'This page does not exist.',
  },
} satisfies Record<string, RouteMeta>

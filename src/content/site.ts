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
  /** Short highlights shown as a checklist on the home page card. */
  features: string[]
  /** One-line price note under the download button. */
  pricing: string
  playUrl: string
  /** Data-related features, listed in the Privacy Policy's "Apps covered" section. */
  dataNotes: string[]
}

export const apps: App[] = [
  {
    name: 'ChannelScan – WiFi Analyzer',
    summary:
      'Find dead zones, pick the least crowded WiFi channel, and run speed tests that track your connection over time.',
    features: [
      'Channel crowding at a glance',
      'Speed tests with on-device history',
      'IP and DNS tools',
    ],
    pricing: 'Free, with optional Pro features',
    playUrl:
      'https://play.google.com/store/apps/details?id=com.donespaghetti.wifi_analyzer',
    dataNotes: [
      'Scans nearby WiFi networks on your device. Android requires location permission for WiFi scanning; ChannelScan does not send your location to us.',
      'Speed tests use Measurement Lab (M-Lab). Speed test history is stored only on your device.',
      'IP & DNS tools can look up your public IP address using ipinfo.io.',
      'Shows ads through Google AdMob and offers optional Pro features through Google Play Billing.',
    ],
  },
  {
    name: 'Brasa: Focus Timer',
    summary:
      'A calm focus timer: work in focused sessions, break gently, and watch your focus history build week by week.',
    features: [
      'Focus and break timer that runs in the background',
      '12-week focus history with streaks',
      'Optional Google sign-in to back up and sync',
    ],
    pricing: 'Free',
    playUrl: 'https://play.google.com/store/apps/details?id=com.donespaghetti.brasa',
    dataNotes: [
      'The timer, your settings, and your focus history work without an account. Signed out, they are stored only on your device.',
      'Signing in with Google is optional. If you sign in, Firebase Authentication gives us your name, email address, and a user ID, and your focus history (completed sessions per day) and timer settings are stored in Cloud Firestore so they are backed up and match across your devices.',
      'Signing out removes your synced history and settings from that device; they stay in your account. Deleting your account, in the app or on our account deletion page, removes them from our servers.',
      'Uses Firebase Crashlytics for crash reports and Google Analytics for Firebase for usage events. Analytics can be turned off in Settings → Share Anonymous Usage Data, and is never linked to your account.',
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
  deleteAccount: {
    path: '/delete-account',
    title: 'Delete your account · Done Spaghetti LLC',
    description:
      'How to delete an account in a Done Spaghetti LLC app, and the data that is removed.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found · Done Spaghetti LLC',
    description: 'This page does not exist.',
  },
} satisfies Record<string, RouteMeta>

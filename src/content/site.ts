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
  /** Page explaining how to delete an account, for Apps with optional sign-in. */
  deleteAccountPath?: string
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
    name: 'Brasa',
    summary:
      'A calm focus timer that alternates focus sessions with short and long breaks, and tracks your streaks over time.',
    features: [
      'Focus and break intervals you can tune',
      'Live countdown in your notifications',
      '12-week focus history with streaks',
    ],
    pricing: 'Free, no ads',
    playUrl: 'https://play.google.com/store/apps/details?id=com.donespaghetti.brasa',
    dataNotes: [
      'Does not show ads and does not collect the advertising ID.',
      'Sends crash reports through Firebase Crashlytics (stack trace, device model, OS version, app version, and a random installation ID). Crash reports are kept for 90 days.',
      'Sends usage analytics through Google Analytics for Firebase, such as a focus session starting, completing, or being skipped, and which screen was opened. Analytics may derive an approximate location from your IP address. You can turn analytics off in Settings → Share anonymous usage data.',
      'Timer settings and focus history are stored only on your device unless you choose to sign in.',
      'Optional sign-in with Google, where available in your version of Brasa, backs up and syncs your timer settings and focus history (a count of completed focus sessions per day) through Firebase Authentication and Cloud Firestore. See "If you choose to sign in" above.',
    ],
    deleteAccountPath: '/brasa/delete-account',
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
  brasaDeleteAccount: {
    path: '/brasa/delete-account',
    title: 'Delete your Brasa account · Done Spaghetti LLC',
    description:
      'How to delete your Brasa account and synced data, in the app or by email request.',
  },
  notFound: {
    path: '/404',
    title: 'Page not found · Done Spaghetti LLC',
    description: 'This page does not exist.',
  },
} satisfies Record<string, RouteMeta>

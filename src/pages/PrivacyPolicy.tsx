import { Link } from 'react-router'
import { LegalPage, type LegalSection } from '../components/LegalPage'
import { apps, company, routes } from '../content/site'

export const PRIVACY_EFFECTIVE_DATE = 'October 4, 2026'

const mail = <a href={`mailto:${company.email}`}>{company.email}</a>

const sections: LegalSection[] = [
  {
    id: 'scope',
    title: 'Who we are and what this covers',
    body: (
      <>
        <p>
          {company.legalName} ("{company.name}," "we," "us," or "our") is a {company.state}{' '}
          limited liability company that publishes mobile apps on Google Play. This Privacy
          Policy applies to every app we publish (the "Apps") and to this website,{' '}
          <a href={company.url}>donespaghetti.com</a>. A single policy covers all of our
          Apps. Where an App does something specific, it is listed in{' '}
          <a href="#apps">Apps covered by this policy</a>.
        </p>
      </>
    ),
  },
  {
    id: 'collect',
    title: 'Information we collect',
    body: (
      <>
        <p>
          <strong>We do not require accounts.</strong> Our Apps do not ask for your name,
          email address, phone number, or password. If you email us, we receive your email
          address and whatever you choose to include in your message.
        </p>
        <p>Depending on the App and the features you use, the following information may be processed:</p>
        <ul>
          <li>
            <strong>Device and usage information:</strong> device model, operating system
            version, app version, language, an app-instance identifier, and events such as
            which screens are opened. We use this to understand how the Apps are used and to
            improve them.
          </li>
          <li>
            <strong>Crash and diagnostic data:</strong> stack traces, device state, and
            related technical details when an App crashes or encounters an error.
          </li>
          <li>
            <strong>Advertising identifiers:</strong> in Apps that show ads, your device's
            advertising ID and IP address may be used by our advertising partner to serve
            and measure ads.
          </li>
          <li>
            <strong>Purchase information:</strong> if you buy an in-app purchase or
            subscription, Google Play tells us the purchase status so we can unlock the
            feature. Google handles payment; we never see your card or billing details.
          </li>
          <li>
            <strong>Device permissions:</strong> some features need permissions such as
            location, nearby WiFi information, or notifications. Information accessed through
            these permissions is used on your device to provide the feature and is not sent
            to us unless a specific feature says otherwise.
          </li>
          <li>
            <strong>Data you create in an App</strong> (for example, saved results or
            history) is stored on your device. It is not uploaded to our servers.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-parties',
    title: 'Third-party services we use',
    body: (
      <>
        <p>
          Our Apps rely on the following service providers, which process data under their
          own privacy policies. Not every App uses every service.
        </p>
        <ul>
          <li>
            <strong>Google AdMob</strong> (ads) and the{' '}
            <strong>Google User Messaging Platform</strong> (ad consent). See{' '}
            <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">
              how Google uses information from apps that use its services
            </a>
            .
          </li>
          <li>
            <strong>Google Analytics for Firebase</strong> (usage analytics),{' '}
            <strong>Firebase Crashlytics</strong> (crash reporting), and{' '}
            <strong>Firebase Remote Config</strong> (feature settings). See the{' '}
            <a href="https://firebase.google.com/support/privacy" rel="noopener">
              Firebase privacy information
            </a>
            .
          </li>
          <li>
            <strong>Google Play Billing</strong> (purchases). See the{' '}
            <a href="https://policies.google.com/privacy" rel="noopener">
              Google Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Measurement Lab (M-Lab)</strong> (internet speed tests). When you run a
            speed test, your IP address and the test measurements are sent to M-Lab, which{' '}
            <strong>publishes them as open data</strong>. See the{' '}
            <a href="https://www.measurementlab.net/privacy/" rel="noopener">
              M-Lab privacy policy
            </a>
            .
          </li>
          <li>
            <strong>ipinfo.io</strong> (public IP lookup). When you use a public IP lookup
            feature, your IP address is sent to ipinfo.io to return details about your
            connection. See the{' '}
            <a href="https://ipinfo.io/privacy-policy" rel="noopener">
              ipinfo.io privacy policy
            </a>
            .
          </li>
          <li>
            <strong>Firebase Hosting</strong> serves this website and may log standard
            request information, such as IP address and browser type, for security and
            operations. This website does not use cookies or analytics.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use information',
    body: (
      <ul>
        <li>To provide, maintain, and fix the Apps.</li>
        <li>To understand which features are used so we can improve them.</li>
        <li>To show ads that keep our free Apps free, and to measure their performance.</li>
        <li>To unlock and restore purchases.</li>
        <li>To answer your questions and support requests.</li>
        <li>To comply with the law and protect our rights, our users, and the public.</li>
      </ul>
    ),
  },
  {
    id: 'sharing',
    title: 'How information is shared',
    body: (
      <>
        <p>
          <strong>We do not sell your personal information.</strong> Information is shared
          only with the service providers listed above, as required to run the features you
          use, or when required by law, such as in response to a valid legal request. If{' '}
          {company.legalName} is involved in a merger or acquisition, information may be
          transferred as part of that transaction, and this policy will continue to apply to
          it.
        </p>
      </>
    ),
  },
  {
    id: 'choices',
    title: 'Your choices and controls',
    body: (
      <ul>
        <li>
          <strong>Ad consent:</strong> where required by law, such as in the EEA, UK, and
          Switzerland, you are asked for consent before personalized ads are shown. You can
          change this at any time from the App's settings (for example, "Privacy options").
        </li>
        <li>
          <strong>Advertising ID:</strong> you can reset or delete your advertising ID in
          Android Settings → Privacy → Ads.
        </li>
        <li>
          <strong>Permissions:</strong> you can grant or revoke permissions at any time in
          Android Settings. Some features may not work without them.
        </li>
        <li>
          <strong>Data on your device:</strong> clearing the App's data or uninstalling the
          App deletes everything the App stored locally.
        </li>
      </ul>
    ),
  },
  {
    id: 'retention',
    title: 'Data retention and deletion',
    body: (
      <>
        <p>
          Because our Apps have no accounts, we cannot link analytics or crash data to you
          by name. That data is kept for the retention periods set by the service providers
          listed above and is then deleted or aggregated. Emails you send us are kept for as
          long as needed to respond and for our records.
        </p>
        <p>
          To ask us to delete data associated with your device or your correspondence with
          us, email {mail} with the subject "Data deletion request." Tell us which App you
          used. We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: 'Your privacy rights',
    body: (
      <p>
        Depending on where you live, including the EEA, the UK, California, and other US
        states with privacy laws, you may have the right to access, correct, delete, or
        receive a copy of your personal information, to object to or restrict certain
        processing, and to withdraw consent. We do not sell personal information or share it
        for cross-context behavioral advertising beyond the ad serving described above,
        which you can control through the ad consent and advertising ID settings. To make a
        request, email {mail}. We will not discriminate against you for exercising these
        rights.
      </p>
    ),
  },
  {
    id: 'children',
    title: "Children's privacy",
    body: (
      <p>
        Our Apps are not directed to children under 13 (or the minimum age in your country),
        and we do not knowingly collect personal information from them. If you believe a
        child has provided us with personal information, contact {mail} and we will delete
        it.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Security and international transfers',
    body: (
      <p>
        Data sent by our Apps to service providers is encrypted in transit. No method of
        transmission or storage is completely secure, so we cannot guarantee absolute
        security. We are based in the United States, and our service providers may process
        information in the United States and other countries.
      </p>
    ),
  },
  {
    id: 'apps',
    title: 'Apps covered by this policy',
    body: (
      <>
        <p>This policy applies to all {company.legalName} Apps, including:</p>
        {apps.map((app) => (
          <div key={app.name} className="app-note">
            <h3>
              <a href={app.playUrl} rel="noopener">
                {app.name}
              </a>
            </h3>
            <ul>
              {app.dataNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as our Apps change. We will post the new version on this
        page and update the effective date. If the changes are significant, we may also
        notify you in the Apps.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <p>
        Questions about this policy or your data? Email {mail}. You can also read our{' '}
        <Link to="/terms-of-service">Terms of Service</Link>.
      </p>
    ),
  },
]

export function PrivacyPolicy() {
  return (
    <LegalPage
      meta={routes.privacy}
      heading="Privacy Policy"
      effectiveDate={PRIVACY_EFFECTIVE_DATE}
      intro={
        <p className="lede">
          This policy explains what information {company.legalName}'s apps and website
          collect, why, and the choices you have. The short version: no accounts, no selling
          your data, and anything you create in our apps stays on your device.
        </p>
      }
      sections={sections}
    />
  )
}

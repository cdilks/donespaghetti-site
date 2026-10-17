import { Link } from 'react-router'
import { LegalPage, type LegalSection } from '../components/LegalPage'
import { company, routes } from '../content/site'

export const BRASA_DELETE_ACCOUNT_EFFECTIVE_DATE = 'October 17, 2026'

const requestSubject = 'Brasa account deletion request'
const requestHref = `mailto:${company.email}?subject=${encodeURIComponent(requestSubject)}`

const sections: LegalSection[] = [
  {
    id: 'in-app',
    title: 'Delete your account in the app',
    body: (
      <>
        <p>If you still have Brasa installed, this is the fastest way:</p>
        <ol>
          <li>Open Brasa and sign in with the Google account you want to delete.</li>
          <li>Go to Settings → Delete account.</li>
          <li>Confirm. Brasa deletes your synced data and your account right away.</li>
        </ol>
        <p>
          Signing out is not the same as deleting. Signing out only removes synced data from
          that device and keeps it in your account.
        </p>
      </>
    ),
  },
  {
    id: 'request',
    title: "Request deletion if you don't have the app",
    body: (
      <>
        <p>
          If you no longer have Brasa, or can't sign in, email{' '}
          <a href={requestHref}>{company.email}</a> with the subject "{requestSubject}."
          Send it from the email address of the Google account you used to sign in, so we
          can find your account. We may ask you to confirm the request from that address
          before we delete anything.
        </p>
        <p>
          We will delete your account and confirm by email within 30 days of receiving your
          request.
        </p>
      </>
    ),
  },
  {
    id: 'deleted',
    title: 'What is deleted',
    body: (
      <ul>
        <li>
          <strong>Your Brasa account:</strong> the Firebase Authentication account, including
          your email address and Firebase user ID.
        </li>
        <li>
          <strong>Your synced data:</strong> timer settings (focus, short break, and long
          break lengths, sound, haptics, and your analytics choice) and your focus history
          (completed focus sessions per day).
        </li>
      </ul>
    ),
  },
  {
    id: 'kept',
    title: 'What is kept',
    body: (
      <>
        <ul>
          <li>
            <strong>Data on your devices:</strong> settings and history stored locally on a
            device stay there until you clear Brasa's data or uninstall it.
          </li>
          <li>
            <strong>Crash reports and usage analytics:</strong> these are tied to a random
            installation or app-instance identifier, not to your account, so deleting your
            account does not remove them. Crash reports are kept for 90 days; analytics
            data is kept for the period set in Google Analytics and then deleted.
          </li>
          <li>
            <strong>Your deletion request email:</strong> kept for our records, as described
            in the <Link to={routes.privacy.path}>Privacy Policy</Link>.
          </li>
        </ul>
        <p>
          Your Google account itself is not affected. To stop Brasa's access to it, you can
          also remove Brasa from your{' '}
          <a href="https://myaccount.google.com/connections" rel="noopener">
            Google account connections
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'questions',
    title: 'Questions',
    body: (
      <p>
        Read the <Link to={routes.privacy.path}>Privacy Policy</Link> for how Brasa handles
        data, or email <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    ),
  },
]

export function BrasaDeleteAccount() {
  return (
    <LegalPage
      meta={routes.brasaDeleteAccount}
      heading="Delete your Brasa account"
      effectiveDate={BRASA_DELETE_ACCOUNT_EFFECTIVE_DATE}
      intro={
        <p className="lede">
          Signing in to Brasa, the focus timer by {company.legalName}, is optional. If you
          signed in with Google, you can delete your account and the data synced to it at
          any time. If you never signed in, there is no account to delete: your data is
          only on your device, and uninstalling Brasa removes it.
        </p>
      }
      sections={sections}
    />
  )
}

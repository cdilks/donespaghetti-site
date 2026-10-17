import { Link } from 'react-router'
import { LegalPage, type LegalSection } from '../components/LegalPage'
import { company, routes } from '../content/site'

export const DELETE_ACCOUNT_EFFECTIVE_DATE = 'October 17, 2026'

// Linked from Google Play's Data safety section as the account deletion URL,
// so keep the path stable.
const mail = <a href={`mailto:${company.email}`}>{company.email}</a>

const sections: LegalSection[] = [
  {
    id: 'in-app',
    title: 'Delete your account in the app',
    body: (
      <>
        <p>The fastest way. Your data is removed from our servers right away.</p>
        <p>
          <strong>Brasa: Focus Timer:</strong> open Settings, scroll to the bottom, and tap{' '}
          <strong>Delete account</strong>. Review what will be deleted, tap{' '}
          <strong>Delete account</strong>, then type DELETE and tap{' '}
          <strong>Delete forever</strong>. Google may ask you to confirm your account first.
        </p>
      </>
    ),
  },
  {
    id: 'by-email',
    title: "Delete your account if you don't have the app",
    body: (
      <>
        <p>
          Email {mail} with the subject "Account deletion request." Send it from the email
          address of the Google account you signed in with, and tell us which app you used.
        </p>
        <p>
          We will confirm the request with you, delete your account and its data, and reply
          when it is done, within 30 days.
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
          <strong>Your account:</strong> the name, email address, and user ID we received
          from Google when you signed in.
        </li>
        <li>
          <strong>Everything the app backed up to your account.</strong> For Brasa, that is
          your focus history (completed sessions per day) and your timer settings.
        </li>
        <li>
          <strong>The copy on your phone:</strong> deleting in the app also clears the
          synced data from that phone.
        </li>
      </ul>
    ),
  },
  {
    id: 'kept',
    title: 'What is not deleted',
    body: (
      <ul>
        <li>
          <strong>Your Google account</strong> is not affected. Only your account with our app
          is deleted.
        </li>
        <li>
          <strong>Analytics and crash data</strong> are never linked to your account. They are
          kept for the retention periods described in our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> and then deleted or aggregated.
        </li>
        <li>
          <strong>Emails you send us</strong>, including your deletion request, are kept for
          our records.
        </li>
      </ul>
    ),
  },
  {
    id: 'questions',
    title: 'Questions',
    body: (
      <p>
        Email {mail}. You can sign in again at any time later, which starts a new, empty
        account.
      </p>
    ),
  },
]

export function DeleteAccount() {
  return (
    <LegalPage
      meta={routes.deleteAccount}
      heading="Delete your account"
      effectiveDate={DELETE_ACCOUNT_EFFECTIVE_DATE}
      intro={
        <p className="lede">
          Accounts in {company.legalName} apps are optional. If you created one, you can delete
          it and the data stored with it at any time.
        </p>
      }
      sections={sections}
    />
  )
}

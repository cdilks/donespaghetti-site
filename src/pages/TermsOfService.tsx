import { Link } from 'react-router'
import { LegalPage, type LegalSection } from '../components/LegalPage'
import { company, routes } from '../content/site'

export const TERMS_EFFECTIVE_DATE = 'October 4, 2026'

const mail = <a href={`mailto:${company.email}`}>{company.email}</a>

const sections: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of these terms',
    body: (
      <p>
        These Terms of Service ("Terms") are an agreement between you and{' '}
        {company.legalName} ("{company.name}," "we," "us," or "our"). They apply to every
        app we publish (the "Apps") and to this website (together, the "Services"). By
        downloading, installing, or using the Services, you agree to these Terms. If you do
        not agree, do not use the Services.
      </p>
    ),
  },
  {
    id: 'eligibility',
    title: 'Eligibility',
    body: (
      <p>
        You must be old enough to form a binding contract where you live, or have permission
        from a parent or legal guardian who agrees to these Terms on your behalf. If you use
        the Services for an organization, you confirm that you have authority to accept
        these Terms for it.
      </p>
    ),
  },
  {
    id: 'license',
    title: 'License to use the Apps',
    body: (
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable license to
        install and use the Apps on devices you own or control, in accordance with these
        Terms and the{' '}
        <a href="https://play.google.com/about/play-terms/" rel="noopener">
          Google Play Terms of Service
        </a>
        . You may not copy, modify, distribute, sell, reverse engineer, or create derivative
        works of the Apps, except where the law expressly allows it.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the Services in violation of any applicable law or regulation;</li>
          <li>
            use network tools in the Apps to access, scan, or interfere with networks or
            devices you do not own or have permission to test;
          </li>
          <li>
            interfere with or disrupt the Services, or the servers and third-party services
            they rely on;
          </li>
          <li>
            attempt to bypass purchase checks, ads, or other technical restrictions in the
            Apps.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'purchases',
    title: 'Purchases and subscriptions',
    body: (
      <>
        <p>
          Some Apps offer optional paid features through in-app purchases or subscriptions.
          All payments are processed by Google Play under its terms. Prices are shown in the
          App before you buy.
        </p>
        <ul>
          <li>
            Subscriptions renew automatically at the end of each billing period unless you
            cancel at least 24 hours before renewal. You can manage or cancel subscriptions
            in the Google Play Store app under Payments &amp; subscriptions.
          </li>
          <li>
            Deleting an App does not cancel a subscription.
          </li>
          <li>
            Refunds are handled under{' '}
            <a href="https://support.google.com/googleplay/answer/2479637" rel="noopener">
              Google Play's refund policies
            </a>
            , except where the law requires otherwise.
          </li>
          <li>
            If a subscription ends or is refunded, the paid features it unlocked will no
            longer be available.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ads',
    title: 'Ads and third-party services',
    body: (
      <p>
        Free versions of some Apps show ads. The Apps also use third-party services, such as
        speed test servers and IP lookup services, that are not operated by us. We are not
        responsible for third-party content, services, or websites, and your use of them may
        be subject to their own terms.
      </p>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy',
    body: (
      <p>
        Our <Link to="/privacy-policy">Privacy Policy</Link> explains how we handle
        information when you use the Services.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: (
      <p>
        The Services, including their software, design, text, graphics, and the{' '}
        {company.name} name and logos, are owned by {company.legalName} or its licensors and
        are protected by intellectual property laws. These Terms do not give you any rights
        to our trademarks.
      </p>
    ),
  },
  {
    id: 'changes-to-services',
    title: 'Changes to the Services and termination',
    body: (
      <p>
        We may add, change, or remove features, or stop offering an App, at any time. We may
        suspend or end your access to the Services if you violate these Terms. You may stop
        using the Services at any time by uninstalling the Apps. Sections that by their
        nature should survive termination, including disclaimers, limitations of liability,
        and governing law, will survive.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of warranties',
    body: (
      <p className="caps">
        The Services are provided "as is" and "as available," without warranties of any
        kind, whether express or implied, including warranties of merchantability, fitness
        for a particular purpose, and non-infringement. Measurements, recommendations, and
        other results shown by the Apps, such as signal strength, channel suggestions, and
        speed test results, are estimates for informational purposes only. We do not
        guarantee that they are accurate or that the Services will be uninterrupted or
        error-free.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <p className="caps">
        To the fullest extent permitted by law, {company.legalName} will not be liable for
        any indirect, incidental, special, consequential, or punitive damages, or for any
        loss of data, profits, or revenue, arising from your use of the Services. Our total
        liability for any claim relating to the Services will not exceed the greater of the
        amount you paid us for the App in question in the 12 months before the claim, or
        US$50. Some jurisdictions do not allow these limitations, so they may not apply to
        you.
      </p>
    ),
  },
  {
    id: 'indemnity',
    title: 'Indemnification',
    body: (
      <p>
        You agree to indemnify and hold harmless {company.legalName} and its members,
        employees, and contractors from claims, losses, and expenses (including reasonable
        attorneys' fees) arising from your misuse of the Services or your violation of these
        Terms or of any law or third-party right.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law',
    body: (
      <p>
        These Terms are governed by the laws of the State of {company.state}, United States,
        without regard to its conflict-of-law rules. Any dispute arising from these Terms or
        the Services will be resolved in the state or federal courts located in{' '}
        {company.state}, and you consent to their jurisdiction. Nothing in this section
        limits any consumer protection rights you have under the laws of the place where you
        live.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to these Terms',
    body: (
      <p>
        We may update these Terms from time to time. We will post the updated Terms on this
        page and change the effective date. If you keep using the Services after an update,
        you accept the revised Terms.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: <p>Questions about these Terms? Email {mail}.</p>,
  },
]

export function TermsOfService() {
  return (
    <LegalPage
      meta={routes.terms}
      heading="Terms of Service"
      effectiveDate={TERMS_EFFECTIVE_DATE}
      intro={
        <p className="lede">
          These terms apply to every app published by {company.legalName} and to this
          website.
        </p>
      }
      sections={sections}
    />
  )
}

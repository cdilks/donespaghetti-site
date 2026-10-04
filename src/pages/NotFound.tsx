import { Link } from 'react-router'
import { Layout } from '../components/Layout'
import { Logo } from '../components/Logo'
import { company, routes } from '../content/site'

export function NotFound() {
  return (
    <Layout meta={routes.notFound}>
      <section className="container not-found">
        <Logo tone="slate" className="logo-lg" />
        <p className="overline">Error 404</p>
        <h1 className="display">Page not found</h1>
        <p className="lede">That page wandered off the plate.</p>
        <div className="actions">
          <Link className="button button-primary" to="/">
            Back to home
          </Link>
          <a className="button button-quiet" href={`mailto:${company.email}`}>
            Contact support
          </a>
        </div>
      </section>
    </Layout>
  )
}

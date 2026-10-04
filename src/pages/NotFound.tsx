import { Link } from 'react-router'
import { Layout } from '../components/Layout'
import { routes } from '../content/site'

export function NotFound() {
  return (
    <Layout meta={routes.notFound}>
      <section className="hero">
        <h1>Page not found</h1>
        <p className="lede">
          That page wandered off the plate. <Link to="/">Go back home</Link>.
        </p>
      </section>
    </Layout>
  )
}

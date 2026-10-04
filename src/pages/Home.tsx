import { Layout } from '../components/Layout'
import { apps, company, routes } from '../content/site'

export function Home() {
  return (
    <Layout meta={routes.home}>
      <section className="hero">
        <h1>{company.tagline}</h1>
        <p className="lede">
          {company.legalName} is a small, independent studio building focused
          mobile apps. No bloat, no gimmicks, just tools that do one job well.
        </p>
      </section>

      <section aria-labelledby="apps-heading">
        <h2 id="apps-heading">Our apps</h2>
        <ul className="app-grid">
          {apps.map((app) => (
            <li key={app.name} className="app-card">
              <h3>{app.name}</h3>
              <p>{app.summary}</p>
              <a className="button" href={app.playUrl} rel="noopener">
                Get it on Google Play
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

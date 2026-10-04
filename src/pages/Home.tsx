import { Layout } from '../components/Layout'
import { Logo } from '../components/Logo'
import { apps, company, routes } from '../content/site'

function Check() {
  return (
    <svg className="check" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  )
}

function ArrowUpRight() {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export function Home() {
  return (
    <Layout meta={routes.home}>
      <section className="container hero">
        <div className="hero-copy">
          <p className="overline">Independent app studio</p>
          <h1 className="display">{company.tagline}</h1>
          <p className="lede">
            {company.legalName} is a small, independent studio building focused
            mobile apps. No bloat, no gimmicks, just tools that do one job well.
          </p>
          <div className="actions">
            <a className="button button-secondary" href="#apps">
              See our apps
            </a>
            <a className="button button-quiet" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <Logo tone="walnut" className="logo-xl" />
        </div>
      </section>

      <section id="apps" className="container section" aria-labelledby="apps-heading">
        <header className="section-head">
          <h2 id="apps-heading">Our apps</h2>
          <p>
            {apps.length === 1
              ? 'One app so far, with more on the stove.'
              : `${apps.length} apps so far, with more on the stove.`}
          </p>
        </header>
        <ul className="app-list">
          {apps.map((app) => (
            <li key={app.name} className="app-card">
              <div className="app-body">
                <span className="tag">Android</span>
                <h3>{app.name}</h3>
                <p className="app-summary">{app.summary}</p>
                <ul className="features">
                  {app.features.map((f) => (
                    <li key={f}>
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="app-cta">
                <a className="button button-primary" href={app.playUrl} rel="noopener">
                  Get it on Google Play
                  <ArrowUpRight />
                </a>
                <span className="small muted">{app.pricing}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="container section" aria-labelledby="contact-heading">
        <div className="contact-card">
          <div>
            <h2 id="contact-heading">Questions or feedback?</h2>
            <p className="muted">We read every message.</p>
          </div>
          <a className="contact-email" href={`mailto:${company.email}`}>
            {company.email}
          </a>
        </div>
      </section>
    </Layout>
  )
}

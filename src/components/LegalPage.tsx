import type { ReactNode } from 'react'
import type { RouteMeta } from '../content/site'
import { Layout } from './Layout'

export interface LegalSection {
  id: string
  title: string
  body: ReactNode
}

interface LegalPageProps {
  meta: RouteMeta
  heading: string
  effectiveDate: string
  intro: ReactNode
  sections: LegalSection[]
}

export function LegalPage({ meta, heading, effectiveDate, intro, sections }: LegalPageProps) {
  return (
    <Layout meta={meta}>
      <div className="container legal-page">
        <header className="legal-head" id="top">
          <p className="overline">Legal</p>
          <h1 className="display">{heading}</h1>
          <p className="small muted">Effective date: {effectiveDate}</p>
        </header>
        <div className="legal-layout">
          <nav aria-labelledby="toc-heading" className="toc">
            <h2 id="toc-heading">On this page</h2>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <span className="toc-num">{i + 1}.</span> {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="legal">
            {intro}
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`}>
                  {i + 1}. {s.title}
                </h2>
                {s.body}
              </section>
            ))}
            <a className="back-to-top" href="#top">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              Back to top
            </a>
          </article>
        </div>
      </div>
    </Layout>
  )
}

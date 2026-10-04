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
      <article className="legal">
        <h1>{heading}</h1>
        <p className="effective">Effective date: {effectiveDate}</p>
        {intro}
        <nav aria-label="Contents" className="toc">
          <h2>Contents</h2>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
            <h2 id={`${s.id}-h`}>
              {i + 1}. {s.title}
            </h2>
            {s.body}
          </section>
        ))}
      </article>
    </Layout>
  )
}

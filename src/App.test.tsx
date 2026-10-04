import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { apps, company } from './content/site'
import { render as renderToHtml } from './entry-server'

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('routes', () => {
  it('renders the home page with every app linked to Google Play', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(company.tagline)
    for (const link of screen.getAllByRole('link', { name: 'Get it on Google Play' })) {
      expect(link).toHaveAttribute('href', expect.stringContaining('play.google.com'))
    }
  })

  it('shows each app with its features and price note, plus a contact email', () => {
    renderAt('/')
    for (const app of apps) {
      expect(screen.getByRole('heading', { level: 3, name: app.name })).toBeInTheDocument()
      for (const feature of app.features) expect(screen.getByText(feature)).toBeInTheDocument()
      expect(screen.getByText(app.pricing)).toBeInTheDocument()
    }
    expect(document.getElementById('apps')).not.toBeNull()
    expect(document.getElementById('contact')).not.toBeNull()
    expect(screen.getAllByRole('link', { name: company.email })[0]).toHaveAttribute(
      'href',
      `mailto:${company.email}`,
    )
  })

  it('header shows the brand name and marks the current legal page', () => {
    renderAt('/privacy-policy')
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(screen.getByRole('link', { name: `${company.name} home` })).toHaveTextContent(company.name)
    expect(nav.querySelector('[aria-current="page"]')).toHaveTextContent('Privacy')
    for (const name of ['Apps', 'Privacy', 'Terms', 'Contact']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it.each([
    ['/privacy-policy', 'Privacy Policy'],
    ['/terms-of-service', 'Terms of Service'],
  ])('%s renders %s with the contact email', (path, heading) => {
    renderAt(path)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: company.email }).length).toBeGreaterThan(0)
  })

  it('renders a not-found page for unknown paths', () => {
    renderAt('/nope')
    expect(screen.getByRole('heading', { level: 1, name: 'Page not found' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/')
  })
})

describe('legal content', () => {
  it.each(['/privacy-policy', '/terms-of-service'])(
    '%s has no unfilled template placeholders',
    (path) => {
      const html = renderToHtml(path)
      expect(html).not.toMatch(/\[(Your|Insert)[^\]]*\]/i)
      expect(html).toContain(company.legalName)
    },
  )

  it('every in-page table-of-contents link has a target section', () => {
    for (const path of ['/privacy-policy', '/terms-of-service']) {
      const { container, unmount } = renderAt(path)
      const anchors = container.querySelectorAll<HTMLAnchorElement>('.toc a')
      expect(anchors.length).toBeGreaterThan(0)
      for (const a of anchors) {
        expect(container.querySelector(a.getAttribute('href')!)).not.toBeNull()
      }
      unmount()
    }
  })
})

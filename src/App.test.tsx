import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { company } from './content/site'
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

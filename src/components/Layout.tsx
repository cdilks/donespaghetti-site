import { useEffect, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { company, type RouteMeta } from '../content/site'
import { Logo } from './Logo'

interface LayoutProps {
  meta: RouteMeta
  children: ReactNode
}

export function Layout({ meta, children }: LayoutProps) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = meta.title
  }, [meta.title])

  // Client-side navigation doesn't scroll on its own: go to the top, or to
  // the #section a link like "/#apps" points at.
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label={`${company.name} home`}>
            <Logo />
            <span className="brand-name">{company.name}</span>
          </Link>
          <nav aria-label="Main" className="main-nav">
            <Link to="/#apps">Apps</Link>
            <NavLink to="/privacy-policy">Privacy</NavLink>
            <NavLink to="/terms-of-service">Terms</NavLink>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand">
            <Logo tone="slate" />
            <span>
              © {__BUILD_YEAR__} {company.legalName}
            </span>
          </p>
          <nav aria-label="Legal" className="footer-nav">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </nav>
        </div>
      </footer>
    </>
  )
}

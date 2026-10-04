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

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
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
            <span>done_spaghetti</span>
          </Link>
          <nav aria-label="Main">
            <NavLink to="/privacy-policy">Privacy</NavLink>
            <NavLink to="/terms-of-service">Terms</NavLink>
          </nav>
        </div>
      </header>
      <main id="main" className="container">
        {children}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {__BUILD_YEAR__} {company.legalName}
          </p>
          <nav aria-label="Legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </nav>
        </div>
      </footer>
    </>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contactData, navLinks } from '../data/siteData'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white">
          <div className="rounded-sm bg-neutral-950/40 p-1.5">
            <img
              src={contactData.logo.src}
              alt={contactData.logo.alt}
              className="h-12 w-auto drop-shadow-[0_0_1px_rgba(0,0,0,0.95)] drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
              loading="eager"
            />
          </div>
          <span className="hidden sm:inline">LDB GYM</span>
        </Link>
        <nav aria-label="Hlavná navigácia" className="hidden gap-6 text-sm text-neutral-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/kontakt"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Začať tréning
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-white transition hover:border-white/25 md:hidden"
            aria-label={mobileMenuOpen ? 'Zavrieť menu' : 'Otvoriť menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
                <path d="M6 6 18 18M18 6 6 18" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen ? (
        <nav aria-label="Mobilná navigácia" className="border-t border-white/10 bg-neutral-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}

export default Header

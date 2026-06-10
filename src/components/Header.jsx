import { Link } from 'react-router-dom'
import { contactData, navLinks } from '../data/siteData'

function Header() {
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
        <Link
          to="/kontakt"
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Začať tréning
        </Link>
      </div>
    </header>
  )
}

export default Header

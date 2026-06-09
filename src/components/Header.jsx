import { Link } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-wide text-white">
          LDB GYM
        </Link>
        <nav aria-label="Hlavná navigácia" className="hidden gap-6 text-sm text-neutral-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={`/${link.href}`} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/#cta"
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Začať tréning
        </a>
      </div>
    </header>
  )
}

export default Header

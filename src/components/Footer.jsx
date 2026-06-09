import { Link } from 'react-router-dom'
import { legalLinks } from '../data/siteData'

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-neutral-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>&copy; {new Date().getFullYear()} LDB GYM. Všetky práva vyhradené.</p>
        <nav aria-label="Právne odkazy" className="flex flex-wrap gap-4">
          {legalLinks.map((link) => (
            <Link key={link.label} to={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer

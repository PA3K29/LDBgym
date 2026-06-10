import { Link } from 'react-router-dom'
import { companyData, contactData, footerContent, legalLinks } from '../data/siteData'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <path
        d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Footer() {
  const socialIcons = {
    Instagram: <InstagramIcon />,
    Facebook: <FacebookIcon />,
  }

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="rounded-sm bg-neutral-950/40 p-1.5">
                <img
                  src={contactData.logo.src}
                  alt={contactData.logo.alt}
                  className="h-14 w-auto drop-shadow-[0_0_1px_rgba(0,0,0,0.95)] drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
                  loading="lazy"
                />
              </div>
              <span className="text-3xl font-semibold uppercase tracking-wide text-white">LDB GYM</span>
            </div>
            <p className="max-w-xs text-base leading-8 text-neutral-300">{footerContent.description}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Otváracie hodiny</h2>
            <div className="mt-6 space-y-4 text-sm text-neutral-300">
              {footerContent.hours.map((item) => {
                return (
                  <div key={item.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                    <span>{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Kontaktujte nás</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-300">
              <p>{contactData.address}</p>
              <a href={`tel:${contactData.phone.replace(/\s+/g, '')}`} className="block transition hover:text-white">
                {contactData.phone}
              </a>
              <a href={`mailto:${contactData.email}`} className="block transition hover:text-white">
                {contactData.email}
              </a>
              <div className="flex flex-wrap gap-3 pt-2">
                {contactData.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex h-12 w-12 items-center justify-center rounded-none border border-red-900/80 bg-red-950/30 text-white transition hover:border-red-400 hover:text-red-200"
                    aria-label={link.label}
                  >
                    {socialIcons[link.label]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">Právne informácie</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-300">
              <p>{footerContent.privacyNote}</p>
              <nav aria-label="Legal navigation" className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <Link key={link.label} to={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-red-900/60 pt-8 text-center text-sm text-neutral-500">
          <div className="mx-auto">
            <p>&copy; {new Date().getFullYear()} LDB GYM. Všetky práva vyhradené.</p>
            <p className="mt-1 text-xs">
              Prevádzkovateľ: {companyData.operator}, IČO {companyData.ico}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

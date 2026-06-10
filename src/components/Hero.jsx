import { useEffect, useMemo, useState } from 'react'
import { contactData, galleryItems, heroData } from '../data/siteData'

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

function Hero() {
  const heroImages = useMemo(
    () => galleryItems.filter((item) => item.image),
    [],
  )
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const socialIcons = {
    Instagram: <InstagramIcon />,
    Facebook: <FacebookIcon />,
  }

  useEffect(() => {
    if (heroImages.length <= 1) {
      return undefined
    }

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length)
    }, 12000)

    return () => window.clearInterval(interval)
  }, [heroImages.length])

  return (
    <section className="border-b border-white/10">
      <div className="py-6 sm:py-8 lg:py-10">
        <div className="overflow-hidden border-y border-white/10 bg-neutral-950">
          <div className="relative min-h-[520px] w-full sm:min-h-[620px] lg:min-h-[720px]">
            {heroImages.map((item, index) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  index === activeImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/62" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75" />

            <div className="absolute inset-0 z-10 flex items-start justify-center px-6 pt-16 pb-10 text-center sm:px-10 sm:pt-20 lg:pt-24">
              <div className="max-w-5xl">
                <span className="mb-5 inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-base text-red-300">
                  {heroData.badge}
                </span>
                <h1 className="text-5xl font-semibold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
                  {heroData.title}
                </h1>
                <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-neutral-200 sm:text-2xl sm:leading-10">
                  {heroData.subtitle}
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href={heroData.primaryAction.href}
                    className="rounded-md bg-red-600 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-red-500"
                  >
                    {heroData.primaryAction.label}
                  </a>
                  <a
                    href={heroData.secondaryAction.href}
                    className="rounded-md border border-white/20 bg-black/20 px-8 py-4 text-center text-lg font-semibold text-white transition hover:border-white/35"
                  >
                    {heroData.secondaryAction.label}
                  </a>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  {contactData.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-black/20 text-white transition hover:border-white/35 hover:text-red-200"
                      aria-label={link.label}
                    >
                      {socialIcons[link.label]}
                    </a>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {heroData.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</div>
                      <div className="mt-2 text-sm text-neutral-300 sm:text-base">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

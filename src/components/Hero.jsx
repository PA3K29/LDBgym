import { heroData } from '../data/siteData'
import ImageWithFallback from './ImageWithFallback'

function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-300">
            {heroData.badge}
          </span>
          <h1 className="text-4xl font-semibold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
            {heroData.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">{heroData.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={heroData.primaryAction.href}
              className="rounded-md bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-500"
            >
              {heroData.primaryAction.label}
            </a>
            <a
              href={heroData.secondaryAction.href}
              className="rounded-md border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-white/30"
            >
              {heroData.secondaryAction.label}
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroData.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <ImageWithFallback
          src={heroData.image}
          alt={heroData.imageAlt}
          className="aspect-[4/5] w-full rounded-lg border border-white/10 object-cover"
          fallbackLabel="Sem doplníš hero fotografiu fitness centra"
        />
      </div>
    </section>
  )
}

export default Hero
